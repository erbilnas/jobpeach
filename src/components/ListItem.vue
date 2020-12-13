<template>
  <div class="listItem">
    <div class="row">
      <img v-bind:src="job.imageUrl" width="300" height="300">
    </div>
    <div class="item">
      <p class="title"><router-link :to="{ name: 'Detail', params: { id: job.jobId } }">{{job.companyName + " | " + job.positionName}}</router-link></p>
      <p>{{job.cityName + ", " + job.townName}}</p>
      <p>This job is {{job.distance}} from you!</p>
      <h5>There are {{job.durationDay}} days left to apply for this job.</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    job: Object
  }
}
</script>

<style scoped lang="scss">
  p {
    line-height: 1rem;
  }
  img {
    padding-bottom: 3%;
  }
  h5 {
    padding-top: 25%;
  }
  .row {
    width: 30%;
    padding-left: 5%;
  }
  .item {
    width: 70%;
    padding-left: 5%;
  }
  .listItem {
    border-bottom: 1px solid #e0e0e0;
    padding: 1rem 0;
    margin-bottom: 1rem;
    display: flex;
  }
  .title {
    font-size: 1.4rem;
    text-decoration: none;
  }
</style>