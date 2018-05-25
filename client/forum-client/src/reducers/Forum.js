export default function(
    state = {
      accessToken: ""
    },
    action
  ) {
    switch (action.type) {
      case "SetAccesToken":
        return Object.assign({}, state, { accessToken : action.payload.id });
      default:
        break;
    }
    return state;
  }