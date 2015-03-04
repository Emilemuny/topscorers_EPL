angular.module('topscorers', []).
 controller('playersCtlr', function($scope) {
   $scope.playersList = [
     {
       Player: {
         firstname: 'Diego',
         lastname: 'Costa'
       },
       goals: 17,
       nationality: 'Belgian',
       team: 'Chelsea'
     },

     {
       Player: {
         firstname: 'Sergio',
         lastname: 'Aguero'
       },
       goals: 17,
       nationality: 'Argentinian',
       team: 'Manchester City'
     },

     {
       Player: {
         firstname: 'Harry',
         lastname: 'Kane'
       },
       goals: 14,
       nationality: 'English',
       team: 'Tottenham'
     },

     {
       Player: {
         firstname: 'Charlie',
         lastname: 'Austin'
       },
       goals: 14,
       nationality: 'English',
       team: 'QPR'
     },

     {
       Player: {
         firstname: 'Saido',
         lastname: 'Berahino'
       },
       goals: 12,
       nationality: 'Burundian',
       team: 'West Brom'
     },

     {
       Player: {
         firstname: 'Alexis',
         lastname: 'Sanchez'
       },
       goals: 12,
       nationality: 'Chilean',
       team: 'Arsenal'
     },

     {
       Player: {
         firstname: 'Papiss',
         lastname: 'Cisse'
       },
       goals: 11,
       nationality: 'Senegalese',
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
       nationality: 'English',
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
