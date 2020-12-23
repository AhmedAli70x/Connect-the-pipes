<?php
function updateLevel($email)
{
    $content = file_get_contents("../data/users.json");
    $users =  json_decode($content);
    for($i = 0; $i < count($users); $i++)
    {
        if($users[$i]->email == $email)
        {
           $users[$i]->level = intval($users[$i]->level) + 1;
           $file = fopen("../data/users.json", 'w');
            fwrite($file, json_encode($users)); 
            fclose($file);
            return true;
        }
    }
    return false;
}
if(isset($_POST['submit']))
{
    $email = htmlspecialchars($_POST['email']);
    if(updateLevel($email))
    echo "1";
    else
    echo "0";
}