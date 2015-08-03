"use strict";
(function (global, ng, undefined) {

    ng.module("app")
        .factory("common", ['$filter', '$q', '$modal', 'toastr', common]);

    //Main Controller;
    function common($filter, $q, $modal, toastr) {

        var priorities = [{ key: 3, value: "High" },
                            { key: 2, value: "Medium" },
                            { key: 1, value: "Low" }];

        return {
            $filter: $filter,
            $q: $q,
            $modal: $modal,
            getTodoModal: getTodoModal,
            priorities: priorities,
            toastr: toastr
        };

        function getTodoModal() {
            var date = new Date()
            return {
                id: date.getTime(),
                task: "",
                finishDate: date,
                priority: priorities[2],
                startDate: date,
                isDone: false

            };
        }

    };


}(window, angular));