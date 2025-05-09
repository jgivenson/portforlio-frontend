import { useState } from "react"
import { useTestimonialsContext } from "../hooks/useTestimonialsContext"


const TestimonialForm = ()=>{
const { dispatch } = useTestimonialsContext();
const [testimony,setTestimony] = useState('')
const [companyName,setCompanyName] = useState('')
const [user_id,setUserId] = useState('')
const [emptyFields,setEmptyFields] = useState([])
const [error,setError] = useState(null);


const handleSubmit = async (e) =>{
    e.preventDefault();

    const testimonial = {testimony,companyName,user_id}
    const response = await fetch('/api/testimonials',{
        method:'POST',
        body:JSON.stringify(testimonial),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();

    if(!response.ok)
    {
        setError(json.error);
        setEmptyFields(json.emptyFields);

    }
    if(response.ok)
    {
        setTestimony("");
        setCompanyName("");
        setUserId("");
        setEmptyFields([]);
        setError(null);
        console.log('New testimonial added');
        dispatch({type:'CREATE_TESTIMONIAL',payload: json});
    }


}

    return (
        <form className="create" onSubmit={handleSubmit}>
            <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600'></div>
            <h3>Add New Testimonial</h3>
            <label>Testimonial Description</label>
             <textarea onChange={(e)=>setTestimony(e.target.value)} value={testimony} 
                className={emptyFields.includes('testimony') ? 'error':''} 
            />
            <label>Company</label>
            <input type="text" onChange={(e)=>setCompanyName(e.target.value)} value={companyName}
            className={emptyFields.includes('companyName') ? 'error':''}/> 
            <p className="publish">THIS TESTIMONIAL WILL NOT PUBLISHED IMMIDIATELY</p>

            <button>Add Testimony</button>
            {error && <div className="error">{error}</div>}
        </form> 
    )
}

export default TestimonialForm