

// Fetch the token to login through the data object(User:{user:'',password:''})
export default async function loginUser(credentials) {
    return fetch('https://hidden-dusk-35513.herokuapp.com/users/sign_in',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())

}