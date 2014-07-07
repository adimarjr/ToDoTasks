var app = angular.module('mainApp', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui",
    "restangular",
    "googlechart"
]);

app.config(function($routeProvider, $httpProvider, RestangularProvider) {
    $routeProvider.when('/',          {templateUrl: "app/pages/tasks/views/list.html"});
    $routeProvider.when('/addtask',   {templateUrl: "app/pages/tasks/views/addTask.html"});
    $routeProvider.when('/editTask/:TaskId',   {templateUrl: "app/pages/tasks/views/editTask.html"});
    $routeProvider.when('/graphic',   {templateUrl: "app/pages/tasks/views/graphic.html"});

    //RestangularProvider.setBaseUrl("http://localhost:30226/api/");
    RestangularProvider.setBaseUrl("http://adimarjr-001-site1.smarterasp.net/api/");

//  RestangularProvider.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK', xhrFields: {   withCredentials: false  }});

//  $httpProvider.defaults.useXDomain = true;
//  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

//app.service('analytics', [
//  '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
//    var send = function(evt, data) {
//      ga('send', evt, data);
//    }
//  }
//]);

//app.directive( "carouselExampleItem", function($rootScope, $swipe){
//  return function(scope, element, attrs){
//      var startX = null;
//      var startY = null;
//      var endAction = "cancel";
//      var carouselId = element.parent().parent().attr("id");
//
//      var translateAndRotate = function(x, y, z, deg){
//        element[0].style["-webkit-transform"] = "translate3d("+x+"px,"+ y +"px," + z + "px) rotate("+ deg +"deg)";
//        element[0].style["-moz-transform"] = "translate3d("+x+"px," + y +"px," + z + "px) rotate("+ deg +"deg)";
//        element[0].style["-ms-transform"] = "translate3d("+x+"px," + y + "px," + z + "px) rotate("+ deg +"deg)";
//        element[0].style["-o-transform"] = "translate3d("+x+"px," + y  + "px," + z + "px) rotate("+ deg +"deg)";
//        element[0].style["transform"] = "translate3d("+x+"px," + y + "px," + z + "px) rotate("+ deg +"deg)";
//      }
//
//      $swipe.bind(element, {
//        start: function(coords) {
//          endAction = null;
//          startX = coords.x;
//          startY = coords.y;
//        },
//
//        cancel: function(e) {
//          endAction = null;
//          translateAndRotate(0, 0, 0, 0);
//          e.stopPropagation();
//        },
//
//        end: function(coords, e) {
//          if (endAction == "prev") {
//            $rootScope.carouselPrev(carouselId);
//          } else if (endAction == "next") {
//            $rootScope.carouselNext(carouselId);
//          }
//          translateAndRotate(0, 0, 0, 0);
//          e.stopPropagation();
//        },
//
//        move: function(coords) {
//          if( startX != null) {
//            var deltaX = coords.x - startX;
//            var deltaXRatio = deltaX / element[0].clientWidth;
//            if (deltaXRatio > 0.3) {
//              endAction = "next";
//            } else if (deltaXRatio < -0.3){
//              endAction = "prev";
//            } else {
//              endAction = null;
//            }
//            translateAndRotate(deltaXRatio * 200, 0, 0, deltaXRatio * 15);
//          }
//        }
//      });
//    }
//});

app.controller('MainController', function($rootScope, $scope, tasks){

  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });

  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });

  $scope.appName = "Tasks TO DO";
  $scope.tasksList = tasks.getList().$object;

  $scope.userAgent =  navigator.userAgent;
  $scope.chatUsers = [
    { name: "Carlos  Flowers", online: true },
//    { name: "Byron Taylor", online: true },
//    { name: "Jana  Terry", online: true },
//    { name: "Darryl  Stone", online: true },
//    { name: "Fannie  Carlson", online: true },
//    { name: "Holly Nguyen", online: true },
//    { name: "Bill  Chavez", online: true },
//    { name: "Veronica  Maxwell", online: true },
//    { name: "Jessica Webster", online: true },
//    { name: "Jackie  Barton", online: true },
//    { name: "Crystal Drake", online: false },
//    { name: "Milton  Dean", online: false },
//    { name: "Joann Johnston", online: false },
//    { name: "Cora  Vaughn", online: false },
//    { name: "Nina  Briggs", online: false },
//    { name: "Casey Turner", online: false },
//    { name: "Jimmie  Wilson", online: false },
//    { name: "Nathaniel Steele", online: false },
//    { name: "Aubrey  Cole", online: false },
//    { name: "Donnie  Summers", online: false },
//    { name: "Kate  Myers", online: false },
//    { name: "Priscilla Hawkins", online: false },
//    { name: "Joe Barker", online: false },
//    { name: "Lee Norman", online: false },
    { name: "Ebony Rice", online: false }
  ];

});