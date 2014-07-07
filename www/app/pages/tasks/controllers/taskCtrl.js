/*
define([
        'msAppJs'
        ], function(app) {

            app.controller('homeController', ['$scope',
                                                    function($scope){



            }]);

            return app;
});*/

app.controller('taskCtrl', function($scope, $location, tasks){
//    $scope.tasksList = tasks.getList().$object;

//    $scope.alter = function(task){
//        $scope.task = task;
//        console.log($scope.task);
//        $location.path('/addTask');
//    }
});


app.controller('addTaskCtrl', function($rootScope, $scope, $location, tasks){
    $scope.task = {};
    $scope.task.Done = false;

    $scope.save = function() {
        $rootScope.$broadcast('$routeChangeStart');

        tasks.post($scope.task).then(
            function () {
                tasks.getList().then(function (data) {
                    angular.copy(data, $scope.tasksList);
                    $rootScope.$broadcast('$routeChangeSuccess');
                    $location.path('/');
                });
            },
            function(){
                console.log("Erro ao salvar");
        });
    };

    $scope.back = function() {
        $location.path('/');
    };
});

app.controller('editTaskCtrl', function($scope, $location, $route, tasks){
    //$scope.task = tasks.one($route.current.params.TaskId).get().$object;
    $scope.task = _.where($scope.tasksList, function (task) {
        return task.TaskId == $route.current.params.TaskId;
    })[0];

    //console.log($scope.task);

    $scope.save = function() {
//        console.log($scope.task);
        tasks.post($scope.task).then(null, function(){
            console.log("Erro ao salvar");
//            $location.path('/');
        });

        $location.path('/');
    };

    $scope.delete = function() {
        tasks.one($route.current.params.TaskId).get().then(function (data) {
            data.remove().catch(function(){
                console.log("Erro ao excluir");
            });
        });
        $scope.tasksList.splice($scope.tasksList.indexOf($scope.task),1);
        $location.path('/');
    }

    $scope.back = function() {
        $location.path('/');
    };
});

app.controller("chartTaskCtrl", function ($scope, tasks) {
    $scope.chartObject = {};

//    tasks.getList().then(function (data){
        var closed = _.where($scope.tasksList, function(task) {
            return task.Done == true;
        });

        var open = _.where($scope.tasksList, function(task) {
            return task.Done == false;
        });

        $scope.chartObject.data = {"cols": [
            {id: "t", label: "Status", type: "string"},
            {id: "s", label: "Qtd", type: "number"}
        ], "rows": [
            {c: [
                {v: "Abertas"},
                {v: open.length},
            ]},
            {c: [
                {v: "Fechadas"},
                {v: closed.length},
            ]}
        ]};


        // $routeParams.chartType == BarChart or PieChart or ColumnChart...
        $scope.chartObject.type = "ColumnChart";
        $scope.chartObject.options = {
            'title': 'Tarefas'
        }

//    });
});

