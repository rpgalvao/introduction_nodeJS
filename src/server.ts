import express, {Request, Response} from "express";
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import MainRoutes from "./routes/index";
import PanelRoutes from "./routes/painel";

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.urlencoded({extended: true}));

server.use(express.static(path.join(__dirname, '../public')));

server.use(MainRoutes);

server.use('/painel', PanelRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Oooops! Página não encontrada!');
});

server.listen(process.env.PORT);