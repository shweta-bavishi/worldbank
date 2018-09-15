import axios from "axios";
import {
  GET_LIST,
  GET_LIST_FAILURE,
  WINNER_LIST,
  WINNER_LIST_FAILURE,
  FILTER_LIST_REGION_SUCCESS,
  FILTER_LIST_REGION_FAILURE,
  FILTER_LIST_LENDINGTYPE_SUCCESS,
  FILTER_LIST_INCOMELEVEL_SUCCESS
} from "./types";

export const get_list = (page, name, value) => {
  return dispatch => {
    if (name == null || value == null) {
      axios
        .get(
          `http://api.worldbank.org/v2/countries?page=${page}&per_page=10&format=json`
        )
        .then(response => success(dispatch, response))
        .catch(error => failure(dispatch, error));
    }
    axios
      .get(
        `http://api.worldbank.org/v2/countries?page=${page}&per_page=10&${name}=${value}&format=json`
      )
      .then(response => success(dispatch, response))
      .catch(error => failure(dispatch, error));
  };
};

const success = (dispatch, response) => {
  console.log(response);
  dispatch({
    type: GET_LIST,
    payload: response
  });
};

const failure = (dispatch, error) => {
  dispatch({
    type: GET_LIST_FAILURE,
    payload: error
  });
};

export const get_filtered_list_region = () => {
  return dispatch => {
    axios
      .get(`http://api.worldbank.org/v2/region?format=json`)
      .then(response => filter_region_success(dispatch, response))
      .catch(error => filter_region_failure(dispatch, error));
  };
};

const filter_region_success = (dispatch, result) => {
  dispatch({
    type: FILTER_LIST_REGION_SUCCESS,
    payload: result
  });
};

const filter_region_failure = (dispatch, error) => {
  dispatch({
    type: FILTER_LIST_REGION_FAILURE,
    payload: error
  });
};

export const get_filtered_list_lendingType = () => {
  return dispatch => {
    axios
      .get(`http://api.worldbank.org/v2/lendingTypes?format=json`)
      .then(response => filter_lendingType_success(dispatch, response));
  };
};

const filter_lendingType_success = (dispatch, result) => {
  dispatch({
    type: FILTER_LIST_LENDINGTYPE_SUCCESS,
    payload: result
  });
};

export const get_filtered_list_incomeLevel = () => {
  return dispatch => {
    axios
      .get(`http://api.worldbank.org/v2/incomelevel?format=json`)
      .then(response => filter_incomelevel_success(dispatch, response));
  };
};

const filter_incomelevel_success = (dispatch, result) => {
  dispatch({
    type: FILTER_LIST_INCOMELEVEL_SUCCESS,
    payload: result
  });
};

export const get_winner_list = season => {
  return dispatch => {
    axios
      .get(`http://ergast.com/api/f1/${season}/results/1.json`)
      .then(response => winner_success(dispatch, response))
      .catch(error => winner_failure(dispatch, error));
  };
};

const winner_success = (dispatch, result) => {
  dispatch({
    type: WINNER_LIST,
    payload: result
  });
};

const winner_failure = (dispatch, error) => {
  dispatch({
    type: WINNER_LIST_FAILURE,
    payload: error
  });
};
