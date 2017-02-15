/*
 * Creado por Eduardo Eyzaguirre el 14/02/2017
 */

/* Función principal de la app */ 
function controlarNum($scope) {

    /* Array que guarda los números registrados */
    $scope.numeros = [];
    /* Modelo que permite agregar números */
    $scope.agregarNum = function () {
    
    /* Verificamos que el campo de registro no esté vacio */
    if ($scope.nuevoNum != null){
        
        /* Buscamos si ya se encuentra el número ingresado en el array */
        var encontrar = $scope.numeros.filter(function (numero) {
        return (numero == $scope.nuevoNum);
        });

        /*  Si el número ingresado se encuentra registrado en el array mostramos el mensaje de error */
        if (encontrar.length) {
            $scope.mensaje = "El número "+ $scope.nuevoNum +" ya existe en la lista";
        } else {
            $scope.numeros.push($scope.nuevoNum);
            /* Limpiamos el texto de mensaje */
            $scope.mensaje = "";
            /* Limpiamos el campo de registro */
            $scope.nuevoNum = null;
            /* Mostramos la sección de resultados */
            $scope.resultados = true;
        }    
    }
};
}

/* Agregamos la función principal de la app como controlador */
angular.module('app', ['ngAnimate']).controller('OrdenadorSerie', controlarNum);