import FeedbackItem from "@/components/FeedbackItem";


export default function FeedbackList({feedbacks,onDelete}){
    if(feedbacks.length ===0){//When the list is empty
        return <p className="text-gray-500">No Feedback submitted Yet</p>
    }
    return(
        <div className="space-y-4">
            {feedbacks.map((f,i)=>(
                <FeedbackItem
                key={i}
                index={i}
                feedback={f}
                onDelete={onDelete}
                />

            ))}
        </div>
    )
}