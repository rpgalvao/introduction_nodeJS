import {Request, Response} from "express";
import * as Product from "../models/Product";

export const home = (req: Request, res: Response) => {
    let user = {
        name: 'Renato',
        lastName: 'Galvão',
    }

    let age: number = 44;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let productList = Product.Product.getAll();
    let frasesList = Product.Frases.getAll();
    let expensiveList = Product.Product.getFromPriceAfter(12);

    res.render('pages/home', {
        user,
        age,
        showOld,
        products: productList,
        expensives: expensiveList,
        frasesDoDia: frasesList
    });
};

export const noticias = (req: Request, res: Response) => {
    res.send('Página das notícias principais do site');
}