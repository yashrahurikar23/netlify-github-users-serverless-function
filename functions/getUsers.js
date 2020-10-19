const axios =  require('axios');

exports.handler = function(event, context, callback) {
  const { API_BASE_URL, CLIENT_ID, CLIENT_SECRET } = process.env;

  const URL = `${API_BASE_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  // Send user response
  const send = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
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