$(document).ready(function(){

  $("img.selectorImage").click(function() {      
    $(this).toggleClass("hover");
    var id = $(".hover").attr("id");

    if($(this).hasClass('favicon')){
      WIMedia.changefavicon(id);
    }else if($(this).hasClass('product')){
      WIMedia.changeProduct(id);
    }else{
         // alert(id);
    WIMedia.change(id);
    }

  });

  var Mod = $("#ModDragandDropHandler");
  var obj = $("#dragandrophandler");
  var product = $("#productdragandrophandler");
  var media = $("#mediadragandrophandler");
  var dir = $("#supload").attr("value");
  var selector = $("#selector").attr("value");


//ModHandler drop and drag object handling
Mod.on('dragenter', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
Mod.on('dragover', function (e) 
{
     e.stopPropagation();
     e.preventDefault();
});
Mod.on('drop', function (e) 
{
 
     $(this).css('border', '2px dotted #0B85A1');
     e.preventDefault();
     var files = e.originalEvent.dataTransfer.files;
 
     //We need to send dropped files to Server
     console.log(files,obj, dir, selector);
     handleFileUpload(files,obj,dir, selector);
});

//OBJ drop and drag object handling
obj.on('dragenter', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
obj.on('dragover', function (e) 
{
     e.stopPropagation();
     e.preventDefault();
});
obj.on('drop', function (e) 
{
 
     $(this).css('border', '2px dotted #0B85A1');
     e.preventDefault();
     var files = e.originalEvent.dataTransfer.files;
 
     //We need to send dropped files to Server
     console.log(files,obj, dir, selector);
     handleFileUpload(files,obj,dir, selector);
});

//media drop and drag object handling
media.on('dragenter', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
media.on('dragover', function (e) 
{
     e.stopPropagation();
     e.preventDefault();
});
media.on('drop', function (e) 
{
 
 $(this).css('border', '2px dotted #0B85A1');
 e.preventDefault();
 var files = e.originalEvent.dataTransfer.files;

 //We need to send dropped files to Server
 console.log(files,media, dir, selector);
 handleFileUpload(files,media,dir, selector);
});

//product drop and drag object handling
product.on('dragenter', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
product.on('dragover', function (e) 
{
     e.stopPropagation();
     e.preventDefault();
});
product.on('drop', function (e) 
{
 
     $(this).css('border', '2px dotted #0B85A1');
     e.preventDefault();
     var files = e.originalEvent.dataTransfer.files;
 
     //We need to send dropped files to Server
     console.log(files,product, dir, selector);
     handleFileUpload(files,product,dir, selector);
});





$(document).on('dragenter', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
});
$(document).on('dragover', function (e) 
{
  e.stopPropagation();
  e.preventDefault();
  obj.css('border', '2px dotted #0B85A1');
});
$(document).on('drop', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
});

});

var WIMedia = {};

WIMedia.media = function(){
   $("#modal-header-edit-details").removeClass("hide").addClass("show");
    $("#modal-header-media-details").removeClass("hide").addClass("show");
}

WIMedia.changeProductPic = function(event){
  console.log('clicked');
  return false;
  event.preventDefault();
  event.stopPropagation();
  $("#modal-product-edit-details").removeClass("hide").addClass("show");
}

WIMedia.langmedia = function(){
   $("#modal-lang-selection-details").removeClass("hide").addClass("show");
    $("#modal-lang-media-details").removeClass("hide").addClass("show");
}

WIMedia.ProductMedia = function(){
   $("#modal-product-media-details").removeClass("hide").addClass("show");
    $("#modal-product-edit-details").removeClass("hide").addClass("hide");
}

WIMedia.ProductUpload = function(){
   $("#modal-product-upload-details").removeClass("hide").addClass("show");
    $("#modal-product-edit-details").removeClass("hide").addClass("hide");
}

WIMedia.Langupload = function(){
   $("#modal-lang-selection-details").removeClass("show").addClass("hide");
    $("#modal-lang-upload-details").removeClass("hide").addClass("show");
}

WIMedia.pagemedia = function(){
   $("#modal-page-edit-details").removeClass("hide").addClass("show");
  $("#modal-page-media-details").removeClass("hide").addClass("show");
}

WIMedia.pagemediagallery = function(){
   $("#modal-media-edit-details").removeClass("hide").addClass("show");
     $("#modal-media-media-details").removeClass("hide").addClass("show");
}

WIMedia.changeiconPic = function(){
   $("#modal-favicon-edit-details").removeClass("show").addClass("hide");
     $("#modal-favicon-media-details").removeClass("hide").addClass("show");
}

WIMedia.changePic = function(ele, selector){
  $("#modal-"+ele+"-details").removeClass("hide").addClass("show");
  console.log(selector);
  $("#"+selector).attr('id','selector');
  }

WIMedia.editPic = function(ele){

    var t = $(event.target).parent().parent().children();
    t.closest('.view').attr('id','newpic');
    $("#modal-"+ele+"-details").removeClass("hide").addClass("show");
  }

WIMedia.LangPics = function(){

    var t = $(event.target).parent().parent().children();
    t.closest('.view').attr('id','newpic');
    $("#modal-"+ele+"-details").removeClass("hide").addClass("show");
  }

WIMedia.changefaviconPic = function(){

         $("#modal-favicon-edit-details").removeClass("hide").addClass("show");
  }



  WIMedia.closeEdit = function(){

  	 $("#modal-header-edit-details").removeClass("show").addClass("hide");
  }

  WIMedia.closed = function(ele){

     $("#modal-"+ele+"-details").removeClass("show").addClass("hide");
  }

    WIMedia.closeFEdit = function(){

     $("#modal-favicon-edit-details").removeClass("show").addClass("hide");
  }

  WIMedia.closeMedia = function(){
    $("#modal-header-media-details").removeClass("show").addClass("hide");
  }

    WIMedia.closeFMedia = function(){
    $("#modal-favicon-media-details").removeClass("show").addClass("hide");
  }

  WIMedia.closeUpload = function(){
    $("#modal-header-upload-details").removeClass("show").addClass("hide");
  }

    WIMedia.closeFUpload = function(){
    $("#modal-favicon-upload-details").removeClass("show").addClass("hide");
  }

  WIMedia.change = function(img){

  	$("#modal-header-media-details").removeClass("show").addClass("hide");
    $("#modal-header-edit-details").removeClass("show").addClass("hide");
    $(".cp").attr("src", "WIMedia/Img/header/"+img);
    $(".cp").attr("value", img);
  }

  WIMedia.changefavicon = function(img){

    $("#modal-favicon-media-details").removeClass("show").addClass("hide");
    $("#modal-favicon-edit-details").removeClass("show").addClass("hide");
    $(".cp").attr("src", "WIMedia/Img/favicon/"+img);
    $(".cp").attr("value", img);
  }

    WIMedia.changeProduct = function(img){

    $("#modal-product-media-details").removeClass("show").addClass("hide");
    $("#modal-product-edit-details").removeClass("show").addClass("hide");
    $(".cp").attr("src", "WIMedia/Img/shop/products/"+img);
    $(".cp").attr("value", img);
  }


  WIMedia.savePic = function(){

  	var img = $(".cp").attr("value");
  	//alert(img);

  	    $.ajax({
        url: "WICore/WIClass/WIAjax.php",
        type: "POST",
        data: {
            action : "changePic",
            img    : img
                    },
        success: function(result)
        {
            var res = JSON.parse(result);
            if (res.status === "successful") {
             $("#hresults").append(res.msg).fadeOut("slow");
            
        }
    }
    });
  }

    WIMedia.savefaviconPic = function(){

    var img = $(".cp").attr("value");
    //alert(img);

        $.ajax({
        url: "WICore/WIClass/WIAjax.php",
        type: "POST",
        data: {
            action : "changefaviconPic",
            img    : img
                    },
        success: function(result)
        {
            var res = JSON.parse(result);
            if (res.status === "successful") {
             $("#favresults").append(res.msg).fadeOut(5000);
            
        }
    }
    });
  }


  WIMedia.upload = function(){
  	  	     $("#modal-header-edit-details").removeClass("show").addClass("hide");
  	  	$("#modal-header-upload-details").removeClass("hide").addClass("show");
  }

    WIMedia.Langupload = function(){
    $("#modal-lanf-selection-details").removeClass("show").addClass("hide");
        $("#modal-lang-upload-details").removeClass("hide").addClass("show");
  }

    WIMedia.pageupload = function(){
             $("#modal-page-edit-details").removeClass("show").addClass("hide");
        $("#modal-page-upload-details").removeClass("hide").addClass("show");
  }

      WIMedia.PageMediaUploadPics = function(){
        $("#modal-media-edit-details").removeClass("show").addClass("hide");
        $("#modal-media-upload-details").removeClass("hide").addClass("show");;
  }

  WIMedia.PagePics = function(){
        $("#modal-media-edit-details").removeClass("show").addClass("hide");
        $("#modal-media-media-details").removeClass("hide").addClass("show");;
  }


  WIMedia.PageUploadPics = function(){
        $("#modal-media-edit-details").removeClass("show").addClass("hide");
        $("#modal-media-upload-details").removeClass("hide").addClass("show");;
  }


  WIMedia.PageMediaPics = function(){
   $("#modal-media-edit-details").removeClass("hide").addClass("show");
     $("#modal-media-media-details").removeClass("hide").addClass("show");
}

    WIMedia.faviconupload = function(){
             $("#modal-favicon-edit-details").removeClass("show").addClass("hide");
        $("#modal-favicon-upload-details").removeClass("hide").addClass("show");
  }

  WIMedia.ImageMedia = function(){
   // e.preventDefault();
  var files = files;
  var obj = $("#manmed");
 
     //We need to send dropped files to Server
     handleFileUpload(files,obj);


  }

  WIMedia.Folder = function(folder){
    
     $.ajax({
        url: "WICore/WIClass/WIAjax.php",
        type: "POST",
        data: {
            action : "folder",
            folder : folder
                    },
        success: function(result)
        {
          $("#images").html(result);
            
        }
    });
  }

  WIMedia.goback= function(){

         $.ajax({
        url: "WICore/WIClass/WIAjax.php",
        type: "POST",
        data: {
            action : "back",
                    },
        success: function(result)
        {
          $("#images").html(result);
            
        }
    });
  }
