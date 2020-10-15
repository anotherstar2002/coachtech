import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // count: 0,
    //changeJson1&2から飛んできた値にlistがアップデート
    list: "",
  },
  
  mutations: {
    // incrementMutation(state) {
    //   state.count++
    // },
    // changeData(state, payload) {
    //   state.list = payload;
    // },
    // Step2:MUTATIOIN: Actionからcommitで受け取ったもの=payloadとして、state.のlistに飛ばすchangeJson1,2という関数？
    changeJson1(state, payload) {
      state.list = payload;
    },
    changeJson2(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    // async changeDataAction(context) {
    //   let data = await axios.get("data.json");
    //   context.commit("changeData", data);
    // },
    // Step 1:ACTION「test1とtest2を読みだして、cotextをmutatinsのchangeJson1& 2にcommitする」という関数を作成する
    async getJsonTest1(context) {
      let data = await axios.get("test1.json");
      context.commit("changeJson1", data);
    },
    async getJsonTest2(context) {
      let data = await axios.get("test2.json");
      context.commit("changeJson2", data);
    },
  },
  modules: {
  }
})
