Template.footer.events({
	'click #logout': function (event, tem){
		event.preventDefault()
		Meteor.logout()
		Router.go('/')
	}

})