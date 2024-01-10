angular
    .module('resume')
    .component('resume', {
        templateUrl: 'resume/resumeTemplate.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });