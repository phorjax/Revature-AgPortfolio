angular
    .module('resume')
    .component('resume', {
        templateUrl: 'resume/resume.template.html',
        controller: function myComponentController() {
            this.variable = 'useless variable';
        }
    });