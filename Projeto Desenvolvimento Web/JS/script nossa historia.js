// Funcionalidade seta topo

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


//funcionalidade Lista 
document.addEventListener('DOMContentLoaded', function() {
    var verMaisButton = document.getElementById('verMaisLista');
    var linhasOcultas = document.querySelectorAll('#conquistas .hide-row');
  
    verMaisButton.addEventListener('click', function() {
      linhasOcultas.forEach(function(row) {
        if (row.style.display === 'none' || row.style.display === '') {
          row.style.display = 'table-row'; 
          row.classList.add('visible-row'); 
          row.classList.add('list-marker'); 
          verMaisButton.textContent = 'Ver menos'; 
        } else {
          row.style.display = 'none'; 
          row.classList.remove('visible-row'); 
          row.classList.remove('list-marker'); 
          verMaisButton.textContent = 'Ver mais'; 
        }
      });
    });
  });
  
