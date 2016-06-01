Template.customerCombo.onRendered( function () {
  var customers = Customers.find({}, {name : 1}).fetch();
  var option = $('')
  _.each(customers, function (customer) {

  });
});
