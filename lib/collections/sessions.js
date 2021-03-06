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
  insertNewSession: function (newSession) {
    check(newSession, {
      title: String,
      start: Date,
      end: Date,
      patient_id:String,
      treatment_id:String
    });
    var id = PSessions.insert({
      title: newSession.title,
      start: newSession.start,
      end: newSession.end,
      patient_id: newSession.patient_id,
      treatment_id: newSession.treatment_id,
      userId: 'luizhp'
    });
    return;
  },
  removeSession: function (sessionID) {
    PSessions.delete({
      _id: sessionID
    });
    return;
  }
});