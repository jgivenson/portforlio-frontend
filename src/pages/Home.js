import { useEffect } from "react"
import { useTestimonialsContext } from "../hooks/useTestimonialsContext";

//components
import TestimonialDetails from '../components/TestimonialDetails'
import TestimonialForm from "../components/TestimonialForm"

const Home =() =>{
   // const [testimonials,setTestimonials] = useState(null)
   const {testimonials,dispatch} = useTestimonialsContext()
    useEffect(() =>
    {
        const fetchTestimonials = async () =>{
            const response = await fetch('/api/testimonials');
            const json = await response.json();
            if(response.ok)
            {
                dispatch({type:'SET_TESTIMONIALS',payload:json})
                //setTestimonials(json)
            }
        }
        fetchTestimonials()
    },[testimonials,dispatch])
    return (
        <div className="home">
            <div className="testimonials">
                {testimonials && testimonials.map((testimonial) => (
                    <TestimonialDetails key={testimonial._id} testimonial={testimonial}/>
                ))}
            </div>
            <TestimonialForm/>
        </div>
    )
}

export default Home