package spring.angular.demo.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.jboss.logging.Logger ;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;

/**
 * A service class for obtaining movie data from the web
 * 
 * @author Hoffman
 *
 */
@Service
public class MovieCrawlerService {
	private static final Logger logger = Logger.getLogger(MovieCrawlerService.class);
	private static final String YOUTUBE_EMBEDDED_PREFIX = "https://www.youtube.com/embed/";
	private static final String[] IMDB_ENDPOINTS = { "https://www.imdb.com/search/title/?groups=top_250&sort=user_rating,desc&view=simple",
			"https://www.imdb.com/search/title/?groups=top_250&view=simple&sort=user_rating,desc&start=51&ref_=adv_nxt",
			"https://www.imdb.com/search/title/?groups=top_250&view=simple&sort=user_rating,desc&start=101&ref_=adv_nxt",
			"https://www.imdb.com/search/title/?groups=top_250&view=simple&sort=user_rating,desc&start=151&ref_=adv_nxt",
			"https://www.imdb.com/search/title/?groups=top_250&view=simple&sort=user_rating,desc&start=201&ref_=adv_nxt" };
	ObjectMapper mapper = new ObjectMapper();
	private boolean isDone = false;

	/**
	 * This method will crawl the web via {@link Jsoup} in order to retrive the
	 * {@link Movie} data
	 * 
	 * @return Set<Movie> - a data structure containing the movie data we obtain
	 *         from the web
	 */
	public List<Movie> getMoviesFromTheWeb() {

		logger.info("MovieCrawlerService has begun, Please wait while fatching movie data from the web...");
		List<Movie> movies = new ArrayList<Movie>();
		// Connect to the movie website
		Document document = null;

		for (String imdbUrl : IMDB_ENDPOINTS) {
			try {
				Thread.sleep(2000);
				document = Jsoup.connect(imdbUrl).userAgent("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2").header("Content-Language", "en-US")
						.timeout(3000) //
						.get();
				Thread.sleep(2000);
				// Retrieve a list of movies <a> elements
				Elements moviesTable = document.select("div[class=lister-item mode-simple]");

				// Iterate over the <a> list elements
				for (Element element : moviesTable) {
					try {
						Element moviesAelement = element.select("a[href^=/title]").select("a").first();

						// Retrieve each movie in different thread
						ExecutorService exec = Executors.newSingleThreadScheduledExecutor();
						exec.submit(new Runnable() {

							@Override
							public void run() {
								try {
									// Connect to each one of the movie profile page
									Document innerDocument = Jsoup.connect(moviesAelement.attr("abs:href"))
											.userAgent("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2").header("Content-Language", "en-US")
											.timeout(15000) //
											.get();

									// Retrieve the topic <div> from the movie profile page and all its required
									// attributes
									Elements topic = innerDocument.select("div[class=title_wrapper]");
									Elements ratingsTopic = innerDocument.select("div[class=ratings_wrapper]");
									Elements imageVideoTopic = innerDocument.select("div[class=slate_wrapper]");
									Elements summaryBox = innerDocument.select("div[class=plot_summary_wrapper]");
									Elements topicSubtext = topic.select("div[class=subtext]");
									String imageURL = imageVideoTopic.select("img").attr("src");
									String name = topic.select("h1").first().text();
									Elements topicSubtextAtags = topicSubtext.select("a");
									String dataOfrelease = topicSubtextAtags.get(topicSubtextAtags.size() - 1).text();
									topicSubtextAtags.remove(topicSubtextAtags.size() - 1);
									StringBuilder genreBuilder = new StringBuilder();
									topicSubtextAtags.stream().forEach(elem -> {
										genreBuilder.append(elem.text() + ",");
									});
									String genre = genreBuilder.toString().substring(0, genreBuilder.toString().length() - 1);
									Double rate = Double.valueOf(ratingsTopic.select("span[itemprop=ratingValue]").text());
									String reters = ratingsTopic.select("span[itemprop=ratingCount]").text();
									String duration = topic.select("time").first().text();
									String description = summaryBox.select("div[class=summary_text]").text();

									Elements filmCrew = summaryBox.select("div[class=credit_summary_item]");
									StringBuilder director = new StringBuilder();
									StringBuilder writers = new StringBuilder();
									StringBuilder stars = new StringBuilder();
									filmCrew.get(0).select("a[href^=/name/]").forEach(elem -> director.append(elem.text().toString()+","));
									filmCrew.get(1).select("a[href^=/name/]").forEach(elem -> writers.append(elem.text().toString()+","));
									filmCrew.get(2).select("a[href^=/name/]").forEach(elem -> stars.append(elem.text().toString()+","));

									String youtubeEndpoint = "https://www.youtube.com/results?search_query=" + name + "+trailer";
									Document youbuteDoc = Jsoup.connect(youtubeEndpoint).userAgent("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")
											.header("Content-Language", "en-US").timeout(15000) //
											.get();

									String videoURL = YOUTUBE_EMBEDDED_PREFIX + StringUtils.substringBetween(youbuteDoc.toString(), "{\"url\":\"/watch?v=", "\",");

									// Construct a new Movie instance and add it to the final data structure
									Movie newMovie = new Movie(name, genre, dataOfrelease, imageURL, videoURL, duration, 
											description, director.toString().substring(0, director.length() - 1), writers.toString().substring(0, writers.length() - 1), stars.toString().substring(0, stars.length() - 1),
											new MovieRate(reters, rate));
									movies.add(newMovie);

								} catch (Exception e) {
									logger.error("An error has accured while trying to retrive movie info from the web", e);
								}
								// Shutdown the thread
								exec.shutdown();
							}
						});
					} catch (Exception e4) {
						logger.error("An error has accured while trying to retrive movie info from the web", e4);
						continue;
					}
				}
			} catch (Exception e3) {
				logger.error("An error has accured while trying to retrive movie info from the web", e3);
				continue;
			}

		}

		logger.info("MovieCrawlerService has finished");
		return movies;
	}

	public String getMoviesFromRemoteJson() {
		try {
			DefaultHttpClient client = new DefaultHttpClient();
	        HttpGet request = new HttpGet("https://oren-hoffman.com/misc/movies/DB.json");
	        request.addHeader("User-Agent", "PostmanRuntime/7.35.0"); 
	        request.addHeader("Accept", "*/*"); 
	        request.addHeader("Accept-Encoding", "gzip, deflate, br"); 
	        request.addHeader("Connection", "keep-alive"); 
	        HttpResponse execute = client.execute(request);
	        InputStream ips  = execute.getEntity().getContent();
	        return  new BufferedReader(new InputStreamReader(ips, StandardCharsets.UTF_8))
	        	        .lines()
	        	        .collect(Collectors.joining("\n"));
		} catch (Exception e) {
			logger.error("An error occurred while trying to fetch movies from remote JSON DB", e);
		}
		return null;
	}

}
