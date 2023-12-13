# The tsconfig.json File

* The `tsconfig.json` file is always placed in the root of your project and you can customize what rules you want the TypeScript compiler to enforce.

```
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strictNullChecks": true
  },
  "include": ["**/*.ts"]
}
```

* `compilerOptions`, which is a nested object that contains the rules for the TypeScript compiler to enforce.
    * `target`, the value "es2017" means the project will be using the 2017 version of EcmaScript standards for JavaScript.
    * `module`, this project will be using "commonjs" syntax to import and export modules.
    * `strictNullChecks`, variables can only have null or undefined values if they are explicitly assigned those values.
  * `include` that determines what files the compiler applies the rules to. In this case ["**/*.ts"] means the compiler should check every single file that has a .ts extension.
* can set these rules to your own preference
* The tsconfig.json file is great for both individual work and team projects because it allows everyone to be on the same page about how to write their code.

## Usage
* by including a `tsconfig.json `file, you can now use the command tsc without any arguments in your terminal

https://www.typescriptlang.org/docs/handbook/compiler-options.html
