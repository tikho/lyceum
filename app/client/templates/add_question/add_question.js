/*****************************************************************************/
/* AddQuestion: Event Handlers */
/*****************************************************************************/
Template.AddQuestion.events({
	'submit form':function(){
		Questions.insert({
			questionText: $('[name="question"]').val(),
			lectionId: this._id
		});
		$('[name="question"]').val('');
		return false;
	}
});

/*****************************************************************************/
/* AddQuestion: Helpers */
/*****************************************************************************/
Template.AddQuestion.helpers({
});

/*****************************************************************************/
/* AddQuestion: Lifecycle Hooks */
/*****************************************************************************/
Template.AddQuestion.onCreated(function () {
});

Template.AddQuestion.onRendered(function () {
});

Template.AddQuestion.onDestroyed(function () {
});
