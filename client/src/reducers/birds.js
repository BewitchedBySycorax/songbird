const initialState = {
  loading: true,
  birds: null,
  error: null
}

// export default function birdsData(state = initialState, action) {
const birdsData = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BIRDS_DATA_STARTED':
      return {
        ...state,
        loading: true,
        birds: []
      }
    case 'FETCH_BIRDS_DATA_SUCCESSED':
      return {
        ...state,
        loading: false,
        error: null,
        birds: action.payload

      }
    case 'FETCH_BIRDS_DATA_FAILED':
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

// export function storiesInfo(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_STORIES_START':
//       return {
//         ...state,
//         loading: true
//       };
//     case 'GET_STORIES_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         isAuthorized: true,   // Not sure about this
//         stories: action.payload,
//         error: null
//       };
//     case 'GET_STORIES_FAILED':
//       return {
//         ...state,
//         loading: false,
//         isAuthorized: false,   // Not sure about this
//         error: action.payload.err
//       };
//     default:
//       return state;
//   }
// }

export default birdsData
