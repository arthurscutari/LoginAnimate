const verSenha = document.querySelector(".verSenha");
const cobrirSenha = document.querySelector(".apagarSenha");
const inputSenhaLogin = document.querySelector(".input-Senha-Login");


/*Váriaveis do estado do Banner*/ 
var estadoBanner = 1;
const btnBannerP = document.querySelector(".p-btn-banner");
const divTituloBanner = document.querySelector(".div-titulo-banner-login");
const h1Banner = document.querySelector(".h1-banner");
const h2Banner = document.querySelector(".h2-banner");

const divBtnBanner = document.querySelector(".div-btn-banner-login");
/*Variáveis para os botões*/
const btnMoverBanner = document.querySelector(".btn-banner-login");
const btnRegistro = document.querySelector(".btn-registro");
const divBanner = document.querySelector(".div-banner-login");
/*Variáveis para animar as divs do login*/
const divLoginTitulo = document.querySelector(".div-titulo-login");
const divLoginPRedes = document.querySelector(".div-p-redes");
const divLoginRedes = document.querySelector(".div-redes-login");
const divLoginPForm = document.querySelector(".div-p-form");
const divLoginUsuario = document.querySelector(".div-form-usuario-login");
const divLoginSenha = document.querySelector(".div-form-senha-login");
const divLoginBtn = document.querySelector(".div-btn-login");
const divLoginEsqueceu = document.querySelector(".div-p-esqueceu");
const divLoginCopyright = document.querySelector(".div-rodape-login");
/*Variáveis para animar as divs do registro*/
const divRegistroTitulo = document.querySelector(".div-titulo-registro");
const divRegistroPForm = document.querySelector(".div-p-titulo-registro");
const divRegistroUsuario = document.querySelector(".div-form-usuario-registro");
const divRegistroEmail = document.querySelector(".div-form-email-registro");
const divRegistroSenha = document.querySelector(".div-form-senha-registro");
const divRegistroResenha = document.querySelector(".div-form-resenha-registro");
const divRegistroBtn = document.querySelector(".div-btn-registro");
const divRegistroCopyrigth = document.querySelector(".div-rodape-registro");

