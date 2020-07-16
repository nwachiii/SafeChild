<?php 
        
	$email = $_POST['email'];

    // Only process the form if $_POST is not empty
    if ( ! empty($_POST)) {

        //connect to MySQL
    // $mysqli = new mysqli( 'localhost', 'sql2354768', 'rZ2*hT3!', 'sql2354768' );
    	$conn = new mysqli( 'localhost', 'root', '', 'sql2354768' );

        //Check our connection.
    if ( $conn -> connect_error ) {
        die( 'Connection Failed : '.$conn->connect_errno . ': '.$conn->connect_error);
    }else {
    	$stmt = $conn->prepare("insert into subscribers(email) values(?)");
    	$stmt->bind_param("s", $email);
    	$stmt->execute();
    	echo "Registration Successful! You'll get notified when SafeChild App is launched";
    	$stmt->close();
    	$conn->close();

    }

    //     //Insert form data
    // $sql = "INSERT INTO subscribers (email) VALUES ( '{$mysqli->real_escape_string($_POST['email'])}')";
    // $insert = $mysqli->query($sql);
    
    //     //Print response from MySQL
    // if ( $insert ) {
    //     echo "Success! Row ID: {$mysqli->insert_id}";
    // } else {
    //     die("Error: {$mysqli->errno} : {$mysqli->error}");
    // }

    //     //close connection
    // $mysqli->close();

}
?>