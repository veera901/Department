const initState = {
    list: [],
  
    refemp: {},
    sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
  };
  
  // ACTION TYPES
  const DEPARTMENT_CREATE = "DEPARTMENT_CREATE";
  const DEPARTMENT_UPDATE = "DEPARTMENT_UPDATE";
  const DEPARTMENT_DELETE = "DEPARTMENT_DELETE";
  const DEPARTMENT_GET_ALL = "DEPARTMENT_GET_ALL";
  const DEPARTMENT_GET_BY_ID = "DEPARTMENT_GET_BY_ID";
  
  const REF_DEPARTMENT = "REF_DEPARTMENT";
  
  // ACTIONS :: COmponents are interacting with this action
  export function createDepartmentAction(payload) {
    return { type: DEPARTMENT_CREATE, payload: payload };
  }
  
  export function updateDepartmentAction(payload) {
    return { type: DEPARTMENT_UPDATE, payload: payload };
  }
  
  export function deleteDepartmentAction(payload) {
    return { type: DEPARTMENT_DELETE, payload: payload };
  }
  
  export function getAllDepartmentAction(payload) {
    return { type: DEPARTMENT_GET_ALL, payload: payload };
  }
  
  export function getByIdDepartmentAction(payload) {
    return { type: DEPARTMENT_GET_BY_ID, payload: payload };
  }
  
  export function updateRefDepartment(payload) {
    return { type: REF_DEPARTMENT, payload: payload };
  }
  
  // REDUCER LOGIC
  export function DepartmentReducer(state = initState, action) {
    switch (action.type) {
      case DEPARTMENT_CREATE:
        return { ...state, list: [action.payload, ...state.list] };
      case DEPARTMENT_UPDATE:
        // TODO
        return state;
      case DEPARTMENT_DELETE:
        // TODO
        const oldList = state.list;
        oldList.splice(action.payload, 1);
        console.log("OL", oldList);
  
        return { ...state, list: [...oldList] };
      case DEPARTMENT_GET_ALL:
        // TODO
        return state;
      case DEPARTMENT_GET_BY_ID:
        // TODO
        return state;
  
      case REF_DEPARTMENT:
        return { ...state, refemp: action.payload };
  
      default:
        return state;
    }
  }