<?php
require 'database.php';


if (isset($_POST['password']) && isset($_POST['username']))
{
    $username = $_POST['username'];
    $password = password_hash( $_POST['password'], PASSWORD_DEFAULT);
    $sql = "INSERT INTO `users`(`username`, `password`) VALUES ('$username', '$password')";
    if ($connection->query($sql) === TRUE) {
        echo "New record created successfully";
        header("Location: login.php");
      } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
      }
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
                form {
            display: flex;
            flex-direction: column;
            width: 200px;
            margin: 10px auto;
        }
    </style>
    <title>Sign UP</title>
</head>
<body>
    <form action="signup.php" method="post">
        <label for="username">Username: </label>
        <input type="text" name="username" id="username">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password">
        <button type="submit">LOGIN</button>
    </form>
</body>
</html>