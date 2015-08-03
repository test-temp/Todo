(function (global, ng, undefined) {

    ng.module("app")
        .factory("datastore", ['$window', datastore]);



    //Main Controller;
    function datastore($window) {

        var localstore = $window.localStorage;

        return {
            add: add,
            remove: remove,
           edit:edit,
            getAllTasks: getAllTasks,
            udpateStatus: udpateStatus
        };


        function udpateStatus(task) {
            var tasks = getAllTasks(), idx = 0;


            for (; idx < tasks.length; idx++) {

                if (tasks[idx].id === task.id) {
                    tasks[idx].isDone = task.isDone;
                    break;
                }
            }

            save(tasks);
        }

        function add(todo) {
            var todos = getAllTasks();

            todos.push(todo);

            save(todos);
        };

        function remove(todo) {
            var todos = getAllTasks(), idx = 0, todoIdx = 0;

            for (; idx < todos.length; idx++) {

                if (todos[idx].id === todo.id) {
                    todoIdx = idx;
                    break;
                }
            }

            todos.splice(idx, 1);

            save(todos);
        }

        function edit(todo) {

            var todos = getAllTasks(), idx = 0, todoIdx = 0;

            for (; idx < todos.length; idx++) {

                if (todos[idx].id === todo.id) {
                    todos[idx] = todo;
                    break;
                }
            }

            save(todos);
        }


        function save(todos) {
            localStorage.setItem("Todo", JSON.stringify(todos));
        }

        function getAllTasks() {

            var todos = (localstore.getItem("Todo") || []);

            if (todos.length)
                todos = JSON.parse(todos);

            return todos;

        }

    };


}(window, angular))