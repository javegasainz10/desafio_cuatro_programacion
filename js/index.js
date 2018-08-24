var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]

  function search(nameSearch) {
    for (let i = 0; i < studentsList.length; i++) {
      var output = studentsList[i].lastName;

      if (input === output) {
        var a = i + 1;
      } else {
        var a = 'Error';
      }
    }
    return a;
  }

  var input = prompt('Ingrese el apellido del estudiante.');

  var result = search(input);

  if (result === 'Error') {
    alert('El estudiante no existe.')
  } else {
    alert('Se encontró al estudiante en la posición ' + result);}