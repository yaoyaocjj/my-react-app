import {startFetchAction, fetchSucceedAction, fetchFailedAction} from '../actions/types';
import {FETCH_PROPERTY_LIST, FILTER_PROPERTIES} from "../actions/types";

export function home(state = {}, action) {
    switch (action.type) {
        case startFetchAction(FETCH_PROPERTY_LIST):
            return {...state, isFetching: true};
        case fetchSucceedAction(FETCH_PROPERTY_LIST):
            return {...state, isFetching: false, properties: action.response};
        case fetchFailedAction(FETCH_PROPERTY_LIST):
            return {...state, isFetching: false, error: true};
        case 'FILTER_PROPERTIES':
            const filterProperties = state.properties.filter( property =>{
               return property.address.includes(action.searchValue);
            });
            return {...state, properties: filterProperties};
        default:
            return state;
    }
}
