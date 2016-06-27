Template.customerCombo.onRendered(function () {
  Meteor.subscribe('customers.public');
  var customers_list = Customers.find().collection;
  console.log('Customers: ', customers_list);
  _.each(customers_list, function (customer) {
    console.log('Customer: ', customer);
  });
});

Template.modalAddEvent.onRendered(function () {
  $('#datetimepicker').datetimepicker({
    format: 'DD/MM/YYYY HH:mm',
    locale: 'pt-br',
    useCurrent: true,
    collapse: true,
    daysOfWeekDisabled: [6, 7],
    disabledHours: [0, 1, 2, 3, 4, 5, 18, 19, 20, 21, 22, 23, 24]
  });
});
