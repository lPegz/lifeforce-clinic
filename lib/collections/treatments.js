// Declare new Collection
Treatments = new Mongo.Collection('treatments');

//Make the contract to always publish with an userId
Treatments.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  }
});
// Methods to be called by the client
Meteor.methods({
  insertTreatment: function (newTreatment) {
    Treatments.insert({
      name: newTreatment.name,
      type: newTreatment.type,
      basePrice: newTreatment.basePrice,
      discountedPrice: newTreatment.discountedPrice,
      userId: 'luizhp'
    });
  },
  removeTreatment : function (treatmentID) {
    Treatments.remove({_id: treatmentID});
  }
});
