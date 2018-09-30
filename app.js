var app = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaTecnologia = require('./app/routes/tecnologia')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
// var rotaCover = require('./app/routes/cover')(app);

app.listen(3000, function(){
	console.log('Servidor ON');
});
