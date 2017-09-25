var auth = require('./auth'),
  path = require('path');

var fs = require('fs');

var subdomain;

module.exports = function(app) {
      app.get('*', function(req, res, next) {
        
    console.log('subdomains: '+req.subdomains);
    if(req.subdomains.length<3){
      subdomain = '/application-storage/'+req.subdomains[1];
    }
    else{
      subdomain = '';
    }
    console.log(subdomain);
    
    next();
  });
  
  //Custom paths
    app.get('/landingPage', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/..'+subdomain+'/index.html'));
  });

    app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/..'+subdomain+'/index.html'));
  });


  app.post('/api/login', auth.authenticate);
  app.get('/api/currentIdentity', auth.getCurrentIdentity);


  app.get('/api/logout', function(req, res) {
    req.logout();
    res.end();
  });


  app.get('/app/*', function(req, res) {
    res.sendStatus(404);
  });
  
  app.get('/node_modules/*', function(req, res) {
    res.sendStatus(404);
  });

    app.get('/node-server/*', function(req, res) {
    res.sendStatus(404);
  });

  app.get('*', function(req, res) {
    console.log('404 error', req.path);
    res.sendStatus(404);
  });


  app.get('/404', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });



}


// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.send({error:"You are not logged in"});
}