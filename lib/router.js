Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'constructionView'
});

Router.route('/customer/create', {name:'customerView'});
Router.route('/', {name: 'welcome'});
