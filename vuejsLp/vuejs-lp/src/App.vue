<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <main>
      <div class="mission">
        <div class="mission-content">
          <h2 class="mission_title">
            お客様のために進化する成長企業であり続ける
          </h2>
          <p class="mission_text">
            顧客主導型サービスを提供する企業として、お客様の会社経営に必要なサービスと情報を提供し続ける企業支援会社を目指します。企業が現在直面している「勝ち残るため」の戦略を提供できる会社として、ホームページをはじめ、各種マーケティングをご提供いたします。
          </p>
          <a href="" class="common-btn mission-btn">ミッション詳細</a>
        </div>
        <div class="mission-img">
          <img src="./assets/mission-img.jpg" alt="" />
        </div>
      </div>

      <div class="service">
        <h2 class="service-title section-title">service</h2>
        <div class="service-content" v-for="(data,index) in services" :key="index">
          <img :class= "data.imgClass" :src="data.img" alt />
          <div class="service-content_inner" :class="data.innerClass"> 
            <h3>{{data.title}}</h3>
            <p>{{data.mission}}</p>
            <p>{{data.description}}</p>
            <a href="" class="common-btn service-btn">サービス詳細</a>
          </div>
        </div>
      </div>

      <div class="company">
        <div class="recruit-company flex">
          <div class="recruit-company_size" v-for="(item, index) in recruit" :key="index">
            <img :src="item.img" alt/>
            <h2 class="company-title section-title">
              {{item.english}}<br/><span>{{item.japanese}}</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="faq">
        <h2 class="faq-title">FAQ</h2>
        <p class="faq-title-jp">良くある質問</p>
      </div>
      <div class="contact">
        <h2 class="contact-title section-title">
          contact<br /><span>お問い合わせ</span>
        </h2>
        <p class="contact-subtitle section-title">
          お気軽にお問い合わせください。
        </p>
        <p class="contact-text">
          資料請求・お問い合わせなどなんでも気軽にお問い合わせください。お仕事のご連絡もお問い合わせページに飛んでいただいて、入力フォームにご記入お願いいたします。
        </p>
        <a href="" class="common-btn contact-btn">お問い合わせへ</a>
      </div>
    </main>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
/* eslint-disable no-console */
import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'

export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter
  },
  data(){
    return{
      services: [
        {
          imgClass:"service-img",
          innerClass:"service-content_inner",
          img: require("./assets/service2.jpg"),
          title: "Web製作事業",
          mission: "Web製作事業のミッション",
          description:
            "ユーザーが求める物を分析し、ユーザビリティを備えた最適なサイトを提供。建設業から美容、ブライダル、飲食店まで多種多様な業種の制作実績があります"
        },
        {
          imgClass:"service-img_second",
          innerClass:"service-content_inner-second",
          img: require("./assets/service1.jpg"),
          title: "コーチング事業",
          mission: "コーチングのミッション",
          description:
            "ユーザーが求める物を分析し、ユーザビリティを備えた最適なサイトを提供。建設業から美容、ブライダル、飲食店まで多種多様な業種の制作実績があります"
        }
      ],
      recruit: [ 
        {
          img: require("./assets/company.jpeg"),
          english: "company",
          japanese:"会社概要"
        },
        {
          img: require("./assets/recruit.jpg"),
          english: "recruit",
          japanese:"採用情報"
        }
      ],
    }
  },
}
</script>

<style>

/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1.6;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

a {
  color: #333333;
  text-decoration: none;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

body {
  color: #333333;
  height: 100%;
}

.mgb-15 {
  margin-bottom: 15px;
}

.common-btn {
  display: block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  padding: 0 20px;
  color: #000;
  text-align: center;
}

.section-title {
  font-size: 40px;
  line-height: 1;
}

.section-title span {
  font-size: 20px;
}


/*------------------------*/
/*         mission        */
/*------------------------*/
.mission {
  position: relative;
  background: #000;
  margin-bottom: 10%;
  z-index: 899;
}

.mission-content {
  padding: 10% 0 10% 20%;
  box-sizing: border-box;
  width: 70%;
}

.mission_title,
.mission_text {
  margin-bottom: 30px;
  color: #fff;
}

.mission_title {
  font-size: 30px;
}

.mission-img {
  width: 40%;
  position: absolute;
  bottom: -10%;
  right: 5%;
  z-index: -999;
}

/*------------------------*/
/*         service        */
/*------------------------*/
.service {
  background: #e5e5e5;
  margin-bottom: 10%;
}

.service-title {
  text-align: center;
  padding: 20px 0;
}

.service-content {
  position: relative;
  padding-bottom: 15%;
}

.service-img {
  width: 50%;
  margin-left: 50%;
}

.service-img_second {
  width:50%;
  margin: 0;

}

.service-content_inner {
  position: absolute;
  top: 15%;
  left: 15%;
  background: #fff;
  width: 40%;
  padding: 5% 5%;
  box-sizing: border-box;
}

.service-content_inner-second {
  left: 45%;
}

.service-btn {
  border: 1px solid #000;
  margin: 0 0 0 auto;
}

.service-second {
  background-color: green;
}

/*------------------------*/
/*        recruit         */
/*------------------------*/
.company {
  margin-bottom: 10%;
}

.recruit-company_size {
  width: 48%;
  height: 300px;
  position: relative;
  z-index: 1;
}

/* v-for置換時に変更 */
.company-img {
  position: absolute;
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;

}

.company-title {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.company-title span {
  color: #fff;
}

/*------------------------*/
/*        faq             */
/*------------------------*/
.faq {
  width: 70%;
  background: #000;
  margin: 0 auto 10%;
  padding: 50px;
}

.faq-title,
.faq-title-jp {
  display: inline-block;
  color: #fff;
}

.faq-title {
  font-size: 30px;
  width: 10%;
}

.faq-title-jp {
  font-size: 20px;
  width: 80%;
  text-align: center;
}

/*------------------------*/
/*        contact         */
/*------------------------*/
.contact {
  background: url(./assets/contact-bg.jpg) center/cover no-repeat;
  padding: 10%;
}

.contact-title,
.contact-title span,
.contact-subtitle,
.contact-text {
  color: #fff;
  text-align: center;
}

.contact-title,
.contact-subtitle,
.contact-text {
  margin-bottom: 40px;
}

.contact-btn {
  margin: 0 auto;
  background: none;
  border: 1px solid #fff;
  color: #fff;
}


/* レスポンシブ対応 */

@media screen and (max-width: 768px) {
  .mission-content {
    padding: 10% 0 10% 0%;
    box-sizing: border-box;
    width: 70%;
    margin: 0 auto;
  }

  .service-content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .service-img {
    display: block;
    width: 90%;
    margin-left: 0%;
  } 

  .service-img_second {
    margin: 0;
    display: block;
    width: 90%;
    margin-left: 0%;
  } 

.service-content_inner {
  position: relative;
  top: 0%;
  left: 0%;
  background: #fff;
  width: 90%;
  padding: 5% 5%;
  box-sizing: border-box;
}

.service-content_inner-second {
  left: 0%;
}

.recruit-company {
  margin-bottom: 10%;
  justify-content: center;
}

.recruit-company_size {
  width: 100%;
  height: 300px;
  position: relative;
  display: block;
}
}
</style>
