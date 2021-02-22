//biblioteca de email
// function enviarEmail(para, id);

// console.log(para,id,assunto,texto)

// class EnviarEmailUsuario{

//     send(){
//         enviarEmail("jefersomix@hotmail.com",9999,"Olá!","tudo bem?")
//     }
// }

interface DadosDeEnvioEmail{
    para: String;
    id: String;
    assunto: String;
    texto: String;
}

//modelo de requisição da interface, desestruturada {} dentro de chaves.
function enviarEmail({para,id,assunto,texto} :DadosDeEnvioEmail){
   
    console.log(para,id,assunto,texto);

}

class EnviarEmailUsuario{
    send(){
        enviarEmail({
            para:"jefersomix@hotmail.com",
            id:"9999",
            assunto:"Olá!",
            texto:"tudo bem?"}); 
    }
}