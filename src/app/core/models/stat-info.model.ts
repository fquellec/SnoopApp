/* tslint:disable: variable-name */

export class StatInfo {
    private _statName: string;
    private _statNumber: string;
    private _additionalInfo?: string[];

    constructor(statName: string, statNumber: string, additionalInfo?: string[]) {
        this._statName = statName;
        this._statNumber = statNumber;
        this._additionalInfo = additionalInfo;
    }

    public get statName(): string {
        return this._statName;
    }

    public get statNumber(): string {
        return this._statNumber;
    }

    public get additionalInfo(): string[] {
        return this._additionalInfo || [];
    }
}
