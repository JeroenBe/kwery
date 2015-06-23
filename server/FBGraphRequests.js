var sync = Meteor.wrapAsync(FBGraph.get)

Meteor.methods({
	'getEvents': function(){
		var facebook = Meteor.users.findOne(this.userId).services.facebook
		var params = {access_token: facebook.accessToken}

		var result = sync((facebook.id + '/events'), params)
		console.log(result)
		return result
	}
})