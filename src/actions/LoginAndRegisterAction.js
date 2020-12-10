
import fetch from 'isomorphic-fetch';

export function Login(data) {
    fetch('https://cs148-python-backend.herokuapp.com/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(res=>{
        if(res.check != null){
        localStorage.setItem('username', res.check);
        window.location.href = "/Home"
        }
      }).catch(err => console.log(err));
    }

export function SignUp(data) {
    fetch('https://cs148-python-backend.herokuapp.com/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(res=>{
        if(res.check != null){
        localStorage.setItem('username', res.check);
        }
      }).catch(err => console.log(err));
}