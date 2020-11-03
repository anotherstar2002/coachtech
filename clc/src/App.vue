<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <router-view></router-view>
    <CommonFooter></CommonFooter>
    
  </div>
</template>

<script>
import CommonHeader from "./views/CommonHeader.vue";
import CommonFooter from "./views/CommonFooter.vue";
export default {
  components: {
    CommonHeader,
    CommonFooter
  }
}
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

/* .about-right h3,
.about-right p {
  margin-bottom: 15px;
}

.about-left,
.about-right {
  width: 45%;
}

.about-right ol {
  list-style-position: inside;
} */

/* ここから個別 */
/* #eyecatch {
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
  font-size: 60px;
  font-style: italic;
  font-weight: bold;
  color: #ccc;
  line-height: 1;
} */

/* .about-right h3,
.about-right p {
  margin-bottom: 15px;
}

.about-left,
.about-right {
  width: 45%;
}

.about-right ol {
  list-style-position: inside;
} */
/* 
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
} */

/* #company {
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
} */

/* #contact {
  background: rgb(241, 241, 241);
}

#contact .section-title {
  padding: 40px 0;
  margin: 0;
} */

/* .form {
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
} */
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
