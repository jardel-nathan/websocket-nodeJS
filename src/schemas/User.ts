import mongoose from "mongoose";
import {Document, Schema} from "mongoose";

type User = Document & { // Document é um tipo que representa um documento do mongoose
    name: string,
    email: string,
    socket_id: string,
    avatar: string,
}

const UserSchema = new Schema({ // Schema é um tipo que representa um esquema do mongoose
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    socket_id: { 
        type: String,
    },
    avatar:{
        type: String,
    }    
});


const User = mongoose.model<User>('Users', UserSchema); // model é um tipo que representa um modelo do mongoose

export {User};