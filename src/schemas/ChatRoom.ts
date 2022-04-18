import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { User } from "./User";
import uuid from "uuid";

type ChatRoom = Document & { // Document é um tipo que representa um documento do mongoose
 idUsers: User[],
 idChatRoom: string,
}

const ChatRoomSchema = new Schema({ // Schema é um tipo que representa um esquema do mongoose
 idUsers: [
  {
   type: Schema.Types.ObjectId,
   ref: 'Users',
  }
 ],
 idChatRoom: {
  type: String, 
  default: uuid(),
 }
});


const ChatRoom = mongoose.model<ChatRoom>('ChatRoom', ChatRoomSchema); // model é um tipo que representa um modelo do mongoose

export { ChatRoom };