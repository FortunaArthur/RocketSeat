import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #videos = new Map();

    create(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video)
    };

    list(){
        this.#videos.values()
    };

    update(id, video){
        this.#videos.set(id, video)
    };

    delete(id){
        this.#videos.delete(id)
    };

};


