export interface Inputs {
    inputs: Input[],
    calendar: Input,
    area: Input
}


export interface Input {
    title: string,
    placeholder: string,
    controlName: string
}