// Funcionalidade seta

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

//Funcionalidade mensagem de cofirmação

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('confirmationMessage').style.display = 'block';
  });