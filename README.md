# Overwatch Account Tracker

## Table of Contents

- [Overwatch Account Tracker](#overwatch-account-tracker)
  - [Table of Contents](#table-of-contents)
  - [**About The Project**](#about-the-project)
  - [**Features**](#features)
    - [**Built With**](#built-with)
  - [**Getting Started**](#getting-started)
    - [**Prerequisites**](#prerequisites)
    - [**Installation**](#installation)
  - [**Usage**](#usage)
    - [**Search**](#search)
    - [**Refresh**](#refresh)
    - [**Delete**](#delete)
    - [**Update all**](#update-all)
    - [**Delete all**](#delete-all)
  - [For Jamie](#for-jamie)
    - [Searching](#searching)
    - [**Refreshing**](#refreshing)
    - [**Deleting**](#deleting)
    - [**Updating all accounts**](#updating-all-accounts)
    - [**Deleting all accounts**](#deleting-all-accounts)
  - [**Contacts**](#contacts)

## **About The Project**

We wanted to create a web application that allowed users to track the current competitive ranking of Overwatch accounts. Be it their own accounts, friends or whatnot. So we created just that!

## **Features**

* Search and add an Overwatch account to track its competitive rankings
* Refresh/update an Overwatch account's rankings
* Refresh/update ALL Overwatch account's rankings
* Delete an Overwatch account from the tracker
* Delete ALL Overwatch accounts from the tracker

### **Built With**


* [Express.js](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com)
* [Node.js](https://nodejs.org/)

<!-- GETTING STARTED -->
## **Getting Started**

### **Prerequisites**

better-sqlite3 requires the use of msvs2017+ on windows or xcode on macOS. See [better-sqlite3 troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/HEAD/docs/troubleshooting.md) if you have an issues with installation.

* You can ensure that your npm installation is up to date by running the following command

  ```sh
  npm install npm@latest -g
  ```

### **Installation**

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

<!-- USAGE EXAMPLES -->
## **Usage**

_Searching for an account may take up to 30 seconds. This is due to Blizzard's website taking a while to respond. As they do not offer their own API for accessing account information from users, the only way to retrieve account information is through scraping their website._

Begin by searching for a player to track. Try using `PizzaLawyer#11545` for example.

### **Search**

When searching for a player you will need their account name and 3-6 digit battle ID, account names can be anywhere from 3-12 characters long and follow the blizzards [naming policy](https://us.battle.net/support/en/article/26963). Once a response is returned, it will automatically be added to the table of accounts.
</br>

### **Refresh**

The refresh button will cause the account to be refreshed with new competitive rankings (if they have changed).
</br>

### **Delete**

The delete button will remove the account from the list permanently.
</br>

### **Update all**

The UPDATE ALL button will individually refresh each account in a queue. This is done on purpose to prevent Blizzard from blocking your IP address from accessing their website.
</br>

### **Delete all**

The DELETE ALL button will do exactly as it says. Don't click it unless you want to delete all accounts from the tracker.
</br>

## For Jamie

### Searching

Any of these accounts should be valid and their profiles should be public.

_These are just accounts from my friends. However, any public accounts will work too._

* `Me0w#21660`
* `mia#12401`
* `SEILTAM#1140`
* `diesofcringe#1384`
* `CassDEEZnuts#1379`
* `Kirameki#21712`
* `Ace803v3#1710`
* `SistineFibel#1350`
* `StormHawks#11711`
* `Terminal#11354`
* `IfedNicksMom#1366`
* `Zuious#1576`
* `Exalted#11497`
* `PizzaLawyer#11545`
* `TrickyZerg#114653`
* `Śĺāŷěŕ#1752`

You can also try usernames that do not follow the mentioned [naming policy](https://us.battle.net/support/en/article/26963).

```txt
a#123
```

name does not meet the minimum of 3 characters

```txt
Wowmybattletagisreallylong#123
```

name does not meet the maximum of 12 characters

```txt
James#
```

tag is not present

```txt
James#123456789
```

tag does not meet the maximum of 6 digits

### **Refreshing**

You can use the refresh button next an account's name to fetch new statistics, if they are available.

### **Deleting**

You can use the delete button next to an account's name to delete them from the list.

### **Updating all accounts**

This big red button at the bottom of the page will update every account currently saved one by one. This process may take a while depending on the amount of accounts currently being tracked.

_This blizzard website takes roughly 5-8 seconds to respond to requests. However, this can sometimes take up to 30 seconds._

### **Deleting all accounts**

Press the big red "DELETE ALL" button at the bottom of the page. There is no confirmation. Press it if you dare.
<!-- CONTACT -->
## **Contacts**

Bruno Stevaux - 144894s@acadiau.ca </br>
Sha Upshaw - 151500r@acadiau.ca

Project Link: [https://github.com/BrunoStevaux/WEB2022](https://github.com/BrunoStevaux/WEB2022)