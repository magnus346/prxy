const axios = require('axios');

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