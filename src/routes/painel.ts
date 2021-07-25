import {Router, Request, Response} from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Página principal do painel de administração');
});

router.get('/noticias', (req: Request, res: Response) => {
    res.send('Lista das notícias cadastradas no site.');
})

export default router;