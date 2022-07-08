const express = require('express')
const path = require('path');
const utilities = require("./utilities.js");
const bodyParser = require("body-parser");
const moment = require("moment");

const app = express()
const port = 3000
const jsonParser = bodyParser.json();

let sort = null;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/'))); // To send CSS

// UI URL endpoints
app.get('/', displayHome);
app.get("/getPlayerStats", getPlayerStats);
app.get("/deleteAll", deleteAll);
app.get("/update", update);
app.get("/del", del);
app.get("/updateAll", updateAll);

// Set up the database
utilities.setupDatabase();

// Dirty hack for showing error messages
// This is shown everytime the homepage is rendered.
// The variable err is set inside of other functions.
let err = "";

// Deleting all DB entries
async function deleteAll(req, res) {
    await utilities.removeAllPlayers();
    res.redirect("/");
}

// Updates all DB entries
async function updateAll(req, res) {
    const players = await utilities.getAllPlayers();
    
    // The more players there are the longer this will take.
    // This is to ensure that we do not spam the Blizzard website.
    // Spamming will cause our IP to be banned from making further requests.
    for (const item of players) {
        await utilities.updatePlayer(item.battleTag);  
    }
    res.redirect("/");
}

// Updating specific player
// Just calls add player again. Replaces old one with new one.
async function update(req, res) {
    await utilities.updatePlayer(req.query.battleTag);
    res.redirect("/");
}

// Deletes specific player
async function del(req, res) {
    await utilities.removePlayer(req.query.battleTag);
    res.redirect("/");
}

// Homepage 
async function displayHome(req, res) {
    sort = req.query.sort;
    const players = await utilities.getAllPlayers(sort);
    
    // Show "Updated x mins ago"
    players.forEach((item) => {
        item.lastUpdated = moment(item.lastUpdated).fromNow();
    })

    res.render("index.ejs", { tag: players, err: err })
    // Reset error
    err = "";
}

// Add new player endpoint
async function getPlayerStats(req, res) {
    const a = req.query.playerInput.split("#");
    const name = a[0];
    const tag = a[1] || "";

    // Make sure name meets the BattleTag Naming Policy https://us.battle.net/support/en/article/26963
    if (name.legnth < 3 || name.length > 12 || name.length == 0) {
        err = "Name must be between 3 and 12 characters";
        res.redirect("/");
        return;
    }
    else if (tag.length > 6 || tag.length == 0) {
        err = "Tag must be 6 digits or less";
        res.redirect("/");
        return;
    }
    let player = await utilities.addPlayer(name, tag);

    // If player has no stats (addPlayer function returns false)
    // This is also called if the play cannot be found. They are treated the same.
    if (!player) {
        err = `Profile does not exist for ${req.query.playerInput}. Names are case sensitive.`
    }
    res.redirect("/");
}

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});