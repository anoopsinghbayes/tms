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
	app.put('/customers/:CustomerId', auth.requiresLogin, customer.update);

	
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



    //Book Routes
    var Book = require('../app/controllers/AutoInc');
    app.post('/Book', auth.requiresLogin, Book.create);


    //Service Order Routes
    var ServiceOrder = require('../app/controllers/ServiceOrder');
    app.post('/ServiceOrder', auth.requiresLogin, ServiceOrder.create);

    //Invoice Routes
    var Invoice = require('../app/controllers/Invoice');
    app.post('/Invoice', auth.requiresLogin, Invoice.create);
    app.put('/Invoice/:invoiceId', auth.requiresLogin, Invoice.update);
    //var GenerateInvoice = require('../app/controllers/GenerateInvoice');
    //app.get('/GenerateInvoice', auth.requiresLogin, GenerateInvoice.getInvDet);

    //Tyre Routes
    var Tyre = require('../app/controllers/tyreDetails');
    app.post('/tyres', auth.requiresLogin, Tyre.create);
    app.put('/tyres/:tyreId', auth.requiresLogin, Tyre.update);
    app.get('/tyres/:tyreId', auth.requiresLogin, Tyre.show);
    app.get('/tyres', auth.requiresLogin, Tyre.all);


   //Vehicle Routes
    var Vehicle = require('../app/controllers/Vehicle');
    app.post('/vehicles', auth.requiresLogin, Vehicle.create);
    app.put('/vehicles/:vehicleId', auth.requiresLogin, Vehicle.update);
    app.get('/vehicles/:vehicleId', auth.requiresLogin, Vehicle.show);
    app.get('/vehicle', auth.requiresLogin, Vehicle.all);

    //VehicleFinance Routes
    var VehicleFinance = require('../app/controllers/VehicleFinance');
    app.post('/vehiclefin', auth.requiresLogin, VehicleFinance.create);
    app.put('/vehiclefin/:vehicleId', auth.requiresLogin, VehicleFinance.update);
    app.get('/vehiclefin/:vehicleId', auth.requiresLogin, VehicleFinance.show);
    app.get('/vehiclefin', auth.requiresLogin, VehicleFinance.all);

    //VehicleMaintenance
    var VehicleMaintenance = require('../app/controllers/vehicleMaintanence');
    app.post('/vehiclemaint', auth.requiresLogin, VehicleMaintenance.create);
    app.put('/vehiclemaint/:vehicleId', auth.requiresLogin, VehicleMaintenance.update);
    app.get('/vehiclemaint/:vehicleId', auth.requiresLogin, VehicleMaintenance.show);
    app.get('/vehiclemaint', auth.requiresLogin, VehicleMaintenance.all);

    //Service Order Routes
    var ServiceOrder = require('../app/controllers/ServiceOrder');
    app.post('/service', auth.requiresLogin, ServiceOrder.create);
    app.put('/service/:serviceOrderId', auth.requiresLogin, ServiceOrder.update);
    app.get('/service/:serviceOrderId', auth.requiresLogin, ServiceOrder.show);
    app.get('/service', auth.requiresLogin, ServiceOrder.all);

    //Orders by Customer
    var CustomerOrders = require('../app/controllers/OrdersByCustomer')
    app.get('/OrdersByCustomer', auth.requiresLogin, CustomerOrders.ordersByCustomer);

    //Employee
    var Employee = require('../app/controllers/Employee');
    app.post('/Employee', auth.requiresLogin, Employee.create);
    app.get('/Employee', auth.requiresLogin, Employee.all);
    app.get('/Employee/:EmployeeId', auth.requiresLogin, Employee.show);
    app.put('/Employee/:EmployeeId', auth.requiresLogin, Employee.update);

    //get orders by customer
    //var OrdersByCustomer = require('../app/controllers/OrdersByCustomer')
    //app.get('/OrdersByCustomer', auth.requiresLogin, OrdersByCustomer.ordersDetails);

    //Test Route to test new models or methods
    var test = require('../app/controllers/TestController');
    app.get('/test', auth.requiresLogin, test.create);

    var paymentInvoice = require('../app/controllers/PaymentInvoice');
    app.get('/customers/:CustomerId/openpayments', auth.requiresLogin, paymentInvoice.openPaymentsByCustomer);


};