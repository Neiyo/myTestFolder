<?php
  $a = isset( $_POST['test'] ) ? $_POST['test'] : '';
  if( $a == 'ok' ){
    echo 'success';
  }
  else{
    echo 'failed';
  }
?>
