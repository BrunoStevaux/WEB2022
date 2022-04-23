const Database = require("better-sqlite3");
const db = new Database("battletags.db");

// Setup DB
function setup() {
    console.log("Setting up DB");
    db.prepare(
        `CREATE TABLE IF NOT EXISTS accounts (
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            battleTag       TEXT NOT NULL,
            lastUpdated     INTEGER NOT NULL,
            tankSR          INTEGER,
            damageSR        INTEGER,
            supportSR       INTEGER
        );`,
    ).run();
}

function insert(player) {

    // Check if player already in db
    let a = db.prepare(
        "SELECT * FROM accounts WHERE battleTag = ?;",
    ).all(
        player.battleTag
    );

    // If player already in db
    if (a.length > 0) {
        // console.log(`${player.battleTag} is a duplicate.`);
        update(player);
        return;
    }

    // Add new player
    db.prepare(
        "INSERT OR IGNORE INTO accounts (battleTag, lastUpdated, tankSR, damageSR, supportSR) VALUES (?, ?, ?, ?, ?);",
    ).run(
        player.battleTag,
        player.lastUpdated,
        player.tankSR,
        player.damageSR,
        player.supportSR,
    );
    console.log(`Added ${player.battleTag} into database.`);
}

// Get all users
function getAll() {
    return db.prepare(
        "SELECT * FROM accounts ORDER BY lastUpdated DESC;",
    ).all();
}

// Update specific player
function update(player) {
    db.prepare(
        "UPDATE accounts SET battleTag = ?, lastUpdated = ?, tankSR = ?, damageSR = ?, supportSR = ? WHERE battleTag = ?"
    ).run(
        player.battleTag,
        player.lastUpdated,
        player.tankSR,
        player.damageSR,
        player.supportSR,
        player.battleTag,
    );
    console.log(`Updated ${player.battleTag} into database.`);
}

// Remove all players from DB
function removeAll() {
    console.log(`Deleted all players from database.`);

    db.prepare(
        "DELETE from accounts;"
    ).run();
}

// Remove specific player
function removeOne(player) {
    console.log(`Deleted ${player} from database.`);
    db.prepare(
        "DELETE from accounts where battletag = ?;"
    ).run(
        player
    );
}

module.exports = {
    setup,
    insert,
    getAll,
    removeAll,
    removeOne,
};