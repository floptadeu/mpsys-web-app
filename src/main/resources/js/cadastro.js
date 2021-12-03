function CadastraUsuario(){
    console.log("Aqui");
      var usuario = document.getElementById("nome").value;
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;
    
      data = {
        email : email,
        senha : senha,
        usuario : usuario,

      };
    
    $.ajax({
        url: `http://127.0.0.1:4567/usuario/add`,
       method: 'POST',
       dataType: 'json',
       success: success,
       data:{
           data
           
       },
    }).done((data) => {
        alert("Data Loaded" + data);
      console.log(data)
      //window.location = `http://127.0.0.1:4567/usuario/add?email=${email}&senha=${senha}&nome=${usuario}`
    })
}
// $.ajax({
//     type: "POST",
//     url: url,
//     data: data,
//     success: success,
//     dataType: dataType
//   });

function CadastraEmpresa(){
    var empresa = document.getElementById("empresa").value;
    var cnpj = document.getElementById("cnpj").value;
    var email = document.getElementById("email").value;

  $.ajax({
      url: 'http://127.0.0.1:4567/empresa/add',
     method: 'POST',
     dataType: "json",
     data:{
         empresa,
         cnpj,
         email,
     }
  }).done((data) =>{
    console.log(data)
    //window.location = 
  })
}

