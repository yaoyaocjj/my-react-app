import { startFetchAction, fetchFailedAction, fetchSucceedAction } from './types';

export const startFetch = requestName => ({
    type: startFetchAction(requestName)
});

export const fetchSucceed = (requestName, response) => ({
  type: fetchSucceedAction(requestName),
  response
});

export const fetchFailed = (requestName, error) => ({
  type: fetchFailedAction(requestName),
  error
});