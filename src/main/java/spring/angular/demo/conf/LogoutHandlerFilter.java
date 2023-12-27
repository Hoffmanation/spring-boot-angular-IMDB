package spring.angular.demo.conf;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;

/**
 * Provide us with a logout methods
 * injected as a custom implementation of the {@link LogoutHandler} spring security 
 * 
 * @author Hoffman
 *
 */
public class LogoutHandlerFilter implements LogoutHandler {
	public static final String USER_LOGIN = "user";

	@Override
	public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {

		try {
			if (authentication != null) {
				//Kill user session 
				HttpSession session =request.getSession(false) ;
				if (session!=null) {
					session.removeAttribute(USER_LOGIN);
					session.invalidate();
				}

				response.setStatus(org.springframework.http.HttpStatus.OK.value());
				PrintWriter out = response.getWriter();
				response.setContentType("text/plain");
				response.setCharacterEncoding("UTF-8");
				out.print("Successfully logged out");
				out.flush();
				return ;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}