Template.customerCombo.helpers({
  customerList: function () {
    Meteor.subscribe('customers.public');
    return Customers.find();
  },
  treatmentList: function () {
    Meteor.subscribe('treaments.public');
    return Treatments.find();
  }
});

Template.modalAddEvent.onRendered(function () {
  var dateTime = $('body').data('datetime').format('DD/MM/YYYY hh:mm');
  console.log(dateTime);
  $('#datetimepicker').datetimepicker({
    format: 'DD/MM/YYYY HH:mm',
    locale: 'pt-br',
    useCurrent: true,
    collapse: true,
    daysOfWeekDisabled: [6, 7],
    disabledHours: [0, 1, 2, 3, 4, 5, 18, 19, 20, 21, 22, 23, 24]
  });
  var xpto = $('#datetimepicker').data({
    localDate: dateTime
  }).datetimepicker('update').children('input').val(dateTime)
});

Template.modalAddEvent.events({
  'click .add-event': function () {
    var newSession = {
      dateTime: $('body').data('datetime').format('DD/MM/YYYY hh:mm'),
      patient_id: treatment_id:
    };
    Meteor.call('insertSession', newSession)
  }
});
