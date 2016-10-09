Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'constructionView'
});

Router.route('/customer/create', {
  name: 'customerView',
  waitOn: function () {
    return Meteor.subscribe('customers.public');
  }
});

Router.route('/login', {
  name: 'login'
});

Router.route('/treatment/create', {
  name: 'treatmentConfig',
  waitOn: function () {
    return Meteor.subscribe('treatments.public');
  }
})

Router.route('/schedule', {
  name: 'schedule',
  waitOn: function () {
    return Meteor.subscribe('sessions.public');
  }
});

Router.route('/', {
  name: 'welcome'
});

Router.route('/createUser', {
  name: 'register'
});

Router.route('/eventAdd', {
  name: 'eventAdd',
  waitOn: function () {
    return Meteor.subscribe('sessions.public');
  }
});
