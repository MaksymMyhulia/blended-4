//https://647c5422c0bae2880ad09404.mockapi.io/todos

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://647c5422c0bae2880ad09404.mockapi.io';
export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk('todo/addTodo', async (todo, thunkApi) => {
    try {
        const {data} = await axios.post('/todos', todo);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id, thunkApi) => {
    try {
        const {data} = await axios.delete(`/todos/${id}`);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})