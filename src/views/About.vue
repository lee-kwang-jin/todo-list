<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getTodoList } from "@api/todo/TodoApi"

const log = console.log;
export default {
  name: "About",
  created() {
    this.getTodoList();
  },
  methods: {
    getTodoList() {
      getTodoList()
      .then(response => log(response.data));
    }
  }
}
</script>
