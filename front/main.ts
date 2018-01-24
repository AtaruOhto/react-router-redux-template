import {IRouterClassCallbackDefinitions, RouteScriptExecutor} from "helpers/routeScriptExecutor/routeScriptExecutor";
import {renderIndex} from "./index";

const htmlClassList = document.querySelector('html').classList;
const hookAndCallbacks: IRouterClassCallbackDefinitions = [
    {
        selectors: ["react-hook-index"],
        callback: () => {
            renderIndex();
        }
    }
];

const callback = new RouteScriptExecutor(htmlClassList, hookAndCallbacks).getCorrespondingCallback();
if(callback) { callback(); }
