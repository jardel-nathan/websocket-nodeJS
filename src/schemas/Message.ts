import mongoose from "mongoose";
import {Document, Schema} from "mongoose";

type Message = Document & { // Document é um tipo que representa um documento do mongoose
    to: string,
    text: string,
    createdAt: Date,
    roomId: string,
}

const MessageSchema = new Schema({ // Schema é um tipo que representa um esquema do mongoose
    to: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    text:{
        type: String,
    },
    createdAt: { 
        type: Date,
    },
    roomId:{
        type: String,
        ref: 'ChatRoom',
    }    
});


const Message = mongoose.model<Message>('Messages', MessageSchema); // model é um tipo que representa um modelo do mongoose

export {Message};