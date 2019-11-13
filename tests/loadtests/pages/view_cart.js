import {check, group} from "k6";
import http from "k6/http";

export function viewCart(config) {
    group("View cart", function() {
        let res = http.get(`${config.host}/cart`);
        check(res, {
            'is success': (r) => r.status === 200
        });
    });
}
