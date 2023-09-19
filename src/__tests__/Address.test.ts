import Aramex from '../index';

const address_data = {
    Line1: '',
    Line2: '',
    Line3: '',
    City: 'Lagos',
    StateOrProvinceCode: '',
    PostCode: '',
    CountryCode: 'NG'
};

test('Testing validating aramex address', async () => {
  const address: any = await Aramex.validateAddress(address_data);
//   console.log(address)
  expect(address.status).toBe(true);
});