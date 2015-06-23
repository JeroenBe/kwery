Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
})

Router.route('/', function () {
  this.render('home')
})

Router.route('event/:id', function (){
	this.render('event', {data: {id: this.params.id}})
})