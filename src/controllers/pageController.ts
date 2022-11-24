import { Request, Response } from "express";
import { createMenuObject } from './../helpers/createMenuObjects';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os Produtos',
            background: 'banner.jpg'
        }
    });
};
export const camisetas = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('camiseta'),
        banner: {
            title: 'Camisetas',
            background: 'camisetas/06.jpg'
        }
    });
};
export const canecas = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('caneca'),
        banner: {
            title: 'Canecas',
            background: 'canecas/10.jpg'
        }
    });
};
export const chaveiros = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('chaveiro'),
        banner: {
            title: 'Chaveiros',
            background: 'chaveiros/01.jpg'
        }
    });
};