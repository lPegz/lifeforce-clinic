Customers = new Mongo.Collection('customers');
Treatments = new Mongo.Collection('treatments');
Sessions = new Mongo.Collection('sessions');

Customers.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  }
});

Meteor.methods({
  insertCustomer: function (newCustomer) {
    Customers.insert({
      name: newCustomer.name,
      phone: newCustomer.phone,
      userId: 'luizhp'
    });
  },
  insertTreatment: function (newTreatment) {
    Treatments.insert({
      name: newTreatment.name,
      type: newTreatment.type,
      basePrice: newTreatment.basePrice,
      discountedPrice: newTreatment.discountedPrice,
      userId: 'luizhp'
    });
  }
});

Treatments.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  }
});

Sessions.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  }
});
