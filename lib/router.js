Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'constructionView',
  waitOn: function () {
    return Meteor.subscribe('customer.public');
  }
});

Router.route('/customer/create', {
  name: 'customerView'
});

Router.route('/treatment/create', {
  name: 'treatmentConfig'
})

Router.route('/schedule', {
  name: 'schedule'
});

Router.route('/', {
  name: 'welcome'
});

Router.route('/eventAdd', {
  name: 'eventAdd'
})
