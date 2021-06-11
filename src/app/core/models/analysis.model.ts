import { Graph } from './graph.model';
import { BaseModel } from './base.model';
import { StatInfo } from './stat-info.model';

/* tslint:disable: variable-name */
export class Analysis extends BaseModel {
    private _description: StatInfo;
    private _graphs: Graph[];

    constructor(id: string, title: string, description: StatInfo, graphs: Graph[]) {
        super(id, title);
        this._description = description;
        this._graphs = graphs;
    }

    public get description(): StatInfo {
        return this._description;
    }

    public get graphs(): Graph[] {
        return this._graphs;
    }
}
