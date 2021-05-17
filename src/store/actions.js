import { getJob, getUser } from "./../services";

/**
 * Get a single Job
 * @param {Number} id
 * @param {Function} dispatch
 */
const getJobDetail = async (id, dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const job = await getJob(id);
    dispatch({ type: "GET_JOB", payload: job });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

/**
 *
 * @param {String} user
 * @param {Function} dispatch
 */
const getUsername = async (dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const username = await getUser();
    dispatch({ type: "GET_USER", payload: username });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

export { getJobDetail, getUsername };
