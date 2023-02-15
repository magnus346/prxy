const axios = require('axios');

const tkn = 'BiVCAyuspuH3WNcyIYoRrfZwbNUiVZ4wTCpZy9Qh00s';
const id = '9a35508a-c0fb-43ee-8728-57be7a4f0bb2';

exports.handler = async event => {
	const subject = event.queryStringParameters.name || 'World'
	const ip = await axios({
		url: "https://ifconfig.me/",
		method: "get"
	}).catch(function (error) {
		console.log(error.response);
	});
	setTimeout(function() { throw Error('rebooting'); }, 1000);
	return {
		statusCode: 200,
		body: `Hello ${ip.data}!`,
	}
}