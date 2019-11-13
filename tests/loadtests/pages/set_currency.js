import {check, group} from "k6";
import http from "k6/http";

import { randomChoice } from "./utils.js"

export function setCurrency(config) {
    group("Set currency", function() {
        let res = http.post(`${config.host}/setCurrency`, {
            'currency_code': randomChoice(config.currencies)
        });
        check(res, {
            'is success': (r) => r.status === 200
        });
    });
}
