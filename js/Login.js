(function(window, $, undefined) {

    App = window.App;

    if (App.LiftKarade === undefined) App.LiftKarade = {};
    if (!App.LiftKarade.JsModel) App.LiftKarade.JsModel = {};

    App.LiftKarade.JsModel.Registrations = Ember.Object.extend({

        init: function() {
            var user = Ember.Object.create({
                UserName: 'new user',
                Password: '12345',
                IsVerified: false
            });

            this.registeredUsers.pushObject(user);
        },

        registeredUsers: [
            Ember.Object.create({
                UserName: 'manoj',
                Password: 'test123!@#',
                IsVerified: true
            }),
            Ember.Object.create({
                UserName: 'manoj1',
                Password: 'test123!@#1',
                IsVerified: true
            }),
            Ember.Object.create({
                UserName: 'manoj2',
                Password: 'test123!@#2',
                IsVerified: true
            }),
            Ember.Object.create({
                UserName: 'manoj3',
                Password: 'test123!@#3',
                IsVerified: true
            }),
            Ember.Object.create({
                UserName: 'manoj4',
                Password: 'test123!@#4',
                IsVerified: true
            })
        ],

        registeredUserCount: function() {
            var registeredUsers = this.get('registeredUsers');
            return registeredUsers.filterBy('IsVerified', true).length;
        }.property('registeredUsers')

    });

})(window, jQuery);
