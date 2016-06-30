Template.customerItemRow.events({
  'click .remove-customer': function (e) {
    e.preventDefault();
    var customerName = $(e.target).parent().parent().parent().find(
        '.customer-name').text(),
      customerToDelete = Customers.findOne({
        name: customerName
      }, {
        _id: 1,
        name: 0
      });
    console.log(customerName, customerToDelete);
    Meteor.call('removeCustomer', customerToDelete._id);
  }
});
