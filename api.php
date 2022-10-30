<?php 
include_once("index.html");
?>
<?php
$con mysqli_connect("localhost", "fz68979soeqomim4", "pn1jva7oc3zdlmpj", "molga4fog3ul6cp2", "3306")
$response = array();
if($con){
    $sql "select * from drivers";
    $result = $mysqli_query($con, $sql);
    if(result){
        header("Content-Type: JSON");
        $i=0;
        while($row = mysqli_fetch_assoc($result)){
            $response[$i]['id'] = $row ['id'];
            $response[$i]['driverName'] = $row ['driverName'];
            $response[$i]['rating'] = $row ['rating'];
            $response[$i]['dateHired'] = $row ['dateHired'];
            $response[$i]['isDeleted'] = $row ['isDeleted'];
            $i++;

        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
else{
    echo "Database Connection Failed";
}
