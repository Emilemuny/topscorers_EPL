angular.module('topscorers', []).
 controller('playersCtlr', function($scope) {
   $scope.playersList = [
     {
       Player: {
         firstname: 'Diego',
         lastname: 'Costa'
       },
       goals: 17,
       nationality: 'Belgium',
       team: 'Chelsea'
     },

     {
       Player: {
         firstname: 'Sergio',
         lastname: 'Aguero'
       },
       goals: 17,
       nationality: 'Argentina',
       team: 'Manchester City'
     },

     {
       Player: {
         firstname: 'Harry',
         lastname: 'Kane'
       },
       goals: 14,
       nationality: 'England',
       team: 'Tottenham'
     },

     {
       Player: {
         firstname: 'Charlie',
         lastname: 'Austin'
       },
       goals: 14,
       nationality: 'England',
       team: 'QPR'
     },

     {
       Player: {
         firstname: 'Saido',
         lastname: 'Berahino'
       },
       goals: 12,
       nationality: 'Burundi',
       team: 'West Brom'
     },

     {
       Player: {
         firstname: 'Alexis',
         lastname: 'Sanchez'
       },
       goals: 12,
       nationality: 'Chile',
       team: 'Arsenal'
     },

     {
       Player: {
         firstname: 'Papiss',
         lastname: 'Cisse'
       },
       goals: 11,
       nationality: 'Senegal',
       team: 'Newcastle united'
     },

     {
       Player: {
         firstname: 'Robin',
         lastname: 'van Persie'
       },
       goals: 10,
       nationality: 'Holland',
       team: 'Manchester United'
     },

     {
       Player: {
         firstname: 'Wayne',
         lastname: 'Rooney'
       },
       goals: 10,
       nationality: "England",
       team: 'Manchester united'
     },

     {
       Player: {
         firstname: 'Christian',
         lastname: 'Eriksen'
       },
       goals: 9,
       nationality: 'Holland',
       team: 'Tottenham'
     },

   ];
 });
