interface ICard {
    id: number;
    paragraph: string;
}

export const Card = ({id, paragraph}: ICard) => {
    return (
        <div>
            <h1>Card {id}</h1>
            <p>{paragraph}</p>
        </div>
    )
}