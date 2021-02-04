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

const data = {
  "champions": [
    {
      "Aatrox": {
        "name": "Aatrox",
        "picked": "0.3",
        "banned": "0.3",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"
      },
      "Ahri": {
        "name": "Ahri",
        "picked": "0.9",
        "banned": "14.3",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg"
      },
      "Akali": {
        "name": "Akali",
        "picked": "0.8",
        "banned": "6.3",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg"
      },
      "Alistar": {
        "name": "Alistar",
        "picked": "0.9",
        "banned": "20.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg"
      },
      "Amumu": {
        "name": "Amumu",
        "picked": "0.8",
        "banned": "7.1",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg"
      },
      "Anivia": {
        "name": "Anivia",
        "picked": "1.6",
        "banned": "3.2",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg"
      },
      "Annie": {
        "name": "Annie",
        "picked": "0.7",
        "banned": "2.8",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg"
      },
      "Aphelios": {
        "name": "Aphelios",
        "picked": "0.9",
        "banned": "50.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg"
      },
      "Ashe": {
        "name": "Ashe",
        "picked": "0.9",
        "banned": "50.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg"
      },
      "AurelionSol": {
        "name": "AurelionSol",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aurelion Sol_0.jpg"
      },
      "Azir": {
        "name": "Azir",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg"
      },
      "Bard": {
        "name": "Bard",
        "picked": "0.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Bard_0.jpg"
      },
      "Blitzcrank": {
        "name": "Blitzcrank",
        "picked": "50.0",
        "banned": "3.3",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Blitzcrank_0.jpg"
      },
      "Brand": {
        "name": "Brand",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Brand_0.jpg"
      },
      "Braum": {
        "name": "Braum",
        "picked": "50.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg"
      },
      "Caitlyn": {
        "name": "Caitlyn",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg"
      },
      "Camille": {
        "name": "Camille",
        "picked": "50.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Camille_0.jpg"
      },
      "Cassiopeia": {
        "name": "Cassiopeia",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Cassiopeia_0.jpg"
      },
      "Chogath": {
        "name": "Chogath",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Chogath_0.jpg"
      },
      "Corki": {
        "name": "Corki",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Corki_0.jpg"
      },
      "Darius": {
        "name": "Darius",
        "picked": "100.0",
        "banned": "0.9",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_0.jpg"
      },
      "Diana": {
        "name": "Diana",
        "picked": "50.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Diana_0.jpg"
      },
      "DrMundo": {
        "name": "DrMundo",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Dr. Mundo_0.jpg"
      },
      "Draven": {
        "name": "Draven",
        "picked": "100.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Draven_0.jpg"
      },
      "Ekko": {
        "name": "Ekko",
        "picked": "50.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_0.jpg"
      },
      "Elise": {
        "name": "Elise",
        "picked": "100.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Elise_0.jpg"
      },
      "Evelynn": {
        "name": "Evelynn",
        "picked": "100.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Evelynn_0.jpg"
      },
      "Ezreal": {
        "name": "Ezreal",
        "picked": "50.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_0.jpg"
      },
      "Fiddlesticks": {
        "name": "Fiddlesticks",
        "picked": "8.3",
        "banned": "14.3",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiddlesticks_0.jpg"
      },
      "Fiora": {
        "name": "Fiora",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiora_0.jpg"
      },
      "Fizz": {
        "name": "Fizz",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fizz_0.jpg"
      },
      "Galio": {
        "name": "Galio",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Galio_0.jpg"
      },
      "Gangplank": {
        "name": "Gangplank",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gangplank_0.jpg"
      },
      "Garen": {
        "name": "Garen",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg"
      },
      "Gnar": {
        "name": "Gnar",
        "picked": "50.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gnar_0.jpg"
      },
      "Gragas": {
        "name": "Gragas",
        "picked": "50.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gragas_0.jpg"
      },
      "Graves": {
        "name": "Graves",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Graves_0.jpg"
      },
      "Hecarim": {
        "name": "Hecarim",
        "picked": "0.0",
        "banned": "50.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_0.jpg"
      },
      "Heimerdinger": {
        "name": "Heimerdinger",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Heimerdinger_0.jpg"
      },
      "Illaoi": {
        "name": "Illaoi",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Illaoi_0.jpg"
      },
      "Irelia": {
        "name": "Irelia",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Irelia_0.jpg"
      },
      "Ivern": {
        "name": "Ivern",
        "picked": "100.0",
        "banned": "33.3",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ivern_0.jpg"
      },
      "Janna": {
        "name": "Janna",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Janna_0.jpg"
      },
      "JarvanIV": {
        "name": "JarvanIV",
        "picked": "50.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/JarvanIV_0.jpg"
      },
      "Jax": {
        "name": "Jax",
        "picked": "100.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jax_0.jpg"
      },
      "Jayce": {
        "name": "Jayce",
        "picked": "50.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jayce_0.jpg"
      },
      "Jhin": {
        "name": "Jhin",
        "picked": "0.0",
        "banned": "50.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jhin_0.jpg"
      },
      "Jinx": {
        "name": "Jinx",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg"
      },
      "Kaisa": {
        "name": "Kaisa",
        "picked": "0.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_0.jpg"
      },
      "Kalista": {
        "name": "Kalista",
        "picked": "0.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kalista_0.jpg"
      },
      "Karma": {
        "name": "Karma",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karma_0.jpg"
      },
      "Karthus": {
        "name": "Karthus",
        "picked": "100.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karthus_0.jpg"
      },
      "Kassadin": {
        "name": "Kassadin",
        "picked": "100.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kassadin_0.jpg"
      },
      "Katarina": {
        "name": "Katarina",
        "picked": "100.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Katarina_0.jpg"
      },
      "Kayle": {
        "name": "Kayle",
        "picked": "0.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kayle_0.jpg"
      },
      "Kayn": {
        "name": "Kayn",
        "picked": "0.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kayn_0.jpg"
      },
      "Kennen": {
        "name": "Kennen",
        "picked": "0.0",
        "banned": "50.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kennen_0.jpg"
      },
      "Khazix": {
        "name": "Khazix",
        "picked": "100.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Khazix_0.jpg"
      },
      "Kindred": {
        "name": "Kindred",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_0.jpg"
      },
      "Kled": {
        "name": "Kled",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kled_0.jpg"
      },
      "KogMaw": {
        "name": "KogMaw",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/KogMaw_0.jpg"
      },
      "Leblanc": {
        "name": "Leblanc",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leblanc_0.jpg"
      },
      "LeeSin": {
        "name": "LeeSin",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg"
      },
      "Leona": {
        "name": "Leona",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leona_0.jpg"
      },
      "Lillia": {
        "name": "Lillia",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lillia_0.jpg"
      },
      "Lissandra": {
        "name": "Lissandra",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lissandra_0.jpg"
      },
      "Lucian": {
        "name": "Lucian",
        "picked": "10.0",
        "banned": "10.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lucian_0.jpg"
      },
      "Lulu": {
        "name": "Lulu",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lulu_0.jpg"
      },
      "Lux": {
        "name": "Lux",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg"
      },
      "Malphite": {
        "name": "Malphite",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malphite_0.jpg"
      },
      "Malzahar": {
        "name": "Malzahar",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malzahar_0.jpg"
      },
      "Maokai": {
        "name": "Maokai",
        "picked": "0.0",
        "banned": "100.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Maokai_0.jpg"
      },
      "MasterYi": {
        "name": "MasterYi",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MasterYi_0.jpg"
      },
      "MissFortune": {
        "name": "MissFortune",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_0.jpg"
      },
      "Mordekaiser": {
        "name": "Mordekaiser",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Mordekaiser_0.jpg"
      },
      "Morgana": {
        "name": "Morgana",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg"
      },
      "Nami": {
        "name": "Nami",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nami_0.jpg"
      },
      "Nasus": {
        "name": "Nasus",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nasus_0.jpg"
      },
      "Nautilus": {
        "name": "Nautilus",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nautilus_0.jpg"
      },
      "Neeko": {
        "name": "Neeko",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Neeko_0.jpg"
      },
      "Nidalee": {
        "name": "Nidalee",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nidalee_0.jpg"
      },
      "Nocturne": {
        "name": "Nocturne",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nocturne_0.jpg"
      },
      "Nunu": {
        "name": "Nunu",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nunu_0.jpg"
      },
      "Olaf": {
        "name": "Olaf",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Olaf_0.jpg"
      },
      "Orianna": {
        "name": "Orianna",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Orianna_0.jpg"
      },
      "Ornn": {
        "name": "Ornn",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ornn_0.jpg"
      },
      "Pantheon": {
        "name": "Pantheon",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Pantheon_0.jpg"
      },
      "Poppy": {
        "name": "Poppy",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_0.jpg"
      },
      "Pyke": {
        "name": "Pyke",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Pyke_0.jpg"
      },
      "Qiyana": {
        "name": "Qiyana",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Qiyana_0.jpg"
      },
      "Quinn": {
        "name": "Quinn",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Quinn_0.jpg"
      },
      "Rakan": {
        "name": "Rakan",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_0.jpg"
      },
      "Rammus": {
        "name": "Rammus",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rammus_0.jpg"
      },
      "RekSai": {
        "name": "RekSai",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/RekSai_0.jpg"
      },
      "Rell": {
        "name": "Rell",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rell_0.jpg"
      },
      "Renekton": {
        "name": "Renekton",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Renekton_0.jpg"
      },
      "Rengar": {
        "name": "Rengar",
        "picked": "100.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rengar_0.jpg"
      },
      "Riven": {
        "name": "Riven",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Riven_0.jpg"
      },
      "Rumble": {
        "name": "Rumble",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rumble_0.jpg"
      },
      "Ryze": {
        "name": "Ryze",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg"
      },
      "Samira": {
        "name": "Samira",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Samira_0.jpg"
      },
      "Sejuani": {
        "name": "Sejuani",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sejuani_0.jpg"
      },
      "Senna": {
        "name": "Senna",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Senna_0.jpg"
      },
      "Seraphine": {
        "name": "Seraphine",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Seraphine_0.jpg"
      },
      "Sett": {
        "name": "Sett",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sett_0.jpg"
      },
      "Shaco": {
        "name": "Shaco",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shaco_0.jpg"
      },
      "Shen": {
        "name": "Shen",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shen_0.jpg"
      },
      "Shyvana": {
        "name": "Shyvana",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shyvana_0.jpg"
      },
      "Singed": {
        "name": "Singed",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Singed_0.jpg"
      },
      "Sion": {
        "name": "Sion",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sion_0.jpg"
      },
      "Sivir": {
        "name": "Sivir",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sivir_0.jpg"
      },
      "Skarner": {
        "name": "Skarner",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Skarner_0.jpg"
      },
      "Sona": {
        "name": "Sona",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sona_0.jpg"
      },
      "Soraka": {
        "name": "Soraka",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Soraka_0.jpg"
      },
      "Swain": {
        "name": "Swain",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Swain_0.jpg"
      },
      "Sylas": {
        "name": "Sylas",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sylas_0.jpg"
      },
      "Syndra": {
        "name": "Syndra",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Syndra_0.jpg"
      },
      "TahmKench": {
        "name": "TahmKench",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/TahmKench_0.jpg"
      },
      "Taliyah": {
        "name": "Taliyah",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_0.jpg"
      },
      "Talon": {
        "name": "Talon",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Talon_0.jpg"
      },
      "Taric": {
        "name": "Taric",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taric_0.jpg"
      },
      "Teemo": {
        "name": "Teemo",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Teemo_0.jpg"
      },
      "Thresh": {
        "name": "Thresh",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_0.jpg"
      },
      "Tristana": {
        "name": "Tristana",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Tristana_0.jpg"
      },
      "Trundle": {
        "name": "Trundle",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Trundle_0.jpg"
      },
      "Tryndamere": {
        "name": "Tryndamere",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Tryndamere_0.jpg"
      },
      "TwistedFate": {
        "name": "TwistedFate",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Twisted Fate_0.jpg"
      },
      "Twitch": {
        "name": "Twitch",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Twitch_0.jpg"
      },
      "Udyr": {
        "name": "Udyr",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Udyr_0.jpg"
      },
      "Urgot": {
        "name": "Urgot",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Urgot_0.jpg"
      },
      "Varus": {
        "name": "Varus",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Varus_0.jpg"
      },
      "Vayne": {
        "name": "Vayne",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vayne_0.jpg"
      },
      "Veigar": {
        "name": "Veigar",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Veigar_0.jpg"
      },
      "Velkoz": {
        "name": "Velkoz",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Velkoz_0.jpg"
      },
      "Vi": {
        "name": "Vi",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_0.jpg"
      },
      "Viktor": {
        "name": "Viktor",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Viktor_0.jpg"
      },
      "Vladimir": {
        "name": "Vladimir",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vladimir_0.jpg"
      },
      "Volibear": {
        "name": "Volibear",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Volibear_0.jpg"
      },
      "Warwick": {
        "name": "Warwick",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Warwick_0.jpg"
      },
      "Xayah": {
        "name": "Xayah",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xayah_0.jpg"
      },
      "Xerath": {
        "name": "Xerath",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xerath_0.jpg"
      },
      "XinZhao": {
        "name": "XinZhao",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/XinZhao_0.jpg"
      },
      "Yasuo": {
        "name": "Yasuo",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg"
      },
      "Yone": {
        "name": "Yone",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yone_0.jpg"
      },
      "Yorick": {
        "name": "Yorick",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yorick_0.jpg"
      },
      "Yuumi": {
        "name": "Yuumi",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yuumi_0.jpg"
      },
      "Zac": {
        "name": "Zac",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zac_0.jpg"
      },
      "Zed": {
        "name": "Zed",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_0.jpg"
      },
      "Ziggs": {
        "name": "Ziggs",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ziggs_0.jpg"
      },
      "Zilean": {
        "name": "Zilean",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zilean_0.jpg"
      },
      "Zoe": {
        "name": "Zoe",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zoe_0.jpg"
      },
      "Zyra": {
        "name": "Zyra",
        "picked": "0.0",
        "banned": "0.0",
        "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_0.jpg"
      }
    }
  ]
}

app.get('/', async (req, res, next) => {
  try {
      const stats = data
      // const stats = await dbStats.populateAPIStats(req, res, next)
      return res.json(stats)
  } catch (err) {
    return err
  }
})

app.get('/stats', async (req, res, next) => {
  try {
    const stats = data
    // const stats = await dbStats.populateAPIStats(req, res, next)
      return res.json(stats)
  } catch (err) {
    // return statsError.statsUnavailable()
    return err
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

module.exports = app