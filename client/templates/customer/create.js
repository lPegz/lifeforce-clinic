Template.customerCreate.events({
  'blur cpf' : function (e) {
    e.preventDefault();
    var cpf = $('.cpf').val();
    if(isFieldEmpty(cpf)) {
      sAlert.error('Insira o CPF!');
      $('.cpf').focus();
    } else {

    }
  }
  'submit form': function (e) {
    e.preventDefault();
    var customerName = $('.name').val(),
      customerPhone = $('.phone').val(),
      customerCpf = $('.cpf').val();
    if (isFieldEmpty(customerName)) {
      sAlert.error('Insira o nome do cliente!');
      $('#customer-name').focus();
    } else {
      var newCustomer = {
        name: customerName,
        phone: customerPhone,
        cpf: customerCpf
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
  $('.cpf').inputmask({
    'mask': '999.999.999-99'
  });
});
