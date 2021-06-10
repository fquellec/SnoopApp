/* tslint:disable: variable-name */

export class StatInfo {
    private stat_name: string;
    private stat_number: string;
    private additional_info?: string[];

    constructor(statName: string, statNumber: string, additionalInfo?: string[]) {
        this.stat_name = statName;
        this.stat_number = statNumber;
        this.additional_info = additionalInfo;
    }

    public get statName(): string {
        return this.stat_name;
    }

    public get statNumber(): string {
        return this.stat_number;
    }

    public get additionalInfo(): string[] {
        return this.additional_info || [];
    }
}
