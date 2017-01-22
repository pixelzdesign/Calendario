import * as moment from 'moment-timezone'
import {Event} from '../util/interfaces/event'
import {parseOptions} from '../parser/options'

class Init {
    static today:moment.Moment;
    static month:number;
    static year:number;
    static options:any;
    static calents: Event[];

    constructor(options:any) {
        Init.options = parseOptions(options);
        Init.today = moment()
        Init.month = (isNaN(Init.options.month) || Init.options.month === null) ? 
                    Init.today.month() : Init.options.month - 1
        Init.year = (isNaN(Init.options.year) || Init.options.year === null) ? 
                    Init.today.year() : Init.options.year
    }


}