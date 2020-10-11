<template>
  <div>
    <div id="app">
      <input type="text" v-model="getText"><!--最初は空欄-->
      <Header :parentText="getText"></Header><!--属性値をgetTextに変換-->
      <SideMenu></SideMenu>
      <Footer @getFooterText="showFooterText"></Footer>
      <!-- クリックで子要素のgetイベント起動＝関数show表示 -->
      <p v-for="(item,index) in textList" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

export default{
  components: {
    Header,
    SideMenu,
    Footer
  },

  data() {
    return {
      getText: "",
      textList:[]
    };
  },

  computed: {
  },

  methods: {
    showFooterText(footerText) {
      this.textList.push(footerText);
    }
  }
};
</script>

<style>

</style>
