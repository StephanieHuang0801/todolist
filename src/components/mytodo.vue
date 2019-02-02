<template>
  <li class="todoli">
    <em>
      <input type="checkbox" width="20" height="20" @click="change(data)">
      <span>{{data.task}}</span>
    </em>
    <button @click="del(dataid)" class="mybtn">✘</button>
  </li>
</template>

<script>

export default {
  name: "mytodo",
  props: ["thelist", "data", "change", "del","dataid"]
  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  background-color: #fff;
}

em {
  font-style: normal;
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
  cursor: pointer;
  color: red;
}
</style>
