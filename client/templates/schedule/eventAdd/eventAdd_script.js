Template.customerCombo.onRendered( function () {
  var customers = Customers.find({}, {name : 1}).fetch();
  console.log(customers);
  _.forEach(customers, function (customer) {
    $('opt-customer-name').append($('option').val(customer.id).text(customer.name));
  });
});
