$(function() {   
  //When #submit is clicked...
  $("#enquirysubmit").click(function() {

    //Setup variables
    var enquiryname = $("#enquiryname").val();
    var enquiryemail = $("#enquiryemail").val();   
    var enquiryphone = $("#enquiryphone").val(); 		    
    var enquirymessage = $("#enquirymessage").val();

    var dataString = 'enquiryname='+ enquiryname + '&enquiryemail=' + enquiryemail + '&enquiryphone=' + enquiryphone + '&enquirymessage=' + enquirymessage;   

    //If the name is empty
    if(enquiryname==''){
      $('#enquiryname').addClass('field-error');

      $("#enquiryname").click(function() {
        $(this).removeClass('field-error');
      });
    }

    //If the email is empty
    else if(enquiryemail==''){
      $('#enquiryemail').addClass('field-error');

      $("#enquiryemail").click(function() {
        $(this).removeClass('field-error');
      });
    }        

    //If the message is empty
    else if(enquirymessage==''){
      $('#enquirymessage').addClass('field-error');

      $("#enquirymessage").click(function() {
        $(this).removeClass('field-error');
      });
    }        		

    else {
      //Post the form using process.php
      
      $.ajax({
      type: "POST",
      url: "process.php",
      data: dataString,
      success: function(){
        //Fade in the thank you message
        $('.message').fadeIn(1200);
        }
      });
    }

  return false;
  });
});
