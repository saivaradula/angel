var app = angular.module('angel', []);

(function(){
  var human = function() {
    var man = function(){
      console.log( "this is man !!");
    };

    var woman = function(){
      console.log("This is woman !!!");
    };

    return {
      m: man,
      w: woman
    }
  };

  var h = human();
  h.m();
  h.w();
}());
