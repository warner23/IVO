<?php

function redirect($url)
{
    $url = rtrim(SCRIPT_URL, '/') . '/' . ltrim($url, '/');

    if ( ! headers_sent() )
    {    
        header('Location: '.$url, TRUE, 302);
        exit;
    }
    else
    {
        echo '<script type="text/javascript">';
        echo 'window.location.href="'.$url.'";';
        echo '</script>';
        echo '<noscript>';
        echo '<meta http-equiv="refresh" content="0;url='.$url.'" />';
        echo '</noscript>';
        exit;
    }
}

function get_redirect_page()
{
    $login = new WILogin();

    if ( $login->isLoggedIn() )
    {
        $user = new WIUser(WISession::get("user_id"));
        $role = $user->getRole();
    }
    else
        $role = 'default';

    $redirect = unserialize(SUCCESS_LOGIN_REDIRECT);

    if ( ! isset($redirect['default']) )
        $redirect['default'] = 'index.php';

    return isset($redirect[$role]) ? $redirect[$role] : $redirect['default'];
}


function e($value)
{
    return htmlentities($value, ENT_QUOTES, 'UTF-8', false);
}


function respond(array $data, $statusCode = 200)
{
    $response = new WIResponse();

    $response->send($data, $statusCode);
}
