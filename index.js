const express = require('express')
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express()
const PORT = 3000

const vercel_token = 'x6nzGDEq4havOYnRtt5q6hnP';

app.listen(PORT, () => {
	
})

app.get('/', async (req, res) => {
	res.send('hello');
})
