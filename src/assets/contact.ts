export interface Contact {
    photo?: any,
    age: number,
    name: string,
    gender: string,
    email: string,
    phone: string,
    city: string,
    messageText?: any
}

export interface TextMessage{
    text: string;
    side: boolean
}