<template>
  <div id=app>
    <div id="contact">
        <h2 class="section-title">contact</h2>
        <p>弊社へのお問合せにつきましては、以下のフォームをご使用ください。</p>
        <div class="form" method="post">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" v-model="text" />
          </div>
          <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail" v-model="email" />
          </div>
          <div>
            <label for="tell">Tell:</label>
            <input type="tell" id="tell" name="user_tell" v-model="tell"/>
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message" v-model="msg"></textarea>
          </div>
          <div class="button-submit">
            <button class="button" type="submit" @click="sendContact()">送信</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      text: "",
      email:"",
      tell:"",
      msg:"",
    };
  },
  methods:{
    sendContact(){
      if(
        this.text == "" ||
        this.email == "" ||
        this.tell == ""||
        this.msg == ""
      ){
        alert("入力されていない項目があります");
      }else{
        this.text = "";
        this.email ="";
        this.tell ="";
        this.msg == "";
        alert("お問合せありがとうございました。送信いたしました。");
      }
    }
  }
}
</script>

<style scoped>

#contact {
  background: rgb(241, 241, 241);
  height: 800px;
}

#contact .section-title {
  padding: 40px 0;
  margin: 0;
}

#contact p{
  text-align: center;
  padding-bottom: 30px;
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
  width: 20%;
  font-weight: bold;
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
</style>