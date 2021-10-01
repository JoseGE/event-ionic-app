import { Injectable } from "@angular/core";
import { AppStorageConst } from "src/app/core/const/storage.const";
import { ICrud } from "src/app/core/interfaces/ICRUD.interface";
import { StorageService } from "src/app/core/services/storage.service";
import { IEvent } from "../interfaces/event.interface";

@Injectable()
export class EventService implements ICrud {
    
    constructor(private storageService: StorageService){
        this.storageService.storageName = AppStorageConst.evetStorage
    }
    save(_data: IEvent): void {
        throw new Error("Method not implemented.");
    }
    update(item: any, data: IEvent): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    getItem(item: any): void {
        throw new Error("Method not implemented.");
    }


  
   
}