import commander from 'commander';
import "isomorphic-fetch";
import {
    def,
    syn,
    ant,
    ex,
    wordGame
} from './index.mjs';
const words = ["license",
    "skill",
    "rinse",
    "bomb",
    "nice",
    "queue",
    "battle",
    "food",
    "ignore",
    "obsolete",
    "sticky",
    "sleep",
    "grateful",
    "hate",
    "boil",
    "vegetable",
    "test",
    "murder",
    "natural",
    "plate",
    "reflective",
    "symptom",
    "plant",
    "account",
    "song",
    "flag",
    "bizarre",
    "giant",
    "connection",
    "government",
    "pile",
    "god",
    "brush",
    "stupid",
    "elf",
    "club",
    "mature",
    "wrong",
    "provide"
]
commander
    .version('1.0.0')
    .description("A simple CLI tool")

commander
    .command('wotd')
    .alias('w')
    .description('Word of the day')
    .action(async() => {
        let wordOfTheDay = words[Math.floor(Math.random() * words.length)];
        console.log("\n ----------------------- \n");
        console.log("word :", wordOfTheDay);
        await def(wordOfTheDay);
        await syn(wordOfTheDay);
        await ant(wordOfTheDay);
        await ex(wordOfTheDay);
    })
commander
    .command('def <word>')
    .alias('d')
    .description('Returns the definition of a word')
    .action((word)=>{
    console.log("\n ----------------------- \n");
    console.log("word :", word);
        def(word)
    })
commander
    .command('syn <word>')
    .alias('sy')
    .description('Returns the synonyms of a word')
    .action((word) => {
    console.log("\n ----------------------- \n");
    console.log("word :", word);
        syn(word)
    })

commander
    .command('ant <word>')
    .alias('an')
    .description('Returns the antonymns of a word')
    .action((word) => {
    console.log("\n ----------------------- \n");
    console.log("word :", word);
        ant(word)
    })
commander
    .command('ex <word>')
    .alias('e')
    .description('Returns the examples of a word')
    .action((word) => {
    console.log("\n ----------------------- \n");
    console.log("word :", word);
        ex(word)
    })
commander
    .command('dict dict <word>')
    .alias('fd')
    .description('Returns the full definition of a word')
    .action(async (word) => {
        console.log("\n ------FULL DEFINITION------ \n");
        console.log("word :", word);
        await def(word);
        await syn(word);
        await ant(word);
        await ex(word);
    })
commander
    .command('play')
    .alias('pl')
    .description('Word play')
    .action(async () => {
        console.log("\n ------Game Begins------ \n");
        let randomWord = words[Math.floor(Math.random() * words.length)];
        await wordGame(randomWord);
    })
commander.parse(process.argv);