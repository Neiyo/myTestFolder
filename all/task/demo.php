<?php
  $data = isset($_POST['data']) ? $_POST['data'] : '';
  $a = ["a","b"];
  if($data != ''){
    //$data = json_decode($data);
    var_dump($data);
    echo $data['fname'];
    var_dump($a);
    //echo $jsonString;
    echo 1;
  }

  /*$responseText = 'false';
  if($fname == 'Bill'){
    $responseText = $fname;
  }
  if($lname == 'Gates'){
    $responseText .= $lname;
  }*/
  //echo json_encode($jsonString);
?>
