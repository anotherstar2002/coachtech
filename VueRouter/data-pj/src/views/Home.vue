<template>
  <div class="app">
    <div class="home">
      <!-- <button @click="increase">増加</button> -->
      <p>{{$store.state.count}}</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  async created() {
    // let data = await axios.get("data.json");
    // console.log(data),
    // await this.$store.dispatch("changeDataAction");
    // console.log(this.$store.state.list.data);

    // getJsonTest1が終わるまで、まってから、listのデータを表示
    await this.$store.dispatch("getJsonTest1");
    console.log(this.$store.state.list.data);
    await this.$store.dispatch("getJsonTest2");
    console.log(this.$store.state.list.data);
  },
  methods:{
    // increase(){
    //   this.$store.commit('incrementMutation')
    // }
  }
}
</script>