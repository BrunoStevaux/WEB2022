# Overwatch Account Tracker

## About The Project

We wanted to create a web application that allowed users to track the current competitive ranking of Overwatch accounts. Be it their own accounts, friends or whatnot. So we created just that!

## Features

* Search and add an Overwatch account to track its competitive rankings
* Refresh/update an Overwatch account's rankings
* Refresh/update ALL Overwatch account's rankings
* Delete an Overwatch account from the tracker
* Delete ALL Overwatch accounts from the tracker

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Express.js](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com)
* [Node.js](https://nodejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Start by ensuring your npm installation is up to date (or don't)

better-sqlite3 requires the use of msvs2017+ on windows or xcode on macOS.

* npm

  ```sh
  npm install npm@latest -g
  ```

* windows

  ```sh
  npm install --vs2017 -g windows-build-tools
  ```

* macOS

    [xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) or [brew](https://brew.sh/) (includes xcode CLI)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/BrunoStevaux/WEB2022.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Run `index.js`

   ```cmd
   node index.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

_Searching for an account may take up to 30 seconds. This is due to Blizzard's website taking a while to respond. As they do not offer their own API for accessing account information from users, the only way to retrieve account information is through scraping their website._

Begin by searching for a player to track. Try using `PizzaLawyer#11545` for example.

One a response is returned, it will automatically be added to the table of accounts.
</br>

### Refresh

The refresh button will cause the account to be refreshed with new competitive rankings (if they have changed).
</br>

### Delete

The delete button will remove the account from the list permanently.
</br>

### UPDATE ALL

The UPDATE ALL button will individually refresh each account in a queue. This is done on purpose to prevent Blizzard from blocking your IP address from accessing their website.\
</br>

### DELETE ALL

The DELETE ALL button will do exactly as it says. Don't click it unless you want to delete all accounts from the tracker.
</br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Bruno Stevaux - 144894s@acadiau.ca </br>
Sha Upshaw - 151500r@acadiau.ca

Project Link: [https://github.com/BrunoStevaux/WEB2022](https://github.com/BrunoStevaux/WEB2022)