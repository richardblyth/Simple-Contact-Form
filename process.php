<?php
if($_POST){    

  //Who to send the form to
  $to = "someone@email.com";
  //Email Subject
  $subject = "A new enquiry from the website!";

  //Set the email headers
  $headers= 'From: '.$_POST['enquiryemail'] . " " .'Bcc: someone@email.com' . " " . 'Reply-To: someone@email.com' . " " .'X-Mailer: PHP/' . phpversion();

  //Construct the email body
  $message = "Name: ".$_POST['enquiryname']."\n";
  $message .= "Contact Number: ".$_POST['enquiryphone']."\n";
  $message .= "E-mail Address: ".$_POST['enquiryemail']."\n\n";
  $message .= "Message: ".$_POST['enquirymessage']."\n";

  //Send the email
  mail($to, $subject, $message, $headers);
}
?>