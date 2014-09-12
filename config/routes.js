'use strict';

module.exports = function (app, passport, auth) {
	//User Routes
	var users = require('../app/controllers/users');
	app.get('/signin', users.signin);
	app.get('/signup', users.signup);
	app.get('/signout', users.signout);
	app.get('/users/me', users.me);

	//Setting up the users api
	app.post('/users', users.create);

	//Setting the local strategy route
	app.post('/users/session', passport.authenticate('local', {
		failureRedirect: '/signin',
		failureFlash: true
	}), users.session);

	//Setting the facebook oauth routes
	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['email', 'user_about_me'],
		failureRedirect: '/signin'
	}), users.signin);

	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin'
	}), users.authCallback);

	//Setting the github oauth routes
	app.get('/auth/github', passport.authenticate('github', {
		failureRedirect: '/signin'
	}), users.signin);

	app.get('/auth/github/callback', passport.authenticate('github', {
		failureRedirect: '/signin'
	}), users.authCallback);

	//Setting the twitter oauth routes
	app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}), users.signin);

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}), users.authCallback);

	//Setting the google oauth routes
	app.get('/auth/google', passport.authenticate('google', {
		failureRedirect: '/signin',
		scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
	}), users.signin);

	app.get('/auth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin'
	}), users.authCallback);

	//Finish with setting up the userId param
	app.param('userId', users.user);

	//Article Routes
	var articles = require('../app/controllers/articles');
	app.get('/articles', auth.requiresLogin, articles.all);
	app.post('/articles', auth.requiresLogin, articles.create);
	app.get('/articles/:articleId', articles.show);
	app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
	app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

	//Finish with setting up the articleId param
	app.param('articleId', articles.article);


	//Customer routes
	var customer = require('../app/controllers/customer.js');
	app.post('/customers', auth.requiresLogin, customer.create);
    //search for customer by name

	app.get('/customers/:CustomerId', customer.show);


	app.get('/customers', customer.all);
	app.put('/customers/:CustomerId', auth.requiresLogin, auth.article.hasAuthorization, customer.update);

	
	//Tenant routes
	var tenant=require('../app/controllers/tenant');
	app.get('/tenants', auth.requiresLogin, tenant.all);
	app.post('/tenants',tenant.create);
	//Home route
	var index = require('../app/controllers/index');
	app.get('/', index.render);


    //Order Routes
    var Order = require('../app/controllers/order');
    app.post('/orders', auth.requiresLogin, Order.create);
    app.get('/orders',auth.requiresLogin,Order.all);

    //Payment Routes
    var Payment = require('../app/controllers/Payment');
    app.post('/payment', auth.requiresLogin, Payment.create);

<<<<<<< HEAD

    //Book Routes
    var Book = require('../app/controllers/AutoInc');
    app.post('/Book', auth.requiresLogin, Book.create);


    //Service Order Routes
    var ServiceOrder = require('../app/controllers/ServiceOrder');
    app.post('/ServiceOrder', auth.requiresLogin, ServiceOrder.create);


    //Invoice Routes
    var Invoice = require('../app/controllers/Invoice');
    app.post('/Invoice', auth.requiresLogin, Invoice.create);

=======
    //Tyre Routes
    var Tyre = require('../app/controllers/tyreDetails');
    app.post('/tyres', auth.requiresLogin, Tyre.create);

   //Vehicle Routes
    var Vehicle = require('../app/controllers/Vehicle');
    app.post('/vehicles', auth.requiresLogin, Vehicle.create);

    //VehicleFinance Routes
    var VehicleFinance = require('../app/controllers/VehicleFinance');
    app.post('/vehiclefin', auth.requiresLogin, VehicleFinance.create);

    //VehicleMaintenance
    var VehicleMaintenance = require('../app/controllers/vehicleMaintanence');
    app.post('/vehiclemaint', auth.requiresLogin, VehicleMaintenance.create);
    app.put('/vehiclemaint/:VehicleId', auth.requiresLogin, auth.article.hasAuthorization, VehicleMaintenance.update);

    //Service Order Routes
    var ServiceOrder = require('../app/controllers/ServiceOrder');
    app.post('/service', auth.requiresLogin, ServiceOrder.create);
>>>>>>> origin/master
};