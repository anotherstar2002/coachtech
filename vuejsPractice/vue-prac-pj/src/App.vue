<template>
  <div id="app">
    <input type="text" v-model="keyword" />
    <!-- 1．vmodelでkeywordとしてテキストを取得 -->
    <table>
      <tr v-for="(user,index) in filteredUsers" :key="index">
        <td>{{index+1}}</td>
        <td>{{user.name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      users: [
        {
          name: "佐藤"
        },
        {
          name: "山田"
        },
        {
          name: "鈴木"
        },
        {
          name: "田中"
        },
        {
          name: "鈴村"
        }
      ]
    };
    // default array = 4 peoeple
  },
  computed: {
    filteredUsers() {
      let users = [];
      // reset Users array as empty 
      for (let i in this.users) {
        // for each 
        let user = this.users[i];
        if (user.name.indexOf(this.keyword) !== -1) {
          // substract "keyword" by v-model 
          // check the keyword by indexOf
          users.push(user);
          // where condition is met, push the user to template 
        }
      }
      return users;
    }
  }
};
</script>