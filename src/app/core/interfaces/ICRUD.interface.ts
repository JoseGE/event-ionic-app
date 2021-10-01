export abstract class ICrud {
    save(data:any) {}
    update(item:any, data:any){}
    delete() {}
    getAll():any {}
    getItem(item:any){}
}