(function (global, ng, undefined) {

    ng.module("app")
        .controller("modalController", ["$scope", "$modalInstance", "common", "config", modalController]);

    //Main Controller;
    function modalController($scope, $modalInstance, common, config) {

        var self = this;


        self.Todo = config.modal;
        self.title = config.title;
        self.priorities = common.priorities;
      

        self.ok = function (todo) {
            $modalInstance.close(todo);
        };

        self.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        self.today = function () {
            self.dt = new Date();
        };
        self.today();

        self.clear = function () {
            self.dt = null;
        };

        // Disable weekend selection
        self.disabled = function (date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        self.toggleMin = function () {
            self.minDate = self.minDate ? null : new Date();
        };
        self.toggleMin();


        self.open = function ($event,control) {
            $event.preventDefault();
            $event.stopPropagation();


            if (control === "start") {
                self.isStartDate = true;
            } else {
                self.isFinishDate = true;
            }            
        };

        self.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        self.format = "dd-MMMM-yyyy";
    };


}(window, angular));