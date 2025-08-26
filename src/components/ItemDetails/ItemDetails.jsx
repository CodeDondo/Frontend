import { useItemDetails } from '../../hooks/useItemDetails'
import { Link } from 'react-router-dom'

export const ItemDetails = () => {
    const { itemDetails, loading, error } = useItemDetails()
    console.log(itemDetails);
    const { id, title, imageUrl, price, description } = itemDetails
    
    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            <h2>{title}</h2>
            {description}
        </div>
    )
}
