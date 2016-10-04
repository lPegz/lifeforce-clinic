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


let EventsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this event.'
  },
  'start': {
    type: String,
    label: 'When this event will start.'
  },
  'end': {
    type: String,
    label: 'When this event will end.'
  }
});

PSessions.attachSchema( EventsSchema );
