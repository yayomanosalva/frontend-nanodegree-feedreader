# Test Driven Development (TDD) with jasmine js

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# About the app

1. Download this app
1. open the console and move to folder
1. In the console, choice the version of node to use and write

  ```bash
    nvm use 5
    npm install
    npm install gulp
  ```

1. Install gulp dependencies

```bash
    npm install --save-dev gulp-jasmine
    npm install --save-dev browser-sync gulp-uglify gulp-minify gulp-html-replace gulp-sourcemaps
```

1. Run the server

```bash
    gulp serve
```

you see these
```bash
    14:40:39] Using gulpfile ~/Documents/user/projects-Udacity/9/frontend-nanodegree-feedreader/gulpfile.js
    [14:40:39] Starting 'serve'...
    [14:40:39] Finished 'serve' after 47 ms
    [BS] Access URLs:
     -------------------------------------
           Local: http://localhost:3000
        External: http://192.168.1.98:3000
     -------------------------------------
              UI: http://localhost:3001
     UI External: http://192.168.1.98:3001
     -------------------------------------
    [BS] Serving files from: ./src/
```

and open the app in the your browser automaticly
![alt text][logo]
[logo]: https://github.com/yayomanosalva/frontend-nanodegree-feedreader/tree/dev/img/chrome.png "server gulp"

## Test Driven Development (TDD) interactive

Click in the diferent links and see the test:
![alt text][logo]

[logo]: https://github.com/yayomanosalva/frontend-nanodegree-feedreader/tree/dev/img/jasmine-test.png "jasmine-test"


