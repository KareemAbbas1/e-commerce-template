import { Image } from "react-bootstrap"
import Rating from "../../Rating"


const ReviewCard = ({ reviews }) => {

    
    return (
        <div className="review-card">
            {
                reviews && reviews.map(r => (
                    <div style={{ borderBottom: '1px solid #9d9d9d', marginBottom: '2rem' }}>
                        <div>
                            <div>
                                <Image className='img-fluid avatar me-2' src={r.avatar} roundedCircle />
                                <span><strong>{r.userName}</strong></span>
                            </div>

                            <div className="d-flex justify-content-between mt-3 w-75">
                                <Rating rate={r.rate}/>
                                <span>{r.date}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p style={{ fontSize: '0.8rem' }}>{r.comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ReviewCard