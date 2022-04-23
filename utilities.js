const axios = require('axios');
const cheerio = require('cheerio');
const database = require("./database");

// Create database 
function setupDatabase() {
    try {
        database.setup();
        console.log("Database loaded.");
    } catch (e) {
        console.log(e);
    }
}

// Retrieve stats from Blizzard Website
async function getPlayerStats(name, tag){
    try
    {    
        const response = await axios.get(`https://playoverwatch.com/en-us/career/pc/${name}-${tag}/`)

        const $ = cheerio.load(response.data);
        const player = {};
        player.battleTag = `${name}#${tag}`;
        player.lastUpdated = Date.now();
        player.tankSR = null;
        player.damageSR = null;
        player.supportSR = null;

        let ranks = $('div[class=competitive-rank-level]');
        ranks.each( (x, y) => {
            let role = y.prev.attribs['data-ow-tooltip-text'];
            let sr = y.children[0].data;
            
            if(role.startsWith("Tank")) player.tankSR = parseInt(sr);
            if(role.startsWith("Damage")) player.damageSR = parseInt(sr);
            if(role.startsWith("Support")) player.supportSR = parseInt(sr);

        })

        if (ranks.length == 0)
        {
            console.log(`No competitive ranks found for ${player.battleTag}`); 
            return player;
        }

        return player;
    }
    catch(e){
        console.log(e)
    }
}

// Add player to DB
async function addPlayer(name, tag) {
    let player = await getPlayerStats(name, tag);

    // If no stats to be shown
    if (player.tankSR == null && player.damageSR == null && player.supportSR == null) {
        return false;
    }
    try {
        database.insert(player);
        return true;
    } catch (e) {
        console.log(e);
    }
}

// Get all players from the DB 
async function getAllPlayers() {
    return database.getAll();
}

// Remove specific player from DB
async function removePlayer(player){
    database.removeOne(player);
}

// Remove all players from DB
async function removeAllPlayers() {
    database.removeAll();
}

// Update player (Replace old player with new player)
async function updatePlayer(player) {
    let a = player.split("#");
    let name = a[0];
    let tag = a[1];
    await addPlayer(name, tag);
}

module.exports = {
    setupDatabase,
    addPlayer,
    getAllPlayers,
    removePlayer,
    removeAllPlayers,
    updatePlayer,
}