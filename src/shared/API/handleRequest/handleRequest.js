export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
      // state.error = action.payload;
      state.error = action.error.message

      console.log('-------------------------')
  console.log(action)
  console.log('-------------------------')
};
