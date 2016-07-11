Template.customerCombo.helpers({
  customerList: function () {
    Meteor.subscribe('customers.public');
    return Customers.find();
  }
});

Template.treatmentCombo.helpers({
  treatmentList: function () {
    Meteor.subscribe('treatments.public');
    return Treatments.find();
  }
});

Template.modalAddEvent.onRendered(function () {
  var dateTime = $('body').data('datetime').format('DD/MM/YYYY HH:mm');
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
    var title = $('#treatment-description option:selected').text() + " " + $('#opt-customer-name option:selected').text(),
        endDate = moment($('body').data('datetime').format('DD/MM/YYYY hh:mm'),'DD/MM/YYYY HH:mm');
    endDate.add(1, 'hours');
    var newSession = {
      title: title,
      start: moment($('body').data('datetime').format('DD/MM/YYYY hh:mm'),'DD/MM/YYYY HH:mm')._d,
      end: endDate._d,
      patient_id: $('#treatment-description option:selected').val(),
      treatment_id: $('#opt-customer-name option:selected').val()
    };
    console.log(newSession);
    if(_.isDate(newSession.start) && _.isDate(newSession.end)) {
      Meteor.call('insertNewSession', newSession);
    } else {
      sAlert.error('Data inválida');
    }

    Modal.hide('modalAddEvent');
  }
});
