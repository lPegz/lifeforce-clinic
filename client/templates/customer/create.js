Template.customerCreate.events({
  'submit form': function() {
    var customerName = $('.name').val(),
      customerPhone = $('.phone').val();
    if (_.isEmpty(customerName) || _.isNull(customerName) || _.isUndefined(
        customerName)) {
      sAlert.error('Insira o nome do cliente!');
      $('#customer-name').focus();
    } else {
      Customers.insert({
        name: customerName,
        phone: customerPhone
      });
    }
  }
});

Template.customerCreate.onRendered(function() {
  $('.phone').inputmask({
    'mask': '(99) 99999-9999'
  });
});
