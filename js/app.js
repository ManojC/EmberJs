(function(window, $, undefined) {

    App = Ember.Application.create();

    App.Router.map(function() {
        this.resource('login');
        this.resource('register');
        this.resource('forgot-password');
        this.resource('about');
        this.resource('user', function() {
            this.resource('search');
            this.resource('edit');
        });
    });

    // App.LoginRoute = Ember.Route.extend({
    //     model: function() {
    //         var unverifiedUsers = App.LiftKarade.JsModel.Registrations.create().get('registeredUsers').filterBy('IsVerified', true);
    //         return unverifiedUsers[0];
    //     }
    // });

    // App.RegisterRoute = Ember.Route.extend({
    //     model: function() {
    //         return '';
    //     }
    // });

    // App.ForgotPasswordRoute = Ember.Route.extend({
    //     model: function() {
    //         return '';
    //     }
    // });

    // window.App = App;

})(window, jQuery);