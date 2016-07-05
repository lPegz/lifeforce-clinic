Template.customerCreate.events({
  'submit form': function (e) {
    e.preventDefault();
    var customerName = $('.name').val(),
      customerPhone = $('.phone').val();
    if (_.isEmpty(customerName) || _.isNull(customerName) || _.isUndefined(
        customerName)) {
      sAlert.error('Insira o nome do cliente!');
      $('#customer-name').focus();
    } else {
      var newCustomer = {
        name: customerName,
        phone: customerPhone,
      };
      Meteor.call('insertCustomer', newCustomer, function (error, result) {
        if (error) {
          return sAlert.error(error.reason);
        } else {
          return;
        }
      });
    }
  }
});

Template.customerCreate.onRendered(function () {
  $('.phone').inputmask({
    'mask': '(99) 9999[9]-9999'
  });
  console.log(Meteor.user());
});
