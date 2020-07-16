<?php 
        
    $email = $_POST['email'];

        //connect to MySQL
        $conn = new mysqli( 'sql2.freesqldatabase.com', 'sql2354768', 'rZ2*hT3!', 'sql2354768' );

        //Check our connection.
    if ( $conn -> connect_error ) {
        die( 'Connection Failed : '.$conn->connect_error);
    }else {
        $stmt = $conn->prepare("insert into subscribers(email) values(?)");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        echo "Registration Successful! You'll get notified when SafeChild App is launched";
        $stmt->close();
        $conn->close();

    }

?>