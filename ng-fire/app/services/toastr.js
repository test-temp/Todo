"use strict";
(function (global, ng, undefined) {

    ng.module("app")
        .factory("toastr", ['$window', toastr]);


    function toastr($window) {

        var toastr = $window.toastr;

        delete window.toastr; // don't want floating dependencies

        toastr.options.positionClass = 'toast-bottom-right';

        return toastr;
    };


}(window, angular));