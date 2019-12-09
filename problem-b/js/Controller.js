'use strict';

import readline from 'readline-sync';
import * as model from './Model.js';
import { printTweets as print} from './View.js';

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    print(model.getRecentTweets());
    let item = readline.question("Search tweets, or EXIT to quit: ");
    if(item == 'EXIT') {
        return;
    } else {
        print(model.searchTweets(item));
    }
}