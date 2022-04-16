const initialState = {
   all: [
       {id: 1},
       {id: 2},
       {id: 3},
       {id: 4},
       {id: 5},
       {id: 6},
       {id: 7},
       {id: 8},
       {id: 9},
       {id: 10},
       {id: 11},
       {id: 12},
       {id: 13},
       {id: 14},
       {id: 15},
       {id: 16},
       {id: 17},
       {id: 18},
       {id: 19},
       {id: 20},
       {id: 21},
   ],
   page: 0,
   limit: 3,
   pages: [],
   out: []
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_PAGE": 
        let allPages = Math.floor(state.all.length / state.limit)
        const pages = []

        for (let i = 0; i <= allPages; i++) {
            pages.push(i)
        }




     
        const newOut = state.all.slice(state.page * state.limit, state.page * state.limit + state.limit)
        return {...state, out: newOut, pages: pages}


        case "SET_PAGE":
            return {...state, page: action.payload}

            case "LIMIT":
                alert(action.payload)
                return {...state, limit: action.payload}
         


        

        default: return state;
    }
}