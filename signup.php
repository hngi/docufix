<?php
include('connect.php');

$message = '';
    
if(isset($_POST['submit'])){
        $userFirstName = mysqli_escape_string($conn, $_POST ['firstname']);
        $userLastName = mysqli_escape_string($conn, $_POST ['lastname']);
        $userEmail = mysqli_escape_string($conn, $_POST['email']);
        $userNewPassword = mysqli_escape_string($conn, $_POST['password']);
        $userVerifyPassword = mysqli_escape_string($conn, $_POST['verify_password']);
       
        if(empty($userFirstName) || empty($userLastName) || empty($userEmail) || empty($userNewPassword) || empty($userVerifyPassword)){
            die ("All fields are Required");
            }
            if ( strlen ( $userFirstName ) < 2 || strlen ( $userFirstName ) > 50) {
                $message = '<div class="alert alert-danger" role="alert">First name must be between 1 and 55 characters</div>';
                echo $message;
                }
                if ( strlen ( $userLastName ) < 2 || strlen ( $userLastName ) > 50) {
                $message = '<div class="alert alert-danger" role="alert">Last name must be between 1 and 55 characters</div>';
                echo $message;
                }
                if ( strlen ( $userEmail ) < 2 || strlen( $userEmail ) > 250) {
                $message = '<div class="alert alert-danger" role="alert">Email must be between 1 and 254 characters</div>';
                echo $message;
                }
                if ( strlen ( $userNewPassword ) < 8) {
                $message = '<div class="alert alert-danger" role="alert">Password should be at least 8 characters long</div>';
                echo $message;
                }
                if($userNewPassword === $userVerifyPassword){
                    $userNewPassword = password_hash($userNewPassword, PASSWORD_DEFAULT);
                }
                else{
                    die ("Error: Password does not match". "<br>");
                }




                $sql = "SELECT email FROM users WHERE email = '$userEmail' ";
                $result = mysqli_query($conn, $sql);
                if (mysqli_num_rows($result) > 0) {
                  die('email address exists');
                   }
                else { 

                    $sql = "INSERT INTO users(firstname, lastname, email, password)
                    VALUES('$userFirstName', 
                            '$userLastName',
                            '$userEmail',
                            '$userNewPassword'       )";
                           
                           $result = mysqli_query($conn , $sql);
                    if($result){
                                    $message .= '<div class="alert alert-success" role="alert">
                                    Record Saved Successfully <button class="btn"><a href = "login.php">Home</a></button></div>';
                                            echo ($message);

                    }
                    else{
                        $message .= '<div class="alert alert-danger" role="alert">
                        Record not Saved ' . mysqli_error($conn) . '<button class="btn"><a href = "index.html">Home</a></button>
                        </div>';
                    
                    }

                }


    }
 ?>


