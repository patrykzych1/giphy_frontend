const initialState = {
  giphies: [],
  searchTerm: ''
}

function giphyReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      }
    case 'SET_GIPHIES':
      return {
        ...state,
        giphies: action.payload
      }
    default: return state
  }
}

export default giphyReducer
