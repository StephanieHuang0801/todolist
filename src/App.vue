<template>
  <div id="app">
    <myheader></myheader>
    <main>
      <h2>正在进行中</h2>
      <ul>
        <mytodo
          :thelist="thelist"
          v-for="item in thelist"
          :key="item.id"
          :data="item"
          :change="change"
          :del="del"
          :dataid='item.id'
        ></mytodo>
      </ul>
    </main>

    <mydone></mydone>
  </div>
</template>

<script>
import mydone from "./components/mydone.vue";
import myheader from "./components/myheader.vue";
import mytodo from "./components/mytodo.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import store from "./store";

export default {
  name: "app",
  components: {
    myheader,
    mydone,
    mytodo
  },
  computed: {
    ...mapState(["thelist"])
  },
  methods: {
    ...mapMutations(["change", "del"])
  },
  created(){
    store.commit("init");
  },
  store
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
main {
  padding: 0 500px;
  margin-bottom: 20px;
}
</style>
