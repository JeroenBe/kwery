Template.event.onCreated(function(){
	this.eventObject = new ReactiveVar()
})


Template.event.helpers({
	eventInfo: function(){
		var tem = Template.instance()
		Meteor.call('getEventInfo', this.id, function(er, res){
			if(res){
				tem.eventObject.set(res)
			}else{
				console.log(er)
			}
		})
	},
	eventObject: function(){
		console.log(Template.instance().eventObject.get())
		return Template.instance().eventObject.get()
	}
})