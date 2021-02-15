<template>
  <div>
    <div>
      <button @click="changeMode('insert')">TODO 입력</button>
    </div>
    <div v-if="mode === 'insert'">
      <div class="mb-3">
        <label for="todoItem" class="form-label">할 일</label>
        <input type="text" class="form-control" id="todoItem" placeholder="test" v-model="todoForm.todoItem">
      </div>
      <div class="mb-3">
        <label for="todoSubjectId" class="form-label">대상</label>
        <input type="text" class="form-control" id="todoSubjectId" v-model="todoForm.todoSubjectId">
      </div>
      <div class="mb-3">
        <button @click="saveTodo">
          할 일 입력
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { saveTodo } from "@api/todo/TodoApi";

export default {
  name: "TodoItem",
  data() {
    return {
      mode: "list",
      todoForm: {
        todoItem: null,
        todoSubjectId: null
      }
    }
  },
  methods: {
    changeMode(mode) {
      this.mode = mode;
    },
    saveTodo() {
      const _self = this;
      saveTodo(_self.todoForm)
      .then((data) => {
        console.log(data);
      });
    }
  }
};
</script>

<style scoped>

</style>
