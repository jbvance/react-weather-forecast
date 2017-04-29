import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){

  //the action.payload passed in is a promise, but the action.payload
  //once it gets to this function is the data returned by the API. This is
  //because redux-promise intercepts every action creator's action and looks at
  //the payload part. If the payload is a promise, it stops the action and
  //once the request finishes, it dispatches a  action of the same type
  //but with a payload of the resolved request
  switch(action.type){
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }

  return state;
}
