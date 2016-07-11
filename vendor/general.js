define('general', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var ember = _ember['default'];
  var $ = ember.$;

  ember.Messaging = {
  	context: {},
  	getListeners: function(eventName) {
  		var listeners = this.context[eventName];
  		if(!listeners)
  			listeners = this.context[eventName] = {};
  		return listeners;
  	},
  	setListener: function(obj, eventName, func) {
  		this.getListeners(eventName)[obj.elementId] = { obj: obj, func: func };
  	},
  	getListener: function(obj, eventName) {
  		return this.getListeners(eventName)[obj.elementId];
  	},
  	removeListener: function(obj, eventName) {
  		var listeners = this.context[eventName];
  		if(listeners)
  			delete listeners[obj.elementId];
   	},
  	notify: function() {
  		var args = $.makeArray(arguments);
  		var eventName = args.splice(0, 1);
  		var listeners = this.getListeners(eventName);
  		for(var name in listeners) {
  			var pair = listeners[name];
  			pair.func.apply(pair.obj, args);
  		}
  	}
  };

	exports['default'] = {

		toPackageTree: function(units) { 
			var tree = { funcs: [], packs: [] };
			var ctx = this;
			units.forEach(function(unit){ctx.addToTree(unit, tree)});
			return tree;
		},
		addToTree: function(unit, tree) {
			var packs = unit.get('pack').split('.');
			var cur = tree;
			for(var i = 0; i < packs.length; i++) {
				var pack = this.getPack(cur, packs[i]);
				if(!pack) {
					pack = { name: packs[i], type: 'pack', path: packs.slice(0, i+1).join('.'), funcs: [], packs: [] };
					cur.packs.push(pack);
				}
				cur = pack;
			}
			this.removeFunc(cur, unit.get('name'));
			cur.funcs.push(unit);
		},
		getPack: function(tree, packName) {
			for(var i = 0; i < tree.packs.length; i++)
				if(tree.packs[i].name === packName)
					return tree.packs[i];
			return null;
		},
		removeFunc: function(tree, funcName) {
			for(var i = 0; i < tree.funcs.length; i++)
				if(tree.funcs[i].name === funcName)
					return tree.funcs.splice(i, 1);
			return null;
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