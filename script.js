function getIP() {
    return fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => data.ip);
  }
  
  function showIP() {
    const message = document.getElementById("message");
    getIP().then(ip => {
      message.innerHTML = "Você foi hackeado, estou mandando trojan por servidor local no seu navegador por cookies :) SEU ENDEREÇO DE IP: " + ip;
    });
  }
  