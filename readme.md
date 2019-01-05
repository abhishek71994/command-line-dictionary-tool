## Command line dictionary tool

The project uses API (currently Oxford) to set up a basic dictionary.

### Tools used 

* NodeJS
* Commander - CLI functionality
* isomorphic-fetch - Included for using fetch functionality to hit an API

The project used .mjs as they help in importing and exporting methods and classes.
To run any command use the flag --experimental-modules 

For example,
node --experimental-modules commands.mjs def food (for definition of the word 'food')