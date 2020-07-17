<?php 
        
    $email = $_POST['email'];

        //connect to MySQL
        $conn = new mysqli( 'sql2.freesqldatabase.com', 'sql2354768', 'rZ2*hT3!', 'sql2354768' );


        //Check our connection.
    if ( $conn -> connect_error ) {
        die( 'Connection Failed : '.$conn->connect_error);
    }else {
        $sql = "INSERT INTO subscribers(email) VALUES ( '{$conn->real_escape_string($_POST['email'])}')";

        $insert = $conn->query($sql);
    
        //Print response from MySQL
        if ( $insert ) {
        echo "Registration Successful! You'll get notified when SafeChild App is launched";
        } else{
            echo "registration failed";
        }

        $conn->close();

        header("refresh:2; url=index.html");

    }

?>