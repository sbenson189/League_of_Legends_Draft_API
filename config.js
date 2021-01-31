let DB_URI = `postgresql://`

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}drafts`
} else {
  DB_URI = process.env.DB_URL || `${DB_URI}drafts`
}

module.exports = DB_URI 