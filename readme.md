## Command line dictionary tool

The project uses API (currently Oxford) to set up a basic dictionary.

### Tools used 

* NodeJS
* Commander - CLI functionality
* isomorphic-fetch - Included for using fetch functionality to hit an API

The project used .mjs as they help in importing and exporting methods and classes.
To run any command use the flag --experimental-modules 

## Instructions

### Installation

```
$ git clone https://github.com/abhishek71994/command-line-dictionary-tool && cd command-line-dictionary-tool
$ npm install

follow the instructions for knowing which command to use
```
### CLI instruction

Here will be a list of commands that will help you understand what to do.

$ node --experimental-modules commands.mjs def <word>
This command will give you the definition of the 'word' that you will type.

$ node --experimental-modules commands.mjs syn <word>
This command will give you the synonym of the 'word' that you will type.

$node --experimental-modules commands.mjs ant <word>
This command will give you the antonym of the 'word' that you will type.

$ node --experimental-modules commands.mjs ex <word>
This command will show examples of the 'word'

$ node --experimental-modules commands.mjs dict <word>
This command will show the full definition of the 'word'

$ node --experimental-modules commands.mjs wotd
This command will give you the full definition of the word of the day.

$ node --experimental-modules commands.mjs play
This commant will let you have an interaction gameplay

For example,
node --experimental-modules commands.mjs def food (for definition of the word 'food')