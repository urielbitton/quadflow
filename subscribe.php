<?php 
    if(isset($_POST['submit'])){
        $to = "support@quadflowapp.com"; // this is your Email address
        $from = $_POST['subemail']; // this is the sender's Email address
        $subject = "Quadflow App Subscribe Form";
        $headers = "From: " . strip_tags($_POST['subemail']) . "\r\n";
        $headers .= "Reply-To: ". strip_tags($_POST['subemail']) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        $message = '<h4>Hi Uriel, you have a new subscriber from Quadflow App!</h4>
        <br><br>
        <ul style="list-style-type:none">
            <li>New Subscriber</li>
            <li>Email: '.$from.'</li>
        </ul>  
         
        <small>Quadflow App. 2020. Design by Flexr Designs.</small>
        ';
        

        mail($to,$subject, $message,$headers);

        header('Content-Type: application/json');
        echo json_encode(['status' => 'success', 'message' => 'The mail sends successfully']);
        exit();
    }
?> 