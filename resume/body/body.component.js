angular
    .module('body')
    .component('body', {
        templateUrl: 'resume/body/body.template.html',
        controller: function myOtherComponentController() {
            this.variable = 'useless variable';
        }
    });