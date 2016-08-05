angular.
  module("phoneList").
  component("phoneList",{
    templateUrl:'./phone-list/phone-list.template.html',
    controller:function PhoneListController($http){
      var self = this;
      self.orderProp = 'name';
      $http.get("persons/persons.json").then(function(response){
        console.log(response);
        self.persons = response.data;
      });
    }
});
