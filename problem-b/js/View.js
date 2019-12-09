'use strict';

export function printTweets(tweets) {
    if (tweets.length == 0) {
        console.log("No tweets found");
    } else {
        for (let i = 0; i < tweets.length; i++){
            let text = tweets[i].text;
            let date = new Date(tweets[i].timestamp).toLocaleString("en-US");
            console.log("- \"" + text + "\" (" + date + ")");
          }
    }
}