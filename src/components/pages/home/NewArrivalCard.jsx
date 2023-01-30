import { Link } from "react-router-dom";



const NewArrivalCard = ({ product }) => {

    const id = product && product.id;
    const image = product && product.images[0];
    const productName = product && product.name;

    return (
        <div className="new-arrival-card">
            <Link to={`/products/${id}`}>
                <img src={image} alt='product' className="image" />
                <div className="middle">
                    <div className="text">{productName}</div>
                </div>
            </Link>
        </div>
    )
}

export default NewArrivalCard