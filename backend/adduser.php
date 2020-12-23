<?php
if(isset($_POST['submit']))
{
    try{
        $content = file_get_contents("../data/users.json");
        $users =  json_decode($content);
        $user = new stdClass();
        $user->name = htmlspecialchars( $_POST['name']);
        $user->email = htmlspecialchars($_POST['email']);
        $user->password = sha1(htmlspecialchars($_POST['password']));
        $user->level = 0;
        array_push($users,$user);
        
        $file = fopen("../data/users.json", 'w');
        fwrite($file, json_encode($users));
        fclose($file);
        echo "1";
    }catch(Exception $e){
        echo "0";
    }
    
}else if(isset($_POST['delete']) && $_POST['delete'] == 'submit')
{
    $id = htmlspecialchars($_POST['id']);
    $content = file_get_contents("data.json");
    $users =  json_decode($content);
    for($i=0; $i<count($users);$i++)
    {
        if($users[$i]->id == $id){
            unset($users[$i]);
            $file = fopen("data.json", 'w');
            fwrite($file,json_encode(array_values($users)));
            fclose($file);
            break;
        }
    }
}