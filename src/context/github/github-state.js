import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './github-context';
import GitHubReducer from './github-reducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GitHubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  return (
    <GitHubContext.Provider
      value={{
        users: state.user,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
