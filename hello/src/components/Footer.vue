<template>
  <div>  
    <p>フッター</p>
    <input type="text" v-model="footerText">
    <!-- v-modelでinputの内容を取得 -->
      <button @click="sendParent">親に送ってみる</button>
      <!-- 関数sendParentを実行 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerText: ""
    };
  },
  methods: {
    sendParent() {
      this.$emit("getFooterText", this.footerText);
      // getというイベントに、footer textを飛ばす関数
    }
  }
}
</script>

<style scoped>
</style>