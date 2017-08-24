

$(document).ready(function () {
	if($(window).height()<$(document).height()){
		$(".user-basic").height($(document).height());
	}else{
		$(".user-basic").height($(window).height());
	}
	$(window).resize(function(){
		if($(window).height()<$(document).height()){
			$(".user-basic").height($(document).height());
		}else{
			$(".user-basic").height($(window).height());
		}
	});

	$(".education-Record ul.dropdown-menu li a").click(function(){
		$(this).parent().parent().prev().html($(this).html() + " <span class='caret'></span>");
	});
	$(".working-years ul.dropdown-menu li a").click(function(){
		$(this).parent().parent().prev().html($(this).html() + " <span class='caret'></span>");
	});


	$("ul.sel_province li span").click(function(){
		$("ul.sel_province li span").removeClass("sel-on");
		$(this).addClass("sel-on");
		$("ul.sel_province li ul").attr("style","display:none;");
		$(this).next().removeAttr("style");
	});
	$("ul.sel_province li ul li").click(function(){
		$("ul.sel_province li ul li").removeClass("sel-on");
		$(this).addClass("sel-on");
		$(".szcs").val($(this).html());
		$("").attr("style","display:none;")
	});





	$("#imgUrl").on("change", function(){

		var fileId = "imgUrl";
		var dom = document.getElementById(fileId);  
		var fileSize =  dom.files[0].size;//文件的大小，单位为字节B

		var fileName = $("#imgUrl").val();
		var ldot = fileName.lastIndexOf(".");
		var type = fileName.substring(ldot + 1);
		//alert(type);

		if(fileSize > 10485760){
			alert("文件必须小于10M");
			return false;
		}else if(type !== "jpg" && type !== "JPG" && type !== "jpeg" && type !== "JPEG" && type !== "gif" && type !== "GIF" && type !== "png" && type !== "PNG"){
			alert("你选择的是" + type + "格式的图片,请选择jpg、jpeg、gif、png格式的图片。");
			return false;
		}else{
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
					   
					$("#imgDiv").css("background-image", "url("+this.result+")");
					//$("#imgDiv").css("background-szie", "100%");
				}  
			} 
		}
	});

	$(".add-work").click(function(){
		$(".more-work").removeAttr("style");
	});


	
})