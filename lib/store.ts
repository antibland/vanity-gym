import { createStore, action } from "easy-peasy";

export const store = createStore({
  currentWorkouts: [],
  currentWorkout: null,
  changeCurrentWorkouts: action((state: any, payload) => {
    state.currentWorkouts = payload;
  }),
  changeCurrentWorkout: action((state: any, payload) => {
    state.currentWorkout = payload;
  }),
});
