<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

   <?php
   
   date_default_timezone_set('PRC');

   $str='2019-11-11';


   $time=strtotime($str);
   echo  $time;



   echo  date($time);


   ?> 
</body>
</html>