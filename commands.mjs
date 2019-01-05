import commander from 'commander';
import "isomorphic-fetch";
import { def,syn,ant,ex,fullDef } from './index.mjs';

commander
    .version('1.0.0')
    .description("A simple CLI tool")


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
    .command('dict <word>')
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
commander.parse(process.argv);