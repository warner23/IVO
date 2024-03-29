<?php

ini_set('display_errors',1);
error_reporting(E_ALL);


require 'WIClass/WI.php';

$token = $register->socialToken();
WISession::set('WI_social_token', $token);
$register->botProtection();


spl_autoload_register(function($class)
{
	require_once 'WIClass/' . $class . '.php';
});

$admin         = new WIAdmin(WISession::get("user_id"));
$adminInfo     = $admin->getInfo();
$adminDetails  = $admin->getDetails();
$mod            = new WIModules();
$page           = new WIPage();
$plug           = new WIPlugin();
$site           = new WISite();
$img            = new WIImage();
$vid            = new WIVideos();
$dashboard      = new WIDashboard();
$adminChat      = new WIAdminChat();
$Info           = new WIUserInfo();
$pagination     = new WIPagination();
$perm           = new WIPermissions();
$editor         = new WIEditor();
$modal          = new WIModal();
$blog           = new WIBlog();
$forum          = new WIForum();
$shop           = new WIShop();
$products       = new WIProduct();


?>
