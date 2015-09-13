Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'constructionView'
});

Router.route('/customer/create', {
  name: 'customerView'
});

Router.route('/treatment/create', {
  name:'treatmentConfig'
})

Router.route('/schedule', {
  name: 'schedule'
});

Router.route('/', {
  name: 'welcome'
});
