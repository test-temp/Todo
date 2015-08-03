"use strict";
(function (global, ng, undefined) {

    ng.module("app")
        .controller("appcontroller", ["$scope", "common", "datastore", appcontroller]);

    //Main Controller;
    function appcontroller($scope, common, datastore) {

        var ctrl = this, toastr = common.toastr;

        ctrl.currentOrderBy = "";

        ctrl.orderTasks = function (orderby) {
            if (orderby === "startDate") {
                ctrl.currentOrderBy = "-" + orderby;
            } else if (orderby === "priority") {
                ctrl.currentOrderBy = "priority.key"
            } else {
                ctrl.currentOrderBy = "";
            }
        }

        function init() {
            ctrl.todos = datastore.tasks;
        }

        init();

        ctrl.edit = function (t) {

            function success(todo) {
                todo.finishDate = common.$filter('date')(todo.finishDate, "dd-MMM-yyyy");
                todo.startDate = common.$filter('date')(todo.startDate, "dd-MMM-yyyy");
                ctrl.todos.$save(todo).then(function (response) {
                    toastr.success("Task Updated Successfully.");
                });
            };

            showModal({ modal: t, title: "Update Task:" }, success);
        };

        ctrl.udpateStatus = function (todo) {
            var done = todo.isDone;
            ctrl.todos.$save(todo).then(function (response) {

                if (done) {
                    toastr.success("Task Marked Completed.");
                } else {
                    toastr.info("Task Reopened.");
                }

            });

        };

        ctrl.delete = function (t) {

            var modalInstance = common.$modal.open({
                animation: true,
                templateUrl: '../templates/modalDeleteConfirm.html',
                controller: 'confirmController as conf',
                size: "modal-sm",
                backdrop: "static"

            }),
            task = t;

            modalInstance.result.then(function delete_success() {
                ctrl.todos.$remove(task).then(function remove_success() {
                    toastr.success("Task Deleted Successfully!.");

                });
                init();
            }, function delete_err() {

            });

        };


        ctrl.addNewTask = function () {

            function addNewTodo(todo) {
                todo.finishDate = common.$filter('date')(todo.finishDate, "dd-MMM-yyyy");
                todo.startDate = common.$filter('date')(todo.startDate, "dd-MMM-yyyy");
                ctrl.todos.$add(todo).then(function (obj) {
                    toastr.info("New Task Added Successfully!.")
                });
            }

            showModal({ modal: common.getTodoModal(), title: "Add Task:" }, addNewTodo);
        };


        function showModal(config, success, error) {

            var modalInstance = common.$modal.open({
                animation: true,
                templateUrl: '../templates/modalTemplate.html',
                controller: 'modalController as mod',
                size: "modal-md",
                backdrop: "static",
                resolve: {
                    config: function () {
                        return config;
                    }
                }
            });

            modalInstance.result.then(success, function () {
                console.log('Modal dismissed at: ' + new Date());
            });

        }

    };


}(window, angular));