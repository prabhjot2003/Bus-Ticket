
function store(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneno = document.getElementById('phoneno').value;
    let password = document.getElementById('password').value;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
    let getpasswordlength = password.length;
    let phonenolength = phoneno.length;
    
  
    if(name.length == 0){
        alert('Please fill in your name');
  
    }
    else if(email.length == 0){
      alert('Please fill in email');
  
    }
    else if(phonenolength == 10){
      alert('please enter valid phone number');
    
      }
    else if(password.length == 0){
        alert('Please fill in password');
  
    }
    else if(email.length == 0 && password.length == 0){
        alert('Please fill in email and password');
  
    }
    
    else if(getpasswordlength < 7){
        alert('min of 8');
  
    }
    else if(!password.match(numbers)){
        alert('please use 1 number in password');
  
    }
    else if(!password.match(upperCaseLetters)){
        alert('please use 1 uppercase letter in password');
  
    }
    else if(!password.match(lowerCaseLetters)){
        alert('please use 1 lovercase letter in your password');
  
    }
    else if(!password.match(specialcharacter)){
      alert('please use at least 1 special character in your password');
    }
    else{

      let storedata = JSON.parse(localStorage.getItem('formdata')) || [];

      const duplicate = storedata.some(data => data.email === email || data.phoneno === phoneno);
      
      if(duplicate){
        alert('use another email or phone number');
        return;
      }
  
  
  const formdata = {
    name: name,
    email: email,
    phoneno: phoneno,
    password: password
  };
  
  
  storedata.push(formdata);
  
  localStorage.setItem('formdata', JSON.stringify(storedata));
  window.location.href = '../login.html';
        alert('Your account has been created');
  
    }
  document.getElementById('formclear').reset();
    
  }