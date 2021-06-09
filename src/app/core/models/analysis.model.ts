import { StatInfo } from './stat-info.model';
/* tslint:disable: variable-name */

export class Analysis {
    private _title: string;
    private _description: StatInfo;
    private _graphs: any[];

    constructor(title: string, description: StatInfo, graphs: any[]) {
        this._title = title;
        this._description = description;
        this._graphs = graphs;
    }

    public get title(): string {
        return this._title;
    }

    public get description(): StatInfo {
        return this._description;
    }

    public get graphs(): any[] {
        return this._graphs;
    }
}
