Template.listCustomers.helpers({
  customersListHelper: function () {
    return Customers.find();
  }
});

Template.listCustomers.onRendered(function () {
});
