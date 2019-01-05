import commander from 'commander';
import "isomorphic-fetch";
import { def,syn,ant } from './index.mjs';

commander
    .version('1.0.0')
    .description("A simple CLIE tool")


commander
    .command('def <word>')
    .alias('d')
    .description('Returns the definition of a word')
    .action((word)=>{
        def(word)
    })
commander
    .command('syn <word>')
    .alias('d')
    .description('Returns the synonyms of a word')
    .action((word) => {
        syn(word)
    })

commander
    .command('ant <word>')
    .alias('d')
    .description('Returns the antonymns of a word')
    .action((word) => {
        ant(word)
    })
commander.parse(process.argv);