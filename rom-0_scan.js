var ip = 200;
var http = require('http');
var color = require('colors');
var p =1;
while (p<=ip) {
var options = {
  host: '49.49.100.'+p,
  port: 80,
  path: '/rom-0'
};

http.get(options, function(res) {
	if (res.statusCode == 200) {
		console.log(color.red("IP 49.49.200."+p+" Detect Rom-0 Bug!"));
	}else{
		console.log(color.green("IP 49.49.200."+p+" Pass! ("+res.statusCode+")"));
	}
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

p++;
}
