/* eslint-disable default-case */
export const initialState = {
  mapState: {
    latitude: 37.544579,
    longitude: 127.056045,
    radius: 500,
  },
  storeState: [],
  count: 0,
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'LOADING':
      return {
        mapState: initialState.mapState,
        storeState: initialState.storeState,
        count: initialState.count,
        error: initialState.error,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        storeState: action.storeState,
        count: action.count,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
