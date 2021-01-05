const championsNames = require('./apiFunctions')

const filterSelections = (userSelections, names) => (userSelections.filter(selection => names.includes(selection) === false)).length === 0

const validateDraftInputs = async (userSelections) => {
    const names = await championsNames.getChampionNames()
    return filterSelections(userSelections, names)
}

exports.validateDraftInputs = validateDraftInputs