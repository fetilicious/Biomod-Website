angular.module('BlankApp', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
  $scope.templateUrl = null;
  $scope.lastActive = 'home';
  $scope.changePage = function(url, activeid) {
      $scope.templateUrl = url;
      console.log(url);
      
      //history.pushState(stateObj, activeIdURL, activeid+".html");
      
      document.getElementById(this.lastActive).classList.remove('active');
      document.getElementById(activeid).classList.add('active');
      $scope.lastActive = activeid;
  }
  
  //window.onhashchange = function() { 
    //  var self = this;
      //if(window.location.hash) {
        //var hash = window.location.hash.substring(2); //Puts hash in variable, and removes the # character
        //console.log(hash);
        //var url = "partials/" + hash + ".html";
        //$scope.changePage(url, hash);
      //} else {
          // No hash found
      //}
  //}
  
});