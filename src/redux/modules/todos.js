// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const completeTodo = (payload) => {
  return { type: COMPLETE_TODO, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 강의보기",
      content: "챕터 1부터 챕터 12까지 학습",
      done: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      content: "점심 뭐먹지..?",
      done: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          done: todo.id === action.payload ? !todo.done : todo.done,
        })),
      };

    default:
      return state;
  }
};

export default todos;
