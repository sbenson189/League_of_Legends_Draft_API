const axios = require('axios')
const championData = require('./dbFunctions')
const baseURL = 'http://ddragon.leagueoflegends.com/cdn'
const imageUrl = '/img/champion/loading/'
const championUrl = '/10.21.1/data/en_US/champion.json'

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
const calculateRatio = (array, item, total) => total/array.map(element => element.indexOf(item)).length * 100
const rate = (array, item) => countOccurrences(array, item) === 0 ? 0 : array.length / countOccurrences(array, item)

const getChampionNames = async () => {
    const response = await axios.get(`${baseURL}${championUrl}`)
    const champNames = Object.keys(response.data.data)
    return champNames
}

const populateAPIStats = async () => {
    const allChampions = await getChampionNames()
    const draftResponse = await championData.getChampionDbData()
  
    const pickedChampions = draftResponse.map(data => [data.blue_pick1, data.blue_pick2, data.blue_pick3, data.blue_pick4, data.blue_pick5, data.red_pick1, data.red_pick2, data.red_pick3, data.red_pick4, data.red_pick5]).flat()
    const bannedChampions = draftResponse.map(data => [data.blue_ban1, data.blue_ban2, data.blue_ban3, data.blue_ban4, data.blue_ban5, data.red_ban1, data.red_ban2, data.red_ban3, data.red_ban4, data.red_ban5]).flat()
    
    const reducer = (accumulator, currentValue) => { 
        return {
            ...accumulator, 
            [currentValue]: {
                name: currentValue,
                picked: parseFloat(calculateRatio(pickedChampions, currentValue, rate(pickedChampions, currentValue))).toFixed(1), 
                banned: parseFloat(calculateRatio(bannedChampions, currentValue, rate(bannedChampions, currentValue))).toFixed(1),
                image: `${baseURL}${imageUrl}${currentValue}_0.jpg`
            }
        }
    }
    
    const stats = {champions: [allChampions.reduce(reducer, [])]}
    return stats
}

exports.getChampionNames = getChampionNames
exports.populateAPIStats = populateAPIStats