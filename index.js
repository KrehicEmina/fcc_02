const express = require('express');
const app = express();
const ip = require('ip');

const useragent  = require('useragent');



app.get("/", (req, res) => {
	var result ={
		"ip": "",
		"language": "",
		"os": ""
	};
	result.ip += ip.address();
result.language = req.headers['accept-language'].split(",")[0];

var agent = useragent.parse(req.headers['user-agent']);
agent = agent.os.toString();

result.os = req.headers['user-agent'].split("(")[1].split(")")[0];

	res.send(result);


});


app.listen(process.env.PORT || 3000)