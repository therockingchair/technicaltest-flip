export default {
  date: date =>
    new Date(date.replace(' ', 'T')).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  amount: amount =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    })
      .format(amount)
      .replace(/\D[0-9][0-9]$/, ''),
  extractValues: obj => {
    const values = [];
    for (var key in obj) {
      values.push(obj[key]);
    }
    return values;
  },
};
