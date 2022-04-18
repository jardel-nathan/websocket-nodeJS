import 'reflect-metadata';
import express, { application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path'
import mongoose from 'mongoose';

const app = express(); // servidor express para rotas

mongoose.connect('mongodb://localhost:27017/socketio-chat')

const server = http.createServer(app); // servidor http para o websocket

const io = new Server(server); // inicializa o servidor socket.io

app.use(express.static(path.resolve(__dirname, '../public')))


app.get('/', (req, res) => {
})

export {server, io}