import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi, natus quibusdam sapiente deleniti perferendis vitae assumenda non a eveniet accusamus neque aliquam quos harum facere quod, maxime quisquam rerum.",
    },
    {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi, natus quibusdam sapiente deleniti perferendis vitae assumenda non a eveniet accusamus neque aliquam quos harum facere quod, maxime quisquam rerum.",
    },
    {
        id: 3,
        rating: 8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi, natus quibusdam sapiente deleniti perferendis vitae assumenda non a eveniet accusamus neque aliquam quos harum facere quod, maxime quisquam rerum.",
    },
])