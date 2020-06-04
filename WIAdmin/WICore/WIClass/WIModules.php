  <?php
/**
* WIModules Class
* Created by Warner Infinity
* Author Jules Warner
*/
class WIModules
{

    public function __construct() {
        $this->WIdb = WIdb::getInstance();
        $this->Page = new WIPagination();
    }

        public function InstallElements()
    {
        
         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 15;


        $onclick = "nextElement";
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        $dir = dirname(dirname(dirname(__FILE__))) . '/WIModule/elements/';
        $modules = scandir($dir);
        $modTotal = count($modules);
        //echo $modTotal;

        //break records into pages
        $total_pages = ceil($modTotal/$item_per_page);

        foreach ($modules as $module => $value) {
            
        if ($value === '.' or $value === '..') continue;
        if (is_dir($dir.$value)) {
        //code to use if directory
                echo '<div class="col-md-4">
        <div class="panel panel-info">
        <div class="panel-heading">' . $value . '</div>
        <div class="panel-body">

             <button type="button" name="' . $value . '" value="enabled" id="' . $value . '-Install"  class="btn">Install</button>
         <button type="button" name="' . $value . '" value="disabled" id="' . $value . '-Uninstall" class="btn btn-danger active" >Unistall</button>
        </div>
        <div class="panel-footer">
            Author: Jules Warner
        </div>
        </div>
    </div>  <script type="text/javascript">
     
    var module = "' . WIModules::InstallElementToggle($value) . '";

                       if (module === "power_off"){
                        $("#' . $value . '-Install").removeClass("btn-success active");
                        $("#' . $value . '-Uninstall").addClass("btn-danger active");
                       }else if (module === "power_on"){
                        $("#' . $value . '-Uninstall").removeClass("btn-danger active");
                        $("#' . $value . '-Install").addClass("btn-success active");
                       }

                    $("#' . $value . '-Install").click(function(){
                        $("#' . $value . '-Uninstall").removeClass("btn-danger active")
                        $("#' . $value . '-Install").addClass("btn-success active");
                        WIMod.installElement("' . $value . '","Jules Warner");
                    })

                    $("#' . $value . '-Uninstall").click(function(){
                       $("#' . $value . '-Install").removeClass("btn-success active")
                        $("#' . $value . '-Uninstall").addClass("btn-danger active");
                        WIMod.uninstallElements("' . $value . '","Jules Warner");
                    })
</script>';
        }

        }

          $Pagin = $this->Page->Pagination($item_per_page, $page_number, $modTotal, $total_pages, $onclick);
    //print_r($Pagination);


         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';
    }

    public function InstallMods()
    {
        
         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 15;


        $onclick = "NextInstalledMod";
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        $dir = dirname(dirname(dirname(__FILE__))) . '/WIModule/';
        $modules = scandir($dir);
        $modTotal = count($modules);
        //echo $modTotal;

        //break records into pages
        $total_pages = ceil($modTotal/$item_per_page);

        foreach ($modules as $module => $value) {
            
        if ($value === '.' or $value === '..') continue;
        if (is_dir($dir.$value)) {
        //code to use if directory
                echo '<div class="col-md-4">
        <div class="panel panel-info">
        <div class="panel-heading">' . $value . '</div>
        <div class="panel-body">

             <button type="button" name="' . $value . '" value="enabled" id="' . $value . '-Install"  class="btn">Install</button>
         <button type="button" name="' . $value . '" value="disabled" id="' . $value . '-Uninstall" class="btn btn-danger active" >Unistall</button>
        </div>
        <div class="panel-footer">
            Author: Jules Warner
        </div>
        </div>
    </div>  <script type="text/javascript">
     
    var module = "' . WIModules::InstallToggle($value) . '";

                       if (module === "disabled"){
                        $("#' . $value . '-Install").removeClass("btn-success active");
                        $("#' . $value . '-Uninstall").addClass("btn-danger active");
                       }else if (module === "enabled"){
                        $("#' . $value . '-Uninstall").removeClass("btn-danger active");
                        $("#' . $value . '-Install").addClass("btn-success active");
                       }



                    $("#' . $value . '-Install").click(function(){
                        $("#' . $value . '-Uninstall").removeClass("btn-danger active")
                        $("#' . $value . '-Install").addClass("btn-success active");
                        WIMod.install("' . $value . '", "Jules Warner");
                    })

                    $("#' . $value . '-Uninstall").click(function(){
                       $("#' . $value . '-Install").removeClass("btn-success active")
                        $("#' . $value . '-Uninstall").addClass("btn-danger active");
                        WIMod.uninstall("' . $value . '");
                    })
</script>';
        }

        }

          $Pagin = $this->Page->Pagination($item_per_page, $page_number, $modTotal, $total_pages, $onclick);
    //print_r($Pagination);


         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';
    }


    public function getElements()
    {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 15;
        $power = "power_on";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE element_powered =:power",
                     array(
                       "power" => $power
                ));
        $rows = count($result);

        $onclick = "nextElement";
        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE element_powered =:power ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':power' ,$power, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();
        echo '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="elementsContents">';
        echo '<ul class="contents">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {

            $element_name = $res['element_name'];
            
            if (strpos($element_name," ") != false){
                $element_name = preg_replace('/\s+/', '_', $element_name);
            }
              
             echo '<div class="col-md-4">
        <div class="panel panel-info">
        <div class="panel-heading">' . $element_name . '</div>
        <div class="panel-body">
        <input type="hidden" name="' . $element_name . '"  class="btn-group-value" id="' . $element_name . '" value="'. $res['element_status'] . '" />
             <button type="button" name="' . $element_name . '" value="enabled" id="' . $element_name . '-enabled"  class="btn">Enabled</button>
         <button type="button" name="' . $element_name . '" value="disabled" id="' . $element_name . '-disabled" class="btn btn-danger active" >Disabled</button>
        </div>
        <div class="panel-heading">
            
        </div>
        </div>
    </div>  <script type="text/javascript">
     
    var element = "' . $res['element_status'] . '";

                       if (element === "disabled"){
                        $("#' . $element_name . '-enabledd").removeClass("btn-success active");
                        $("#' . $element_name. '-disable").addClass("btn-danger active");
                       }else if (element === "enabled"){
                        $("#' . $element_name . '-disabled").removeClass("btn-danger active");
                        $("#' . $element_name . '-enabled").addClass("btn-success active");
                       }



                    $("#' . $element_name . '-enabled").click(function(){
                        
                        $("#' . $element_name . '-enabled").attr("value", "enabled")
                        $("#' . $element_name . '-disabled").removeClass("btn-danger active")
                        $("#' . $element_name. '-enabled").addClass("btn-success active");
                        WIMod.enableElement("' . $element_name . '", "enabled");
                    })

