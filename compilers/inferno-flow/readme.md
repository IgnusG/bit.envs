# Babel-based transpiling environment for Inferno components with Flow
Bit build enviroment for transpiling Inferno components with Flow using Bit.

## How to use?

 Import the environment.
 ```bash
  bit import ignusg.envs/compilers/inferno-flow -c
 ```

 Then build using [bit build](https://docs.bitsrc.io/docs/cli-build.html).
 ```bash
 bit build
 ```
 
 ## What's inside
 - Compiles `js`, `jsx` and `ts` files.
 - Works it's magic through Flow
 - In order to see which babel presets and plugins are used, take a look at the `.babelrc` file.
