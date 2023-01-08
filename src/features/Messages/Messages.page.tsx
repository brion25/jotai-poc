import React from "react";
import {useUserMessages} from "./services";
import { List, withSuspense } from '../core'

const MessagesPage = () => {
    const { messages, loading, createMessage } = useUserMessages()

    return (
        <div>
            {loading && <span>Loading messages...</span>}
            <List>
                {messages.map(({id, userId, message, createdAt}) => (
                    <List.Item key={`${userId}-${id}`} description={message} date={createdAt} />
                ))}
            </List>
            <div>
                <button onClick={() => createMessage('Hello')}>Send new message</button>
            </div>
        </div>
    )
}

export default withSuspense(MessagesPage)
