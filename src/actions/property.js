import { startFetch, fetchSucceed, fetchFailed } from './request'
import { FETCH_PROPERTY_LIST, FILTER_PROPERTIES } from './types'
import PropertyApi from '../components/core/api/PropertyApi'

export const fetchPropertyList = (body, headOptions={}) => (dispatch, getState) => {
    dispatch(startFetch(FETCH_PROPERTY_LIST));
    return PropertyApi.fetchPropertyList(body, headOptions)
            .then((response) => {
                dispatch(fetchSucceed(FETCH_PROPERTY_LIST, response));
            }).catch((error) => {
                dispatch(fetchFailed(FETCH_PROPERTY_LIST), error);
            });
};

const filterPropertiesType =  searchValue => ({
    type: FILTER_PROPERTIES,
    searchValue: searchValue
});

export const filterProperties = (searchValue) => dispatch => {
    dispatch(filterPropertiesType(searchValue))
};

