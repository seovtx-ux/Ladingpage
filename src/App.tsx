import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronRight, CheckCircle2, ShieldCheck, Zap, Truck, Award, FileCheck, Check, Clock, Shield, Target, MessageSquare, PackageCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MaxtelLogo = ({ className = "h-8" }) => (
  <img src="https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png" alt="Maxtel Logo" className={`object-contain ${className}`} />
);

const products = [
    {
      name: 'Dòng Tủ Rack 6U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-6ud400-dang-dung.jpg',
      description: ['Thiết kế nhỏ gọn treo tường, để gầm bàn.', 'Khung hàn liền chắc chắn, chịu tải 300kg.', 'Dùng cho đầu ghi camera, switch mạng.'],
      highlight: false,
    },
    {
      name: 'Dòng Tủ Rack 10U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-10u-d600-maxtel-mtr-10u600-1000x1000.jpg',
      description: ['Lý tưởng cho văn phòng vừa và nhỏ.', 'Thiết kế bánh xe hoặc treo tường tùy mẫu.', 'Lắp đặt hệ thống camera, mạng LAN nội bộ.'],
      highlight: false,
      tag: 'BÁN CHẠY'
    },
    {
      name: 'Dòng Tủ Rack 12U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-12u-d600-dang-dung-mau-den-1000x1000.jpg',
      description: ['Dòng tủ đứng nhỏ gọn, trang bị 4 bánh xe.', 'Tùy chọn cửa mica hoặc lưới an toàn.', 'Giải pháp đa năng cho viễn thông.'],
      highlight: false,
    },
    {
      name: 'Dòng Tủ Rack 15U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-treo-tuong-15U-mau-trang-1000x1000.jpg',
      description: ['Không gian rộng rãi hơn cho switch, UPS.', 'Quạt hút tản nhiệt đỉnh tủ.', 'Thiết kế tháo lắp dễ dàng bảo trì.'],
      highlight: false,
    },
    {
      name: 'Dòng Tủ Rack 20U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-20u-maxtel-1000x1000.jpg',
      description: ['Tủ mạng cỡ trung, sức chứa lớn.', 'Chịu tải 500kg, lưới tổ ong đối lưu tốt.', 'Dành cho phòng máy chủ công ty.'],
      highlight: true,
      tag: 'DỰ ÁN'
    },
    {
      name: 'Dòng Tủ Rack 27U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-27u-maxtel-1000x1000.jpg',
      description: ['Tủ server chuẩn 19 inch chuyên nghiệp.', 'Hệ thống khóa chốt an toàn.', 'Khung thép 1.5mm cứng cáp mạ kẽm.'],
      highlight: false,
    },
    {
      name: 'Dòng Tủ Rack 32U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-36U-maxtel-1000x1000.jpg',
      description: ['Đảm bảo lưu trữ lượng máy chủ lớn.', 'Có nhiều đường luồn cáp thuận tiện.', 'Thông gió tối ưu, chống ẩm mốc.'],
      highlight: false,
    },
    {
      name: 'Dòng Tủ Rack 36U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-36U-maxtel-1000x1000.jpg',
      description: ['Sức chứa khủng, độ an toàn cực cao.', 'Tích hợp 4 quạt, thanh nguồn 6-12 port.', 'Chuẩn phòng Data Center tầm trung.'],
      highlight: false,
    },
    {
      name: 'Dòng Tủ Rack 42U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-42u-mau-den-maxtel-1000x1000.jpg',
      description: ['Tủ Server đỉnh cao cho Trung Tâm Dữ Liệu.', 'Cửa lưới cong 2 cánh, khóa mật mã.', 'Tải trọng 800 - 1000kg, siêu bền.'],
      highlight: true,
      tag: 'CAO CẤP'
    },
    {
      name: 'Dòng Tủ Rack 45U',
      image: 'https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-maxtel-42u-trong-trung-tam-du-lieu.jpg',
      description: ['Dòng tủ đứng cực đại cho Data Center.', 'Thép cường lực vô cùng chắc chắn.', 'Tản nhiệt và sức chứa tối đa.'],
      highlight: false,
    }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = (productName = "") => {
    if (productName) {
      setSelectedProduct(`Yêu cầu báo giá: ${productName}\n`);
    }
    const element = document.getElementById('nhan-bao-gia');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Yêu cầu của bạn đã được gửi. Chúng tôi sẽ liên hệ trong 5 phút tới!");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth flex flex-col overflow-x-hidden selection:bg-[#065e9b] selection:text-white">
      
      {/* Floating Action Buttons for Extreme CRO */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <a href="https://zalo.me/0973497685" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform relative border border-slate-100">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png" alt="Zalo" className="w-9 h-9 object-contain group-hover:scale-110 transition-transform"/>
           <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        </a>
        <a href="tel:0973497685" className="group flex items-center justify-center w-14 h-14 bg-[#d31820] rounded-full shadow-[0_4px_20px_rgba(211,24,32,0.4)] hover:scale-110 transition-transform relative">
           <div className="absolute inset-0 bg-[#d31820] rounded-full animate-ping opacity-75"></div>
           <Phone className="w-6 h-6 text-white relative z-10 animate-[wiggle_1s_ease-in-out_infinite]" />
        </a>
      </div>

      {/* Top Urgent Bar */}
      <div className="bg-gradient-to-r from-[#b3141a] to-[#d31820] text-white py-2 px-4 shadow-md relative z-50 overflow-hidden hidden sm:block">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex justify-center items-center text-sm font-semibold tracking-wide">
          <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm shadow-inner">
            <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>🔥 <strong className="font-bold uppercase">ƯU ĐÃI THÁNG NÀY:</strong> Tặng kèm thanh nguồn PDU cao cấp cho đơn hàng Tủ Rack từ 50 Triệu.</span>
            <button onClick={() => scrollToForm()} className="ml-2 font-black text-yellow-300 hover:text-white underline decoration-dashed underline-offset-4 transition-colors">NHẬN NGAY</button>
          </span>
        </div>
      </div>

      {/* Navbar */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex-shrink-0 cursor-pointer">
              <MaxtelLogo className="h-10 sm:h-12 drop-shadow-sm" />
            </a>
            <div className="hidden lg:flex items-center gap-6 text-[15px] font-bold text-slate-700">
               <a href="#san-pham" className="hover:text-[#065e9b] transition-colors">Các dòng Tủ</a>
               <a href="#ve-chung-toi" className="hover:text-[#065e9b] transition-colors">Về Maxtel</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Hotline B2B (24/7)</span>
              <a href="tel:0973497685" className="text-[#065e9b] font-black text-xl leading-none hover:text-[#d31820] transition-colors">0973.497.685</a>
            </div>
            <button onClick={() => scrollToForm()} className="group relative bg-gradient-to-r from-[#065e9b] to-[#044d7e] hover:from-[#044d7e] hover:to-[#023152] text-white px-5 sm:px-8 py-3 rounded-xl font-bold transition-all shadow-[0_5px_20px_-5px_rgba(6,94,155,0.6)] hover:shadow-[0_8px_25px_-5px_rgba(6,94,155,0.8)] hover:-translate-y-0.5 overflow-hidden flex items-center gap-2">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <span>Nhận Báo Giá</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Highly Optimized for Conversion) */}
      <section className="relative bg-[#02182b] pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#065e9b]/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d31820]/15 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-[#d31820]/10 border border-[#d31820]/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#d31820] animate-pulse"></span>
              <span className="text-[#ff8a8f] text-xs font-bold uppercase tracking-widest">Tổng Kho Tủ Rack Lớn Nhất Miền Bắc</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.15] tracking-tight mb-6 drop-shadow-lg">
              TỔNG KHO PHÂN PHỐI <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22a8e0] to-[#60bfea]">TỦ RACK MAXTEL</span>
            </h1>
            
            <p className="text-[#aebecd] text-lg sm:text-xl font-medium mb-8 leading-relaxed max-w-xl">
              Kho luôn sẵn sàng <strong className="text-white">50.000+</strong> Tủ Rack Server & Tủ Mạng các loại. Cam kết giá xuất xưởng rẻ nhất thị trường, <strong className="text-white">chiết khấu sâu tới 30%</strong> cho các Đại lý & Nhà thầu dự án.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 shrink-0">
               <button onClick={() => scrollToForm()} className="group relative overflow-hidden bg-gradient-to-r from-[#d31820] to-[#b3141a] text-white font-black text-lg py-4 px-8 rounded-2xl shadow-[0_0_30px_-5px_rgba(211,24,32,0.6)] hover:shadow-[0_0_40px_-5px_rgba(211,24,32,0.8)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                 <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                 NHẬN BẢNG GIÁ ĐẠI LÝ
                 <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </button>
               <a href="tel:0973497685" className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all backdrop-blur-md">
                 <Phone className="w-5 h-5 group-hover:animate-bounce" />
                 0973.497.685
               </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {[
                { label: 'Sẵn SLL', icon: <PackageCheck className="w-5 h-5 text-green-400"/> },
                { label: 'Full CO/CQ', icon: <FileCheck className="w-5 h-5 text-blue-400"/> },
                { label: 'Giao Toàn Quốc', icon: <Truck className="w-5 h-5 text-amber-400"/> },
                { label: 'Bảo Hành 12T', icon: <ShieldCheck className="w-5 h-5 text-purple-400"/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            {/* The Main Hero Image */}
            <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
               <div className="absolute inset-0 bg-[#065e9b] rounded-full blur-[100px] opacity-40 animate-pulse"></div>
               <img src="https://vienthongxanh.cdn.vccloud.vn/wp-content/uploads/2024/08/tu-rack-42u-mau-den-maxtel.jpg" alt="Tủ Rack Maxtel 42U Server" className="relative z-20 w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -scale-x-100 mix-blend-screen mix-blend-plus-lighter" style={{ mixBlendMode: 'normal' }} />
               
               {/* Floating Tag */}
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-10 top-1/4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-30">
                 <div className="text-yellow-400 font-black text-xl leading-none">#1</div>
                 <div className="text-white text-sm font-bold mt-1">Dự Án Data Center</div>
               </motion.div>

               <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 1 }} className="absolute -right-6 bottom-1/4 bg-gradient-to-r from-[#d31820] to-[#b3141a] p-4 rounded-2xl shadow-xl z-30 text-center">
                 <div className="text-white font-black text-2xl leading-none">30%</div>
                 <div className="text-white/80 text-[10px] uppercase tracking-widest font-bold mt-1">CHIẾT KHẤU ĐẠI LÝ</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USPs Grid - Quick Trust Builders */}
      <section className="py-12 bg-white relative -mt-6 z-20 mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-100">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {[
              { title: "Sản Xuất Tại Xưởng", desc: "Không qua trung gian thương mại, tối ưu chi phí.", icon: <Award className="w-8 h-8 text-[#065e9b]"/>, bg: "bg-blue-50" },
              { title: "Sẵn Kho Số Lượng", desc: "Kho hàng 2000m2 luôn có sẵn 50,000+ tủ các loại.", icon: <PackageCheck className="w-8 h-8 text-[#d31820]"/>, bg: "bg-red-50" },
              { title: "Đầy Đủ Giấy Tờ", desc: "Cung cấp chứng nhận chất lượng CO/CQ cho dự án.", icon: <FileCheck className="w-8 h-8 text-amber-500"/>, bg: "bg-amber-50" },
              { title: "Giao Hàng Hoả Tốc", desc: "Đội xe tải riêng giao hàng tận chân công trình.", icon: <Truck className="w-8 h-8 text-emerald-500"/>, bg: "bg-emerald-50" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-default">
                 <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex justify-center items-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                    {feature.icon}
                 </div>
                 <h4 className="text-slate-900 font-bold mb-2">{feature.title}</h4>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Core Products Catalog */}
      <section id="san-pham" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#d31820] font-black tracking-widest uppercase text-sm mb-3">DANH MỤC SẢN PHẨM</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">CÁC DÒNG TỦ RACK MAXTEL</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#065e9b] to-[#22a8e0] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
              Thiết kế chuẩn 19 inch quốc tế, đa dạng kích thước từ tủ mạng treo tường nhỏ gọn đến tủ server siêu cường cho trung tâm dữ liệu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className={`group bg-white rounded-3xl flex flex-col relative transition-all duration-300 hover:-translate-y-2 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.05)] border-2 border-transparent hover:border-[#065e9b] hover:shadow-[0_20px_40px_-10px_rgba(6,94,155,0.15)] ${product.highlight ? 'ring-2 ring-[#d31820]/50' : 'border-slate-100'}`}
              >
                {product.tag && (
                  <div className={`absolute top-4 -right-2 z-20 text-[10px] font-black tracking-widest uppercase py-1.5 px-3 rounded-l-xl rounded-tr-xl shadow-md ${product.highlight ? 'bg-[#d31820] text-white' : 'bg-[#065e9b] text-white'}`}>
                    {product.tag}
                  </div>
                )}

                <div className="aspect-[1/1] w-full overflow-hidden bg-slate-50 rounded-t-3xl p-4 relative group-hover:bg-[#f8fbff] transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="font-black text-lg mb-3 leading-snug text-slate-800 group-hover:text-[#065e9b] transition-colors">
                    {product.name}
                  </h4>
                  <ul className="space-y-2 mb-6 flex-1">
                    {product.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600 font-medium leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22a8e0] shrink-0 mt-1.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => scrollToForm(product.name)}
                    className="w-full py-3.5 rounded-xl font-bold transition-all bg-slate-100 text-slate-700 hover:bg-[#065e9b] hover:text-white flex items-center justify-center gap-2 group/btn"
                  >
                    Báo giá đại lý
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="ve-chung-toi" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">ĐỐI TÁC TIN CẬY CỦA HƠN <span className="text-[#065e9b]">5,000+ DỰ ÁN</span></h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <h3 className="font-black text-2xl tracking-widest text-[#ee0033]">VIETTEL</h3>
                <h3 className="font-black text-2xl tracking-widest text-[#0060af]">VNPT</h3>
                <h3 className="font-black text-2xl tracking-widest text-[#f06e28]">FPT TELECOM</h3>
                <h3 className="font-black text-2xl tracking-widest text-[#005a9e]">CMC CORP</h3>
                <h3 className="font-black text-2xl tracking-widest text-slate-800">MOBIFONE</h3>
            </div>
        </div>
      </section>

      {/* Lead Generation Form (The Conversion Engine) */}
      <section id="nhan-bao-gia" className="py-24 bg-[#02182b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#065e9b]/10 blur-[150px] rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d31820]/10 blur-[120px] rounded-full"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-200">
            
            {/* Left side info */}
            <div className="md:w-5/12 bg-gradient-to-br from-[#065e9b] to-[#011e36] p-10 md:p-14 text-white relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-black mb-6 leading-tight">Gửi cấu hình tủ bạn cần,<br/>Nhận báo giá <span className="text-yellow-400">chỉ trong 15 phút</span>.</h3>
              <p className="text-[#aebecd] font-medium mb-10 text-sm leading-relaxed">
                Đội ngũ kỹ sư Maxtel luôn sẵn sàng bóc tách vật tư và làm bảng giá chiết khấu sâu nhất cho dự án của bạn, hoàn toàn miễn phí.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-bold">Phản hồi siêu tốc</div>
                    <div className="text-xs text-[#aebecd] mt-1">Báo giá qua Zalo/Email trong 15p</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold">Luôn chính xác</div>
                    <div className="text-xs text-[#aebecd] mt-1">Chuẩn kỹ thuật & Số lượng sẵn kho</div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Right side form */}
            <div className="md:w-7/12 p-10 md:p-14 bg-white">
              <form onSubmit={submitForm} className="flex flex-col h-full">
                <h4 className="text-2xl font-black text-slate-800 mb-8">Điền Thông Tin Dự Án</h4>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Họ & Tên <span className="text-[#d31820]">*</span></label>
                      <input type="text" id="name" required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="VD: Anh Tùng..." />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại / Zalo <span className="text-[#d31820]">*</span></label>
                      <input type="tel" id="phone" required className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="09xx..." />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Loại Tủ / Số Lượng / Yêu cầu thêm <span className="text-[#d31820]">*</span></label>
                    <textarea value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} id="message" required rows={4} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#065e9b]/10 focus:border-[#065e9b] outline-none transition-all resize-none font-semibold text-slate-800 placeholder-slate-400" placeholder="- 5 Tủ Rack 42U D1000&#10;- 10 Tủ Rack Treo Tường 12U D600&#10;Giao về kho Bình Dương..."></textarea>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button type="submit" className="group w-full relative overflow-hidden bg-gradient-to-r from-[#d31820] to-[#b3141a] text-white font-black text-lg py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(211,24,32,0.6)] transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    NHẬN BÁO GIÁ NGAY LẬP TỨC
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center mt-4 text-xs font-semibold text-slate-500 flex items-center justify-center gap-1.5">
                     <Shield className="w-4 h-4 text-green-500" /> Cam kết bảo mật 100% thông tin quy mô dự án.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          <div className="md:col-span-5">
            <div className="mb-6">
              <MaxtelLogo className="h-10 grayscale opacity-80" />
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-6 text-sm">
              MAXTEL tự hào là thương hiệu Tủ Rack Server, Tủ Mạng chất lượng cao hàng đầu tại Việt Nam, chuyên phục vụ hạ tầng viễn thông và Data Center.
            </p>
            <div className="flex gap-3">
               <a href="https://zalo.me/0973497685" target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-50 text-blue-600 font-bold text-sm rounded-lg hover:bg-blue-100 transition-colors">Chat Zalo Hotline</a>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-slate-900 font-black tracking-widest uppercase mb-6 text-sm">Liên Hệ Đặt Hàng</h4>
            <ul className="space-y-4 text-slate-600 font-medium text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-[#065e9b]" />
                <span className="leading-relaxed">Cụm Công Nghiệp Quang Minh, Huyện Mê Linh, Hà Nội</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 shrink-0 text-[#d31820]" />
                <span className="font-bold text-slate-900 text-base">0973.497.685</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 shrink-0 text-[#065e9b]" />
                <span>duan@maxtel.vn</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-black tracking-widest uppercase mb-6 text-sm">Chính Sách B2B</h4>
            <ul className="space-y-3 font-semibold text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#065e9b] transition-colors flex items-center gap-2">&rarr; Chính sách đại lý</a></li>
              <li><a href="#" className="hover:text-[#065e9b] transition-colors flex items-center gap-2">&rarr; Hướng dẫn lắp đặt</a></li>
              <li><a href="#" className="hover:text-[#065e9b] transition-colors flex items-center gap-2">&rarr; Bảo hành & Đổi trả</a></li>
              <li><a href="#" className="hover:text-[#065e9b] transition-colors flex items-center gap-2">&rarr; CO/CQ sản phẩm</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-12 pt-8 text-center text-sm text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} Tủ Rack Maxtel. All rights reserved. Designed for Conversion.
        </div>
      </footer>
    </div>
  );
}
