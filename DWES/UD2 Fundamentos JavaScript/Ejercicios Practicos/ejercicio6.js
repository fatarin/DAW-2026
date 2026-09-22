const serverResponse = {
    status: 200,
    ip: '192.168.1.45',
    port: 8080,
    token: 'A98F72-ZX',
    sessionDuration: 3600,
    userRole: 'Admin'
  };

  //extraccion mediante función arrow
  const validarAcceso = ({ip, port, token}) =>{
    return 'conectando a IP: ' +
    ip +
    ' por el puerto ' + 
    port + 
    ' con el token ' + 
    token
  };

  console.log(validarAcceso(serverResponse));

  //Extracción directa
  const {userRole} = serverResponse;
  console.log(userRole);