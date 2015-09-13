Template.treatmentAdd.onRendered(function() {
  //load combo with set of values
  var enumType = ['RPG', 'FISIO', 'PILATES', 'ESTETICA'];


  //mask for price
  $('.price').inputmask({
    'mask': 'R$ 999[9,99]'
  });
});

Template.treatmentAdd.events({
  'submit form': function() {
    var treatmentDescription = $('.description').val(),
      treatmentBasePrice = $('.base-price').val(),
      treatmentDiscountedPrice = $('.disc-price').val(),
      type = $('.disc-price').val();
    if (_.isEmpty(treatmentDescription) || _.isNull(treatmentDescription) || _.isUndefined(
        treatmentDescription)) {
      sAlert.error('Insira o nome do tratamento!');
      $('#').focus();
    } else {
      Treatment.insert({
        name: treatmentDescription,
        type: treatmentType,
        treatmentBasePrice: treatmentBasePrice,
        treatmentDiscountedPrice: treatmentDiscountedPrice,
      });
    }
  }
});
