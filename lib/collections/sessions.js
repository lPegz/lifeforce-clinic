// Declare new Collection
PSessions = new Mongo.Collection('sessions');

//Make the contract to always publish with an userId
PSessions.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  }
});

// Methods to be called by the client
Meteor.methods({
  insertSession: function (newSession) {
    var id = PSessions.insert({
      dateTime: newSession.dateTime,
      patient_id: newSession.patient_id,
      treatment_id: newSession.treatment_id,
      userId: 'luizhp'
    });
    return;
  },
  getSessions: function () {
    return PSessions.find({}).fetch();
  },
  removeSession: function (sessionID) {
    PSessions.delete({
      _id: sessionID
    });
    return;
  }
});
