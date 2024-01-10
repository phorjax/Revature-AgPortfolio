angular
    .module('myHeader')
    .component('myHeader', {
        templateUrl: 'resume/header/header.template.html',
        controller: function myOtherComponentController() {
            this.variable = 'useless variable';
        }
    });