define('general', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var ember = _ember['default'];

  ember.Messaging = {
  	context: {},
  	addListener: function(name, eventName, func) {

  	}
  };

	exports['default'] = {

		toPackageTree: function(units) { 
			var tree = {};
			var ctx = this;
			units.forEach(function(unit){ctx.addToTree(unit, tree)});
			return tree;
		},
		addToTree: function(unit, tree) {
			var packs = unit.get('pack').split('.');
			var cur = tree;
			for(var i = 0; i < packs.length; i++) {
				if(!cur[packs[i]])
					cur[packs[i]] = {};
				cur = cur[packs[i]];
			}
			cur[unit.get('name')] = unit;
		}

	// 	toPackageTree: function(units) {
	// 		var tree = ember.Object.create();
	// 		var ctx = this;
	// 		units.forEach(function(unit){ctx.addToTree(unit, tree)});
	// 		return tree;
	// 	},
	// 	addToTree: function(unit, tree) {
	// 		var packs = unit.get('pack').split('.');
	// 		var cur = tree;
	// 		for(var i = 0; i < packs.length; i++) {
	// 			if(!cur.get(packs[i]))
	// 				cur.set(packs[i], ember.Object.create());
	// 			cur = cur.get(packs[i]);
	// 		}
	// 		cur.set(unit.get('name'), unit);
	// 	}

	}
});