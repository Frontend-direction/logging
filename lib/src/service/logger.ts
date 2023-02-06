import {ICustomProperties, IEventTelemetry } from "@microsoft/applicationinsights-web";


export class GalileoLogger {
    trackEvent(event: IEventTelemetry, customProperties?:ICustomProperties) {
        // this.appInsights.trackEvent(event, customProperties);
        console.log('Track event')
    }
}