import { Request, Response } from "express";
import { createMenuObject } from './../helpers/createMenuObjects';
import { Material } from "../models/materials";

export const home = (req: Request, res: Response) => {
    let list = Material.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os Produtos',
            background: 'banner.jpg'
        },
        list,
    });
};
export const camisetas = (req: Request, res: Response) => {
    let list = Material.getFromType('camiseta');

    res.render('pages/page', {
        menu: createMenuObject('camiseta'),
        banner: {
            title: 'Camisetas',
            background: 'camisetas/06.jpg'
        },
        list,
    });
};
export const canecas = (req: Request, res: Response) => {
    let list = Material.getFromType('caneca');

    res.render('pages/page', {
        menu: createMenuObject('caneca'),
        banner: {
            title: 'Canecas',
            background: 'canecas/10.jpg'
        },
        list,
    });
};
export const chaveiros = (req: Request, res: Response) => {
    let list = Material.getFromType('chaveiro');

    res.render('pages/page', {
        menu: createMenuObject('chaveiro'),
        banner: {
            title: 'Chaveiros',
            background: 'chaveiros/01.jpg'
        },
        list,
    });
};