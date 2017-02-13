// Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + ''));

app.get('/', function (req, res) {
	// res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/stockjson', function (req, res) {
	res.sendFile(path.join(__dirname, 'stock.json'));
});


// START THE SERVER
// =============================================================================
app.listen(PORT);
console.log('Listening on port http://localhost.' + PORT);

