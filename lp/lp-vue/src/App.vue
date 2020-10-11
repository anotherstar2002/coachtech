<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <main>
      <div id="eyecatch">
        <p>estra</p>
      </div>
      <div id="about" class="wrap">
        <h2 class="section-title">about</h2>
        <div class="flex around">
          <div class="about-left">
            <img src="./assets/bg2.jpg" alt />
          </div>
          <div class="about-right">
            <h3>estra inc.</h3>
            <p>私たちは、お客様の満足度を徹底的に追及することで、お客様・市場・時代のニーズを的確に捉え、事業の拡大と周辺ビジネスによる差別化、業界における圧倒的な地位の確立を図るべく積極的な事業活動を行っています。</p>
            <ol>
              <li>コーチング事業</li>
              <li>プログラミング事業</li>
              <li>SaaS事業</li>
            </ol>
          </div>
        </div>
      </div>
      <div id="business">
        <h2 class="section-title">service</h2>
        <div class="flex around business-wrap">
          <div class="business-cat" v-for="(data,index) in business" :key="index">
            <img :src="data.img" alt/>
            <h3>{{data.title}}</h3>
            <p>{{data.description}}</p>
          </div>
        </div>
      </div>
      <div id="company">
        <h2 class="section-title">company</h2>
        <table class="contain">
          <tr>
            <th>会社名</th>
            <td>株式会社estra</td>
          </tr>
          <tr>
            <th>代表者名</th>
            <td>福場凜太郎</td>
          </tr>
          <tr>
            <th>本社所在地</th>
            <td>東京都渋谷区1-1</td>
          </tr>
          <tr>
            <th>従業員数</th>
            <td>100名</td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>0120-000-0000</td>
          </tr>
          <tr>
            <th>FAX</th>
            <td>0120-000-0000</td>
          </tr>
          <tr>
            <th>メールアドレス</th>
            <td>rintaro@estra.inc</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>1000万円</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>コーチング</td>
          </tr>
        </table>
      </div>
      <div id="contact">
        <h2 class="section-title">contact</h2>
        <form class="form" method="post">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" v-model="text" />
          </div>
          <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail" v-model="email"/>
          </div>
          <div>
            <label for="tell">Tell:</label>
            <input type="tell" id="tell" name="user_name" v-model="tell" />
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message" v-model="msg"></textarea>
          </div>
          <div class="button-submit">
            <button class="button" type="submit" @click="sendContact()">Button</button>
          </div>
        </form>
      </div>
  </main>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  components:{
    CommonHeader,
    CommonFooter
  },
  data(){
    return {
      business: [
        {
          img:require("./assets/business-icon.png"),
          title:"ビジネスA",
          description: "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"
        },
        {
          img:require("./assets/business-icon.png"),
          title:"ビジネスB",
          description: "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"
        },
        {
          img:require("./assets/business-icon.png"),
          title:"ビジネスC",
          description: "ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"
        },  
      ],
    text: "",
    email:"",
    tell:"",
    msg:"",

    }
  },
  methods:{
    sendContact() {
      if(
        this.text =="" ||
        this.email =="" ||
        this.tell =="" ||
        this.msg == ""
      ) {
        alert("入力されていない項目があります");
      } else {
        this.text = "";
        this.email = "";
        this.tell = "";
        this.msg = "";
        alert ("送信しました");
      }
    }
  }
};
</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
 /* ここまでがリセットCSS */

 /* ここからが共通のCSS */

.section-title {
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0;
  text-align: center;
}

img {
  display: block;
  width: 100%;
}

.wrap {
  width: 80%;
  margin: 0 auto 50px;
}

.flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.between {
  justify-content: space-between;
}

.around {
  justify-content: space-around;
}

#eyecatch {
  height: 600px;
  background: url(./assets/bg1.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

#eyecatch p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-style: italic;
  font-weight: bold;
  color: #ccc;
  line-height: 1;
}

.about-right h3,
.about-right p {
  margin-bottom: 15px;
}

.about-left,
.about-right {
  width: 45%;
}

.about-right ol {
  list-style-position: inside;
}

#business {
  background: url(./assets/bg3.jpg) no-repeat;
  background-size: cover;
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
  width: 28%;
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

#company {
  padding: 40px 0 70px 0;
}

#company .contain {
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
}

#company table tr {
  border-bottom: 1px solid #333333;
}

#company th,
#company td {
  text-align: left;
}

#company th {
  padding: 10px 0;
}

#contact {
  background: rgb(241, 241, 241);
}

#contact .section-title {
  padding: 40px 0;
  margin: 0;
}

.form {
  width: 70%;
  margin: 0 auto;
}

.form > div input {
  margin-bottom: 20px;
  padding: 7px;
}

label {
  display: inline-block;
  width: 30%;
}

input,
textarea {
  box-sizing: border-box;
  border: 1px solid #999;
  width: 65%;
}

textarea {
  vertical-align: top;
  height: 200px;
}

.button-submit {
  text-align: center;
}

.button {
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  margin: 30px 0;
}

@media screen and (max-width: 768px) {
  .about-left,
  .about-right {
    width: 80%;
  }

  .business-cat {
    width: 80%;
  }

  label {
    display: block;
  }

  .form > div {
    margin: 0 auto;
  }

  input,
  textarea {
    width: 100%;
  }
}
</style>