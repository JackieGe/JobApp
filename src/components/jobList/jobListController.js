
export default class JobListController {

    constructor(jobService) {
        // this.jobs = jobService.getJobs();
        jobService.getJobs().then(data => {
            this.jobs = data;
        })
        this.selectedJob = undefined;
    }

    clickJob(job) {

        if (!this.selectedJob || this.selectedJob.id !== job.id) {
            this.selectedJob = job;
        } else {
            this.selectedJob = undefined;
        }

        this.onJobSelected()(this.selectedJob);

    }

    getJobRowStyle(job) {
        if (this.selectedJob && this.selectedJob.id === job.id) {
            return "selected-row"
        } else {
            return "";
        }
    }
}

JobListController.$inject = ['jobService']