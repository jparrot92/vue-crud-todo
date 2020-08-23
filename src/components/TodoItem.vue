<template>

</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      _updateTodoStatus: 'todos/updateTodoStatus',
      _removeTodo: 'todos/removeTodo',
    }),
    ...mapMutations('todos', ['setTodo']),
    goToUpdateTodo() {
      this.setTodo(this.todo);
      this.$router.push({
        name: 'todos-update',
        params: { id: this.todo.id },
      });
    },
    updateTodoStatus() {
      this._updateTodoStatus(this.todo);
    },
    removeTodo() {
      this._removeTodo(this.todo.id);
    },
  },
};
</script>
