Template.home.onCreated(function (){
	this.fbevents = new ReactiveVar()
	var self = this

	if(Meteor.userId()){
		Meteor.call('getEvents', function(e, r){
			if(e){
				console.log(e)
			}else{
				self.fbevents.set(r.data)
			}
		})
	}
})


Template.home.helpers({
	events: function(){
		return Template.instance().fbevents.get()
	}
})