/*
 * Copyright (c) 2015, Kenta, Inc.
 * All rights reserved.
 *
 * KentaStore global
 */

var KentaDispatcher = require('../dispatcher/KentaDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _isLogin = false;
var _kentaDatas = {};

var KentaStore = assign({}, EventEmitter.prototype, {
	
	getIsLogin: function() {
		return _isLogin;
	},
	
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	
});

// Register callback to handle all updates
KentaDispatcher.register(function(action) {
	switch(action.actionType) {
		// 登陆
		case 'LOGIN':
			_isLogin = action.isLogin;
			KentaStore.emitChange();
			break;
		// 默认
		default:
			// no op
	}
});

module.exports = KentaStore;
