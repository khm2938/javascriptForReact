export function boardReducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((item) => item.id !== action.id);
    }
     case "UPDATE": {
      return state.map((item)=>
        item.id === action.data.id 
        ? {...item, 
            title: action.data.title, 
            content: action.data.content,
            category: action.data.category,
            level: action.data.level,
            summary: action.data.summary,
          } 
        : item
      );
    }
    default:
      return state;
  }
}
