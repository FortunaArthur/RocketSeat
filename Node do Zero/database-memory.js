import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #videos = new Map();

    create(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video)
    };

    list(){
        // eu tinha esquecido de coloca ro return
        // tem q converter pra 1 arrey, ta voltando map iterator
        return Array.from(this.#videos.values())
    };

    update(id, video){
        this.#videos.set(id, video)
    };

    delete(id){
        this.#videos.delete(id)
    };

};


