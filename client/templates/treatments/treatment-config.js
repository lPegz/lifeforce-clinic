Template.treatmentAdd.onRendered(function () {
  //load combo with set of values
  var enumType = ['RPG', 'FISIO', 'PILATES', 'ESTETICA'];

  //mask for price
  $('.price').inputmask({
    'mask': 'R$ 999[9,99]'
  });
});

Template.treatmentAdd.events({
  'click .save-treatment': function (e) {
    e.preventDefault();
    var treatmentDescription = $('.description').val(),
      treatmentType = $('option:selected').val(),
      treatmentBasePrice = $('.base-price').val(),
      treatmentDiscountedPrice = $('.disc-price').val();
    if (_.isEmpty(treatmentDescription) || _.isNull(treatmentDescription) ||
      _.isUndefined(
        treatmentDescription)) {
      sAlert.error('Insira o nome do tratamento!');
      $('#').focus();
    } else {
      var newTreatment = {
        name: treatmentDescription,
        type: treatmentType,
        basePrice: treatmentBasePrice,
        discountedPrice: treatmentDiscountedPrice
      };
      Meteor.call('insertTreatment', newTreatment, function (error) {
        if (error) {
          return sAlert.error(error.reason);
        } else {
          return;
        }
      });
    }
  }
});

Template.treatmentList.helpers({
  treatmentFetch: function () {
    Meteor.subscribe('treatments.public');
    return Treatments.find();
  }
});

Template.treatmentItem.events({
  "click .edit-treatment": function (e) {
    e.preventDefault();
    var treatmentName = $(e.target).parent().parent().next().find(
        '.treatment-name').text(),
      treatmentToEdit = Treatments.findOne({
        name: treatmentName
      }, {
        _id: 1,
        name: 0
      });
    //Edit values
  },
  "click .remove-treatment": function (e) {
    e.preventDefault();
    var treatmentName = $(e.target).parent().parent().next().find(
        '.treatment-name').text(),
      treatmentToDelete = Treatments.findOne({
        name: treatmentName
      }, {
        _id: 1,
        name: 0
      });
    Treatments.remove({
      _id: treatmentToDelete._id
    });
  }
});
