const express = require('express')
const { v4: uuidv4 } = require('uuid');
const { networkInterfaces } = require('os');
const axios = require('axios');
const cheerio = require("cheerio");
const unirest = require("unirest");

const app = express()
const PORT = 3000

app.listen(PORT, () => {
	
})

app.get('/', async (req, res) => {
	const response = await axios({
		url: "https://ifconfig.me/",
		method: "get"
	}).catch(function (error) {
		console.log(error.response);
	});
	res.send(response.data);
})

// Export the Express API
module.exports = app