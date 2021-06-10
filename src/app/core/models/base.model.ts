// tslint:disable: variable-name
export class BaseModel {
    private _id: string;
    private _title: string;

    constructor(id: string, title: string) {
        this._id = id;
        this._title = title;
    }

    public get id(): string {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }
}
