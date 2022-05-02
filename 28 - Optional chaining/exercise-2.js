const order = {};

if (order?.customer?.address && !order) {
  console.log('City is required');
}