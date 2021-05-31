import 'reflect-metadata';

const getDecoratedPropsKey = decoratorName => `${decoratorName}_PROPS`;

export const decoratePropery = (classType: any, propertyName: string, decoratorName: string | symbol, decoratorValue: any) => {
    const decoratedPropsKey = getDecoratedPropsKey(decoratorName);
    let properties: string[] = Reflect.getMetadata(`decoratedPropsKey`, classType);
    if (properties) {
        properties.push(propertyName);
    } else {
        properties = [propertyName];
        Reflect.defineMetadata(decoratedPropsKey, properties, classType);
    }
    Reflect.defineMetadata(decoratorName, decoratorValue, classType, propertyName);
}

export const getDecoratedProps = (classType: any, decoratorName: string | symbol): string[] => {
    const decoratedPropsKey = getDecoratedPropsKey(decoratorName);
    const props: string[] = Reflect.getMetadata(decoratedPropsKey, classType) ||
        Reflect.getMetadata(decoratedPropsKey, classType?.prototype);
    return props;
}

export const getDecoratedPropValue = <T>(classType: any, propertyName: string, decoratorName: string | symbol): T => {
    return Reflect.getMetadata(decoratorName, classType, propertyName) ||
        Reflect.getMetadata(decoratorName, classType?.prototype, propertyName)
}