<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="theme-color" content="#333" />
		<link rel="manifest" href="manifest.json" />
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/833e0cadb7.js" crossorigin="anonymous"></script>
         <link rel="manifest" href="manifest.json">
        <title>Docufix | Signup</title>

        <style>
             body {
                 font-family: 'Rubik', sans-serif;
                 margin: 1rem;
                 height: 100vh;
             }
             
             .div-wrapper {
                 width: 100%;
                 position: absolute;
                 bottom: 0;
             }
             
             .div-wrapper img {
                 position: relative;
                 display: block;
                 float: left;
                 width: 350px;
             }
             
             .login-section {
                 /* margin: 0;
                 position: absolute;
                 top: 100%;
                 left: 50%;
                 -ms-transform: translate(-50%, -50%);
                 transform: translate(-50%, -50%); */
             }
             
             form {
                 display: flex;
                 flex-direction: column;
                 align-items: center;
             }
             
             .forgot__pass__link {
                 padding-right: 200px;
                 margin-bottom: -15px;
             }
             
             .form-control {
                 border: 1px solid rgba(0, 0, 0, 0.15);
                 border-radius: 0;
                 height: 50px;
                 margin-bottom: 10px;
                 padding: 25px;
                 font-style: normal;
                 font-weight: normal;
                 font-size: 14px;
                 line-height: 17px;
                 color: rgba(0, 0, 0, 0.56);
             }
             
             /* .spacing {
                 margin-top: 250px;
             } */
             
             .login-btn {
                 border-radius: 0;
                 background: #2B4CF2;
                 width: 31%;
                 font-weight: bold;
             }
             
             .bottom-ellipse {
                 /* background: rgba(33, 89, 168, 0.05); */
                 transform: rotate(-162.89deg);
                 width: 668px;
                 top: 300px;
                 position: fixed;
                 left: -55px;
                 z-index: -99;
             }
             
             input {
                 padding: 25px;
                 font-style: normal;
                 font-weight: normal;
                 font-size: 14px;
                 line-height: 17px;
                 color: rgba(0, 0, 0, 0.56);
                 margin-bottom: 300px;
             }
             
             .form-align {}
             
             .signUP {
                 font-style: normal;
                 font-weight: 500;
                 font-size: 25px;
                 line-height: 30px;
                 margin-bottom: 1rem;
             }
             
             .welcome {
                 padding-bottom: 2em;
             }
             
             .Already-acc {
                 margin-top: 1em;
                 font-size: 18px;
                 line-height: 21px;
                 font-style: normal;
                 font-weight: normal;
             }
             
             .Already-acc a {
                 text-decoration: none;
             }
             
             .Already-acc span {
                 color: #2B4CF2;
             }
             
             .Already-acc span:hover {
                 color: #2B4CF2;
                 text-decoration: underline;
             }
             
             .okmessage {
                color: #0000FF;
                margin-bottom: 1em;
                text-align: center;
                width: 100%;
             }
        </style>
    </head>



    <body class="">

        <section class="container login-section ">

            <h3 class="text-center signUP">Signup</h3>
            <form class="form-align" method="POST" action="">
                <div class="form-group col-md-4 ">
                    <input type="text" class="form-control" id="name" name="firstname" placeholder="First Name" pattern="[a-zA-Z]{1,}" data-toggle="tooltip" data-placement="bottom" title="Enter Your First Name" required><span class="error"></span>
                </div>

                <div class="form-group col-md-4 ">
                    <input type="text" class="form-control" id="name" name="lastname" placeholder="Last Name" pattern="[a-zA-Z]{1,}" data-toggle="tooltip" data-placement="bottom" title="Enter Your Last Name" required><span class="error"></span>
                </div>
              
                <!-- <div class="form-group col-md-4">
                    <input type="text" class="form-control" aria-describedby="usernameHelp" placeholder="Your username" id="username" name="username" pattern="[0-9a-zA-Z]{3,}" data-toggle="tooltip" data-placement="bottom" 
                    title="Enter username (must be more than 3 character)" required><span class="error"> </span>
                </div> -->

                <div class="form-group col-md-4 ">
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Your email address" id="emailAddress" name="email"  data-toggle="tooltip" data-placement="bottom" title="Please enter a valid Email Address" required><span class="error"></span>
                </div>

                <div class="form-group col-md-4">
                    <input class="form-control" type="password" name="password" id="password" class="form-control" placeholder="Your password" data-toggle="tooltip" data-placement="bottom"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>     
                     <small id="passwordHelpBlock" class="form-text text-muted">
                     Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
                    </small>  <span class=""></span>
                </div>
                <div class="form-group col-md-4">
                    <input type="password" class="form-control" name="verify_password" id="confirmPassword" placeholder="Confirm password" data-toggle="tooltip" data-placement="bottom" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><span class="error"></span>
                </div>
                <input id="submitData" name="submit" type="submit" class="btn btn-primary login-btn" value = "Create Account"/>  

               

                <p class="Already-acc">Already have an account?&nbsp;&nbsp; <a href="login.html"><span>Sign in</span></a></p>
            </form>
            <span class="error"></span>
        </section>


        <img src="images/Ellipse.png" class="img-fluid bottom-ellipse " alt="">


        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="./js/account.js" ></script>
         <script src="app.js"></script>
    </body>

    </html>