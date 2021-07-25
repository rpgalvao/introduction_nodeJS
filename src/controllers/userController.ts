import {Request, Response} from 'express';

export const nome = (req: Request, res: Response) => {

    let name: string = req.query.name as string;

    res.render('pages/nome', {
        nome: name
    });
}

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
}

export const idadeAction = (req: Request, res: Response) => {
    let idade: number = 0;
    let mostrarIdade: boolean = false;

    if (req.body.year) {
        let anoNascimento: number = parseInt(req.body.year as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
}