 function verificar() {
      const resposta = document.getElementById("senha").value.toLowerCase();
      const correta = "acha"; 

      if (resposta === correta) {
        document.getElementById("fase1").style.display = "block";
        document.getElementById("mensagem").innerText = "";
      } else {
        document.getElementById("mensagem").innerText = "Nada encontrado...";
      }
    }