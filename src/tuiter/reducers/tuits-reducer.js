import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "Ali",
    "handle": "@ali",
    "image": "AliProfile.jpeg",
    "profile": "AliProfile.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Lifestyle",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        likeTuit(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            if (tuit.liked) {
                tuit.likes -= 1
            } else {
                tuit.likes += 1;
            }
            tuit.liked = !tuit.liked
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
                title: action.payload.tuit,
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export default tuitsSlice.reducer;
export const { likeTuit, createTuit, deleteTuit } = tuitsSlice.actions