const express = require('express')
const app = express()
const draft = require('./dbFunctions')
const dbStats = require('./apiFunctions')
const statsError = require('./errorHandlers')
const validate = require('./middleware')
const invalidDrafterror = require('./errorHandlers')

// Cors Config
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/stats', async (req, res, next) => {
  try {
      const stats = await dbStats.populateAPIStats(req, res, next)
      return res.json(stats)
  } catch (err) {
    return statsError.statsUnavailable()
  }
})

app.post('/stats', async (req, res, next)  => {
  const results = Object.values(req.body)
  const validDraft = await validate.validateDraftInputs(results)

  try {
    if (!validDraft) {
      return invalidDrafterror.invalidDraftDbError()
    } else {
      const addDraft = await draft.newDraft(req, res, next)
      return res.status(201).json(addDraft)}
    } catch (err) {
      return next(err)
  }
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app