import {useParams} from "react-router";
import {useAtom} from "jotai";
import {activeUserAtom, messagesAtom, getMessagesAtom, createMessagesAtom, loadingMessagesAtom} from "../../atoms";
import {useCallback, useEffect} from "react";

export const useUserMessages = () => {
    const {userId} = useParams<{userId: string}>()
    const [activeUserId] = useAtom(activeUserAtom)
    const [messages] = useAtom(messagesAtom)
    const [loading] = useAtom(loadingMessagesAtom)
    const [,getMessages] = useAtom(getMessagesAtom)
    const [,setMessage] = useAtom(createMessagesAtom)
    const createMessage = useCallback((message: string) => {
        setMessage({
            message,
            userId: activeUserId
        })
    }, [setMessage, activeUserId])

    useEffect(() => {
        if (userId) {
            getMessages(userId)
        }
    }, [userId, getMessages])

    return {
        messages,
        createMessage,
        loading
    }
}