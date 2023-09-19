import Address from "./modules/address";

export default class Aramex {

    static validateAddress(addressData: object) {
        return Address.validateAddress(addressData);
    }

}