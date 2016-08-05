/*
 * Copyright (c) 2015, Kenta, Inc.
 * All rights reserved.
 *
 * LoginComponent of React
 */

var React = require('react');
var KentaActions = require('../actions/KentaActions');

var LoginComponent = React.createClass({
	
	handleClick: function(e) {
		e.preventDefault();
		
		//var user_name = React.findDOMNode(this.refs.user_name).value.trim();
		//var password  = React.findDOMNode(this.refs.password).value.trim();
		var user_name = this.refs.user_name.getDOMNode().value.trim();
		var password  = this.refs.password.getDOMNode().value.trim();
		
		if( user_name == '' ) {
			$.alert( '账号空白' );
			return;
		}
		if( password == '' ) {
			$.alert( '密碼必須' );
			return;
		}
		$.ajax({
			url: 'https://www.kenta.com.cn/api/user.php?act=login',
			dataType: 'json',
			type: 'POST',
			data: {user_name: user_name, password: password},
			success: function(data) {
				if( data.status > 0 ) {
					//this.setState({data: data});
					KentaActions.changeLoginStatus( true );
				} else {
					$.alert( data.msg );
				}
			}.bind(this),
			error: function(xhr, status, err) {
				$.alert( 'Ajax error!' );
			}.bind(this)
		});
		return;
	},
	
	render: function() {
		return (
			<div className="content">
				<div className="content-block">
					<div className="login-logo" />
				</div>
				<div className="list-block">
					<ul>
						<li>
							<div className="item-content">
								<div className="item-media"><i className="icon icon-form-name" /></div>
								<div className="item-inner">
									<div className="item-title label">姓名</div>
									<div className="item-input">
										<input type="text" placeholder="Your name" ref="user_name" />
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="item-content">
								<div className="item-media"><i className="icon icon-form-password" /></div>
								<div className="item-inner">
									<div className="item-title label">密码</div>
									<div className="item-input">
										<input type="password" placeholder="Password" ref="password" />
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="item-content">
								<div className="item-media"><i className="icon icon-form-toggle" /></div>
								<div className="item-inner">
									<div className="item-title label">記住密碼</div>
									<div className="item-input">
										<label className="label-switch">
											<input type="checkbox" />
											<div className="checkbox" />
										</label>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="content-block">
					<div className="row">
						<div className="col-50"><a className="button button-big button-fill" href="#">忘記密碼</a></div>
						<div className="col-50"><a className="button button-big button-fill button-success" href="#" onClick={this.handleClick}>登入</a></div>
					</div>
				</div>
			</div>
		);
	}
	
});

module.exports = LoginComponent;