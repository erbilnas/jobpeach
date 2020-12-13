<template>
  <div class="appContainer">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <router-view />
        </div>
      </div>
  </div>
</template>

<script>
import List from './components/List.vue';

export default {
  name: 'app',
  components: {
    List
  }
}
</script>