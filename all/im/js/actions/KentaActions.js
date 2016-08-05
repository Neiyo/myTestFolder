/*
 * Copyright (c) 2015, Kenta, Inc.
 * All rights reserved.
 *
 * KentaAction global
 */

var KentaDispatcher = require('../dispatcher/KentaDispatcher');

var KentaActions = {
		
	changeLoginStatus: function(boolStatus) {
		KentaDispatcher.dispatch({
			actionType: "LOGIN",
			isLogin: boolStatus
		});
	}
	
};

module.exports = KentaActions;