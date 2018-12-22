import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workoutsComponent from './workouts.component';

let workoutsModule = angular.module('workouts', [
    uiRouter
])
    .config(($stateProvider) => {
        'ngInject',
        $stateProvider
            .state('workouts', {
                url: '/workouts',
                component: 'workouts'
            });
    })
    .component('workouts', workoutsComponent)
    .name;

export default workoutsModule;
    