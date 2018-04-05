# knex-boilerplate
Boilerplate for Knex.js with Express

Boilerplate for projects with:
- Knex
- Express
- SQLite3
- Handlebars
- Jest
- Nodemon

FIRST:
`yarn` 
`yarn knex migrate:lastest`
`yarn knex seed:run`
`yarn dev`

NOTES:

Routes:
- are in a routes folder under routes.js initially

Functions:
- are under db.js initially

Knex:
- has an initial migration and seed file

Handlebars:
- contains views folder with layouts and partials folders
- main is set up with `{{{body}}}`
- index can be edited for home page