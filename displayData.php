<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table>
    <?php
      $servername = "o2olb7w3xv09alub.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
      $username = "fz68979soeqomim4";
      $password = "pn1jva7oc3zdlmpj";
      $dbname = "molga4fog3ul6cp2";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
      // Check connection
      if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
      }

      $sql = "SELECT driverName, rating FROM drivers";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
      echo "<table><tr><th>Name</th><th>Rating</th></tr>";
      // output data of each row
      while($row = $result->fetch_assoc()) {
      echo "<tr><td>".$row["driverName"]."</td><td>".$row["rating"]."</td></tr>";
      }
      echo "</table>";
      } else {
      echo "0 results";
      }
      $conn->close();
    ?>
  </table>
</body>
</html>


    </table>
