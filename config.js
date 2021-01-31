let DB_URI = `postgresql://`

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/draft`
} else {
  DB_URI = process.env.DB_URI || `${DB_URI}/draft`
}

module.exports = DB_URI 