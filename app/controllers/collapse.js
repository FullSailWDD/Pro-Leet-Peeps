var app = angular.module('Test', []);
app.controller('collapseCtrl', function(){

    $scope.premiers = [{name: 'premier1', correct:'premier'}, 
                      {name: 'premier2', correct:'premier'}, 
                      {name: 'green', correct:'green'}, 
                      {name: 'random', correct:'random'} ];

    var premiers = $scope.premiers;

    $scope.validateClick = function (premier, index) {
        if (premiers.correct == "premier") {
            premiers.isPremier = true;
            console.log(premiers.isPremier + index)
            
        } else if (premiers.correct == "green") {
            premiers.isGreen = true;
            console.log(premiers.isGreen + index)
            
        } else {
            premiers.isRandom = true;
            console.log(premiers.isRandom + index)
        }
    }

angular.bootstrap(premiers, ['Test']);

})