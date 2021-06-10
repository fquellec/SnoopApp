import { BaseModel } from './base.model';
import { StatInfo } from 'src/app/core/models/stat-info.model';
import { Analysis } from './analysis.model';

/* tslint:disable: variable-name */
export class Newspaper extends BaseModel {
    private _description: StatInfo;
    private _analyses: Analysis[];

    constructor(id: string, title: string, description: StatInfo, analyses: Analysis[]) {
        super(id, title);
        this._description = description;
        this._analyses = analyses;
    }

    public get description(): StatInfo {
        return this._description;
    }

    public get analyses(): Analysis[] {
        return this._analyses;
    }
}
