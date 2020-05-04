console.log('Login Page');

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', () => {
  const data = {
    Username: username.value,
    Password: password.value
  };

  axios.post('/login', data).then(results => {
    console.log(results.data);
    sessionStorage.setItem('User', JSON.stringify(results.data.Data));
    if (results.data.Data.isAdmin === true) {
      location.href = '/Admin'
    } else {
      location.href = '/Welcome'
    }
  })
})