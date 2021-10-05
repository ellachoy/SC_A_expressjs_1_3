fetch('http://localhost:3000/enemies')
  .then(response => response.json())
  .then(json => {
    json.forEach(
      elt =>
        (document.querySelector('p').innerHTML +=
          'Name:' + elt.name + '<br>' + 'email:' + elt.email + '<br>')
    )
  })
