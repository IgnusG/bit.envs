# Babel-based transpiling environment for Inferno components
Bit build enviroment for transpiling Inferno components using Bit.

## How to use?

 Import the environment.
 ```bash
  bit import ignusg.envs/compilers/inferno -c
 ```

 Then build using [bit build](https://docs.bitsrc.io/docs/cli-build.html).
 ```bash
 bit build
 ```
 
 ## What's inside
 - Compiles `js`, `jsx` and `ts` files.
 - In order to see which babel presets and plugins are used, take a look at the `.babelrc` file.
