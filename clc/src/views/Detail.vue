<template>
  <div class="detail">
    <p>{{id}}</p>
    <button @click="transition()">Back</button>
  </div>
</template>

<script>
export default {
  props:["id"],
  methods: {
     transition () {
      this.$router.push({ name: "Home"});
    }
  }
};
</script>