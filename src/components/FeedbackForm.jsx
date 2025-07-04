// import { useState } from "react";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Button } from "./ui/button";

// export default function FeedbackForm({onAdd}){//Prop Onadd
//     const[name,SetName]=useState("");//String
//     const[comment,setComment]=useState("");
//     const[rating,setRating]=useState("");


//     const handleSubmit=e=>{
//         e.preventDefault();
//         if (!name.trim()|| !comment.trim()|| !rating.trim()) return;


//         //Rset after submission
//         onAdd({name,comment,rating});
//         SetName("");
//         setComment("");
//         setRating("");
//     };
//     return(
//         <form className="space-y-4 " onSubmit={handleSubmit}>
//             <input
//             placeholder="Student Name"
//             value={name}
//             onChange={e=>SetName(e.target.value)}/>
//             <Textarea 
//             placeholder="Comment"
//             value={comment}
//             onChange={e=>setComment(e.target.value)}/>
//             <input
//             placeholder="Rating(1-5)"
//             type="number"
//             value={rating}
//             onChange={e=>setRating(e.target.value)}/>
//             <Button type="submit">Submit Feedback</Button>

//         </form>
//     )
// }
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner"

export default function FeedbackForm({ onAdd }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || !rating.trim()) return;

    // Add the feedback
    onAdd({ name, comment, rating });
    
    // Reset after submission
    setName("");
    setComment("");
    setRating("");

    toast("Feedback Submitted Successfully!");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Input
        placeholder="Rating (1-5)"
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button type="submit">Submit Feedback</Button>
    </form>
  );
}