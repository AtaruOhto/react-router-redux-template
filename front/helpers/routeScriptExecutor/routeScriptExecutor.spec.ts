import {} from 'jasmine'
import assert from "power-assert"
import {IRouterClassCallbackDefinitions, RouteScriptExecutor} from 'helpers/routeScriptExecutor/routeScriptExecutor'

const classList1 = ["foo", "bar"];
const classList2 = ["hoge", "fuga"];


const classCallbackSet: IRouterClassCallbackDefinitions = [
    {
        selectors: ["aaa", "bbb"],
        callback: () => { return 10 }
    },
    {
        selectors: ["hoge"],
        callback: () => { return 20 }
    }
];

describe('RouteScriptExecutor', () => {
    it('RouteScriptExecutor returns matched function', () => {
        const executor = new RouteScriptExecutor(classList2, classCallbackSet);
        const isMatch = executor.checkIsDefinitionMatch(classCallbackSet[1]);
        const callback = executor.getCorrespondingCallback();
        assert(isMatch === true);
        assert(callback() === 20);
    });

    it('RouteScriptExecutor returns null', () => {
        const executor = new RouteScriptExecutor(classList1, classCallbackSet);
        const isMatch = executor.checkIsDefinitionMatch(classCallbackSet[0]);
        const callback = executor.getCorrespondingCallback();
        assert(isMatch === false);
        assert(callback === null);
    });
});