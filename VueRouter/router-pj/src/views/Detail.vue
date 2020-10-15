<template>
  <div class="detail">
    <p>{{id}}</p>
    <button @click="transition()">戻る</button>
  </div>
</template>

<script>
export default {
  // ここで指定されている配列Listの中のidではなくて、params: { id:dataId } の中にあるidのこと
  props: ["id"],
  methods: {
    transition() {
      this.$router.push ({ name: "Home",});
    }
  }
};
</script>