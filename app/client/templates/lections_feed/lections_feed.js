/*****************************************************************************/
/* LectionsFeed: Event Handlers */
/*****************************************************************************/
Template.LectionsFeed.events({
});

/*****************************************************************************/
/* LectionsFeed: Helpers */
/*****************************************************************************/
Template.LectionsFeed.helpers({
	'lection':function(){
		return Lections.find({}, {sort:{date: -1}});
	}
});

/*****************************************************************************/
/* LectionsFeed: Lifecycle Hooks */
/*****************************************************************************/
Template.LectionsFeed.onCreated(function () {
});

Template.LectionsFeed.onRendered(function () {
});

Template.LectionsFeed.onDestroyed(function () {
});
