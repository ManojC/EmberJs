App = Ember.Application.create();

App.Router.map(function() {
    this.resource('login');
    this.resource('register');
    this.resource('forgot-password');
    this.resource('about');
    this.resource('user', function(){
    	this.resource('search');
    	this.resource('edit');
    });
});

// App.LoginRoute = Ember.Route.extend({
//     model: function() {
//         return "data";
//     }	
// });

// App.RegisterRoute = Ember.Route.extend({
// 	model:function(){
// 		return '';
// 	}
// });

// App.ForgotPasswordRoute = Ember.Route.extend({
// 	model:function(){
// 		return '';
// 	}
// });
