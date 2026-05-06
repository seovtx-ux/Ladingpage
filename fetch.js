const https = require('https');
https.get('https://vienthongxanh.vn/danh-muc/tu-mang-tu-rack/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', c => data+=c);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src=\"([^\"]+)\"/g);
    if(matches) {
       console.log(matches.slice(0, 30).map(m => m.match(/src=\"([^\"]+)\"/)[1]).join('\n'));
    }
  });
});
