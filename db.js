const { Client } = require('pg') // destructuring Client from pg (otherwise it would have to be pg.Client everywhere)
    
let DB_URI = `postgresql://`

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/drafts_db`
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/drafts_db`
}

let db = new Client({
    connectionString: DB_URI // need to give new Client instance a connection point (which we established above)
})

db.connect() // db is name of variable established above, we are connecting to it.

module.exports = db