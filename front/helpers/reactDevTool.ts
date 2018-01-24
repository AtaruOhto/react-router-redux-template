/// <reference types="node" />

declare global {
    interface Window {devToolsExtension: any;}
}

export const setUpReactDevelopmentTool = (enhancers) => {
    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }
};