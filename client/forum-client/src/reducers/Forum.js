export default function(
    state = {
      accessToken: ""
    },
    action
  ) {
    switch (action.type) {
      case "SetAccesToken":
        return Object.assign({}, state, { origin: action.payload });
      default:
        break;
    }
    return state;
  }