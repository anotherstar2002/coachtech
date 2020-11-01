<template>
  <div id="header">
    <p>{{parentText}}</p>
  </div>
</template>

<script>
export default {
  props: ["parentText"],
  methods: {
    ptext (){
      return this.parentText;
    }
  }
};
</script>