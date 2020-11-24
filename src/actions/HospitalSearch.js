import fetch from 'isomorphic-fetch';

export function ZipSearch(data) {
    fetch('https://cs148-python-backend.herokuapp.com/api/hospital/zip_code', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(res=>{
        if(res.hospital != null){
            var hospitals = res.hospital;
            localStorage.setItem('hospitals', JSON.stringify(hospitals));
        }
      }).catch(err => console.log(err));
    }

export function NameSearch(data) {
    fetch('https://cs148-python-backend.herokuapp.com/api/hospital/name', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(res=>{
        if(res.hospital != null){
            var hospitals = res.hospital;
            localStorage.setItem('hospitals', JSON.stringify(hospitals));
        }
      }).catch(err => console.log(err));
}