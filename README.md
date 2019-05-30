# Reddit App 

## Goals
* Create a basic Reddit App using React Native
* App should list the last posts of the r/pics subreddit
* To obtain the list of posts of a subreddit use the following URL:
  https://api.reddit.com/r/pics/hot.json

## How To Use 
* Clone repo and install dependencies, `yarn` or `npm install`. 
* `expo start` or `yarn start`

## Explanation
* __Main screen__ : displays a list of posts for the r/pics subreddit. 

* Each post is broken into sections.
* Each section consist of an image, date, title, author, score and number of comments.
* Design is based on the example layout. 

* ___Web view screen__: navigate to the post’s URL in a WebView. 

* It consist of a header, with a button to get you back to the list of posts. 
* Rest of the screens is a webview of the image url. 


## Todo
* Improve styling
