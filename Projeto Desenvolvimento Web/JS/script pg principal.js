

// Funcionalidade Tabelas 

document.addEventListener('DOMContentLoaded', function() {
  var verMaisButtonPlantel = document.getElementById('verMaisPlantel');
  var linhasOcultasPlantel = document.querySelectorAll('.plantel .hide-row');

  verMaisButtonPlantel.addEventListener('click', function() {
    linhasOcultasPlantel.forEach(function(row) {
      if (row.style.display === 'none' || row.style.display === '') {
        row.style.display = 'table-row'; 
        verMaisButtonPlantel.textContent = 'Ver menos'; 
      } else {
        row.style.display = 'none'; 
        verMaisButtonPlantel.textContent = 'Ver mais'; 
      }
    });
  });

  var verMaisButtonClassificacao = document.getElementById('verMaisClassificacao');
  var linhasOcultasClassificacao = document.querySelectorAll('.classificacao .hide-row');

  verMaisButtonClassificacao.addEventListener('click', function() {
    linhasOcultasClassificacao.forEach(function(row) {
      if (row.style.display === 'none' || row.style.display === '') {
        row.style.display = 'table-row'; 
        verMaisButtonClassificacao.textContent = 'Ver menos'; 
      } else {
        row.style.display = 'none'; 
        verMaisButtonClassificacao.textContent = 'Ver mais'; 
      }
    });
  });
});

 // Funcionalidade Seta-topo 

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

  
// Funcionalidade Uniforme 

function trocarUniforme(uniforme) {
  var imagem = document.getElementById('uniformeImage');
  if (uniforme === 1) {
      imagem.src = 'https://lh3.googleusercontent.com/pw/AP1GczP32igXgwC5__KNfPxEMnyacQ7rWAdB0U1yf_Lsh-tPu3kBR76zBJS1BSAFc0f-od8JeAYZaeRTjIb8C4imOLvKEstgzxCyoT6T23JbksTbrgXxKWl3M_II_u7lgROUA1CcV-9bI0pfO3HwyfqSN8cZ=w1366-h768-s-no-gm?authuser=0';
  } else if (uniforme === 2) {
      imagem.src = 'https://lh3.googleusercontent.com/pw/AP1GczP6-LfwmY2SHoHKQka4ZPVopJ3xg0Gyls7WRYh0cfDX7NITcitnwIxUuA-zWrey1_FqtT2L30xip7MEbOVglqKp7wtv4fLq4ePLKkkxw3XVQkJD97tFOEnspzc28_HB0pRPsalS9ozfNKls-XGd2b3e=w1366-h768-s-no-gm?authuser=0';
  }
}



 //Funcionalidade Vídeo 
  function reiniciarVideo() {
    var video = document.getElementById('meuVideo');
    video.currentTime = 0;
    video.play();
  }




  



    
  