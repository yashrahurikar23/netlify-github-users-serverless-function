const axios =  require('axios');

exports.handler = function(event, context, callback) {
  const API_BASE_URL = 'https://api.github.com/users';
  const CLIENT_ID = 'db7a935420f0230afb91';
  const CLIENT_SECRET = 'afd8a5cdd366638e3dcf7c07d45b6c0fb034d4c0';
  
  const URL = `${API_BASE_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  // Send user response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }

  // Perform API call
  const getUsers = () => {
    axios.get(URL)
      .then(response => send(response.data))
      .catch(error => send(error.response))
  }

  if(event.httpMethod === 'GET') {
    getUsers();
  }
}