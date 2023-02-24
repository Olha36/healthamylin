# After starting the project it shows the following mistakes:
`ERROR in ./node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js 3:0-40`
`ERROR in ./node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js 3:0-`47`
`ERROR in ./node_modules/@mui/styled-engine/index.js 9:0-39`
`ERROR in ./node_modules/@mui/styled-engine/index.js 37:0-62`
`ERROR in ./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js 11:27-60`
`ERROR in ./node_modules/@mui/system/esm/index.js 2:0-88`
`ERROR in ./node_modules/@mui/system/esm/index.js 2:0-88`
`ERROR [eslint] Failed to load plugin 'prettier' declared in '.eslintrc.json': Cannot find module 'eslint-plugin-prettier'`

# They can be solved by instaling the following packages:

`yarn add @emotion/react`
`yarn add @emotion/styled`
`yarn add eslint-plugin-prettier --dev`

# if the problem with prettier is not solved, configure eslintrc.json

# reopen project

# `ERROR in [eslint] Failed to load config "prettier" to extend from.`

`yarn add eslint-config-prettier --dev` to solve error with prettier