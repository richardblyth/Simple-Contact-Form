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
      $('#enquiryname').css({'background-color':'#FAFFBD'});

      $("#enquiryname").click(function() {
        $(this).animate({'background-color':'#FFFFFF'}, 500);
      });
    }

    //If the email is empty
    else if(enquiryemail==''){
      $('#enquiryemail').css({'background-color':'#FAFFBD'});

      $("#enquiryemail").click(function() {
        $(this).animate({'background-color':'#FFFFFF'}, 500);
      });
    }        

    //If the message is empty
    else if(enquirymessage==''){
      $('#enquirymessage').css({'background-color':'#FAFFBD'});

      $("#enquirymessage").click(function() {
        $(this).animate({'background-color':'#FFFFFF'}, 500);
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