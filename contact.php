<!DOCTYPE html>
<html lang="en">
  <head>
  	<title>A simple contact form</title>
  	<meta name="description" content="A simple website contact form which uses HTML5, PHP and jQuery">
  	<meta charset="UTF-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=Edge">

    <style>
      div.container {
        margin: 0 auto;
        width: 800px;
      }
      div.message {
        border: 2px solid green;
        padding: 2em;
        display: none;
      }
      form {
        margin: 0;
        padding: 0;
        width: 100%;
      }
      form div {
        margin: 0 0 2em 0;
        padding: 0;
        width: 100%;
      }
    </style>
  </head>

  <body>

    <div class="container">

    	<form method="post">

  	  	<div class="message">Thank you, your message was sent successfully.</div>

  	  	<div>
  	  		<label for="enquiryname">Your name *</label>
  	  		<input id="enquiryname" type="text" name="enquiryname" placeholder="e.g. John Smith" tabindex="1" required>
  	  	</div>

  	  	<div>
  	  		<label for="enquiryemail">Your e-mail address *</label>
  	  		<input id="enquiryemail" type="email" name="enquiryemail" placeholder="e.g. johnsmith@google.com" tabindex="2" required>
  	  	</div>

  	  	<div>
  	  		<label for="enquiryphone">Your contact number</label>
  	  		<input id="enquiryphone" type="tel" name="enquiryphone" placeholder="e.g. 01234 567890" tabindex="3">
  	  	</div>

  	  	<div>
  	  		<label for="enquirymessage">Your message *</label>
  	  		<textarea id="enquirymessage" name="enquirymessage" rows="4" cols="10" placeholder="e.g. Hello" tabindex="4" required></textarea>
  	  	</div>

  	  	<div>
  	  		<input id="enquirysubmit" type="submit" name="enquirysubmit" value="Send">
  	  	</div>

    	</form>

    </div>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="contact.js"></script>

  </body>
</html>