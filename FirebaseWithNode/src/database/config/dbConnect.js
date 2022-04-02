
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://rafael-dev:mongodbdev@cluster0.ib6xk.mongodb.net/CRUD?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;