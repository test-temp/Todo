(function (global, ng, undefined) {

    ng.module("app", ['ui.bootstrap', 'firebase']);
    //    .factory("lodash", ["$window", lodash]);
    ////lodash angular wrapper
    //function lodash($window) {

    //    var lodash = $window._;

    //    //Remove the reference from global as this is independent library.
    //    delete window._;

    //    return lodash;
    //}

}(window, angular));