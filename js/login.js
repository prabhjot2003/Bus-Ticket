function successfullogin(){
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;
  
    const storedatar = JSON.parse(localStorage.getItem('formdata')) || [];
    
    const user = storedatar.find(data => data.email === email);
  
    if(user && user.password === password){
      alert('Login successful')
      window.location.href = '../navbarnus.html';
  
    }
    else{
      alert('invalid email/phone no or password. please try again.');
    }
  }