<?php
function checkLogin($email, $pw)
{
    $content = file_get_contents("../data/users.json");
    $users =  json_decode($content);
    for($i = 0; $i < count($users); $i++)
    {
        if($users[$i]->email == $email && $users[$i]->password == sha1($pw)){
            return $users[$i];
        }
    }
    return false;
}

if(isset($_POST['submit']) && $_POST['submit'] == 'login')
{
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    
    if(checkLogin($email, $password))
        echo json_encode(checkLogin($email, $password));
        
    else
        echo "0";
}