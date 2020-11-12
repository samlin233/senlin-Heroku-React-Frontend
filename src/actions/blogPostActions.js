import fetch from 'isomorphic-fetch';

export function fetchBlogPosts() {
    return fetch('https://cs148-python-backend.herokuapp.com/api/write', {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function fetchBlogPost(id) {
    return fetch('https://cs148-python-backend.herokuapp.com/api/write/' + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function createBlogPost(data) {
    fetch('https://cs148-python-backend.herokuapp.com/api/write', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {            
            return response.json()
                .catch(() => {
                    // Couldn't parse the JSON
                    throw new Error(response.status);
                })
                .then(({message}) => {
                    // Got valid JSON with error response, use it
                    throw new Error(message || response.status);
                });
        }
        // Successful response, parse the JSON and return the data
        const json = response.json();
        console.log(json);
        return response.json();
    }).catch(err => err);
}

export function updateBlogPost(id, data) {
    return fetch('https://cs148-python-backend.herokuapp.com/api/write/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteBlogPost(id) {
    return fetch('https://cs148-python-backend.herokuapp.com/api/write/' + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => {
        return res;
    }).catch(err => err);
}

