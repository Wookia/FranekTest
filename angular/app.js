angular.module('app', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.
        state('main', {
            url: '/',
            views: {
                'container': {
                    templateUrl: 'templates/main.html'
                }
            }
        }).
        state('stage1', {
            url: '/stage1',
            views: {
                'container': {
                    controller: 'stageOneController',
                    templateUrl: 'templates/stage1.html'
                }
            }
        }).
        state('stage2', {
            url: '/stage2',
            views: {
                'container': {
                    controller: 'stageTwoController',
                    templateUrl: 'templates/stage2.html'
                }
            }
        })
}]).controller('generalController', function(){

}).controller('stageOneController', function($scope, dataService){
    $scope.myArray = dataService.myArray || [];
    $scope.click = function(element){
        console.log(element);
    }
}).controller('stageTwoController', function($scope, dataService){
    $scope.myArray = dataService.myArray || [];
    $scope.add = function(){
        if($scope.inputVal){
            $scope.myArray.push($scope.inputVal);
            delete $scope.inputVal;
            dataService.myArray = $scope.myArray;
        }
    }

    $scope.delete = function(index){
        $scope.myArray.splice(index, 1);
        dataService.myArray = $scope.myArray;
    }
}).factory("dataService", function(){
    var fac = {};
    return fac;
});