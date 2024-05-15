# Setting up tsconfig

1. run "npx tsc --init". This will create a tsconfig.json file in the working directory. Ideally you would want it in the root of the project. 
2. Look for the "rootDir" and "outDir".
3. Set the path for the "rootDir". This tells the compiler where to look for the TS files. 
4. Set the path for the "outDir". This tells the compiler where to export the compiled JS files. 
5. "./src" and "./dist" (distribution) are naming conventions. 
6. Run "tsc" or if the script hasn't been configured in the package.json, "npx tsc". 

You will still need to run the "tsc" command everytime you make a change, you will need to recompile. 
To make it a little easier, you can run the following:

1. "tsc --watch" or "npx tsc --watch"

This starts the compiler in watch mode and watches for file changes inside the folder specified in "rootDir" i.e. "./src". 
The compilation will run automatically. 

# Watching JS files with node

You'll still need to run the node command to run the JS file after compilation. 
To make this more automated, you can run the 'watch' command with node so that when tsc auto compiles, node will also auto run the compiled JS file. This method works with node v18.5 and up. 

- "node --watch dist/(filename)"



