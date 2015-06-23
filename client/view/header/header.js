Template.header.events({
	"click #login": function(event,template){
		Meteor.loginWithFacebook({loginStyle: 'popup',  requestPermissions: ['user_events']}, 
			function(err, result){
				if(err){
					console.log(err)
				}
		})
	}
})

Template.header.helpers({
	profilePic: function (){
		// Meteor.call('getProfilePic', Meteor.userId() function(er, res){

		// })
	}
})