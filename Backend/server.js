// Importa las dependencias como módulos ESM
import { MongoClient, ServerApiVersion } from "mongodb"
import express from 'express';

const uri = "mongodb://Alonso:1234Alonso@ac-ouxjhz4-shard-00-00.q41p8o6.mongodb.net:27017,ac-ouxjhz4-shard-00-01.q41p8o6.mongodb.net:27017,ac-ouxjhz4-shard-00-02.q41p8o6.mongodb.net:27017/?replicaSet=atlas-8gtwdq-shard-0&authSource=admin&tls=true"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const database = client.db("PruebaPMM");

const collectionGpsPosition = 'GPS_Data'
const collectionButtonState = 'Button_Data';

// Configura Express
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());


app.get('/gps-position', async (req, res) => {
    try {
        await client.connect();
        const collection = database.collection(collectionGpsPosition);
        const positionFound = await collection.findOne({});
        res.json(positionFound);
    } catch (error) {
        res.status(500).json({ error: 'Datos no encontrados' });
    }
});

// Ruta para agregar un nuevo elemento a la colección
app.get('/button-State', async (req, res) => {
    try {
        await client.connect();
        const collection = database.collection(collectionButtonState);
        const usedFound = await collection.find().toArray();
        res.json(usedFound);
    } catch (error) {
        res.status(500).json({ error: 'Datos no encontrados' });
    }
});

// Inicia el servidor en el puerto 3000
const puerto = 3001;
app.listen(puerto, () => {
    console.log(`Servidor iniciado en el puerto ${puerto}`);
});
