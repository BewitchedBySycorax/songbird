const fetchBirdsStarted = () => ({
  type: 'FETCH_BIRDS_DATA_STARTED'
})
const fetchBirdsSuccessed = birds => ({
  type: 'FETCH_BIRDS_DATA_SUCCESSED',
  payload: birds
})
const fetchBirdsFailed = error => ({
  type: 'FETCH_BIRDS_DATA_FAILED',
  payload: error
})

export const fetchBirds = () => dispatch => {
  dispatch(fetchBirdsStarted())
  
  return fetch('http://localhost:8000/api/birds')
    .then(response => response.json())
    // ! Remove next line
    .then(data => console.log(18, 'From Redux', data))
    .then(birdsData => dispatch(fetchBirdsSuccessed(birdsData)))
    // .then(json => dispatch({ type: 'FetchData', data: json }))
    .catch(error => dispatch(fetchBirdsFailed(error.message)))
    // .catch(error => dispatch({ type: 'ERROR', msg: 'Unable to fetch data' }))
}
