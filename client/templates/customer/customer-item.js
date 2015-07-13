Template.customerItem.events({
  'click .remove-customer' : function (e) {
    var customerName = $(e.target).find('.customer-name').val();
    console.log($(e.target).siblings('.customer-name'));
    console.log(Customers.findOne({name : customerName}));
    // Customers.remove({_id: idToRemove });
  }
});
