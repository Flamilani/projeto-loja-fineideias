import { Request, Response } from "express";
import { createMenuObject } from './../helpers/createMenuObjects';
import { Material } from "../models/materials";


export const search = (req: Request, res: Response) => {
    let query: string = req.query.busca as string;

    if (!query) {
        res.redirect('/');
        return;
    }

    let list = Material.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query,
    });
};