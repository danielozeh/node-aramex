import aramexService from '../services/aramex';
const {aramexInstance} = aramexService
import Response from '../utils/response';
import aramexZones from '../utils/zones';

export default class Address {

    /**
     * Validate Address - This allows you validate an address on Aramex
     * @param {Object[]} addressObject
     * @param {string=} addressObject[].Line1
     * @param {string=} addressObject[].Line2
     * @param {string=} addressObject[].Line3
     * @param {string} addressObject[].City
     * @param {string=} addressObject[].StateOrProvinceCode
     * @param {string=} addressObject[].PostCode
     * @param {string} addressObject[].CountryCode
     * @returns object
     * @method POST
     */
    static async validateAddress(addressObject: object) {
        try {
            let payload = {
                ClientInfo: aramexService.aramexClientInfo,
                Address: addressObject

            }
            // console.log(payload)
            const resp = await aramexInstance.post(`/Location/Service_1_0.svc/json/ValidateAddress`, payload);

            if(resp && resp.status == 200) {
                //check if it has herrps
                const {HasErrors, Notifications} = resp.data
                if(HasErrors) {
                    let errors = Notifications
                    let error_message = errors.map((error: { Message: any; }) => error.Message);
                    // console.log(Notifications)
                    return Response.sendError({message: error_message.toString(), data: Notifications})
                }
                // console.log(resp)
                return Response.sendSuccess({message: 'Validation complete', data: resp.data})
            }

            return resp
        } catch(err: any) {
            return err.response.data
        }
    }
    
    static async getCountryZone(countryCode: string) {
        const zones: any = aramexZones
    }
}