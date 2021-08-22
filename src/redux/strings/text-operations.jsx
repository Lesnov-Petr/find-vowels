import serviceAPI from "../../servicesAPI";
import { actions } from ".";

const { queryTextRequest, queryTextSuccess, queryTextError } = actions;

const queryText = (listID) => async (dispatch) => {
  dispatch(queryTextRequest());
  try {
    // console.log(listID);
    const { data } = await serviceAPI.getTextList(listID);
    console.log(data);
    dispatch(queryTextSuccess(data));
  } catch (error) {
    dispatch(queryTextError(error.message));
  }
};

export { queryText };
