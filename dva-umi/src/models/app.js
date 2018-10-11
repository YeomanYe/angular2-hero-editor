export default {
  namespace: 'app',
  state: {},
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    }
  },
  effects: {
    * error({payload: e}) {
      console.error("error:", e);
    },
  },
};
