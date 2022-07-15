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

        p#failed-login {
            font-family: monospace;
            margin: 0px;
            text-align: center;
            border: solid #ff0000 2px;
            border-radius: 10px;
            color: whitesmoke;
            background: #ff0909;
        }

        a#signup {
            text-align: center;
            align-items: flex-start;
            box-sizing: border-box;
            margin: 0em;
            padding: 1px 6px;
            border-width: 2px;
            border-image: initial;
            background: #efefef;
            border-color: #efefef;
            text-decoration: none;
        }


    </style>
    <title>Login</title>
</head>
<body>

    <form action="results.php" method="post">
    <?php
    $error = "";
        if (isset($_GET['login_failed'])){
            $error =  "<p id='failed-login'>Incorrect Password</p>";
        }
        else{
        }
        echo $error;
        ?>
        <label for="username">Username: </label>
        <input type="text" name="username" id="username">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password">
        <button type="submit">LOGIN</button>
        <a id="signup" href="signup.php">SIGN UP</a>
    </form>
</body>
</html>