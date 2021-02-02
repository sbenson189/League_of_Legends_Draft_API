require("dotenv").config()

// let DB_URI = `postgresql://`
let DB_URI = 'postgres://allnftilsmwmlb:adaad000f1c44cbbc497391313af91b36ca54f3867484bdcc2fb93f7060217ca@ec2-54-146-91-153.compute-1.amazonaws.com:5432/d4ea02ile949ln'

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/drafts_db`
} else {
  // DB_URI = process.env.DB_URL || `${DB_URI}/drafts_db`
  DB_URI = process.env.DATABASE_URL || `${DB_URI}`
}

module.exports = DB_URI 