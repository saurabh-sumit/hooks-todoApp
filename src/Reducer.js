import React from "react";
import { uuid } from "uuidv4";

export default function reducer(state, action) {
  switch (action.type) {
    case "TODO_ADD":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.task === action.payload) > -1) {
        return state;
      }
      const newTodo = {
        id: uuid(),
        task: action.payload,
        complete: false,
      };
      const updatedTodo = [...state.todos, newTodo];
      return { ...state, todos: updatedTodo };
    case "TODO_TOGGLE":
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return { ...state, todos: toggleTodos };
    case "TODO_CURRENT":
      return { ...state, currentTodo: action.payload };
    case "TODO_UPDATE":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex((t) => t.task === action.payload) > -1) {
        return state;
      }
      const editedTodo = { ...state.currentTodo, task: action.payload };
      const index = state.todos.findIndex((t) => t.id === state.currentTodo.id);
      const editedTodos = [
        ...state.todos.slice(0, index),
        editedTodo,
        ...state.todos.slice(index + 1),
      ];
      return { ...state, todos: editedTodos, currentTodo: {} };
    case "TODO_DELETE":
      const toggleDelete = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      const isremovetodo =
        state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
      return { ...state, todos: toggleDelete, currentTodo: isremovetodo };
    default:
      return state;
  }
}
