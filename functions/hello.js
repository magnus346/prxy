const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
import NetlifyAPI from "netlify";

const api = new NetlifyAPI('BiVCAyuspuH3WNcyIYoRrfZwbNUiVZ4wTCpZy9Qh00s');

exports.handler = async event => {
	const subject = event.queryStringParameters.name || 'World'
	const ip = await axios({
		url: "https://ifconfig.me/",
		method: "get"
	}).catch(function (error) {
		console.log(error.response);
	});
	const site = await api.createSite({
		body: {
			name: "prxy-"+uuidv4(),
			repo: {
				provider: "github",
				repo: "magnus346/prxy",
				private: false,
				branch: "main",
			},
		} 
	});
	return {
		statusCode: 200,
		body: `Hello ${ip.data}!`,
	}
}