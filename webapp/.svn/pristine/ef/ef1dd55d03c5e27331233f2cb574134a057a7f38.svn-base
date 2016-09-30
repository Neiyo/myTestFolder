 (function($){
		$.fn.checkFrom = function(options){
			var root = this;//将当前应用对象存入root
			var isok = false; //控制表单提交开关
			var pwd1,pwd2;
			var isCheckPwd = false;
			var defaults = {
				//提示信息
				success:'', //验证成功时的提示信息，默认为空
				required:'不能为空',
				num: '请填写数字',
				mobile: '手机号码格式有误',
				pwdequal: '两次密码不一致',
				email: '邮箱地址格式有误',
				chineseChar:'不能输入中文字符',
				//正则
				reg_email: /^\w+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/i,  //验证邮箱
				reg_num: /^\d+$/,
				reg_mobile: /^1[3458]{1}[0-9]{9}$/,
				reg_chineseChar:/[\u4E00-\u9FA5]/g,
			};
			if(options){ $.extend(defaults, options);}
			//获取（文本框，密码框），当失去焦点时，对其进行数据验证
			$(":text,:password",root).each(function(){
				$(this).blur(function(){
					var _validate = $(this).attr("check");//获取文本验证信息
					if(_validate){
						var arr = _validate.split(" ");
						for(var i=0;i<arr.length;i++){
							if(!check($(this),arr[i],$(this).val())){
								return false;
							}else{
								continue;
							}
						};
					};
				})
			});
			//提交时验证表单
			function _onSubmit(){
				isok=true;
				$(":text,:password",root).each(function(){
					var _validate = $(this).attr("check");
					if (_validate) {
					  var arr = _validate.split(' ');
					  for (var i = 0; i < arr.length; i++) {
						if (!check($(this), arr[i], $(this).val())) {
						  isok = false; //验证不通过阻止表单提交，开关false
						  return; //跳出
						}
					  }
					}
				})
				if(isCheckPwd){
					if(!pwdEqual(pwd1, pwd2)){
						isok = false;
					}
				}
			}
			
			//判断当前对象是否为表单，如果是表单，则提交时要进行验证
			if (root.is("form")) {
			  root.submit(function () {
				_onSubmit();
				return isok;
			  })
			}
			//验证方法
			function check(obj, _match, _val){
				//根据验证情况，显示相应提示信息，返回相应的值
				switch (_match){
					case'required':
					return _val?showMsg(obj,defaults.success,true):showMsg(obj,defaults.required,false);
					
					case'num':
					return chk(_val,defaults.reg_num)?showMsg(obj,defaults.success,true):showMsg(obj,defaults.num,false);
					
					case'mobile':
					return chk(_val,defaults.reg_mobile)?showMsg(obj,defaults.success,true):showMsg(obj,defaults.mobile,false);
					
					case'chineseChar':
					return chk(_val,defaults.reg_chineseChar)?showMsg(obj,defaults.success,true):showMsg(obj,defaults.chineseChar,false);
					
					case'pwd1':
					pwd1 = _val;//实时获取存储pwd1值
					return true;
					
					case'pwd2':
					pwd2 = _val;//实时获取存储pwd2值
					isCheckPwd = true; //开启两次密码是否一致验证
					return pwdEqual(_val,pwd1)?showMsg(obj,defaults.success,true):showMsg(obj,defaults.pwdequal,false);
					
					default:true;
				}
			};
			//正则匹配(返回bool值)
			var chk = function(val,reg){
				return reg.test(val);
			};
			//判断两次密码是否一致
			var pwdEqual = function(val1,val2){
				return val1 == val2 ? true:false;
			}
			function showMsg(obj,msg,mark){
				obj.next(".error").remove();
				var _html = '';
				if(mark){
					obj.parent(".form-group").removeClass("has-error");
					obj.parent(".form-group").addClass("has-success");
					_html = '';
				}else{
					obj.parent(".form-group").removeClass("has-success");
					obj.parent(".form-group").addClass("has-error");
					_html = "<label class='error'>"+msg+"</label>"
				}
				obj.after(_html)
				return mark;			
			}
		};
	 })(jQuery)