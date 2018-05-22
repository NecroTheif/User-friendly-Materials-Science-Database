const express = require('express');
const app = express();
const knex = require('knex')({
	client: 'mysql',
	connection: {
	    user: 'root',
	    password: '',
		database : 'materials'
	}
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
	knex.select().table('samples').then((samples) => {
		console.log(samples);
		res.render('index', {samples: samples});
	});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
