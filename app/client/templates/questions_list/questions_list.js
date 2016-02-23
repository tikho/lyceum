/*****************************************************************************/
/* QuestionsList: Event Handlers */
/*****************************************************************************/
Template.QuestionsList.events({
});

/*****************************************************************************/
/* QuestionsList: Helpers */
/*****************************************************************************/
Template.QuestionsList.helpers({
	'question':function(){
		return Questions.find({lectionId:this._id}, {sort:{date: -1}});
	}
});

/*****************************************************************************/
/* QuestionsList: Lifecycle Hooks */
/*****************************************************************************/
Template.QuestionsList.onCreated(function () {
});

Template.QuestionsList.onRendered(function () {
});

Template.QuestionsList.onDestroyed(function () {
});
