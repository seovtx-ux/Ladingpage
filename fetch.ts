(async () => {
  const res = await fetch('https://vienthongxanh.vn/danh-muc/tu-mang-tu-rack/');
  const data = await res.text();
  const imgs = Array.from(data.matchAll(/data-src=\"([^\"]+)\"/g));
  console.log(imgs.map(m => m[1]).filter(url => url.includes('tu-rack')).slice(0, 5).join('\n'));
})();
