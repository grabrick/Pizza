import { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../assets/hooks/redux.hook";
import { cardItem, ICard } from "../../../assets/types/types";
import axios from "axios";
import { getItems } from "../../../assets/redux/cardReducer";
import Card from "./Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const CardRender: FC<ICard> = () => {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const getItem = (pizza: cardItem) => {
        dispatch(getItems(pizza))
    }


    useEffect(() => {
        axios.get("https://63f8d4a11dc21d5465c84a21.mockapi.io/api/pizza/items")
            .then((items) => {
                getItem(items.data)
                setIsLoading(false)
            }).catch(() => {
                console.log("error")
                setIsLoading(true)
            })
        window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const card = useAppSelector(state => state.card.cardData)
    let cardElement = card.map((card: cardItem) => <Card key={card.id} title={card.title} price={card.price} image={card.image} types={card.types} size={card.size} />)

    return (
        <>
            { isLoading 
                ? [...new Array(4)].map((_, index) => <CardSkeleton key={index} />)
                : cardElement
            }
        </>
    )
}

export default CardRender