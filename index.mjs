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
        console.log("here it comes",data);
        return(data);
    })
    .catch(error=>{
        console.log("The error is ",error);
        return error;
    }) 
}
