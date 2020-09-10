<template>
    <div v-if="selectedTodo">
        <todo-form
            :todo="selectedTodo"
            @processTodo="modifyTodo"
            todoSubmit="Actualizar todo"
        ></todo-form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TodoForm from '@/components/TodoForm.vue';

export default {
  components: {
    TodoForm,
  },
  computed: {
    ...mapState('todos', ['selectedTodo']),
  },
  methods: {
    ...mapActions({
      updateTodo: 'todos/updateTodo',
    }),
    modifyTodo(todo) {
      this.updateTodo(todo).then(() => {
        this.$router.push('/todos');
      });
    },
  },
};
</script>
