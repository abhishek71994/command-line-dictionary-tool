import commander from 'commander';
import "isomorphic-fetch";
import { def } from './index.mjs';

commander
    .version('1.0.0')
    .description("A simple CLIE tool")


commander
    .command('def <word>')
    .alias('d')
    .description('Returns the definition of a word')
    .action((word)=>{
        console.log("Action works");
        def(word)
    })

commander.parse(process.argv);