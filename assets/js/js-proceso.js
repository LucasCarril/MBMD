document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los contenedores de trabajos
    let containers = document.querySelectorAll('.container-trabajo');

    // Iteramos sobre cada contenedor
    containers.forEach(function(container) {
        let next = container.querySelector('.next');
        let prev = container.querySelector('.prev');

        next.addEventListener('click', function(){
            let items = container.querySelectorAll('.item');
            container.querySelector('.slide').appendChild(items[0]);
        });

        prev.addEventListener('click', function(){
            let items = container.querySelectorAll('.item');
            container.querySelector('.slide').prepend(items[items.length - 1]);
        });
    });
});
