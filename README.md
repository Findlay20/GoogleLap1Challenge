# LAP 1 Google Challenge
### Cameron and Mason

## Installation & Usage
### Installation
- Clone or download the repo
- Open terminal and navigate to server folder
- Run `npm install` to install dependencies

### Usage
- Ensure terminal is in server folder and run `npm start` to launch server
- The webpage should now be functional
- Use paths
    + /results to see all results
    + /results/:id to see specific result
    + /results/random to see a randomly selected result

## Changelog
### app.js
- Created a route for retrieving all results - /results
- Created a route for retrieveing a random result - /results/random
- Refined speicfic id route and added hadnling for out-of-range ids - /results/:id

### data.js
- Added array of 10 object results and exported to be used in app.js

### index.html
- Added Google logo, magnifying glass and search bar
- Added search and random buttons
- Clicking anywhere on search bar now enters textbox
- Linked to script.js

### search.html
- Added google logo and back to homepage button


### style.css
- Added styling to site - background, positioning, image size, etc.
- Added hover design to search bar

### script.js
- Added general structure to functions and variables
- Added targetting for buttons in index.html
- Search button redirects to search.html


## Bugs


## Wins and Challenges
### Wins
- Successful implementation of api routes


### Challenges



