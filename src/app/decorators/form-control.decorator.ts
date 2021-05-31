import { decoratePropery, getDecoratedProps, getDecoratedPropValue } from './decorator-utils';
export interface FormControlOptions {
    name?: string
    label?: string
    type?: ControlType
}

export type ControlType = 'text' | 'mobile' | 'url' | 'password' | 'textarea' | 'select' | 'switch' | 'number' | 'date' | 'checkbox' | 'radio' | 'time';

const FOMR_CONTROL_KEY = 'FORM_CONTROL';
export const FormControl = (options?: FormControlOptions): any => (classType: any, propertyName: string) => {
    console.log(Reflect.getMetadataKeys(classType, propertyName))
    decoratePropery(classType, propertyName, FOMR_CONTROL_KEY, options);
}

export const getFormControlDecoratedProps = (classType: any): string[] => {
    return getDecoratedProps(classType, FOMR_CONTROL_KEY);
}

export const getFormControlOptions = (classType: any, propertyName: string): FormControlOptions => {
    return getDecoratedPropValue(classType, propertyName, FOMR_CONTROL_KEY);
}