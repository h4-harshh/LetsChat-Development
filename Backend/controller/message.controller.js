import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage= async (req,res)=>{
    try {
        const { message }=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;    //current loggedIn user id
        let conversation= await Conversation.findOne({
            members:[senderId,receiverId],
        });
        if(!conversation){
            conversation = await Conversation.create({
                members:[senderId,receiverId],
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save()],[newMessage.save()]);
        res.status(201).json({
            message:"Message send successfully",
            newMessage,
        })

    } catch (error) {
        console.log("Error in sendMessage", error);
        res.status(500).json({error: "Internal server error"});
    }
};


export const getMesssage = async (req,res)=>{
    try {
        const {id: chatUser}= req.params;
        const senderId=req.user._id;
        let conversation = await Conversation.findOne({
            members:{$all:[senderId,chatUser]},
        }).populate("messages");
        if(!conversation){
            return res.status(201).json([]);
        }
        const messages=conversation.messages;
        res.status(201).json(messages);
    } catch (error) {
        console.log("Error in sendMessage", error);
        res.status(500).json({error: "Internal server error"});
    }
}