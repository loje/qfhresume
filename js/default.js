(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this); 


$(document).ready(function () {
	$('nav#menu').mmenu();
	$('nav#indexNav').mmenu();

	setTimeout(function(){
		$(".indexnav").removeAttr("style");
	},500);

	var mySwiper = new Swiper ('.swiper-home', {
		direction: 'horizontal',
		loop: true,
		autoplay:2000,
		// 如果需要分页器
		pagination: '.swiper-pagination'
	});

	$(".szptcollege .tab-pane .media .media-left .img").height($(".szptcollege .tab-pane .media .media-body").height());
	$(".szptcollege .tab-pane .media .media-left .img").width($(".szptcollege .tab-pane .media .media-body").height());

	$("a.searchbar-logo").click(function(){
		$(".nav-searchbar").removeClass("opacity");
		$(".nav-searchbar").removeAttr("style");
	});


	$(".searchbar .form-group .input-group .input-group-addon").click(function(){
		$(".nav-searchbar").addClass("opacity");
		setTimeout(function(){
			$(".nav-searchbar").attr("style","display:none;");
		},250);
	});

	$("li a").click(function(){
		setTimeout(function(){
			$(".cop-info").attr("style","opacity: 1;");
		},100);	
		console.log("赋予高度");
	});

	$(".cop-side .thumbnail .img").height($(".cop-side .thumbnail .img").width());
	$(window).resize(function(){
		$(".cop-side .thumbnail .img").height($(".cop-side .thumbnail .img").width());
	})

	$(".tree-memu").mouseover(function(){
		$(this).find(".ul-hover").removeAttr("style");
	});
	$(".tree-memu").mouseleave(function(){
		$(this).find(".ul-hover").attr("style","display:none;");
	});


	$(".local-college").mouseover(function(){
		$(".city-list-page").attr("style","display:none;");
		$(".college-list-page").removeAttr("style");
		$(".college-list .media .media-left .img").height($(".college-list .media .media-body").height());
		$(".college-list .media .media-left .img").width($(".college-list .media .media-body").height());
	});
	$(".college-list-page").mouseleave(function(){
		$(".college-list-page").attr("style","display:none;");
	});

	$(".local-area").mouseover(function(){
		$(".college-list-page").attr("style","display:none;");
		$(".city-list-page").removeAttr("style");
		$(".city-list-page .container .row .the-city a.thumbnail").height($(".city-list-page .container .row .the-city a.thumbnail").width());
	});
	$(".city-list-page").mouseleave(function(){
		$(".city-list-page").attr("style","display:none;");
	});

	$(".search-card .media .media-left .img").height($(".search-card .media .media-body").height());
	$(".search-card .media .media-left .img").width($(".search-card .media .media-body").height());

	//异步加载职位
	$(".loadingmore").click(function(){
		//$(this).text("加载中...");

		var mor = "";

		//setTimeout(function(){
		$.ajax({
            url: 'data.php',
            dataType: 'json',
            success: function(data) {
            	console.log(data);
				var jobhtml = $(".jobhtml").html();
				var jobhtml1 = $(".addjob").html();
				var rep = "";
				if(data == null){
					console.log(data);
				}else{
					rep += jobhtml.replace("{0}","../qfhresume");
					rep = rep.replace("{1}","img/bilibili-logo.jpg");
					rep = rep.replace("{2}",data.job_name);
					rep = rep.replace("{3}",data.job_money);
					rep = rep.replace("{4}",data.area);
					rep = rep.replace("{5}",data.company);
				}

                $(".addjob").append(rep);
            }
			//$(".loadingmore").text("加载更多");
		});
		//},2000);
	});


	$(".recruit-pc-left .thumbnail .img").width($(".recruit-pc-left .thumbnail .caption").width());
	$(".recruit-pc-left .thumbnail .img").height($(".recruit-pc-left .thumbnail .caption").width());
	$(window).resize(function(){
		$(".recruit-pc-left .thumbnail .img").width($(".recruit-pc-left .thumbnail .caption").width());
		$(".recruit-pc-left .thumbnail .img").height($(".recruit-pc-left .thumbnail .caption").width());
	});


	$(".job-search-result .navbar .container-fluid .collapse .nav .dropdown .dropdown-menu li a").click(function(){
		$(this).parent().parent().prev().html($(this).text() + " <span class='caret'></span>");
	});

	$(".card-list a.media .media-right .img").width($(".card-list a.media .media-body").height());
	$(".card-list a.media .media-right .img").height($(".card-list a.media .media-body").height());

	$(".search-tools .screen ul.nav li.dropdown a.dropdown-toggle").click(function(){
		$(".darkbg").removeAttr("style");

		$(".search-tools .screen ul.nav li.dropdown a.dropdown-toggle").removeAttr("style");
		$(this).attr("style","font-weight:700;");

		var hh =  parseInt($(".recruit-navbar").height()) + parseInt($(".search-page .container .search-tools").height() + 20);
		$(".darkbg").attr("style","top:"+ hh + "px");

		if($(this).parent().hasClass("open") == true ){
			$(".darkbg").attr("style","display:none;");
			$(this).removeAttr("style");
		}
	});
	$(".darkbg").click(function(){
		if($(".search-tools .screen ul.nav li.dropdown").hasClass("open") == true ){
			$(".darkbg").attr("style","display:none;");
		}
	});
	$(".recruit-navbar").click(function(){
		$(".darkbg").attr("style","display:none;");
	});
	$(".nav-searchbar").click(function(){
		$(".darkbg").attr("style","display:none;");
	});
	$(".dropdown-menu").click(function(){
		$(".darkbg").attr("style","display:none;");
	});



	$(".search-tools .screen ul.nav li.dropdown ul.dropdown-menu li a").click(function(){
		//alert($(this).html());
		//alert($(this).parent().prev().html());
		//alert($(this).parent().parent().prev().html());
		$(this).parent().parent().prev().html($(this).html() + " <span class='caret'></span>");
	});

	$(".login-box").height($(window).height());

	$(".login-pc").click(function(){
		$(".loginpcmodal").removeAttr("style");
	});

	$(".jqcolse").click(function(){
		setTimeout(function(){
			$(".loginpcmodal").attr("style","display:none;");
			$(".recruit-navbar-pc").removeClass("homepcbur");
			$(".home-banner").removeClass("homepcbur");
			$(".home-recruit-pc").removeClass("homepcbur");
		},500);
	});


	$('#loginpcModal').on('hidden.bs.modal', function (e) {
		$(".loginpcmodal").attr("style","display:none;");
		$(".recruit-navbar-pc").removeClass("homepcbur");
		$(".home-banner").removeClass("homepcbur");
		$(".home-recruit-pc").removeClass("homepcbur");
	})


	$(".login-pc").click(function(){
		$(".recruit-navbar-pc").addClass("homepcbur");
		$(".home-banner").addClass("homepcbur");
		$(".home-recruit-pc").addClass("homepcbur");
	});

	$(".setupbtn").click(function(){
		$(".pctowechat").attr("style","height:185px;");
		$(".setupbtn").attr("style","opacity:0.5");
	});


	//校招企业名录
	$(".company-logo").height($(".company-logo").width());
	$(".cop-list-more a.thumbnail").height($(".cop-list-more a.thumbnail").width());
	$(window).resize(function(){
		$(".cop-list-more a.thumbnail").height($(".cop-list-more a.thumbnail").width());
		$(".company-logo").height($(".company-logo").width());
	});

	$(".cop-mobile-list a.cop-list .media .media-left .img").height($(".cop-mobile-list a.cop-list .media .media-left").height() + 20);
	$(".cop-mobile-list a.cop-list .media .media-left .img").width($(".cop-mobile-list a.cop-list .media .media-left").height());


	$("i.mr_del").click(function(){
		$(".mr_remind").remove();
	});
	$(".btn-account").click(function(){
		$(".login-input").removeAttr("style");
		$(".login-wechat").attr("style","display:none;")
	});

	$(".the-user").mouseover(function(){
		$(".user-profile").removeAttr("style");
	});
	$(".the-user").mouseleave(function(){
		$(".user-profile").attr("style","display:none;");
		$(".user-btn").attr("")
	});

	$("a.qrcode-a").click(function(){
		$(".qrcodelink-mobile").removeAttr("style");
	});
	$(".qrcodelink-mobile").click(function(){
		$(this).attr("style","display:none;");
	});


	$(".recruit-navbar .container .navbar-collapse ul.navbar-nav li:last-child").mouseover(function(){
		$(this).find("ul").removeAttr("style");
	});

	$(".recruit-navbar .container .navbar-collapse ul.navbar-nav li:last-child").mouseleave(function(){
		$(this).find("ul").attr("style","display:none;");
	})



	//联系提示
	$(".postadvice").click(function(){
		setTimeout(function(){
			$(".advice .modal-dialog .modal-content .row .col-xs-6 .thumbnail .img").height($(".advice .modal-dialog .modal-content .row .col-xs-6 .thumbnail .img").width());
			$(".advice .modal-dialog .modal-content .row .email").height($(".advice .modal-dialog .modal-content .row .col-xs-6 .thumbnail").height());
		},500);
		
	});

	$(".advice .modal-dialog .modal-content .row .col-xs-6 .thumbnail .img").mouseover(function(){
		$(this).addClass("eggs");
		$(".advice .modal-dialog .modal-content .modal-body h5").html("<div class='e'></div> 天气好冷啊~~~~>﹏<");
	});
	$(".advice .modal-dialog .modal-content .row .col-xs-6 .thumbnail .img").mouseleave(function(){
		$(this).removeClass("eggs");
		$(".advice .modal-dialog .modal-content .modal-body h5").html("如果阁下对我们的网站有任何的意见或者建议<br/>可以通过以下方式找到我们");
	});


	//个人中心
	$(".sider-part a.thumbnail").height($(".sider-part a.thumbnail").width());
	$(".base-sider").height($(".base-info").height());
	$(window).resize(function(){
		$(".sider-part a.thumbnail").height($(".sider-part a.thumbnail").width());
		$(".base-sider").height($(".base-info").height());
	});

	$(".editbase").click(function(){
		$(this).parent().nextAll().find("input").removeAttr("disabled");
		$(this).parent().nextAll().find("select").removeAttr("disabled");
		$(this).parent().nextAll().find("textarea").removeAttr("disabled");
		$(this).parent().next().next().next().removeAttr("disabled");
		$(".upload-img .img").attr("style","border:1px solid #66afe9;");
		//$(this).parent().next().next().next().next().removeAttr("disabled");
		$(this).attr("style","display:none;");
		$(this).next().removeAttr("style");
		$(".user-workpart").removeAttr("style");
	});
	$(".savebase").click(function(){
		$(this).parent().nextAll().find("input").attr("disabled","disabled");
		$(this).parent().nextAll().find("select").attr("disabled","disabled");
		$(this).parent().nextAll().find("textarea").attr("disabled","disabled");
		$(this).parent().next().next().next().attr("disabled","disabled");
		$(".upload-img .img").removeAttr("style");
		//$(this).parent().next().next().next().next().attr("disabled","disabled");
		$(this).attr("style","display:none;");
		$(this).prev().removeAttr("style");
		$(".user-workpart").attr("style","box-shadow:0px 0px 0px rgba(0,0,0,0);border-color:transparent;background-color:#eee;");
	});



	$(".user-mobile .user-function-box .row .user-function-icon a.thumbnail").height($(".user-mobile .user-function-box .row .user-function-icon a.thumbnail").width());
	$(window).resize(function(){
		$(".user-mobile .user-function-box .row .user-function-icon a.thumbnail").height($(".user-mobile .user-function-box .row .user-function-icon a.thumbnail").width());
	});

	//我的收藏
	$(".usercollect-list .media .media-left .img").width($(".usercollect-list .media .media-left").height());
	$(".usercollect-list .media .media-left .img").height($(".usercollect-list .media .media-left").height());
	$(".user-collect-sider .thumbnail .thumbnail-table .thumbnail-td .user-headportal").height($(".user-collect-sider .thumbnail .thumbnail-table .thumbnail-td .user-headportal").width());
	$(window).resize(function(){
		$(".usercollect-list .media .media-left .img").width($(".usercollect-list .media .media-left").height());
		$(".usercollect-list .media .media-left .img").height($(".usercollect-list .media .media-left").height());
		$(".user-collect-sider .thumbnail .thumbnail-table .thumbnail-td .user-headportal").height($(".user-collect-sider .thumbnail .thumbnail-table .thumbnail-td .user-headportal").width());
	})

	$(window).scroll(function() {
		if($(document).scrollTop() >= $(".usercollect-list").offset().Top){
			$(".user-collect-sider").attr("style","position:fixed;top:0px;");
			$(".user-collect-sider").width($(".user-sider").width());
		}else{
			$(".user-collect-sider").attr("style","position:relative;");
		};
	});

	$(".collected").click(function(){
		$(this).attr("style","display:none;");
		$(".int-collecte").removeAttr("style");
		$(".int-collecte").attr("style","background-color: transparent;color: #2B64AB;border: 1px solid #2B64AB;border-top: none;");
		$(".int-collecte").html("<i class='iconfont'>&#xe60c;</i> 取消收藏");

	});
	$(".int-collecte").click(function(){
		$(this).attr("style","display:none;");
		$(".collected").removeAttr("style");
		$(".collected").removeAttr("style");
		$(".collected").html("<i class='iconfont'>&#xe60c;</i> 收藏该岗位");
	});


	//我的简历作品页面
	$(".user-function .user-work .thumbnail .img").height($(".user-function .user-work .thumbnail .img").width());

	$(".user-work-upload").click(function(){
		setTimeout(function(){
			$(".workload .modal-table .modal-td .modal-dialog .modal-content .modal-body .row .upload-img .img").height($(".workload .modal-table .modal-td .modal-dialog .modal-content .modal-body .row .upload-img .img").width()*1.2);
		},500);
	});

	var workloading = 0;
	$('.workload-submit').click(function(){
		if($(".work-name").val() == ""){
			$(this).html("作品名称不能为空");
			$(this).attr("style","background-color:#cc0033;");
			$(".work-name").attr("style","border-bottom:1px solid #cc0033;");
			var workerror = setTimeout(function(){
				$(".workload-submit").html("上传");
				$(".workload-submit").removeAttr("style");
				$(".work-name").removeAttr("style");
			},1000);
		}else if($(".work-info").val() == ""){
			$(this).html("作品描述不能为空");
			$(this).attr("style","background-color:#cc0033;");
			$(".work-info").attr("style","border:1px solid #cc0033;background-color: #FFE4EA;");
			var workerror = setTimeout(function(){
				$(".workload-submit").html("上传");
				$(".workload-submit").removeAttr("style");
				$(".work-info").removeAttr("style");
			},1000);
		}else{
			$(this).text("上传中……");
			$(this).attr("disabled","disabled");
			var workloadinga = setInterval(function(){
				if(workloading < 600){
					workloading = workloading + 60;
					workload = workloading/600*100 + "%";
					$(".workload .modal-table .modal-td .modal-dialog .modal-content .modal-footer .progress .progress-bar").width(workload);
					console.log(workload);
				}else{
					clearInterval(workloadinga);
					$('#workload').modal('hide');
					window.location.reload();
				}
			},200);
		}
	});



	$("#imgicon").on("change", function(){
	    // Get a reference to the fileList
	    var files = !!this.files ? this.files : [];
	  
	    // If no files were selected, or no FileReader support, return
	    if (!files.length || !window.FileReader) return;
	  
	    // Only proceed if the selected file is an image
	    if (/^image/.test( files[0].type)){
	  
	        // Create a new instance of the FileReader
	        var reader = new FileReader();
	  
	        // Read the local file as a DataURL
	        reader.readAsDataURL(files[0]);
	  
	        // When loaded, set image data as background of div
	        reader.onloadend = function(){
	   
	       $("#imgPreview").css("background-image", "url("+this.result+")");
	         
	        }
	  
	    }
	  
	});


	$(".upload-list .user-work-upload span").text(9 - $(".user-work-function .media-list .media").length);
	if($(".user-work-function .media-list .media").length > 8){
		$(".upload-list").remove();
	};

	$(".user-work-box .thumbnail .work-img").height($(".user-work-box .thumbnail .work-img").width()*1.2);
	$('[data-toggle="tooltip"]').tooltip();


	$(".user-work-function .media-list .media .media-body span.close").click(function(){
		var cr = confirm("确定删除该作品吗？");
		if(cr == true){
			$(this).parent().parent().remove();
			$(".upload-list .user-work-upload span").text(9 - $(".user-work-function .media-list .media").length);
			if($(".user-work-function .media-list .media").length > 8){
				$(".upload-list").remove();
			};
		}else{

		}
	})







	//作品展示合并进用户中心
	$(".user-morepart .row .morepart .thumbnail").height($(".user-morepart .row .morepart .thumbnail").width());
	//$(".upload-img .img").width($(".upload-c").height());
	//$(".upload-img .img").height($(".upload-c").height());
	$(window).resize(function(){
		$(".user-morepart .row .morepart .thumbnail").height($(".user-morepart .row .morepart .thumbnail").width());
		//$(".upload-img .img").width($(".upload-c").height());
		//$(".upload-img .img").height($(".upload-c").height());
	});


	$("#imgicon").on("change", function(){
	    // Get a reference to the fileList
	    var files = !!this.files ? this.files : [];
	  
	    // If no files were selected, or no FileReader support, return
	    if (!files.length || !window.FileReader) return;
	  
	    // Only proceed if the selected file is an image
	    if (/^image/.test( files[0].type)){
	  
	        // Create a new instance of the FileReader
	        var reader = new FileReader();
	  
	        // Read the local file as a DataURL
	        reader.readAsDataURL(files[0]);
	  
	        // When loaded, set image data as background of div
	        reader.onloadend = function(){
	   
	       $("#imgPreview").css("background-image", "url("+this.result+")");
	         
	        }
	  
	    }
	  
	});

	$(".user-work-upload").click(function(){
		setTimeout(function(){
			$(".workload .modal-table .modal-td .modal-dialog .modal-content .modal-body .row .upload-img .img").height($(".workload .modal-table .modal-td .modal-dialog .modal-content .modal-body .row .upload-img .img").width()*1.2);
		},500);
	});
});