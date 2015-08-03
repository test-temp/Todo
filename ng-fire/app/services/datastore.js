(function (global, ng, undefined) {

    ng.module("app")
        .constant("FIREBASE_URL", "https://popping-heat-9361.firebaseio.com/")
        .factory("datastore", ['$window', '$firebaseArray', 'FIREBASE_URL', datastore]);


    //Main Controller;
    function datastore($window, $firebaseArray, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL),
        data = $firebaseArray(ref);

        return {
            tasks: data 
        };
    };


}(window, angular))