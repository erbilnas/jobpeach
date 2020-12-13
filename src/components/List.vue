<template>
  <div>
    <input v-model="searchTerm" class="search-input" type="text" value="" placeholder="You can search using company, city, town or position name"/>
    <ListItem v-for="job in filteredList" v-bind:job="job" />
    <p>There are {{List.length}} active opportunity right now!</p>
  </div>
</template>

<script>
  import JobList from '../data/JobList.json';
  import ListItem from './ListItem';

  export default {
    name: 'List',
    components: {
      ListItem
    },
    data() {
      return {
        List : JobList.result.items,
        searchTerm : ''
      }
  },
  methods: {
    searchIn(value, term) {
      let regexTerm = new RegExp(term, "i");
      return value.search(regexTerm) != -1;
    }
  },
  computed: {
    filteredList() {
      const searchTerm = this.searchTerm;
      const List = this.List;
      return List.filter(item => this.searchIn(item.positionName, searchTerm) || this.searchIn(item.cityName, searchTerm) || this.searchIn(item.townName, searchTerm) || this.searchIn(item.companyName, searchTerm) );
     }
    }
  }
</script>

<style scoped lang="scss">
  input {
    margin-top: 5%;
    margin-bottom: 2%;
    padding: 2%;
    width: 100%;
  }
</style>