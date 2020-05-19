import { useReducer, useEffect, useCallback } from 'react';
import { initialState, reducer } from '../Reducer/Reducer';
import { stores } from '../API/MainAPI';

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const storeData = await stores.getStores(state.mapState);
      if (storeData.status === 200) {
        dispatch({
          type: 'SUCCESS',
          storeState: storeData.data.stores,
          count: storeData.data.count,
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: storeData.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [state, fetchData];
};

export default useFetch;
