import {check, group} from "k6";
import http from "k6/http";

import { randomChoice } from "./utils.js"

export function browseProduct(config) {
    group("Browse product", function() {
        let res = http.get(`${config.host}/product/` + randomChoice(config.products));
        check(res, {
            'is success': (r) => r.status === 200
        });
    });
}
