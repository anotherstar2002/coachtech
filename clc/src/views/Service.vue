<template>
<div id="app">
  <div id="business">
    <h2 class="section-title">service</h2>
    <div class="flex around business-wrap">
      <div class="business-cat" v-for="(data,index) in business" :key="index">
        <img :src="data.img" alt />
        <h3>{{data.title}}</h3>
        <p>{{data.description}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data() {
    return {
    business: [
        {
          img: require("../assets/business-icon.png"),
          title: "経理業務効率化",
          description:
            "経理業務に関するルーティーンワークについて、SaaSやExcelを利用し、効率的な仕組みに作り変えることで、経理業務に要する時間の短縮化を実現いたします。"
        },
        {
          img: require("../assets/business-icon.png"),
          title: "英文会計業務",
          description:
            "海外親会社等へのレポーティングが必要なお客様に対して、英文会計サービスをご提供いたします。レポーティングの形式については、ご要望に応じてカスタマイズが可能です。"
        },
        {
          img: require("../assets/business-icon.png"),
          title: "翻訳業務",
          description:
            "日本語書類の英訳、または英文書類の和訳サービスについて、スピーディーかつリーズナブルな価格にてご提供いたします。"
        }
      ]
    }
  },
}
</script>

<style scoped>

#business {
  background: url(../assets/bg3.jpg) no-repeat;
  background-size: cover;
  /* height: 800px; */
}

#business .section-title {
  color: #fff;
  padding: 40px 0;
  margin: 0;
}

.business-wrap {
  text-align: center;
}

.business-cat {
  width: 60%;
  background-color: rgba(51, 51, 51, 0.5);
  padding: 20px 35px 30px;
  box-sizing: border-box;
  margin-bottom: 50px;
}

.business-cat h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

.business-cat p {
  color: #fff;
}

.business-cat img {
  width: 100px;
  height: auto;
  margin: 0 auto 10px;
}
</style>