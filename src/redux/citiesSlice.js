import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                name: "Lima",
                description: "lorem ipsum dolor causa, amet consectetur nova aris?",
                imgURL: "https://images.lonelyplanetitalia.it/static/places/lima-3437.jpg?q=90&p=2400%7C1350%7Cmax&s=3dc99d33fc99b4388f4cbe5dd0cc1441",
                isVisited: false,
            },
            {
                id: 1,
                name: "Roma",
                description: "lorem ipsum. Excepturi odio quia pariatur quod soluta optio!",
                imgURL: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: true,
            },
            {
                id: 2,
                name: "Tokyo",
                description: "lorem ipsum tatakae, kudo sachi tgc. Excepturi odio quia pariatur quod soluta optio!",
                imgURL:"https://images.unsplash.com/photo-1738975927070-d5af82de67c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: false,
            },
            {
                id: 3,
                name: "Varsavia",
                description: "Lorem ipsum dolor prova con children adipisicing elit. Veniam officiis eaque laboriosam modi!",
                imgURL: "https://images.unsplash.com/photo-1577133192629-5140c5371590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: true,
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const { add } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer