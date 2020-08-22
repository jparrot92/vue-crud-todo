import Vue from 'vue';

// eslint-disable-next-line import/prefer-default-export
export async function fetchTodos({ commit }) {
  try {
    const { data } = await Vue.axios({
      url: '/todos',
    });
    commit('setTodos', data);
  } catch (e) {
    commit('todosError', e.message);
  } finally {
    console.log('Hello world!');
  }
}
