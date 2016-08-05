/*
 * Copyright (c) 2015, Kenta, Inc.
 * All rights reserved.
 *
 * Kenta App of React
 */

var React = require('react');
var KentaStore = require('../stores/KentaStore');
var LoginComponent = require('./LoginComponent.react');

function getIsLogin() {
	return {
		isLogin: KentaStore.getIsLogin()
	};
}

var KentaApp = React.createClass({
	
	getInitialState: function() {
		return getIsLogin();
	},
	
	componentDidMount: function() {
		KentaStore.addChangeListener( this._onChange );
	},

	componentWillUnmount: function() {
		KentaStore.removeChangeListener( this._onChange );
	},
	
	render: function() {
		if( this.state.isLogin < 1 ) {
			$('#page-index').addClass('page-login');
			return (
				<LoginComponent />
			);
		} else {
			$('#page-index').removeClass('page-login');
			return (
				<div>已经登陆。。。【首页组件模块】</div>
			);
		}
	},
	
	_onChange: function() {
		this.setState(getIsLogin());
	}
	
});

module.exports = KentaApp;