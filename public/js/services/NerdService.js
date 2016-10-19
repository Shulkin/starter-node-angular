// This is where you would use $http or $resource to do your API calls
// to the Node backend from your Angular frontend
angular.module("NerdService", []).factory("Nerd", ["$http", function($http) {
  // return object with functions
  return {
    // we need to define corresponding API routes to Node.js backend
    // call to get all nerds
    get: function() {
      return $http.get("/api/nerds");
    },
    // call to POST and create a new nerd
    create: function(nerdData) {
      return $http.post("/api/nerds", nerdData);
    },
    // call to DELETE a nerd
    delete: function(id) {
      return $http.delete("/api/nerds/" + id);
    }
  }
}]);
