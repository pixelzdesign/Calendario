import {Moment} from 'moment-timezone'

export interface Event {
    content: string;
    startDateTime: Moment;
    endDateTime: Moment;
    pluginsData:any;
}