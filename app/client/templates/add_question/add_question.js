/*****************************************************************************/
/* AddQuestion: Event Handlers */
/*****************************************************************************/
Template.AddQuestion.events({
	'click .postQuestion':function(){
		var question = $('[name="question"]').val();
		if (question){
			Questions.insert({
				questionText: question,
				lectionId: this._id,
				date: new Date()
			});
			$('[name="question"]').val('');
		}
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
