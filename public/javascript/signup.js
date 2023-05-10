
async function signupFormHandler(event) {
  event.preventDefault();

  // getting data from the form
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  if (username && password && email) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
          email
        }),
        headers: { 'Content-Type': 'application/json' }
      }); 
      const results = await response.json();
      console.log(results);
      
  // check the response status
  if (response.ok) {
      console.log('success');

      // loginHandler();
      document.location.replace('/dashboard');

    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 