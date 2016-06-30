Template.treatmentTableList.helpers({
  treatmentFetch: function () {
    Meteor.subscribe('treatments.public');
    return Treatments.find();
  }
});


Template.treatmentItemRow.events({
  "click .edit-treatment": function (e) {
    e.preventDefault();
    var treatmentName = $(e.target).parent().parent().parent().next().find(
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
    var treatmentName = $(e.target).parent().parent().parent().find(
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
