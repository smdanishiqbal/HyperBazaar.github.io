angular.module('myapp',['ui.router'])

    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('sale');
        $stateProvider
            
            .state('women',{
                url:"/Women",
                templateUrl:'components/home.html',
                controller:'mycnt'
            })
            .state('sale',{
                url:"/sale",
                templateUrl:'components/sale.html',
                controller:'mycnt'
            })
            .state('featured',{
                url:"/featured",
                templateUrl:'components/featured.html',
                controller:'mycnt'
            })
                .state('new',{
                    url:"/new",
                    templateUrl:'components/New.html',
                    controller:'mycnt'

                });
//
//                 .state('login',{
//                     url:"/login",
//                     templateUrl:'components/login.html',
//                     controller:'myController'
//                 })
//                 .state('ShowDuas',{
//                     url:"/AllDuas",
//                     templateUrl:'components/ShowAllDuas.html',
//                     controller:'myController'
//                 })

    })

    .controller('mycnt', function ($scope) {
        $scope.show="ABc";

    })