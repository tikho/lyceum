/*****************************************************************************/
/* PeopleCounter: Event Handlers */
/*****************************************************************************/
Template.PeopleCounter.events({
	'click .addOne':function(){
		Lections.update({_id:this._id}, {$inc:{peopleCount :1}});
		Session.setAuth({comming: true });
	}
});

/*****************************************************************************/
/* PeopleCounter: Helpers */
/*****************************************************************************/
Template.PeopleCounter.helpers({
	'comeButtonPressed': function(){
		if (Session.get('comming')){
			return 'disabled';
		} else{
			return '';
		}
	},

	'youAreComming': function(){
		if (Session.get('comming')){
			return 'youAreComming';
		} else{
			return 'youAreNotCommingYet';
		}
	}
});

/*****************************************************************************/
/* PeopleCounter: Lifecycle Hooks */
/*****************************************************************************/
Template.PeopleCounter.onCreated(function () {
});

Template.PeopleCounter.onRendered(function () {
});

Template.PeopleCounter.onDestroyed(function () {
});
