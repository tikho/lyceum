/*****************************************************************************/
/* PeopleCounter: Event Handlers */
/*****************************************************************************/
Template.PeopleCounter.events({
	'click .addOne':function(){
		Lections.update({_id:this._id}, {$inc:{peopleCount:1}});
		Session.setAuth({lectionId: this._id, comming: "YES"});
	},

	'click .notComming':function(){
		Lections.update({_id:this._id}, {$inc:{notComing:1}});
		Session.setAuth({lectionId: this._id, comming: "NO"});
	}
});

/*****************************************************************************/
/* PeopleCounter: Helpers */
/*****************************************************************************/
Template.PeopleCounter.helpers({
	'comeButtonPressed': function(){
		// var sessionLection = Session.get('lectionId', 'comming');
		// var lectionId = Session.get('lectionId');
		// var comming = Session.get('comming');
		// console.log("SessionLection:" + sessionLection);
		// console.log("this._id:" + this._id);
		// console.log("lectionId:" + lectionId);
		// console.log("comming:" + comming);
		if (Session.get('lectionId') == this._id){
			if (Session.get('comming')){
				return 'disabled';
			} else{
				return '';
			}
		}
	},

	'areYouComming': function(){
		if (Session.get('lectionId') == this._id){
			if (Session.get('comming')){
				return 'decided';
			} else{
				return 'noDecision';
			}
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
