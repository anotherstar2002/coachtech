<template>
  <div id="header">
    <button @click="showText" type="submit">子に送る</button>
    <!--ボタンは子要素内に配置 クリックで関数ShowText-->
    <p>{{show}}</p>
  </div>
</template>

<script>
export default {
  props:["parentText"],
  data(){
    return {
      show:""
    }
    // 関数設定用にセット
  },
  methods: {
    showText(){
        this.show =this.parentText;
        // 空のshowをprentTextに変更
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
}

li {
  margin-right: 50px;
}

</style>