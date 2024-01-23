import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #videos = new Map();

    create(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video)
    };

    list(search){
        // eu tinha esquecido de coloca ro return
        // tem q converter pra 1 arrey, ta voltando map iterator
        return Array.from(this.#videos.entries()).map((videoArray) =>{
        // usa o entries, que vai retornar varios arrays e pega o id tb
            const id = videoArray[0];
            const data = videoArray[1];
        // separar os arrays entre o ID e o resto dos dados

            return {id, ...data}
        // isso aki vai ajuda rna formatação
        // add parametro de busca
        }).filter(video => {
            if (search){
                return video.title.includes(search)}
                
            return true
        });
    };

    update(id, video){
        this.#videos.set(id, video)
    };

    delete(id){
        this.#videos.delete(id)
    };

};


