Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
})

Router.route('/', function () {
  this.render('home')
})

Router.route('event/:id', function (){
	if(Meteor.userId()){
		this.render('event', {data: {id: this.params.id}})
	}else{
		this.render('needToBeLoggedIn')
	}
})