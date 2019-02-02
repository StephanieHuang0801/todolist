<template>
  <footer>
    <h2>已完成事项</h2>
    <ul>
      <li class="todoli" v-for="item in thedone" :key="item.id">
        <span>{{item.task}}</span>
        <i class="mybtn">✔</i>
      </li>
    </ul>
  </footer>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "mydone",
  props: {},
  computed: {
      ...mapState(["thedone"]),
  }
};
</script>

<style scoped>
.todoli {
  margin: 5px auto;
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 16px;
  color: seashell;
  background-color: rgba(47, 47, 47, 0.98);
}

.mybtn {
  line-height: 30px;
  margin-top: 2px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: seashell;
  color: green;
  font-style: normal;
}
footer {
  padding: 0 500px;
  margin-bottom: 20px;
}
</style>