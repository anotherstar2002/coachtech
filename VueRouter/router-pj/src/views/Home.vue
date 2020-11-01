<template>
  <div class="home">
    <h2>Home</h2>
    <div v-for="(data,index) in list" :key="index">
      <p>{{data.id}}</p>
      <p>{{data.name}}</p>
      <!-- transition関数の引数をdata配列のidとしてクリックに連動して実行 -->
      <button @click="transition(data.id)">遷移</button>
    </div>
    <Header :parentText="sendText"></Header>
    <button @click="pText()">遷移</button>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  methods: {
    // 引数dataIdで、DetailページにパラメーターdataIdで遷移させる関数
    transition(dataId) {
       this.$router.push({ name: "Detail", params: { id:dataId } });
    }
  },
  data() {
    // 超今更：return 文は関数の実行を終了して、関数の呼び出し元に返す値を指定します
    // return{
    //   list: [
    //     {id:"さる族の1", name:"first"},
    //     {id:"とり族の2", name:"second"},
    //     {id:"ねこ族の3", name:"third"}
    //   ],
    // };
    return {
      sendText: "親コンポーネントのデータ"
    }
      },
components: {
    Header
    },
}

</script>
