<?php
require 'database.php';

if ($connection->connect_error) {
    die("Connection Failed: " . $connection->connect_error);
}

if (isset($_POST['password']) && isset($_POST['username']))
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT `password` FROM `users` WHERE `username` = '$username'";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row['password'])){
        }
        else {
            header("Location: login.php?login_failed=1");
            $connection->close();
            exit();
        }
    }
}

$tableData = "";
$sql = "SELECT * FROM `haider_s_dads`";
$result = $connection->query($sql);
if ($result->num_rows > 0) {
    for ($i=0; $i < 3; $i++) { 
        $row = $result->fetch_assoc();
        $tableData .= "<tr class=row>";
        $tableData .= "<td>" . $row['name'] . "</td>";
        $tableData .= "<td><img src=".$row['image'] . " ></td>";
        $tableData .= "</tr>";
    }
}
else {
    $tableData = "NO DADS FOUND";
}

$connection->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        tr#column-name {
            background-color: #a6bed3;
            text-align: center;
        }
        body > table > tbody > tr.row > td > img {
            margin: auto;
            border-radius: 50%;
            height: 50px;
            width: 50px;
        }
        body > table > tbody > tr.row > td:nth-child(2) {
            text-align: center;
        }
        body > table > tbody > tr.row  {
            background-color: #a6be53;
        }
    </style>
    <title>Results</title>
</head>
<body>
    <Table>
        <thead>HAIDER'S DADS</thead>
        <tr id= column-name>
            <td>FATHER'S NAME</td>
            <td>FATHER'S IMAGE</td>
        </tr>
        <?php echo $tableData; ?>
    </Table>
</body>
</html>