'use strict';

angular.module('gdanskboardApp')
  .controller('MainCtrl', function ($scope, foursquareService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    foursquareService.query({
      ll: '54.3520252,18.6466384',
      client_id: '45Y1ZE0JIEI53PA4ZPSDRDO2FHKHPFIP3KZF0EMA0ZGULPSN',
      client_secret: 'J4N5TP2JGLOVNKUYJW2AKSLSCC1W2CFURVO2YSYCLQHKIKGZ'
    }, function success (res) {
      $scope.venues = res[1].groups[0].items;
      console.log(res[1].groups[0].items);
    });
  });
