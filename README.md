# Express 템플릿

# update Swagger command
- npm run swagger

# Install global npm package
- npm i -D eslint
- npm i -D prettier
- npm i -D eslint-config-prettier eslint-plugin-prettier

.eslintrc.json
```
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {},
  "ignorePatterns": ["dist/", "node_modules/"]
}
```
.prettierrc.json
```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "consistent",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```


# .gitignore
- Node: https://gitignore.io/
  
# Add module
- @types/swagger-ui-express: https://www.npmjs.com/package/@types/swagger-ui-express
- swagger-ui-express: https://github.com/scottie1984/swagger-ui-express
- swagger-autogen: https://www.npmjs.com/package/swagger-autogen

# lastest
- 2022/04/26d

# Baseon
- express-generator-typescript on npm : https://www.npmjs.com/package/express-generator-typescript
- Eslint & prettier : https://velog.io/@das01063/VSCode에서-ESLint와-Prettier-TypeScript-사용하기