btnMoverBanner.addEventListener("click", () => {

  divTituloBanner.classList.toggle("background-anima-border");
  divBtnBanner.classList.toggle("background-anima");

  if (estadoBanner == 1)
  {

  

    divBanner.classList.add("animaBanner");

    estadoBanner = 0;

    btnBannerP.innerHTML = "Logar";

    /*Animações do Banner*/

    

    h1Banner.classList.remove("animacao-Banner-Saida-2");
    h2Banner.classList.remove("animacao-Banner-Saida-2");
    h1Banner.classList.remove("animacao-Banner-Entrada-2");
    h2Banner.classList.remove("animacao-Banner-Entrada-2");
    btnMoverBanner.classList.remove("animacao-Banner-Saida-2");
    btnMoverBanner.classList.remove("animacao-Banner-Entrada-2");

    h1Banner.classList.add("animacao-Banner-Saida");
    h2Banner.classList.add("animacao-Banner-Saida");
    btnMoverBanner.classList.add("animacao-Banner-Saida");

    setTimeout(()=>{
      h1Banner.classList.add("animacao-Banner-Entrada");
      h2Banner.classList.add("animacao-Banner-Entrada");
      btnMoverBanner.classList.add("animacao-Banner-Entrada");
      h1Banner.innerHTML = "Conta criada?";
      h2Banner.innerHTML = "Parabéns pelo seu cadastro! Agora você pode fazer o login e aproveitar todos os recursos do nosso sistema.";
    },300)
    /*Animações login*/
    divLoginTitulo.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginPRedes.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginRedes.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginPForm.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginUsuario.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginSenha.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginBtn.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginEsqueceu.classList.add("animacao-Mover-Opacidade-Login-Saida");
    divLoginCopyright.classList.add("animacao-Mover-Opacidade-Login-Saida");

    divLoginTitulo.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginPRedes.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginRedes.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginPForm.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginUsuario.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginSenha.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginBtn.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginEsqueceu.classList.remove("animacao-Mover-Opacidade-Login-Entrada");
    divLoginCopyright.classList.remove("animacao-Mover-Opacidade-Login-Entrada");

     /*Código de animação do registro*/ 

     divRegistroTitulo.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroPForm.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroUsuario.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroEmail.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroSenha.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroResenha.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroBtn.classList.add("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroCopyrigth.classList.add("animacao-Mover-Opacidade-Registro-Entrada");

     divRegistroTitulo.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroPForm.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroUsuario.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroEmail.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroSenha.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroResenha.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroBtn.classList.remove("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroCopyrigth.classList.remove("animacao-Mover-Opacidade-Registro-Saida");

  }
  else
    {
      btnBannerP.innerHTML = "Cadastre-se";

    divBanner.classList.remove("animaBanner");
    estadoBanner = 1;
    /*Animações do Banner */

    h1Banner.classList.remove("animacao-Banner-Saida");
    h2Banner.classList.remove("animacao-Banner-Saida");
    btnMoverBanner.classList.add("animacao-Banner-Saida");

    h1Banner.classList.add("animacao-Banner-Saida-2");
    h2Banner.classList.add("animacao-Banner-Saida-2");
    btnMoverBanner.classList.add("animacao-Banner-Saida-2");
    /*
    btnMoverBanner.classList.toggle("animacao-Banner-Saida");
    */
    setTimeout(()=>{
      h1Banner.classList.remove("animacao-Banner-Entrada");
      h2Banner.classList.remove("animacao-Banner-Entrada");
      btnMoverBanner.classList.remove("animacao-Banner-Entrada");
      h1Banner.classList.add("animacao-Banner-Entrada-2");
      h2Banner.classList.add("animacao-Banner-Entrada-2");
      btnMoverBanner.classList.add("animacao-Banner-Entrada-2");
      h1Banner.innerHTML = "Recém-chegado?";
      h2Banner.innerHTML = "Junte-se a nós para uma experiência bancária moderna e conveniente. Cadastre-se agora!";
      
    },300)
    /*Animações de login*/ 
    divLoginTitulo.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginPRedes.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginRedes.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginPForm.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginUsuario.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginSenha.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginBtn.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginEsqueceu.classList.remove("animacao-Mover-Opacidade-Login-Saida");
    divLoginCopyright.classList.remove("animacao-Mover-Opacidade-Login-Saida");

    
    divLoginTitulo.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginPRedes.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginRedes.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginPForm.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginUsuario.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginSenha.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginBtn.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginEsqueceu.classList.add("animacao-Mover-Opacidade-Login-Entrada");
    divLoginCopyright.classList.add("animacao-Mover-Opacidade-Login-Entrada");
   
     /*Código de animação do registro*/ 

     divRegistroTitulo.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroPForm.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroUsuario.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroEmail.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroSenha.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroResenha.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroBtn.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");
     divRegistroCopyrigth.classList.remove("animacao-Mover-Opacidade-Registro-Entrada");

     divRegistroTitulo.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroPForm.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroUsuario.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroEmail.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroSenha.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroResenha.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroBtn.classList.add("animacao-Mover-Opacidade-Registro-Saida");
     divRegistroCopyrigth.classList.add("animacao-Mover-Opacidade-Registro-Saida");

    }
});

verSenha.addEventListener('click', () =>{

   if (inputSenhaLogin.type === "password")
   {

      inputSenhaLogin.type = "text";
      verSenha.classList.remove("fa-eye-slash");
      verSenha.classList.add("fa-eye");
   }
   else {
      verSenha.classList.add("fa-eye-slash");
      verSenha.classList.remove("fa-eye");
      inputSenhaLogin.type = "password";

   }
})