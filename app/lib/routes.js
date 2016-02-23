Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/lection/:_id',{
  name: 'lection',
  data: function(){
  	return Lections.findOne({_id: this.params._id});
  }
});