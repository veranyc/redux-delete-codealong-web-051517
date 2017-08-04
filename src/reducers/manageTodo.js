let id = 0;

//give each todo item an id at the moment it's created and the CREATE_TODO action is dispatched.

export default function manageTodo(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      id++;
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.id !== action.id);
      return { todos }
    default:
      return state;
  }
};
