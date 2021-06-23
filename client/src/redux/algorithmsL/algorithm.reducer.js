const INITIAL_STATE = {
    algorithmList: [
        {
           id :1,
           name : "Knapsack",
           title : "Knapsack",
           algorithmUsed : "greedy"
        },
        {
            id :2,
            name : "Memoization",
            title : "memoization",
            algorithmUsed : "..."
        },
        {
            id :3,
            name : "Search Tree",
            title : "searchTree",
            algorithmUsed : "brute Force"
        },
        {
            id :5,
            name : "Factorial",
            title : "Factorial",
            algorithmUsed : "Recursiveness"
        } 
    ]
}

const algListReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default algListReducer;