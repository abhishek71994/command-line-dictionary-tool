'use strict'
import express from 'express';
import {
    APP_ID,
    APP_KEYS,
    RAPID_API_KEY
} from './constants/app.mjs';
import inquirer from 'inquirer';
var app = express();

var port = process.env.PORT || 3001 ;



export const def = async (word) => {
    await fetch(`https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}`,{
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
            return 1;
        })
        //return (data.results);
    })
    .catch(error=>{
        console.log("The error is ",error);
        return error;
    }) 

}

export const syn = async (word) => {
    await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,{
            headers: {
                "Accept": "application/json",
                "X-RapidAPI-Key": RAPID_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("\n ----- synonyms ------ \n");
            data.synonyms.map(synonym => {
                console.log("--", synonym);
            })
            console.log("\n ----------------------- \n");
            //return (data.results);
            return 1;
        })
        .catch(error => {
            console.log("The error is ", error);
            return error;
        })
}
export const ant = async(word) => {
    await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`, {
            headers: {
                "Accept": "application/json",
                "X-RapidAPI-Key": RAPID_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("\n ----- Antonyms ------ \n");
            data.antonyms.map(antonym=>{
                console.log("--",antonym);
            })
            console.log("\n ----------------------- \n");
            return 1;
        })
        .catch(error => {
            console.log("The error is ", error);
            return error;
        })
}
export const ex = async(word) => {
    await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/examples`, {
            headers: {
                "Accept": "application/json",
                "X-RapidAPI-Key": RAPID_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("\n ----- Examples ------ \n");
            data.examples.map(example => {
                console.log("--", example);
            })
            console.log("\n ----------------------- \n");
            return 1;
        })
        .catch(error => {
            console.log("The error is ", error);
            return error;
        })
}
const guess = (questions,guessWord,word) => {
    inquirer.
    prompt(questions)
        .then(answers => {
            guessWord = answers.guess;
            console.log(answers.guess);
            if (guessWord === word) {
                console.log("Well done!");
            } else {
                choice();
            }
    })
}
const choice = () =>{
    const choices = [{
        type: 'list',
        name: 'guess',
        message: "Wrong answer :( Select a choice",
        choices:["Retry","Get a Hint","Quit"]
    }]
    inquirer.
    prompt(choices)
    .then(answers => {
        console.log(answers);
    });
}
export const wordGame = async (word) => {
    console.log("Here are the clues...");
    await syn(word);
    await ant(word);
    await ex(word);
    console.log(word);
    const questions = [
        {
            type:'input',
            name:'guess',
            message: "Enter your guess"
        }
    ];
    var guessWord = '';
    guess(questions,guessWord,word);
}