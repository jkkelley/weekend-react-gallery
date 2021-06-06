# React Gallery

## Description

Disclaimer - Styling still a work in process....

Welcome to your React Gallery. The gallery has some stock images included for you, you can delete them and start fresh or add on to them using the form at the top. You can click on a picture and flip it to see it's description. You have a favorite "star" button, "love it!" button that increases the the likes count. You also have the option to delete an item from the gallery.

To see the fully functional site, please visit: [here](https://fierce-river-97762.herokuapp.com/)

### Future plans

I'm in the process of making a sort images by favorites and likes count. I would also like to add a conformation to the delete button and a way to check for valid URLs.

## Prerequisites

Link to software that is required to install the app.
* [Node.js](https://nodejs.org/)
* [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database in Postico named "react_gallery"
2. The queries in the [DATABASE.sql] file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

3. Open up your editor of choice and run "npm install" in the root directory of project
4. Run "npm run server" in the root directory of the project to get the server up and running.
5. Run "npm run client" in the root directory of the project to get the app up and running.