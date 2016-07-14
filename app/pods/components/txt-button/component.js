import Ember from 'ember';

export default Ember.Component.extend({
	setup: Ember.on('init', function() {
		if(this.cls)
			this.get('classNames').addObjects(this.cls.split('.'));
	}),
	tagName: 'span',
	classNames: [ 'txt-button', 'active' ]
});
