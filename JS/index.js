$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed:2000
  });

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var dia = document.getElementById('data')
//var hora = 17
  if (hora <12){
  dia.innerHTML = `Você acessou as ${hora} horas e ${minutos} minutos.  <strong><p>Bom dia!</p></strong> `
} else if (hora <=18 ) {
  dia.innerHTML = `Você acessou as ${hora} horas e ${minutos} minutos <strong><p>Boa Tarde!</p></strong> `
} else{
  dia.innerHTML = `Você acessou as ${hora} horas e ${minutos} minutos<strong><p>Boa noite!</p></strong> `
}

//var menuPrincipal = document.getElementsByClassName('header-1')
//menuPrincipal.addEventListener('click', clicar)
//menuPrincipal.addEventListener('mouseenter',  entrar)

/*function clicar() {
  
  menuPrincipal.innerHTML = 'Seja Bem Vindo'
  menuPrincipal. style.background = 'gray'
}*/
