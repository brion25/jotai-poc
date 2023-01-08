export interface User {
    id: number,
    createdAt: string,
    name: string,
    reason: string,
    topMessage: string
}

export interface Message {
    id: number,
    userId: number,
    createdAt: string,
    message: string
}

export type NewMessage = Omit<Message, 'id' | 'createdAt'>