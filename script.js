var app=angular.module('myApp',['ui.router']);

app.config(['$stateProvider',function($stateProvider){

$stateProvider
.state('introduction',{
  abstract:false,
  url:'/introduction',
  templateUrl:'introduction.html',
  controller:'introduction'
  })
.state('statistics',{
    abstract:false,
    url:'/statistics',
    templateUrl:'statistics.html',
    controller:'statistics'
    })
.state('softwareLanguages',{
    abstract:false,
    url:'/software-languages',
    templateUrl:'languages.html',
    controller:'software-languages'
  })
}]);

app.controller('introduction',['$scope',function($scope){
  $scope.nick="pckurdu";
  $scope.title="software developer";
}]);

app.controller('statistics',['$scope',function($scope){
  $scope.datas=[
    {post:'each function in underscorejs',view:9},
    {post:'What are Standart Dialogs in Electron ',view:7}
  ];
}]);

app.controller('software-languages',['$scope',function($scope){
  $scope.languages=["Angularjs","Electron","Underscorejs"];
}]);
