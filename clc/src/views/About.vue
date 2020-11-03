<template>
  <div class="about">
    <div id="company">
        <h2 class="section-title">company</h2>
         <table class="contain" v-for="(data,index) in AboutUs" :key="index">
          <tr>
            <th>{{data.title}}</th>
            <td>{{data.description}}</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    transition () {
      this.$router.push({ name: "Home"});
    }
  },
  data() {
  return {
    AboutUs: [
      {
        title: "法人名",
        description:"キャピタル・リーフ・コンサルティング合同会社"
      },
      {
        title: "代表社員",
        description:"須賀直和"
      },
      {
        title: "本店所在地",
        description:"東京都中央区日本橋兜町18-5日本橋兜町ビル2F"
      },
      {
        title: "電話番号",
        description:"000-0000-0000"
      },
      {
        title:"Fax",
        description:"000-0000-0000"
      },
      {
        title:"資本金",
        description:"2,000,000円"
      },
      {
        title:"事業内容",
        description:"英文経理サービス"
      }
      ]
    }
  },
}
</script>

<style scoped>

#company {
  height: 700px;
  padding: 40px 0 70px 0;
}

#company .contain {
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
  text-align: left;
}

#company table tr {
  border-bottom: 1px solid #333333;
}

#company th,
#company td {
  text-align: left;
  line-height: 2;
}

#company th {
  padding: 10px 0;
  width:150px;
}


</style>