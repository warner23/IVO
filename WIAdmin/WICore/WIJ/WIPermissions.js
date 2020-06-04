$(document).ready(function(event)
{


        // button register click below
    $("#perm_btn").click(function()
    {

                var edit = $("#edit").val(),
                create  =$("#create").val(),
                del = $("#del").val(),
                view = $("#view").val(),
                id  = $(".user_role_id").attr('id')


             //create data that will be sent over server

             var perm = {
                UserData:{
                    edit           : edit,
                    create         : create,
                    del            : del,
                    view            : view,
                    id            : id

                },
                FieldId:{
                    edit           : "edit_Site",
                    create         : "create_site",
                    del            : "delete_site",
                    view            : "view_site",
                    id            : "user_role_id"

                }
             };
             // send data to server
             WIPermissions.save(perm);
        
    });
   

                       $("#ed").click(function(){
                        //alert('clicked');
                        var edit = $("#edit").attr('value');
                        console.log(edit);
                        if (edit === "0"){
                        $("#edit_site").prop("checked", true);
                        $("#ed").text('ON');
                        $("#edit").attr('value','1');
                       }else if (edit === "1"){
                        $("#edit_site").removeAttr('checked');
                        $("#edit").attr('value','0');
                        $("#ed").text('OFF');
                        $("#ed").css('padding-left', '50%');
                       }
                    });


                    $("#cr").click(function(){
                        //alert('clicked');
                        var create = $("#create").attr('value');
                        console.log(create);
                        if (create === "1"){
                        $("#create_site").prop("checked", true);
                        $("#create").attr('checked');
                        $("#cr").text('ON');
                        $("#create").attr('value','0');
                        
                       }else if (create === "0"){
                        $("#create_site").removeAttr('checked');
                        $("#cr").text('OFF');
                        $("#cr").css('padding-left', '50%');
                        $("#create").attr('value','1');
                       }
                    });

                    $("#de").click(function(){
                        //alert('clicked');
                        var del = $("#del").attr('value');
                        console.log(del);
                        if (del === "1"){
                        $("#delete_site").prop("checked", true);
                        $("#de").text('ON');
                        $("#del").attr('value','0');
                        
                       }else if (del === "0"){
                        $("#delete_site").removeAttr('checked');
                        $("#de").text('OFF');
                        $("#de").css('padding-left', '50%');
                        $("#delete").attr('value','1');
                       }
                    });

                    $("#vi").click(function(){
                        //alert('clicked');
                        var view = $("#view").attr('value');
                        console.log(view);
                        if (view === "0"){
                        $("#view_site").prop("checked", true);
                        $("#vi").text('ON');
                        $("#view").attr('value','1');
                        
                       }else if (view === "1"){
                        $("#view_site").removeAttr('checked');
                        $("#vi").text('OFF');
                        $("#vi").css('padding-left', '50%');
                        $("#view").attr('value','0');
                       }
                    }); 
   
});


var WIPermissions = {}

WIPermissions.save = function(perm){
    event.preventDefault();
    //alert('clicked');
    var btn = $("#perm_btn");
    

    // put button into the loading state
    WICore.loadingButton(btn, $_lang.creating_Account);

     $.ajax({
        url: "WICore/WIClass/WIAjax.php",
        type: "POST",
        data: {
            action : "site_perm",
            perm   : perm
        },
        success: function(result)
        {
            // return the button to normasl state
            WICore.removeLoadingButton(btn);
            console.log(result);
            //window.alert(result);
            //parse the data to json
            //var res = JSON.stringify(result);
            var res = JSON.parse(result);
            //var res = $.parseJSON(result);
            console.log(res);
            if(res.status === "error")
            {
                /// display all errors
                 for(var i=0; i<res.errors.length; i++) 
                 {
                    var error = res.errors[i];
                    WICore.displayadminerrorsMessage($("#"+error.id), error.msg);
                }
            }
            else if(res.status === "successful")
            {
                // dispaly success message
                 WICore.displaySuccessfulMessage($("#wresults"), res.msg);
                 window.location.reload();
                
            }
        }
    });
}

WIPermissions.Delete = function(id, name){

     $.ajax({
        url: "WICore/WIClass/WIAjax.php",
        type: "POST",
        data: {
            action : "page_delete",
            page_id   : id,
            name      : name
        },
        success: function(result)
        {
            var res = JSON.parse(result);
            if (res.status === "complete"){
                $("#div").remove();
            }
     $("#modal-delete-details").removeClass("show");
    $("#modal-delete-details").addClass("hide");
            
        }
    });
}

WIPermissions.Open = function(id, name){

    $("#modal-delete-details").removeClass("hide");
    $("#modal-delete-details").addClass("show");

    var Element = $("#details-body");

    //var Div = '<div id="div">Are you sure you want to delete '+name+' page </div>';
    var Div = '<div id="div"><span>Are you sure you want to delete '+name+' page </span> <button class="btn btn-danger" onclick="WIPages.Delete(`'+id+'`, `'+name+'`);">Delete</button> <button class="btn" onclick="WIPages.Close();">Cancel</button></div>';


    Element.append(Div);



}

WIPermissions.Close = function(){

    $("#modal-delete").removeClass("show");
    $("#modal-delete").addClass("hide");
    $("#div").remove();

}

