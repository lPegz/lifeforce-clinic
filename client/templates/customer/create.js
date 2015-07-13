Template.customerCreate.events({
  'submit form' : function () {
    var customerName = $('.name').val();
    if(_.isEmpty(customerName) || _.isNull(customerName) || _.isUndefined(customerName)) {
      sAlert.error('Insira o nome do cliente!');
      $('#customer-name').focus();
    } else {
      Customers.add({
        name: customerName
      });
    }
  }
});
