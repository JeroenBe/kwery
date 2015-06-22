Template.header.events({
	"click #login": function(event,template){
		Meteor.loginWithFacebook({loginStyle: 'popup',  requestPermissions: ['user_location']}, 
			function(err, result){
				if(err){
					console.log(err)
				}else{
					alert("succes");
					console.log(Meteor.users.findOne())
				}
		})
	}
})