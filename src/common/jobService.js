export default class JobService {
    constructor($http) {
        this.$http = $http;
        this.jobs = [
            {id: 1, name: 'prepare', description: "prepare a task", status: "New"},
        ];
    }

    getJobs() {
        return this.$http({
            method: 'GET',
            url: 'http://localhost:8081/api/job/list'
        }).then((response) => {
            return response.data;
        }).catch(err => {
            console.log(err);
        });
    }

    getJobById(Id) {
        return this.$http({
            method: 'GET',
            url: 'http://localhost:8081/api/job/list/' + Id
        }).then((response) => {
            return response.data;
        }).catch(err => {
            console.log(err);
        });
    }
}

JobService.$inject = ['$http'];