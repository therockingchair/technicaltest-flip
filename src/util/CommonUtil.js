export default {
  date: date =>
    new Date(date.replace(' ', 'T')).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  amount: amount =>
    amount
      .toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      })
      .replace(/\D[0-9][0-9]$/, ''),
};
