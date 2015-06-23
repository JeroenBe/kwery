var sync = Meteor.wrapAsync(FBGraph.get)

Meteor.methods({
	'getEvents': function(){
		var facebook = Meteor.users.findOne(this.userId).services.facebook
		var params = {access_token: facebook.accessToken}

		//First page
		var result = sync((facebook.id + '/events'), params)

		var data = result.data
		var paging = result.paging

		//Following pages
		while(paging){
			var tempRes = HTTP.get(paging.next)
			data  = data.concat(tempRes.data.data)
			paging = tempRes.paging
		}

		return data
	}
})