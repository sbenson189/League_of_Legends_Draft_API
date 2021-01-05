const ExpressError = require('./expressError')

const invalidDraftDbError = () => {
    return new ExpressError("Invalid draft", 404)
}

exports.invalidDraftDbError = invalidDraftDbError
