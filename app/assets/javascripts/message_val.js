$(function(){


  var nameValid = false;
  var textValid = false;
  var nameField = $('#message_name')
  var textField = $('#message_text')
  
  var submitButton = $("[name='commit']")
  console.log(submitButton)

  function buttonSwitcher () {   
    if (nameValid && textValid) {
      $(submitButton).removeAttr("disabled");
    } else {
        $(submitButton).attr("disabled", 'disable');
    }
   }

  var NameValidator = function (e){
    var jnameField = $(this);
  
    
    nameValid = jnameField.val().length>4; 
    console.log(nameValid)

    if (nameValid) {
      nameField.removeClass("error");
      
    } else {
      nameField.addClass("error");
    }
    buttonSwitcher()
  };

  var TextValidator = function (e){
    var jtextField = $(this);
  
    
    textValid = jtextField.val().length>4; 
    console.log(textValid)

    if (textValid) {
      textField.removeClass("error");
      
    } else {
      textField.addClass("error");
    }
    buttonSwitcher()
  };

     
  $(nameField).keyup(NameValidator);
  $(nameField).focus(NameValidator);
   
  $(textField).keyup(TextValidator);
  $(textField).focus(TextValidator);

 
  buttonSwitcher();
   



 

});