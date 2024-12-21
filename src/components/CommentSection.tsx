
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Comment{
    id:string,
    user:string,
    comment:string,
}
interface CommentProps{
    postid:string,
}

export default function CommentsSection({postid}:CommentProps){
    const [comments,setComments]= useState<Comment[]>([]);
    const [newComment,setNewComment] = useState('');
    const [user,setUser] = useState('');
    const [editCommentID,setEditCommentID] = useState<string |null>(null);

    const handleAddComment = ()=>{
        if (newComment.trim() && user.trim()) {
            const newCommentObj :Comment = {
                id: new Date().toISOString(),
                user:user,
                comment:newComment
            }
            setComments([...comments,newCommentObj]);
            setNewComment('');
            setUser('')
        }
    };
    const handleEditedComment =(commentID:string)=>{
        const commentToEdited = comments.find((comment)=>comment.id === commentID);
        if (commentToEdited) {
            setNewComment(commentToEdited.comment);
            setUser(commentToEdited.user);
            setEditCommentID(commentID)
        };
    };

    const handleSavedEditedComment = ()=>{
        if (newComment.trim() && user.trim() && editCommentID) {
            const updatedComments = comments.map((comments)=>comments.id === editCommentID ? {...comments,text:newComment, user:user}:comments );
            setComments(updatedComments);
            setNewComment('');
            setUser('');
            setEditCommentID(null)
        }
    };

    const handleDeleteComment = (commentID: string) => {
        const updatedComments = comments.filter((comment) => comment.id !== commentID);
        setComments(updatedComments);
      };

    return(
        <div  className="mt-8">
            <h2 className="text-2xl font-bold">Comments</h2>
            <div className="mt-4 space-y-4">{comments.length>0?(
                comments.map((commment)=>(
                    <Card key={commment.id}>
                        <CardContent className="p-4">
                            <div className="font-semibold">{commment.user}</div>
                            <p>{commment.comment}</p>
                            <Button onClick={()=>handleEditedComment(commment.id)} className="mt-2 text-white bg-black">Edit</Button>
                            <Button onClick={() => handleDeleteComment(commment.id)} className="text-white bg-red-600" >Delete </Button>
                        </CardContent>
                    </Card>
                ))
            ):(
                <p className="text-slate-500">No Comments</p>
            )
            }
            </div>

            <div className="mt-6">
                <Input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Your Name" required className="w-full mb-2"/>
            </div>
            <div className="mt-6">
                <Input type="text" value={newComment} onChange={(e)=>setNewComment(e.target.value)} placeholder="Add Your Comment" required className="w-full mb-2"/>
                <Button onClick={editCommentID ?handleSavedEditedComment:handleAddComment} className="mt-4">{editCommentID?'Save':'Submit'}</Button>
            </div>
        </div>
    )
}