layui.use('layer', function() { //独立版的layer无需执行这一句
	var $ = layui.jquery,
		layer = layui.layer; //独立版的layer无需执行这一句
	//触发事件
	var active = {
		//					setTop: function() {
		//						var that = this;
		//						//多窗口模式，层叠置顶
		//						layer.open({
		//							type: 2, //此处以iframe举例
		//							area: ['390px', '260px'],
		//							shade: 0,
		//							maxmin: true,
		//							offset: [ //为了演示，随机坐标
		//								Math.random() * ($(window).height() - 300), Math.random() * ($(window).width() - 390)
		//							],
		//							yes: function() {
		//								$(that).click();
		//							},
		//							zIndex: layer.zIndex, //重点1
		//							success: function(layero) {
		//								layer.setTop(layero); //重点2
		//							}
		//						});
		//					},
		offset: function(othis) {
			var type = othis.data('type'),
				text = othis.text();
			var img = '<img src="layui/images//bank-temp-cn@2x.png "  width:"600px" height="800px"/>'
			layer.open({
				title: '',
				type: 1,
				offset: type, //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
				id: 'layerDemos' + type, //防止重复弹出
				content: '<div>' + img + '</div>',
				btnAlign: 'c', //按钮居中
				shade: 0, //不显示遮罩
				yes: function() {
					layer.closeAll();
				}
			});
		}
	};
	$('#layerDemos .layui-btn').on('click', function() {
		var othis = $(this),
			method = othis.data('method');
		active[method] ? active[method].call(this, othis) : '';
	});
});


layui.use('layer', function() { //独立版的layer无需执行这一句
				var $ = layui.jquery,
					layer = layui.layer; //独立版的layer无需执行这一句

				//触发事件
				var active = {
					setTop: function() {
						var that = this;
						//多窗口模式，层叠置顶
						layer.open({
							type: 2 //此处以iframe举例
								,

							area: ['390px', '260px'],
							shade: 0,
							maxmin: true,
							offset: [ //为了演示，随机坐标
								Math.random() * ($(window).height() - 300), Math.random() * ($(window).width() - 390)
							],

							yes: function() {
								$(that).click();
							},

							zIndex: layer.zIndex //重点1
								,
							success: function(layero) {
								layer.setTop(layero); //重点2
							}
						});
					},
					offset: function(othis) {
						var type = othis.data('type'),
							text = othis.text();
						var img = '<img src="layui/images/appDownloadIcon.png " width:"200px" height="200px"/><div style="width:90% ; margin:0 auto; margin-top:30px" ><li class="layui-icon layui-icon-login-wechat" >扫码立即生成专业简历</li></div><div style="width: 45%; margin: 0 auto; margin-top:30px"><a style="text-decoration: underline;" href=""> 其他注册方式</a> </div>'

						layer.open({
							title: '',
							type: 1,
							offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
								,
							id: 'layerDemo' + type //防止重复弹出
								,
							content: '<div style="padding: 50px 80px;">' + img + '</div>',

							btnAlign: 'c' //按钮居中
								,
							shade: 0 //不显示遮罩
								,
							yes: function() {
								layer.closeAll();
							}
						});
					}
				};

				$('#layerDemo .layui-btn').on('click', function() {
					var othis = $(this),
						method = othis.data('method');
					active[method] ? active[method].call(this, othis) : '';
				});

			});