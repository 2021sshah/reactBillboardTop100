Author: Siddharth Shah
Full Stack Development Personal Project

WATCH "videoProof" for sample execution

To Execute:

 - Run both backend (node index.js) and frontend (npm start) on local machine
 - Will have to cd into each directory to run package.json files
 - Could not push "node_modules" directory within frontend, so may have to create
	black react app and npm install 'react', 'react-beautiful-dnd', and 'axios'
 - Should appear on Ports 8081 and 3000 respectively

Code Outline:

 - Created backend (RESTful API) using Node.js and Express
 - Employed python BeautifulSoup for web scraping and sys buffer for sending info
 - Additional feature of outputting .csv file using Pandas
 - Run on local machine (Port 8081) and get request from "http://localhost:8081/random"

 - Created fronted web application using React and React-Beatiful-Dnd
 - Used axios js library for communication between server and frontend React app
 - Run on local machine (Port 3000) and list elements turn green when in correct order
 - Have to initiate drag-and-drop for code to check if data in the correct order

Comments

 - Easily spent 15+ hours total
 - Attempted using Selenium+ChromeDriver for scraping but couldn't resolve PATH issues
 - Used various youtube and google tutorials to teach myself Express, BeautifulSoup,
	React frameworks, and React DnD
 - Would have attempted hosting on website with additional time for iterations