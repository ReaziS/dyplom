export class CheckboxItem {
    value: string;
    label: string;
    checked: boolean;
    russianLabel: string;

    constructor(value: any, label: any, checked?: boolean, russianLabel?: any) {
        this.value = value;
        this.label = label;
        this.checked = checked ? checked : false;
        this.russianLabel = russianLabel;
    }

}
