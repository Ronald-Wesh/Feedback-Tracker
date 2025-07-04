import { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";
import { Toaster } from "@/components/ui/sonner"

export default function App(){
  const [feedbacks,setFeedbacks]=useState([]);

  const addFeedback=(feedback)=>{
    setFeedbacks(prev=>[feedback,...prev]);
    //1,2,3(prev)
    //1,2,3,4
  };
  const deleteFeedback=(index)=>{
    setFeedbacks(prev=>prev.filter((_, i) =>i !==index));
    //Filter out item at the specific index
    //i=index of current item _=current item
    // !==index =>keeps all items except the on with the index
    //["great","need improvement","excellent"]=index =1
    //["great",,"excellent"]
  };
  return(
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Feedback Tracker Hello</h1>
      <FeedbackForm onAdd={addFeedback}/>
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback}/>
       <Toaster />
    </div>
  )
} 