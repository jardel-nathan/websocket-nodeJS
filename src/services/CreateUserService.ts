import { injectable } from "tsyringe";
import { User } from "../schemas/User";

interface CreateUserDTO{
    name: string;
    email: string;
    avatar: string;
    socket_id: string;
}

@injectable()
class CreateUserService {

 async execute(data: CreateUserDTO): Promise<User>{

    const userAlreadyExists = await User.findOne({
        email: data.email,
    }).exec();

    if(userAlreadyExists){
        const user = await User.findOneAndUpdate({
         _id: userAlreadyExists._id,
        }, {
         $set: {socket_id: data.socket_id, avatar:data.avatar, name: data.name},
        })
        return user;
    }

    const user = await User.create(data); 

    return user;
   }

}

export default CreateUserService;