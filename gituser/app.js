(function() {
    var gitapp = angular.module('gitviewer', []);
    var UserDetails = function($s, $h) {
        var onGetResults = function(response) {
            $s.user = response.data;
        };

        var onFailed = function(reason) {
            $s.error = "Error in Getting results";
        };

        $h.get('https://api.github.com/users/saivaradula')
              .then(onGetResults, onFailed);
    };
    gitapp.controller("UserDetails", ["$scope", "$http", UserDetails]);
}())
