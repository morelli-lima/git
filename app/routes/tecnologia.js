module.exports = function (app) {
	app.get('/tecnologia', function(req, res){
		res.render("tecnologia/index");
	});
};
