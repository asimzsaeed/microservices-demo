import {check, group} from "k6";
import http from "k6/http";

import { randomChoice } from "./utils.js"

export function addToCart(config) {
    group("Add to cart", function() {
        let product = randomChoice(config.products);
        let res = http.get(`${config.host}/product/` + product);
        res = http.post(`${config.host}/cart`, {
            'product_id': product,
            'quantity': randomChoice([1, 2, 3, 4, 5, 10])
        });
        check(res, {
            'is success': (r) => r.status === 200
        });
    });
}
