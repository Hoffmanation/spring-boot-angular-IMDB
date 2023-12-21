set arg1=%1
cd %arg1%
npm install|more
ng build "--deploy-url" "spring-angular-movie/"|more