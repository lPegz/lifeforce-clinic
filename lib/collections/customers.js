//Define the new collection
Customers = new Mongo.Collection('customers');

//The contract of insert
Customers.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  },
  remove: function (userId, doc) {
    return true;
  }
});

// Methods to be accessed by the client side
Meteor.methods({
  insertCustomer: function (newCustomer) {
    Customers.insert({
      name: newCustomer.name,
      phone: newCustomer.phone,
      userId: 'luizhp'
    });
  },
  removeCustomer: function (customerID) {
    Customers.remove({_id:customerID});
  }
});
