Template.customerCombo.helpers({
  customerList: function () {
    Meteor.subscribe('customers.public');
    return Customers.find();
  }
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
