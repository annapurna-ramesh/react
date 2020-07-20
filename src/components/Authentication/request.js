import axios from 'axios';
function login(username,password)
{
  console.log(username,password)
  axios({
  method: 'post',
  url:'http://localhost:8000/auth/login/',
  data: {
    username: username,
    password: password
  },
  contentType:'application/json',
}).then(function (response) {
   return alert("Sign in successfull")
  })
  .catch(function (error) {
    console.log(error)
    return alert("Please check email id and password")
  });
}

function signup(username,password,confirm_password)
{
    console.log(username,password,confirm_password)
    if(password!== confirm_password)
    {
        return alert('Passwords dont match')
    }
    else
    {
      axios({
        method: 'post',
        url:'http://localhost:8000/auth/signup/',
        data: {
          username: username,
          password: password,
          confirm_password: confirm_password
        },
        contentType:'application/json',
        
      }).then(function (response) {
            return alert("Successful");
            // console.log(response);
          })
          .catch(function (error) {
            return alert(error)
            //console.log(error);
          });
    }

}

export {login,signup}