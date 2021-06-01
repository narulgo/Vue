<template>
   <div>
      <div>Country : <input type="text" v-on:keyup.enter="valid"> </div>
      <br>
      <div>Country : <span>{{name}}</span> </div>
      <div>Region : <span>{{region}}</span> </div>
      <div>Flag : <span>{{flag}}</span> </div>
      <br>
      <div v-if="!data.name && country"> No country found with this name</div>
      <div style= "text-align:center"><img v-bind:src="flag" height="100" /></div>
   </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data : {},
      country : ""
    }
  },
  computed : {
    name() {
      return this.data.name;
    },
    flag() {
      return this.data.flag;
    },
    region() {
      return this.data.region;
    }
  },
  methods : {
    valid(event) {
      this.country = event.target.value.trim();
      if (this.country) {
        axios.get("https://restcountries.eu/rest/v2/name/" + this.country).then((response) => {
          this.data = response.data[0];
        }).catch((response) => {
          console.log(response);
          this.data = { };
          });
      }
      else this.data = { };
    }
  },
  created() {},
  components: {}
}
</script>
<style></style>