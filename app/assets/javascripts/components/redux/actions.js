// ACTIONS 
SHOW_SENATORS
SHOW_REPS
SHOW_BILLS
SHOW_COMMITTEES
SHOW_GROUP


SHOW_SENATOR
SHOW_REP
SHOW_BILL
SHOW_COMMITTEE

CREATE_GROUP
REMOVE_GROUP
ADD_TO_GROUP
REMOVE_FROM_GROUP

SIGN_UP
SIGN_IN
LOG_OUT


SET_VISABILITY_FILTER


{
    type: "SHOW_SENATORS",
}
{
    type: "SET_VISABILITY_FILTER",
    filter: "STATE",
    filter_value: "Ca"
}

function showSenators() {
  return {
    type: SHOW_SENATORS
  }
}

const senators = (state = [], action) => {
    switch (action.type) {
    case 'SHOW_SENATORS':
      return [
        ...state,
        senator(undefined, action)
      ]
    case 'TOGGLE_TODO':
}

const senator = (state = [], action) => {

}


const boundShowSenators = () => dispatch(showSenators())
