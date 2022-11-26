import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const email = process.env.DB_EMAIL;
const password = process.env.DB_PASSWORD;


const storage = new GridFsStorage({
    url: `mongodb://${email}:${password}@ac-n2u9v2a-shard-00-00.jjcykke.mongodb.net:27017,ac-n2u9v2a-shard-00-01.jjcykke.mongodb.net:27017,ac-n2u9v2a-shard-00-02.jjcykke.mongodb.net:27017/?ssl=true&replicaSet=atlas-wl65re-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 

