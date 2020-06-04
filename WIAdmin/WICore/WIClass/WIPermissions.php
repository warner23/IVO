<?php

/**
* WIPermissions Class
* Created by Warner Infinity
* Author Jules Warner
*/

class WIPermissions
{
  function __construct() {
       $this->WIdb = WIdb::getInstance();
    }

    public function permissionTabs()
    {

        $sql = "SELECT * FROM `wi_user_roles`";
        $query = $this->WIdb->prepare($sql);
        $query->execute();

        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        echo ' <script>
                $( function() {

                  var index = "key";
              //  Define friendly data store name
              var dataStore = window.sessionStorage;
              //  Start magic!
              try {
                  // getter: Fetch previous value
                  var oldIndex = dataStore.getItem(index);
              } catch(e) {
                  // getter: Always default to first tab in error state
                  var oldIndex = 0;
              }

                  $( "#tabs" ).tabs({
        // The zero-based index of the panel that is active (open)
        active : oldIndex,
        // Triggered after a tab has been activated
        activate : function( event, ui ){
            //  Get future value
            var newIndex = ui.newTab.parent().children().index(ui.newTab);
            //  Set future value
            dataStore.setItem( index, newIndex ) 
        }
    }); 

    
    });
                </script>

                <div id="tabs">
              <ul>';
         foreach ($result as $tab) {
          echo  '<li><a href="#tabs-' . $tab['role_id'] . '">' . $tab['role'] . '</a></li>';
        }
        echo '</ul>';

        foreach ($result as $tab) {
          echo  '<div id="tabs-' . $tab['role_id'] . '">';
                  self::PermissionContents($tab['role_id'], $tab['role']);
                  echo '</div>'; 
        }
        echo '</div>';


    }

    public function PermissionContents($id, $role)
    {

      

      echo '<div class="sectionwrapper">
                        <div class="sect">edit</div>
                        <div class="sect">Create</div>
                        <div class="sect">Delete</div>
                        <div class="sect">View</div>
                        </div>';
/*      $sql = "SELECT * FROM `wi_user_permissions` WHERE `group` AND `role_id`=:id";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $query->execute();

        $result = $query->fetchAll(PDO::FETCH_ASSOC);*/


        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_user_permissions`
                     WHERE `group` AND `role_id` = :g",
                     array(
                       "g" => $id
                     )
                  );

        echo ' <form  class="form-horizontal UPermission-form" id="UPermission">
                      <fieldset>
                        <div id="legend">
                          <legend class="user_role_id" id="' . $result[0]['id'] .'">Permissions</legend>
                        </div>';

        foreach ($result as $res ) {
          

                        
                        echo '<div class="form-group">
                           
                           <label>' . $res['perm_name'] . '</label>

                    <div class="btn-group perm" id="editing" data-toggle="buttons-radio">

                    
                     <label class="switch">
                      <input type="hidden" name="view" id="view" class="btn-group-value view" value="' . $res['view'] . '"/>
                        <input type="checkbox" id-"view_site" checked class="view_site">
                        <span class="slider round" id="vi"></span>
                      </label>

                      <label class="switch">
                      <input type="hidden" name="del" id="del" class="btn-group-value" value="' . $res['delete'] . '"/>
                        <input type="checkbox" id="delete_site" checked>
                        <span class="slider round" id="de"></span>
                      </label>

                       <label class="switch">
                      <input type="hidden" name="create" id="create" class="btn-group-value" value="' . $res['create'] . '"/>
                        <input type="checkbox" id="create_site" checked>
                        <span class="slider round" id="cr"></span>
                      </label>

                      <label class="switch">
                       <input type="hidden" name="edit" id="edit" class="btn-group-value" value="' . $res['edit'] . '"/>
                        <input type="checkbox" id="edit_site" checked>
                        <span class="slider round" id="ed"></span>
                      </label>

                    </div>
                </div>

                              
                      <div class="results" id="results"></div>
                    </fieldset>
                        <br /><br />
                  </form>


                   <script type="text/javascript">
                       var edit = $("#edit").attr(`value`);
                       if (edit === "0"){
                        $("#edit_site").prop("checked", false);
                        $("#ed").text(`OFF`);
                        $("#ed").css(`padding-left`, `50%`);
                       }else if (edit === "1"){
                        $("#edit_site").prop("checked", true);
                        $("#ed").text(`ON`);
                       }

                       var create = $("#create").attr(`value`);
                       console.log(create);
                       if (create === "0"){
                        $("#create_site").prop("checked", false);
                        $("#cr").text(`OFF`);
                        $("#cr").css(`padding-left`, `50%`);
                       }else if (create === "1"){
                        $("#create_site").prop("checked", true);
                        $("#cr").text(`ON`);
                       }

                       var del = $("#del").attr(`value`);
                       if (del === "0"){
                        $("#delete_site").prop("checked", false);
                        $("#de").text(`OFF`);
                        $("#de").css(`padding-left`, `50%`);
                       }else if (del === "1"){
                        $("#delete_site").prop("checked", true);
                        $("#de").text(`ON`);
                       }

                       var view = $("#view").attr(`value`);
                       if (view === "0"){
                        $("#view_site").prop("checked", false);
                        $("#vi").text(`OFF`);
                        $("#vi").css(`padding-left`, `50%`);
                       }else if (view === "1"){
                        $("#view_site").prop("checked", true);
                        $("#vi").text(`ON`);
                       }



                   </script>
                  ';
        }
      
    }

    public function site_perm($perm)
    {

      $this->WIdb->update(
                    "wi_user_permissions", 
                    $perm, 
                    "`id` = :id",
                    array( "id" => $id )
               );
    }

   
}