<template>
  <div>
    <ListItem v-bind:job="job" />
    <p><u>Address : {{job.address}}</u></p>
    <div v-html="job.description"></div>
    <button v-on:click="say('Your application has been received successfully!')">Apply this job</button>
  </div>
</template>

<script>
  import JobList from '../data/JobList.json';  
  import ListItem from './ListItem.vue';

  export default {
    name: 'Detail',
    components: {
      ListItem
    },
    data() {
      return {
        job: JobList.result.items.find(job => job.jobId === this.$route.params.id)
      }
    },
    methods: {
      say: function (msg) {
        alert(msg)
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    margin-top: 5%;
    float: right;
  }
</style>