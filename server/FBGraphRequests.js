var FBGraphSyncGet = Meteor.wrapAsync(FBGraph.get)


Meteor.methods({
	'getEvents': function(){
		var facebook = Meteor.users.findOne(this.userId).services.facebook
		var params = {access_token: facebook.accessToken}

		//First page
		var result = FBGraphSyncGet((facebook.id + '/events'), params)

		var data = result.data
		var paging = result.paging

		//Following pages
		while(paging){
			var tempRes = HTTP.get(paging.next)
			data  = data.concat(tempRes.data.data)
			paging = tempRes.paging
		}

		return data
	},
	'getEventInfo': function(eventId){
		var facebook = Meteor.users.findOne(this.userId).services.facebook
		var params = {access_token: facebook.accessToken, fields: 'cover,name,place'}
		
		var result = FBGraphSyncGet(eventId, params)
		
		params = {access_token: facebook.accessToken}
		if(result.id){
			var attendees = FBGraphSyncGet(eventId + '/attending', params)
			console.log(attendees)
			result.attendees = attendees
		}

		return result
	}
})