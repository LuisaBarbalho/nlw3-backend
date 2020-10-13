import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {
    async show(request: Request, response: Response){
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanageView.render(orphanage));
    },

    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
    },

    async create(request: Request, response: Response){
        console.log(request.files);


        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanage);

        // Instruindo que é um array de arquivos - upload de multiplos arquivos
        const requestImages = request.files as Express.Multer.File[];
        
        const images = requestImages.map(image => {
            return { path: image.filename}
        })
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });
    
        await orphanagesRepository.save(orphanage);
        
        // 201 - Algo foi criado e deu certo
        return response.status(201).json(orphanage);
    }
};