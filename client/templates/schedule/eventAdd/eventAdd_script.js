Template.customerCombo.onRendered(function () {
  var customers = Customers.find({}, {
    name: 1
  }).fetch();
  var option = $('')
  console.log('Customers: ', customers);
  _.each(customers, function (customer) {
    console.log('Customer: ', customer);
  });
  $('#datetimepicker').datetimepicker({
    format: 'DD/MM/YYYY HH:mm',
    locale: 'pt-br',
    useCurrent: true,
    collapse: true,
    daysOfWeekDisabled: [6, 7],
    disabledHours: [0, 18, 19, 20, 21, 22, 23, 24]
  });

});
