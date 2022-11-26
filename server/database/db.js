import mongoose from 'mongoose';

const Connection = async (email, password) => {
    const URL = `mongodb://${email}:${password}@ac-n2u9v2a-shard-00-00.jjcykke.mongodb.net:27017,ac-n2u9v2a-shard-00-01.jjcykke.mongodb.net:27017,ac-n2u9v2a-shard-00-02.jjcykke.mongodb.net:27017/?ssl=true&replicaSet=atlas-wl65re-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

