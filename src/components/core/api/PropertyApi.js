import ApiHelper from './apiHelper'

const fetchPropertyList = ( headOptions={} ) => {
    const path = 'http://localhost:9090/properties';
    return ApiHelper.get(path, headOptions);
}

export default {
    fetchPropertyList
};