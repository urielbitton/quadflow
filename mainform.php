<?php 
    if(isset($_POST['submit'])){
        $to = "support@quadflowapp.com"; // this is your Email address
        $from = $_POST['mail']; // this is the sender's Email address
        $name = $_POST['name'];
        $info = $_POST['info'];
        $subject = "Quadflow General Inquiry";
        $headers = "From: " . strip_tags($_POST['mail']) . "\r\n";
        $headers .= "Reply-To: ". strip_tags($_POST['mail']) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        $message = '<h4>Hi Uriel, you have a new form message from Quadflow App.</h4>
        <br><br>
        <ul style="list-style-type:none">
            <li>Name: '.$name.'</li>
            <li>Email: '.$from.'</li>
            <li>Message: '.$info.'</li>
        </ul> 
         
        <small>Quadflow App. 2020. Design by Flexr Designs.</small>
        ';
        

        mail($to,$subject, $message,$headers);

        header('Content-Type: application/json');
        echo json_encode(['status' => 'success', 'message' => 'The mail sends successfully']);
        exit();
    }
?>