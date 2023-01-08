import {atom} from "jotai";
import {API_URL} from "../constants";
import {Message, NewMessage} from "../entities";

// Get all users
export const usersAtom = atom(async () => fetch(`${API_URL}/users`).then(response => response.json()))

// Get messages for specific user
export const messagesAtom = atom<Message[]>([])
export const activeUserAtom = atom(0)
export const loadingMessagesAtom = atom(false)

/**
 * We need to use 2 different atoms to get ans save data in server, we need to found a better way to do this if this
 * approach doesn't look like a good one
 */
export const getMessagesAtom = atom(null, async (get, set, userId: string | number) => {
    const isLoading = get(loadingMessagesAtom)

    if (!isLoading) {
        set(loadingMessagesAtom, true)
        const messages = await fetch(`${API_URL}/users/${userId}/messages`).then(response => response.json())
        set(messagesAtom, messages)
        set(activeUserAtom, Number(userId))
        set(loadingMessagesAtom, false)
    }
})
export const createMessagesAtom = atom(null, async (get, set, message: NewMessage) => {
    const activeUser = get(activeUserAtom)

    if (activeUser !== 0) {
        await fetch(`${API_URL}/users/${activeUser}/messages`, {
            method: 'POST',
            body: JSON.stringify(message)
        }).then(response => response.json())
        await set(getMessagesAtom, activeUser)
    }
})