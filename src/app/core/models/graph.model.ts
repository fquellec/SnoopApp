import { GraphTypeEnum } from './graph-type.enum';
import { BaseModel } from './base.model';

// tslint:disable: variable-name
export class Graph extends BaseModel {
    private _data: any[];
    private _type: GraphTypeEnum;

    constructor(id: string, title: string, data: any[], type: GraphTypeEnum) {
        super(id, title);
        this._data = data;
        this._type = type;
    }

    public get data(): any[] {
        return this._data;
    }

    public get type(): GraphTypeEnum {
        return this._type;
    }
}
