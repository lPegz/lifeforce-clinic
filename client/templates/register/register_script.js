Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        console.log(Meteor.users.find().fetch());
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
});