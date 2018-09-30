module.exports = function(app) {
	app.get('/cover', function(req, res){
		res.render("cover/index");
	});
};
