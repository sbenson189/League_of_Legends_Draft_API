const db = require('./db')
const validate = require('./middleware')
const error = require('./errorHandlers')

const getChampionDbData = async () => { 
  const draftResults = await db.query(`SELECT * FROM drafts`)
  const draftResponse = draftResults.rows
  return draftResponse
}

const newDraft = async (req, res, next) => {
  
  const results = Object.values(req.body)
  const validDraft = await validate.validateDraftInputs(results)

  try {
    if (validDraft) {
      const {
        blue_pick1,
        blue_pick2,
        blue_pick3,
        blue_pick4,
        blue_pick5,
        red_pick1, 
        red_pick2, 
        red_pick3, 
        red_pick4, 
        red_pick5, 
        blue_ban1, 
        blue_ban2, 
        blue_ban3, 
        blue_ban4, 
        blue_ban5, 
        red_ban1,
        red_ban2,
        red_ban3,
        red_ban4,
        red_ban5
      } = req.body
  
      const insertDraftSelections = await db.query(
        `INSERT INTO drafts (blue_pick1,
          blue_pick2,
          blue_pick3,
          blue_pick4,
          blue_pick5,
          red_pick1, 
          red_pick2, 
          red_pick3, 
          red_pick4, 
          red_pick5, 
          blue_ban1, 
          blue_ban2, 
          blue_ban3, 
          blue_ban4, 
          blue_ban5, 
          red_ban1,
          red_ban2,
          red_ban3,
          red_ban4,
          red_ban5) 
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) `,
        [
          blue_pick1,
          blue_pick2,
          blue_pick3,
          blue_pick4,
          blue_pick5,
          red_pick1, 
          red_pick2, 
          red_pick3, 
          red_pick4, 
          red_pick5, 
          blue_ban1, 
          blue_ban2, 
          blue_ban3, 
          blue_ban4, 
          blue_ban5, 
          red_ban1,
          red_ban2,
          red_ban3,
          red_ban4,
          red_ban5
        ])
        return req.body
    } else {
      return error.invalidDraftDbError()
    }
  } catch (err) {
    return next(err)
  }
}

exports.newDraft = newDraft
exports.getChampionDbData = getChampionDbData