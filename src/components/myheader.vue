<template>
  <div>
    <header>
      <section>
        <span>待办事项</span>
        <input
          type="text"
          placeholder="添加待办事项✎"
          v-focus
          :value="newtask"
          @input="updateNewtask"
          @keyup.13="add"
        >
      </section>
    </header>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "myheader",
  props: {},
  methods: {
    ...mapMutations(["add"]),
    updateNewtask(e) {
      this.$store.commit("updateNewtask", e.target.value);
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  computed: {
    ...mapState({
      'newtask': state => state.newtask
    })
  }
};
</script>

<style scoped>
header {
  background-color: rgba(47, 47, 47, 0.98);
  height: 50px;
  line-height: 50px;
  width: 100%;
  border: 1px solid rgba(47, 47, 47, 0.98);
  padding: 0 500px;
  margin-bottom: 20px;
}
header section {
  display: flex;
  justify-content: space-between;
}
header span {
  font-size: 26px;
  color: lightslategrey;
}
header input {
  margin-top: 12px;
  border-radius: 8px;
  height: 25px;
  width: 300px;
  color: lightslategrey;
  font-size: 14px;
  padding-left: 10px;
  line-height: 25px;
}
</style>