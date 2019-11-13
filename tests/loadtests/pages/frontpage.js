import {check, group} from "k6";
import http from "k6/http";

export function frontpage(config) {
    group("Front page", function() {
        let res = http.get(`${config.host}/`);
        check(res, {
            'is success': (r) => r.status === 200
        });
    });
}
