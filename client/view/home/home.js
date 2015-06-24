Template.home.onCreated(function (){
	this.fbevents = new ReactiveVar()
	var self = this
	var fetch = function(){
		if(Meteor.userId()){
			Meteor.call('getEvents', function(e, r){
				if(e){
					console.log(e)
				}else{
					self.fbevents.set(r)
				}
			})
		}
	}

	fetch()

	setInterval(fetch , 1000)
})

Template.home.helpers({
	events: function(){
		return Template.instance().fbevents.get()
	}
})