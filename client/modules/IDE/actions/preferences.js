import * as ActionTypes from '../../../constants';
import axios from 'axios';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8000/api' : '/api';

function updatePreferences(formParams, dispatch) {
  axios.put(`${ROOT_URL}/preferences`, formParams, { withCredentials: true })
    .then(() => {
    })
    .catch((response) => dispatch({
      type: ActionTypes.ERROR,
      error: response.data
    }));
}

export function setFontSize(value) {
  return (dispatch, getState) => { // eslint-disable-line
    dispatch({
      type: ActionTypes.SET_FONT_SIZE,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          fontSize: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setIndentation(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_INDENTATION,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          indentationAmount: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function indentWithTab() {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.INDENT_WITH_TAB
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          isTabIndent: true
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function indentWithSpace() {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.INDENT_WITH_SPACE
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          isTabIndent: false
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutosave(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_AUTOSAVE,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autosave: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLintWarning(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_LINT_WARNING,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          lintWarning: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTextOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_TEXT_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          textOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}