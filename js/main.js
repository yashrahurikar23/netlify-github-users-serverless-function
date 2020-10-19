const fetchUsers = async() => 
  await (await fetch('http://localhost:9000/getUsers')).json();

fetchUsers().then(response => {
  usersList = document.getElementById('users');

  console.log(response)

  response.forEach(user => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    const link = document.createElement('a');
    link.appendChild(document.createTextNode(user.login));
    link.href = user.html_url;
    link.target = '_blank';
    li.appendChild(link);
    usersList.appendChild(li);
  })
})
