$scope.dataValida = true;
$scope.horaValida = true;


$scope.validaData = function(data){
if (UtilsService.validaData(data, 1949)) {
      $scope.dataValida = true;
} else{
    $scope.dataValida = false;
}
}

$scope.validaHora = function(hora){
if (UtilsService.validaHora(hora)) {
      $scope.horaValida = true;
} else{
    $scope.horaValida = false;
}
}