                    $("#' . $element_name . '-disabled").click(function(){
                       
                        $("#' . $element_name . '-disabled").attr("value", "disabled")
                        $("#' . $element_name . '-enabled").removeClass("btn-success active")
                        $("#' . $element_name . '-disabled").addClass("btn-danger active");
                        WIMod.disableElement("' . $element_name . '", "disabled");
                    })
</script>';
        }
        

         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</ul>';

         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div></div>';
    }



    public function getModules()
    {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 15;
        $mod_type = "custom";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_modules`");
        $rows = count($result);

        $onclick = "nextMod";
        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_modules` ORDER BY `mod_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();
        echo '<ul class="contents">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
             echo '<div class="col-md-4">
        <div class="panel panel-info">
        <div class="panel-heading">' . $res['name'] . '</div>
        <div class="panel-body">
        <input type="hidden" name="' . $res['name'] . '" class="btn-group-value" id="' . $res['name'] . '" value="'. $res['name'] . '" />
             <button type="button" name="' . $res['name'] . '" value="enabled" id="' . $res['name'] . '-enabled"  class="btn">Enabled</button>
         <button type="button" name="' . $res['name'] . '" value="disabled" id="' . $res['name'] . '-disabled" class="btn btn-danger active" >Disabled</button>
        </div>
        <div class="panel-heading">
            
        </div>
        </div>
    </div>  <script type="text/javascript">
     
    var module = "' . $res['mod_status'] . '";

                       if (module === "disabled"){
                        $("#' . $res['name'] . '-enabledd").removeClass("btn-success active");
                        $("#' . $res['name'] . '-disable").addClass("btn-danger active");
                       }else if (module === "enabled"){
                        $("#' . $res['name'] . '-disabled").removeClass("btn-danger active");
                        $("#' . $res['name'] . '-enabled").addClass("btn-success active");
                       }



                    $("#' . $res['name'] . '-enabled").click(function(){
                        
                       // $("#' . $res['name'] . '-enabled").attr("value", "enabled")
                        $("#' . $res['name'] . '-disabled").removeClass("btn-danger active")
                        $("#' . $res['name'] . '-enabled").addClass("btn-success active");
                        WIMod.enable("' . $res['name'] . '", "enabled");
                    })

                    $("#' . $res['name'] . '-disabled").click(function(){
                       
                       // $("#' . $res['name'] . '-disabled").attr("value", "disabled")
                        $("#' . $res['name'] . '-enabled").removeClass("btn-success active")
                        $("#' . $res['name'] . '-disabled").addClass("btn-danger active");
                        WIMod.disable("' . $res['name'] . '", "disabled");
                    })
</script>';
        }
        echo '</ul>';

         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);


         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';
    }

        public function getPageModules()
    {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 15;
        $mod_type = "custom";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_modules`");
        $rows = count($result);

        $onclick = "nextMod";
        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_modules` ORDER BY `id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();
          echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="lyrow ui-draggable">
            <a href="javascript:void(0);" id="editting-' .$res['element_id'] . '" class="editting editting-' .$res['element_id'] . ' label label-important"><i class="far fa-edit"></i>Edit</a>
            <script>
                  $(".editting-' .$res['element_id'] . '").click(function() {
                    $(".attrsPanels").css("display","block")
                 });
                  </script>
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a>
                     <span class="drag label"><i class="icon-move"></i>Drag</span>';
                     self::attrsPanels(); 
                     echo $res['element'] . '
                  </div>';


        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';
    }

     public function getInstalledModules()
    {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 15;

        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_mod`");
        $rows = count($result);
        $onclick = "nextInstalledModule";
        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        $mod_type = "element";

        $sql = "SELECT * FROM `wi_mod` WHERE mod_type =:mod_type ORDER BY `mod_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':mod_type' ,$mod_type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();
        echo '<ul class="contents">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
             echo '<div class="col-md-4">
        <div class="panel panel-info">
        <div class="panel-heading">' . $res['module_name'] . '</div>
        <div class="panel-body">
        <input type="hidden" name="' . $res['module_name'] . '" class="btn-group-value" id="' . $res['module_name'] . '" value="'. $res['mod_status'] . '" />
             <button type="button" name="' . $res['module_name'] . '" value="enabled" id="' . $res['module_name'] . '-enabled"  class="btn">Enabled</button>
         <button type="button" name="' . $res['module_name'] . '" value="disabled" id="' . $res['module_name'] . '-disabled" class="btn btn-danger active" >Disabled</button>
        </div>
        <div class="panel-heading">
            
        </div>
        </div>
    </div>  <script type="text/javascript">
     
    var module = "' . $res['mod_status'] . '";

                       if (module === "disabled"){
                        $("#' . $res['module_name'] . '-enabledd").removeClass("btn-success active");
                        $("#' . $res['module_name'] . '-disable").addClass("btn-danger active");
                       }else if (module === "enabled"){
                        $("#' . $res['module_name'] . '-disabled").removeClass("btn-danger active");
                        $("#' . $res['module_name'] . '-enabled").addClass("btn-success active");
                       }



                    $("#' . $res['module_name'] . '-enabled").click(function(){
                        
                       // $("#' . $res['module_name'] . '-enabled").attr("value", "enabled")
                        $("#' . $res['module_name'] . '-disabled").removeClass("btn-danger active")
                        $("#' . $res['module_name'] . '-enabled").addClass("btn-success active");
                        WIMod.enable("' . $res['module_name'] . '", "enabled");
                    })

                    $("#' . $res['module_name'] . '-disabled").click(function(){
                       
                       // $("#' . $res['module_name'] . '-disabled").attr("value", "disabled")
                        $("#' . $res['module_name'] . '-enabled").removeClass("btn-success active")
                        $("#' . $res['module_name'] . '-disabled").addClass("btn-danger active");
                        WIMod.disable("' . $res['module_name'] . '", "disabled");
                    })
</script>';
        }
        echo '</ul>';

         $Pagination = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);


         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagination;
    echo '</div>';
    }



    public static function moduleToggle($column, $mod_name) 
    {
        $WIdb = WIdb::getInstance();

        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_mod` WHERE `module_name` = :mod_name",
                     array(
                       "mod_name" => $mod_name
                     )
                  );
        return $result[$column];

        //$query = $WIdb->prepare('SELECT * FROM `wi_mod` WHERE `module_name` = :mod_name');
        //$query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
       // $query->execute();
       // $res = $query->fetch(PDO::FETCH_ASSOC);
       //return $res[$column];
    }

        public static function InstallToggle($mod_name) 
    {
        $WIdb = WIdb::getInstance();

        $query = $WIdb->prepare('SELECT * FROM `wi_mod` WHERE `module_name` = :mod_name');
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->execute();

        $res = $query->fetch(PDO::FETCH_ASSOC);
        if($res['module_name'] === $mod_name)
            return "enabled";
        else
            return "disabled";
    }

    public static function InstallElementToggle($mod_name) 
    {
        $WIdb = WIdb::getInstance();

        $query = $WIdb->prepare('SELECT * FROM `wi_elements` WHERE `element_type` = :mod_name or `element_name` =:mod_name');
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->execute();

        $res = $query->fetch(PDO::FETCH_ASSOC);
        if($res['element_name'] || $res['element_type']  === $mod_name)
            return "power_on";
        else
            return "power_off";
    }

     public function installElement($mod_name)
    {
        //echo dirname(dirname(dirname(__FILE__))) . '/WIModule/elements/' . $mod_name . '/' . $mod_name . '.php';

        require_once dirname(dirname(dirname(__FILE__))) . '/WIModule/elements/' . $mod_name . '/' . $mod_name . '.php';

        $elementName = $mod_name;
        $WIElement = new $elementName();
        $WIElement->Install($mod_name);
    
        $msg = "Successfully Installed " . $mod_name . " element";

        $result = array(
            "status"  => "success",
            "msg"     => $msg
        );

        echo json_encode($result);
    }

    public function unistall_Element($mod_name)
    {

        $this->WIdb->delete("wi_elements", "element_name = :mod_name", array( "mod_name" => $mod_name ));


       /* $sql = "DELETE FROM `wi_elements` WHERE element_name= :mod_name";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->execute();*/

    }

    public function install_mod($mod_name, $author)
    {
         $this->WIdb->insert('wi_mod', array(
            "module_name" => $mod_name,
            "mod_author" => $author
        )); 

    }

    public function uninstall_mod($mod_name)
    {
        //

        $sql = "DELETE FROM `wi_mod` WHERE module_name= :mod_name";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->execute();


    }


    public function active_available_mod($mod_name, $enable)
    {
        //INSERT INTO `wi_mod` (module_name, mod_status) VALUES (:mod_name, :mod_status)

        $sql = "UPDATE `wi_mod` SET `mod_status` = :mod_status WHERE `module_name` = :mod_name";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->bindParam(':mod_status', $enable, PDO::PARAM_STR);
        $query->execute();


    }

        public function activateAvailableElements($element_name, $enable)
    {

         
          
        $element_font = "wi_" .$element_name;

        if (strpos($element_name,"_") != false){
                $element_name = str_replace("_", " ", $element_name);
            }
        $sql = "UPDATE `wi_elements` SET `element_status` = :element_status, `element_font`=:element_font WHERE `element_name` = :element_name";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':element_name', $element_name, PDO::PARAM_STR);
        $query->bindParam(':element_status', $enable, PDO::PARAM_STR);
        $query->bindParam(':element_font', $element_font, PDO::PARAM_STR);
        $query->execute();


    }

        public function active_available_elements($mod_name, $enable)
    {
        //INSERT INTO `wi_mod` (module_name, mod_status) VALUES (:mod_name, :mod_status)

        $sql = "UPDATE `wi_elements` SET `element_status` = :element_status WHERE `element_name` = :element_name";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':element_name', $mod_name, PDO::PARAM_STR);
        $query->bindParam(':element_status', $enable, PDO::PARAM_STR);
        $query->execute();


    }

        public function deactive_available_mod($mod_name, $disable)
    {
        //echo $disable;
        //echo $mod_name;
        $sql = "UPDATE `wi_mod` SET `mod_status` = :mod_status WHERE `module_name` = :mod_name";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->bindParam(':mod_status', $disable, PDO::PARAM_STR);
        $query->execute();

    }

     public function ActiveMods()
     {

                 if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextMod";
        $element_status = "enabled";
        $item_per_page = 15;
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_mod`",
                     array(
                       "element_status" => $element_status
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_mod` ORDER BY `mod_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();
       
        echo '<ul id="draggable" class="ui-widget-header">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li id="'.$res['module_name'] . '" title="'.$res['module_name'] . '" class="ui-draggable ui-draggable-handle '.$res['mod_font'] . '"></li>';
        }
        echo '</ul>';

     }


          public function ActiveElements()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $mod_type = "element";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status",
                     array(
                       "element_status" => $element_status
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul id="draggable" class="ui-widget-header">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li id="'.$res['element_name'] . '" title="'.$res['element_name'] . '" class="ui-draggable ui-draggable-handle '.$res['element_font'] . '"></li>
                $( "button#modEle" ).mousedown(function() {
              $("li#'.$res['element_name'] . '").attr("draggable", true);
            });';
        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</ul>';

         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }


     public function modules()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Grid";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_modules`");
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_modules` ORDER BY `id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();


        echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="lyrow ui-draggable">
            <a href="javascript:void(0);" id="editting-' .$res['id'] . '" class="editting editting-' .$res['id'] . ' label label-important"><i class="far fa-edit"></i>Edit</a>
                    <script>
                  $(".editting-' .$res['id'] . '").click(function() {
                    $(".attrsPanels").css("display","block")
                 });
                  </script>
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a>
                     <span class="drag label"><i class="icon-move"></i>Drag</span>
                     <div class="preview">' .$res['name'] . '</div>
                    <div class="view">';
                    self::attrsPanels(); 
                     echo $res['element'] . '
                    </div>';
                  echo '</div>';
        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }


     public function ActiveElementsGrid()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Grid";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type,
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type` =:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();


        echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="lyrow ui-draggable">
            <a href="javascript:void(0);" id="' .$res['element_id'] . '" onclick="WIScript.gridEdit(`' .$res['element_name'] . '`,`' .$res['element_id'] . '`)" class="editting editting-' .$res['element_id'] . ' label label-important"><i class="far fa-edit"></i>Edit</a>
            
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a>
                     <span class="drag label"><i class="icon-move"></i>Drag</span>';
                     self::attrsPanels(); 
                     echo $res['element'] . '
                  </div>';
        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }

          public function ActiveElementsBase()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Base";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type,
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type` =:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="box box-element ui-draggable">
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a> <span class="drag label"><i class="icon-move"></i>Drag</span>
                    <span class="configuration">
                      <button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">Editor</button>
                      <span class="btn-group">
                        <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);">Align <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li class="active"><a href="javascript:void(0); "rel="">Default</a></li>
                          <li class=""><a href="javascript:void(0);" rel="text-left">Left</a></li>
                          <li class=""><a href="=javascript:void(0);" rel="text-center">Center</a></li>
                          <li class=""><a href="javascript:void(0);" rel="text-right">Right</a></li>
                        </ul>
                      </span>
                      <span class="btn-group">
                        <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">Emphasis <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li class="active"><a href="javascript:void(0);" rel="">Default</a></li>
                          <li class=""><a href="#" rel="emphasized">Emphasized</a></li>
                          <li class=""><a href="javascript:void(0);" rel="emphasized2">Emphasized 2</a></li>
                          <li class=""><a href="javascript:void(0);" rel="emphasized3">Emphasized 3</a></li>
                          <li class=""><a href="javascript:void(0);" rel="emphasized4">Emphasized 4</a></li>
                          <li class=""><a href="javascript:void(0);" rel="emphasized-orange">Emphasized orange</a></li>
                        </ul>
                      </span>
                    </span>
                    ' . $res['element'] . '
                  </div>';


        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }

      public function ActiveElementsComponents()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Components";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type,
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type` =:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="box box-element ui-draggable">
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a> <span class="drag label"><i class="icon-move"></i>Drag</span>
                    <span class="configuration">
                      <span class="btn-group">
                        <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">Orientation<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li class="active"><a href="#" rel="">Default</a></li>
                          <li class=""><a href="#" rel="btn-group-vertical">Vertical</a></li>
                        </ul>
                      </span>
                    </span>
                    ' . $res['element'] .'
                  </div>';


        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }

      public function ActiveElementsForms()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Forms";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type,
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type` =:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="box box-element ui-draggable">
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a> <span class="drag label"><i class="icon-move"></i>Drag</span>
                    <span class="configuration">
                      <button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">Editor</button>
                    </span>
                    '.$res['element'] . '
                  </div>';


        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }

      public function ActiveElementsJavascript()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Javascript";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type,
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type` =:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul class="nav nav-list accordion-group">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<div class="box box-element ui-draggable">
                    <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>Remove</a> <span class="drag label"><i class="icon-move"></i>Drag</span>
                    ' . $res['element'] . '
                  </div>';


        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</li></ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }


    public function ActiveElementsCommonFields()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Common Fields";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type,
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type` =:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul id="draggable" class="ui-widget-header control-panel common-fields">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            //var_dump($res);
            echo '<li id="'.$res['element_name'] . '" title="'.$res['element_name'] . '" class="ui-draggable ui-draggable-handle '.$res['element_font'] . ' draggable-4">
            '.$res['element_name'] . '
            </li>
            <script type="text/javascript">
                $( "button#modEle" ).mousedown(function() {
              $("li#'.$res['element_name'] . '").attr("draggable", true);
            });
            </script>';
        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</ul>';
         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }


     public function ActiveElementsHTMLElements()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "HTML Elements";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

        $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul id="draggable" class="ui-widget-header control-panel html-elements">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li id="'.$res['element_name'] . '" title="'.$res['element_name'] . '" class="ui-draggable ui-draggable-handle '.$res['element_font'] . ' draggable-4">
                '.$res['element_name'] . '
            </li>
            <script type="text/javascript">
                $( "button#modEle" ).mousedown(function() {
              $("li#'.$res['element_name'] . '").attr("draggable", true);
            });
            </script>';
        }

         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</ul>';

         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }

     public function ActiveElementsLayouts()
     {

         if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $onclick = "nextElement";
        $element_status = "enabled";
        $item_per_page = 15;
        $power = "power_on";
        $type = "Layout";
        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type",
                     array(
                       "element_status" => $element_status,
                       "power" => $power,
                       "type" => $type
                ));
        $rows = count($result);

        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        

       $sql = "SELECT * FROM `wi_elements` WHERE `element_status` = :element_status AND `element_powered` =:power AND `element_type`=:type ORDER BY `element_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
         $query->bindParam(':element_status' ,$element_status, PDO::PARAM_STR);
          $query->bindParam(':power' ,$power, PDO::PARAM_STR);
          $query->bindParam(':type' ,$type, PDO::PARAM_STR);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();

        echo '<ul id="draggable" class="ui-widget-header control-panel layers">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li id="'.$res['element_name'] . '" title="'.$res['element_name'] . '" class="draggable-4  '.$res['element_font'] . '">'.$res['element_name'] . '
                
            </li>
                <script type="text/javascript">
                $( "button#modEle" ).mousedown(function() {
              $("li#'.$res['element_name'] . '").attr("draggable", true);
            });
            </script>';
        }
         $Pagin = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);
         echo '</ul>';

         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagin;
    echo '</div>';

     }

     public function dropElement($mod_name)
     {

        include_once dirname(dirname(dirname(__FILE__))) . '/WIModule/elements/' .$mod_name.'/'.$mod_name.'.php';
        

        $mod_name = new $mod_name;

        $mod_name->mod_name();

     }

     public function dropColElement($mod_name)
     {
        include_once dirname(dirname(dirname(__FILE__))) . '/WIModule/columns/columns.php';
        /*
        spl_autoload_register(function($mod_name)
        {
            require_once $dir .'/' .$mod_name . '.php';
        });
        */

        $columns = new columns;

        $columns->$mod_name();

     }

          public function editDropElement($mod_name, $page_id)
     {
        include_once dirname(dirname(dirname(__FILE__))) . '/WIModule/' .$mod_name.'/'.$mod_name.'.php';

        $mod_name = new $mod_name;

        $mod_name->editPageContent($page_id);

     }

     
     public function columns()
     {
        $mod_name = "columns";
        $mod_status = "enabled";
        $sql = "SELECT * FROM `wi_mod` WHERE module_name = :mod_name AND mod_status = :mod_status";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':mod_name', $mod_name, PDO::PARAM_STR);
        $query->bindParam(':mod_status', $mod_status, PDO::PARAM_STR);
        $query->execute();

        $res = $query->fetch(PDO::FETCH_ASSOC);

        if ($res > 0)
            return true;
        else
            return false;

     }


   

     public function getActiveMods()
     {

        if(isset($_POST["page"])){
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
        if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
    }else{
        $page_number = 1; //if there's no page number, set it to 1
    }

        $item_per_page = 25;

        $result = $this->WIdb->select(
                    "SELECT * FROM `wi_mod`");
        $rows = count($result);
        //echo "row". $rows;
        //break records into pages
        $total_pages = ceil($rows/$item_per_page);
        
        //get starting position to fetch the records
        $page_position = (($page_number-1) * $item_per_page);
        $onclick = "nextActiveMod";
        $sql = "SELECT * FROM `wi_mod` ORDER BY `mod_id` ASC LIMIT :page, :item_per_page";
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page_position, PDO::PARAM_INT);
        $query->bindParam(':item_per_page', $item_per_page, PDO::PARAM_INT);
        $query->execute();
        echo '<ul id="editable" class="ui-widget-header">';
        while ($res = $query->fetch(PDO::FETCH_ASSOC)) {
            echo '<li id="'.$res['module_name'] . '" title="'.$res['module_name'] . '" class="ui-draggable ui-draggable-handle '.$res['mod_font'] . '"></li>';
        }
        echo '</ul>';
         $Pagination = $this->Page->Pagination($item_per_page, $page_number, $rows, $total_pages, $onclick);
    //print_r($Pagination);


         echo '<div align="center">';
    /* We call the pagination function here to generate Pagination link for us. 
    As you can see I have passed several parameters to the function. */
    echo $Pagination;
    echo '</div>';

     }


     public function CheckModPower($modName)
     {
        
     }

         public function getMod($mod)
    {
        //echo $mod;
        //echo   'WIAdmin/WIModule/' .$mod.'/'.$mod.'.php';
        $directory = dirname(dirname(dirname(__FILE__)));
        require_once $directory . '/WIModule/' .$mod.'/'.$mod.'.php';
        
       // echo $mod;
        $mod = new $mod;

        $mod->mod_name();
    }

    public function EditMod($mod)
    {
        //echo $mod;
        //echo   'WIAdmin/WIModule/' .$mod.'/'.$mod.'.php';
        require_once  'WIAdmin/WIModule/' .$mod.'/'.$mod.'.php';
        
       // echo $mod;
        $mod = new $mod;

        $mod->mod_name();
    }

    public function editContents($mod_name, $title, $para)
    {
        $sql = "SELECT  FROM `wi_site` WHERE `id` =:id";

        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $query->execute();
    }


    public function module($page_id, $column)
    {
        $id = "1";
        $name = $page_id;
        echo $name;
        echo "column" . $column;
        $sql = "SELECT `multi_lang` FROM `wi_site` WHERE `id` =:id";

        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $query->execute();

        $result = $query->fetch();
        //echo $result['multi_lang'];
        $mlang = $result['multi_lang'];
        
   // echo $mlang;

        $sql1 = "SELECT * FROM `wi_modules` WHERE `name`=:name";
        $query1 = $this->WIdb->prepare($sql1);
        $query1->bindParam(':name', $name, PDO::PARAM_STR);
        $query1->execute();

        $res = $query1->fetch(PDO::FETCH_ASSOC);
        echo $column;
        if ($column === "text") {
            $trans = "trans";
        }elseif ($column === "text1") {
            $trans = "trans1";
        }elseif ($column === "text2") {
            $trans = "trans2";
        }elseif ($column === "text3") {
            $trans = "trans3";
        }elseif ($column === "text4") {
            $trans = "trans4";
        }elseif ($column === "text5") {
            $trans = "trans5";
        }elseif ($column === "text6") {
            $trans = "trans6";
        }
        echo $res['$trans'] . "trans";
        echo $trans . "no res";
        $lange = $res[$trans];
        
        $text  = $res[$column];
        echo $text;

       // echo $lange;
        if ($mlang === "off"){
            echo $text;
        }else{
            echo WILang::get($lange);
        }

    }

    public function ModName($page)
    {
        $sql = "SELECT * FROM `wi_page` WHERE `name`=:page";
        echo $page;
        $query = $this->WIdb->prepare($sql);
        $query->bindParam(':page', $page, PDO::PARAM_STR);
        $query->execute();

        $res = $query->fetch(PDO::FETCH_ASSOC);

        $mod_name = $res['contents'];

        return $mod_name;
    }

    public function save_mod($webpage, $mod_name, $contents)
    {
        $result = $this->WIdb->select("SELECT * FROM `wi_modules`
                     WHERE `name` = :n",
                     array(
                       "n" => $mod_name
                     ));

        $webpage = "";

        if(count($result) >0){
            $id = $result['id'];
            $element = $webpage;
                $this->WIdb->update(
                    "wi_modules", 
                    $webpage, 
                    "`id` = :id",
                    array( "id" => $id )
               );
        }else{
            $this->WIdb->insert('wi_modules', array(
            "name"     => $mod_name,
            "element"  => $webpage,
            "modulecode"  => $mod_name
           
        )); 
        }




        $msg = "Successfully created Module";

    $result = array(
                "status" => "success",
                "msg"    => $msg
            );
            
            echo json_encode($result);
    }

    public function saving_mod($webpage, $mod_name, $contents)
    {
         $directory = dirname(dirname(dirname(__FILE__))) . '/WIModule';

          $dir = dirname(dirname(dirname(__FILE__))) .'/WIModule/' .$mod_name ;
             if (!file_exists($dir)) {
                  mkdir($dir, 0777, true);
              }

        

      $NewPage = fopen($directory. '/' .$mod_name .'/' .$mod_name . '.php', "w") or die("Unable to open file!");

      $File = '<?php

/**
* 
*/
class ' . $mod_name. '
{
    function __construct()
    {
        $this->WIdb = WIdb::getInstance();
        $this->page = new WIPage();
        $this->mod  = new WIModules();
    }

    public function editPageContent($page)
    {
        echo "<div class=`container-fluid text-center` id=`col`>"; 

          $lsc = $this->page->GetColums($page, "left_sidebar");
          $rsc = $this->page->GetColums($page, "right_sidebar");
        if ($lsc > 0) {

              echo "<div class=`col-sm-1 col-lg-2 col-md-2 col-xl-2 col-xs-2 sidenav` id=`sidenavL`>";
         $this->mod->getMod("left_sidebar");  

            echo "</div>
            <div class=`col-lg-10 col-md-8 col-sm-8 block` id=`block`>
            <div class=`col-lg-10 col-md-8 col-sm-8` id=`Mid`>";
        }

        if ($lsc && $rsc > 0) {
            echo "<div class=`col-lg-10 col-md-8 col-sm-8 block` id=`block`><div class=`col-lg-12 col-md-8 col-sm-8` id=`Mid`>";
        }else if($rsc > 0){
            echo "<div class=`col-lg-10 col-md-8 col-sm-8 block` id=`block`><div class=`col-lg-12 col-md-8 col-sm-8` id=`Mid`>";

         }else{
        echo "<div class=`col-lg-12 col-md-12 col-sm-12 block` id=`block`><div class=`col-lg-12 col-md-12 col-sm-12` id=`Mid`>";
        }
          echo "' .$webpage . '";

         if ($rsc > 0) {

              echo "</div><div class=`col-sm-1 col-lg-2 cool-md-2 col-xl-2 col-xs-2 sidenav` id=`sidenavR`>";
          $this->mod->getMod("right_sidebar");  

            echo "</div></div>";
        }

        echo "</div>
            </div>";
    }

    public function editMod()
    {
              echo "<div id=`remove`>
      <a href=`javavscript:void(0);`>
      <button id=`delete` onclick=`WIMod.delete(event);`>Delete</button>
      </a>
       <div id=`dialog-confirm` title=`Remove Module?` class=`hide`>
  <p><span class=`ui-icon ui-icon-alert` style=`float:left; margin:12px 12px 20px 0;`>
  </span>Are you sure?</p>
  <p> This will remove the module and any unsaved data.</p>
  <span><button class=`btn btn-danger` onclick=`WIMod.remove(event);`>Remove</button> <button class=`btn` onclick=`WIMod.close(event);`>Close</button></span>
</div>' .$webpage. '</div>";
 
    }
    

    public function mod_name()
    {
      echo "' . $webpage.'";
    }
     
    
}';


     
      fwrite($NewPage, $File);
      fclose($NewPage);
    

    $msg = "Successfully created Module";

    $result = array(
                "status" => "success",
                "msg"    => $msg
            );
            
            echo json_encode($result);
    }


    public function createMod($contents, $mod_name, $layout, $elements = array(), $columnPreset)
    {

        $directory = dirname(dirname(dirname(__FILE__))) . '/WIModule';

          $dir = dirname(dirname(dirname(__FILE__))) .'/WIModule/' .$mod_name ;
             if (!file_exists($dir)) {
                  mkdir($dir, 0777, true);
              }


        foreach ($elements as $element) {
            //var_dump($element);
        require_once dirname(dirname(dirname(__FILE__))) . '/WIModule/elements/' . $element['element'] . '/' . $element['element'] . '.php';

        $elementName = $element['element'];
        $WIElement = new $elementName();
        
        //$NewMod = $WIElement->main_element();
        }
        

      $NewPage = fopen($directory. '/'  .$mod_name .'/ '  .$mod_name . '.php', "w") or die("Unable to open file!");

      $File = '<?php

/**
* 
*/
class ' . $mod_name. ' 
{
    //test2
    function __construct()
    {
        $this->WIdb = WIdb::getInstance();
    }

    public function editMod()
    {
              echo `<div id="remove">
      <a href="#">
      <button id="delete" onclick="WIMod.delete(event);">Delete</button>
      </a>
       <div id="dialog-confirm" title="Remove Module?" class="hide">
  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;">
  </span>Are you sure?</p>
  <p> This will remove the module and any unsaved data.</p>
  <span><button class="btn btn-danger" onclick="WIMod.remove(event);">Remove</button> <button class="btn" onclick="WIMod.close(event);">Close</button></span>
</div><div class="col-' .$columnPreset . '">';
foreach ($elements as $element ) {
 echo $WIElement->main_element();
}
echo '</div>`
 
    }
    

    public function mod_name()
    {
      echo `<div class="col-' .$columnPreset . '">';  $WIElement->main_element($elements); ' echo `</div>;
    }
     
    
}`';


     
      fwrite($NewPage, $contents);
      fclose($NewPage);
    

    $msg = "Successfully created Module";

    $result = array(
                "status" => "success",
                "msg"    => $msg
            );
            
            echo json_encode($result);

        
    }


        public function moduleImg($page_id, $column)
    {
        $sql1 = "SELECT * FROM `wi_modules` WHERE `name`=:name";
        $query1 = $this->WIdb->prepare($sql1);
        $query1->bindParam(':name', $page_id, PDO::PARAM_STR);
        $query1->execute();

        $res = $query1->fetch(PDO::FETCH_ASSOC);
            if ($res > 0) {
                echo ' <img class="img-responsive cp" id="Pic" src="WIMedia/Img/'. $page_id . '/'. $res[$column] . '.PNG" style="width:120px; height:120px;">
                    <button class="btn mediaPic" onclick="WIMedia.changePic()">Change Picture</button>
                                
                            </div>';
            }else{

            echo '
            <div class="col-lg-8 col-md-3 col-sm-2">
                 <img class="img-responsive cp" id="Pic" src="WIMedia/Img/placeholder.png" style="width:120px; height:120px;">
                    <button class="btn mediaPic" onclick="WIMedia.changePic()">Change Picture</button>
                                
                            </div>';
                        }


    }

     public function attrsPanels()
  {
    echo '<div class="Fpanel attrsPanels" style="display:none;">
      <div class="fPanelWrap">
      <ul class="fieldEditGroup fieldEditAttrs">
      <li class="attrsClassNameWrap propWrapper controlCount="1" id="PanelWrapers">
      <div class="propControls">
      <button type="button" class="propRemove propControls"></button>
      </div>
      <div class="propInputs">
      <div class="fieldGroup">
      <label for="className">Class</label>
      <select name="className" id="className">
        <option value="fBtnGroup">Grouped</option>
        <option value="FieldGroup">Un-Grouped</option>
        </select>
      </div>
      </div>
      </li>
      </ul>
      <div class="panelActionButtons">
      <button type="button" class="addAttrs">+ Atrribute</button>
      </div>
      </div>
      <div class="Fpanel optionsPanel">
      <div class="FpanelWrap">
        <ul class="fieldEditGroup fieldEditOptions">
          <li class="OptionsXWrapper propWrapper controlCount_2" id="propCont">
          <div class="propControls">
          <button type="button" class="propOrder propControls"></button>
          <button type="button" class="propOrder propControls"></button>
          </div>
          <div class="propInput FinputGroup">
          <input name="button" type="text" value="button" placeholder="label" id="buttons">
          <select name="button" id="buttonz">
          <option value="button" selected="true">appearing_button</option>
          <option value="reset">Reset</option>
          <option value="submit">Submit</option>
          </select>
          <select name="options" id="optional">
          <option selected="true">default</option>
          <option value="primary">Primary</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          </select>
          </div>
          </li>
        </ul>
        </div>
        <div class="panelActionButtons">
        <button type="button" class="addOptions">+ Options</button>
        </div>
        </div>
        </div>';
  }


}