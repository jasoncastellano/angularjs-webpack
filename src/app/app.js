import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workouts from './workouts/workouts';
import appComponent from './app.component';

angular.module('app', [
    uiRouter,
    workouts
])
    .config(($locationProvider) => {
        "ngInject";
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');
    })
    .component('app', appComponent);
