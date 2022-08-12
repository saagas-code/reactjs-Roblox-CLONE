export type User = {
    _id: string;
    user: string;
    email: string;
    password: string;
    day: number,
    month: string,
    year: number,
    gender: string
}

export type Games = {
    _id: string,
    name: string,
    link: string,
    like: string,
    players: string,
    img: string,
}