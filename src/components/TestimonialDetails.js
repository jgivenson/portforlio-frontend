import { useTestimonialsContext } from "../hooks/useTestimonialsContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TestimonialDetails = ({testimonial}) =>{

    const { dispatch } = useTestimonialsContext();


    const handleClick = async () =>{
        const response = await fetch('/api/testimonials/'+testimonial._id,{
            method:'DELETE'
        })

        const json = await response.json();

        if(response.ok)
        {
            dispatch({type:'DELETE_TESTIMONIAL',payload:json})
        }
    }

    return(
        <div className="testimonial-details">
            <h4>{testimonial.testimony}</h4>
            <p><strong>Company Name:</strong>{testimonial.companyName}</p>
            <p>{formatDistanceToNow(new Date(testimonial.createdAt),{ addSuffix:true})}</p>
            <span className="material-icons" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TestimonialDetails