
export default class JobPageController {
    constructor (jobService) {
        this.selectedJob = undefined;

        this.onJobSelected = (job) => {
            jobService.getJobById(job.id).then(data => {
                this.selectedJob = data;
            })
            // this.selectedJob = job;
        }
    }
}

JobPageController.$inject = ['jobService']