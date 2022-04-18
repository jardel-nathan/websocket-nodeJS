import { container } from 'tsyringe';
import { io } from '../http';
import CreateUserService from '../services/CreateUserService';
import GetAllUsersService from '../services/GetAllUsersService';

//* socket:  emitir mensagem para o cliente que está conectado
//* io: emitir mensagem para todos os clientes

io.on('connect', socket => {

  // recebe mensagem do cliente
  socket.on('start', async (data) => {

    console.log('usuario ' + data.name + ' Conectou');

    // recebe os dados de um novo usuario
    const createUserService = container.resolve(CreateUserService)

    const { email, name, avatar, socket_id } = data

    const user = await createUserService.execute({
      email,
      name,
      avatar,
      socket_id: socket.id,
    })


    socket.broadcast.emit('new_users', data); // envia mensagem para todos os clientes exeto o que está conectado

  });

  // recebe mensagem do cliente
  socket.on('get_users', async (data, callback) => {
    console.log(data.name + ' solicitou todos os usarios da sala')
    const getAllUsersService = container.resolve(GetAllUsersService);
    // busca todos os usuarios
    const users = await getAllUsersService.execute();
    // retorna os usuarios para o cliente
    callback(users);

  })

});