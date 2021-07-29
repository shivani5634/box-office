import { useReducer } from 'react';


function showReducer(prevState,action){
    switch () {
        case value:
            
            break;
    
        default:
            return prevState
    }
}
function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
}

export function useShows(key = 'shows') {
  return usePersistedReducer(showReducer, [], key);
}
