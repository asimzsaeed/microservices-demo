import {check, group} from "k6";
import http from "k6/http";

import { addToCart } from "./add_to_cart.js"

export function checkout(config) {
    addToCart(config)
    group("Checkout", function() {
        let res = http.post(`${config.host}/cart/checkout`, {
            'email': 'someone@example.com',
            'street_address': '1600 Amphitheatre Parkway',
            'zip_code': '94043',
            'city': 'Mountain View',
            'state': 'CA',
            'country': 'United States',
            'credit_card_number': '4432-8015-6152-0454',
            'credit_card_expiration_month': '1',
            'credit_card_expiration_year': '2039',
            'credit_card_cvv': '672',
        });
        check(res, {
            'is success': (r) => r.status === 200
        });
    });
}
