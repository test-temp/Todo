(function (global, ng, undefined) {

    ng.module("app")
        .controller("confirmController", ["$scope", "$modalInstance", "common", confirmController]);

    function confirmController($scope, $modalInstance, common, config) {

        var self = this;
        
        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss('cancel');
        };


    };


}(window, angular));