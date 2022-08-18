export const QuizBank = (state = [], action) => {
    switch (action.type) {
        case 'START':
            return action.payload
        default:
            return state;
    }

}
