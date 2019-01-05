'use strict'
import express from 'express';
import {APP_ID , APP_KEYS} from './constants/app.mjs';
var app = express();

var port = process.env.PORT || 3001 ;
export const def = (word) => {
    fetch(`https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}`,{
        headers: {
            "Accept": "application/json",
            "app_id": APP_ID,
            "app_key": APP_KEYS
        }
    })
    .then(res => res.json())
    .then(data => {
        let words = data.results[0].lexicalEntries;
        let wordID = data.results[0].id;
        console.log("\n ----------------------- \n");
        words.map(word=>{
            console.log("Word: ", wordID);
            console.log("Language: ",word.language);
            console.log("Category: ", word.lexicalCategory);
            word.entries.map(entry=>{
                entry.senses.map(sense=>{
                    sense.definitions.map(definition=>{
                        console.log("Definition: ",definition)
                    })
                })
            })

            console.log("\n ----------------------- \n");
        })
        //return (data.results);
    })
    .catch(error=>{
        console.log("The error is ",error);
        return error;
    }) 
}

export const syn = (word) => {

}
export const ant = (word) => {

}
export const ex = (word) => {

}
export const fullDef = (word) => {

}
export const wordGame = (word) => {

}