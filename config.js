require("dotenv").config()

let DB_URI = `postgresql://`

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/drafts_db`
} else {
  DB_URI = process.env.DB_URL || `${DB_URI}/drafts_db`
}

module.exports = DB_URI 