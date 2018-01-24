import _ from 'lodash';

interface IRouterClassCallbackDefinition {
    selectors: Array<string>,
    callback: Function
}

export interface IRouterClassCallbackDefinitions extends Array<IRouterClassCallbackDefinition>{}

export class RouteScriptExecutor {
    constructor(private hookClassList: any, private routerClassCallbackDefinitions: IRouterClassCallbackDefinitions) {}

    public getCorrespondingCallback = (): Function => {
        for(let def of this.routerClassCallbackDefinitions) {
            if(this.checkIsDefinitionMatch(def)) return def.callback
        }
        return null
    };

    public checkIsDefinitionMatch(def): boolean {
        return _.intersection(this.hookClassList, def.selectors).length > 0
    }
}