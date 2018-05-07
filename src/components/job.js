
import angular from 'angular'
import common from '../common/common'

import JobListController from './jobList/jobListController'
import jobListTemplate from './jobList/jobList.html'
import './jobList/jobList.css'

import JobDetailController from './jobDetail/jobDetailController'
import jobDetailTemplate from './jobDetail/jobDetail.html'
import './jobDetail/jobDetail.css'

import JobPageController from './jobPage/jobPageController'
import jobPageTemplate from './jobPage/jobPage.html'
import './jobPage/jobPage.css'

export default angular.module('job', [common.name])
    // job list
    .controller('jobListController', JobListController)
    .directive('jobList', function () {
        return {
            restrict: 'E',
            scope: {
                onJobSelected:"&"
            },
            //replace: true,
            template: jobListTemplate,
            controller: JobListController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })
    // job detail
    .controller('jobDetailController', JobDetailController)
    .directive('jobDetail', function () {
        return {
            restrict: 'E',
            scope: {
                job:"="
            },
            template: jobDetailTemplate,
            controller: JobDetailController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })
    // job page, which would consist of the job list and job detail
    .directive('jobPage', function () {
        return {
            restrict: 'E',
            scope: {},
            template: jobPageTemplate,
            controller: JobPageController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })