import { Analysis } from './analysis.model';

/* tslint:disable: variable-name */
export class Newspaper {
    private _name: string;
    private _description: string;
    private _analyses: Analysis[];

    constructor(name: string, description: string, analyses: Analysis[]) {
        this._name = name;
        this._description = description;
        this._analyses = analyses;
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get analyses(): Analysis[] {
        return this._analyses;
    }
}
