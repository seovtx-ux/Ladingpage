import React, { useState, useEffect } from 'react';
import { ShieldCheck, Tags, FileCheck, Headset, ChevronRight, Server, Box, Menu, X, Phone, Mail, MapPin, CheckCircle2, Star, Shield, Clock, Award, Zap, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MaxtelLogo = ({ className = "h-8" }) => (
  <img src="https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png" alt="Maxtel Logo" className={`object-contain ${className}`} />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('nhan-bao-gia')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Yêu cầu báo giá của bạn đã được gửi. Chuyên viên Maxtel sẽ liên hệ lại ngay trong 15 phút.');
  };

  const products = [
    {
      name: 'Tủ Rack Server Chuyên Dụng (42U - 45U)',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      description: ['Thép cường lực dày 1.5-2.0mm, sơn tĩnh điện sần chống xước.', 'Cửa lưới tổ ong lục giác tối ưu thông gió cho Data Center.', 'Đầy đủ phụ kiện (Khay, Quạt tản nhiệt, Thanh nguồn PDU).'],
      highlight: true,
      tag: 'BÁN CHẠY NHẤT'
    },
    {
      name: 'Tủ Mạng Cỡ Trung (15U - 36U)',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      description: ['Kích thước linh hoạt từ 15U đến 36U, sâu D600 đến D1000.', 'Tải trọng chịu lực cực tốt từ 500kg - 800kg.', 'Thích hợp cho phòng máy chủ công ty, chi nhánh ngân hàng.'],
      highlight: false,
    },
    {
      name: 'Tủ Rack Treo Tường (6U - 12U)',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      description: ['Thiết kế nhỏ gọn, tối ưu không gian cho văn phòng, chi nhánh.', 'Tùy chọn cửa mica trong suốt hoặc cửa lưới thông thoáng.', 'Dễ dàng lắp đặt thiết bị mạng nhẹ, switch, router, camera.'],
      highlight: false,
      tag: 'DỰ ÁN VĂN PHÒNG'
    },
    {
      name: 'Phụ Kiện Tủ Rack Đồng Bộ',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      description: ['Thanh nguồn PDU chuyên dụng 6, 8, 12, 24 port chuẩn C13, C19.', 'Khay trượt, khay cố định chịu tải cao đột lỗ thoát nhiệt.', 'Quạt tản nhiệt 120mm công suất lớn, thanh quản lý cáp.'],
      highlight: false,
    }
  ];

  const usps = [
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: '100% Chính Hãng', desc: 'Đạt tiêu chuẩn viễn thông quốc tế.' },
    { icon: <Tags className="w-8 h-8 text-white" />, title: 'Giá Gốc Tại Xưởng', desc: 'Không qua trung gian, chiết khấu cao.' },
    { icon: <FileCheck className="w-8 h-8 text-white" />, title: 'Đầy đủ giấy tờ', desc: 'Thủ tục giấy tờ minh bạch, nhanh gọn.' },
    { icon: <Headset className="w-8 h-8 text-white" />, title: 'Hỗ Trợ Kỹ Thuật', desc: 'Đội ngũ kỹ sư trực hỗ trợ 24/7.' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth flex flex-col overflow-x-hidden">
      
      {/* Top Banner (CRO) */}
      <div className="bg-gradient-to-r from-[#b3141a] to-[#d31820] text-white py-2 px-4 shadow-md hidden sm:block relative z-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto flex justify-center items-center text-sm font-medium tracking-wide">
          <span className="flex items-center gap-2 relative overflow-hidden px-4 py-1 rounded-full bg-white/5">
            <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full animate-[shimmer_2s_infinite_linear]"></div>
            <Zap className="w-4 h-4 text-yellow-300 animate-pulse relative z-10" />
            <span className="relative z-10">
              🔥 <strong className="font-bold">ƯU ĐÃI THÁNG NÀY:</strong> Chiết khấu thẳng 15% cho đơn hàng Tủ Rack dự án từ 50 Triệu.
            </span>
            <button onClick={scrollToForm} className="ml-3 underline decoration-white/50 hover:decoration-white transition-all font-bold cursor-pointer relative z-10">Lấy mã ngay &rarr;</button>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed ${scrolled ? 'top-0 shadow-lg bg-white/95 backdrop-blur-md py-2' : 'top-0 sm:top-[36px] bg-white py-4'} w-full z-40 transition-all duration-300 border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer" 
              onClick={() => window.scrollTo(0,0)}
            >
              <MaxtelLogo className="h-10 lg:h-12" />
            </motion.div>
            
            {/* Desktop Nav */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center gap-8"
            >
              <div className="flex items-center gap-6 text-sm font-bold text-slate-600">
                 <a href="#san-pham" className="hover:text-[#065e9b] transition-colors">Sản Phẩm</a>
                 <a href="#vi-sao-chon-chung-toi" className="hover:text-[#065e9b] transition-colors">Về Chúng Tôi</a>
                 <a href="#doi-tac" className="hover:text-[#065e9b] transition-colors">Dự Án</a>
              </div>
              <div className="h-6 w-px bg-slate-200"></div>
              <div className="flex items-center gap-3 bg-red-50 px-4 py-2 rounded-full border border-red-200">
                <div className="w-8 h-8 rounded-full bg-[#d31820] flex items-center justify-center shadow-lg shadow-[#d31820]/40">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-[#d31820] tracking-wider">Hotline B2B</span>
                  <span className="font-bold text-slate-800 leading-none">0973.497.685</span>
                </div>
              </div>
              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-[#d31820] to-[#b3141a] hover:from-[#b3141a] hover:to-orange-700 text-white px-7 py-3 rounded-full font-bold transition-all shadow-xl shadow-[#d31820]/20 hover:shadow-[#d31820]/40 active:scale-95 flex items-center gap-2 border border-[#e8333c]/30 cursor-pointer"
              >
                Nhận Báo Giá Ngay
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-slate-800 bg-slate-100 rounded-lg cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl overflow-hidden overflow-y-auto"
            >
              <div className="px-4 py-8 flex flex-col gap-4">
                 <a href="#san-pham" onClick={() => setIsMenuOpen(false)} className="py-3 font-bold text-slate-700 border-b border-slate-50">Sản Phẩm Chủ Lực</a>
                 <a href="#vi-sao-chon-chung-toi" onClick={() => setIsMenuOpen(false)} className="py-3 font-bold text-slate-700 border-b border-slate-50">Vì Sao Chọn Chúng Tôi</a>
                
                <div className="mt-6 flex items-center justify-center gap-3 bg-[#e0effa] py-4 rounded-xl border border-[#badfef]">
                  <Phone className="w-6 h-6 text-[#065e9b]" />
                  <span className="font-black text-lg text-slate-800">0973.497.685</span>
                </div>
                
                <button 
                  onClick={scrollToForm}
                  className="w-full bg-[#d31820] text-white px-6 py-4 rounded-xl font-black text-lg shadow-lg shadow-[#d31820]/30 mt-2 cursor-pointer"
                >
                  Nhận Báo Giá Dự Án
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <motion.img 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Center Server Racks" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#022e50]/40 via-slate-950/80 to-slate-950/90" />
          
          {/* Animated background elements */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#065e9b]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#d31820]/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-bold mb-8 tracking-widest uppercase shadow-xl backdrop-blur-md">
              <Award className="w-4 h-4 text-[#e8333c]" />
              Tổng Kho Phân Phối Tủ Rack #1
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight max-w-5xl tracking-tight"
          >
            SẢN XUẤT & PHÂN PHỐI <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#22a8e0] to-[#60bfea]">TỦ RACK CHUYÊN NGHIỆP</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed font-medium"
          >
            Nhà thầu yên tâm thi công với kho hàng <strong className="text-white">sẵn hơn 50.000 sản phẩm</strong>. Cam kết giá xuất xưởng, đầy đủ giấy tờ chứng nhận, giao hàng cực nhanh toàn quốc cho dự án.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-[#d31820] to-[#d31820] text-white text-base sm:text-lg px-6 py-4 md:py-5 md:px-10 rounded-full font-black shadow-2xl shadow-[#d31820]/30 border border-[#e8333c]/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer whitespace-nowrap"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              NHẬN BẢNG GIÁ ƯU ĐÃI
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full font-bold text-white bg-white/5 border border-white/10 backdrop-blur-md">
                <Truck className="w-6 h-6 text-cyan-400" />
                Giao hàng toàn quốc 24H
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400 text-sm font-semibold"
          >
             <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Sẵn Kho SLL</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Đầy đủ giấy tờ</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Thanh toán linh hoạt</div>
          </motion.div>
        </div>
      </section>

      {/* Trust & USPs Form Banner - Overlapping Hero & Stats */}
      <section id="vi-sao-chon-chung-toi" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16">
        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           className="bg-[#022e50] rounded-[2rem] shadow-2xl overflow-hidden border border-[#033e6a]/50 p-1"
        >
          <div className="bg-gradient-to-r from-[#033e6a] to-[#011e36] h-full w-full rounded-[1.75rem] py-8 sm:py-12 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden">
             
             {/* Decorative lines inside card */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#22a8e0]/20 rounded-full blur-[80px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            {usps.map((usp, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex gap-4 items-start relative z-10">
                <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 shadow-inner backdrop-blur-sm shrink-0 group-hover:bg-white/20 transition-colors">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{usp.title}</h3>
                  <p className="text-[#9ad5f2] text-sm leading-relaxed">{usp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Core Products Section */}
      <section id="san-pham" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-[#065e9b] uppercase mb-3">Danh Mục Sản Phẩm Chủ Lực</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">CÁC DÒNG TỦ RACK MAXTEL CHÍNH HÃNG</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Giá gốc tận kho, không qua trung gian. Các sản phẩm đều đạt chuẩn viễn thông và có sẵn số lượng lớn để đáp ứng tiến độ thi công thần tốc.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className={`group bg-white rounded-[2rem] flex flex-col relative transition-all duration-300 hover:-translate-y-2 shadow-[0_0_30px_-5px_rgba(34,168,224,0.3)] border-[3px] border-[#22a8e0] hover:border-[#d31820] hover:shadow-[0_0_40px_-5px_rgba(211,24,32,0.5)] ${product.highlight ? 'relative z-10' : ''}`}
              >
                {/* Sale Tag */}
                {product.tag && (
                  <div className="absolute -top-3 -right-3 z-20 text-xs font-black tracking-widest uppercase py-2 px-4 rounded-xl shadow-lg border bg-[#065e9b] text-white border-[#22a8e0]">
                    {product.highlight ? "🥇 " : ""}{product.tag}
                  </div>
                )}

                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-t-[2rem] p-6 relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover shadow-sm mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col pt-6">
                  <h4 className={`font-black text-xl mb-4 leading-snug ${product.highlight ? 'text-[#044d7e]' : 'text-slate-800'}`}>
                    {product.name}
                  </h4>
                  <ul className="space-y-3 mb-8 flex-1">
                    {product.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#22a8e0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={scrollToForm}
                    className="group/btn relative overflow-hidden cursor-pointer w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#d31820] hover:bg-[#b3141a] text-white shadow-lg shadow-[#d31820]/30 hover:shadow-[#d31820]/50"
                  >
                    <div className="absolute top-0 bottom-0 left-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-[200%] opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[shimmer_1.5s_infinite_linear]"></div>
                    <span className="relative z-10">Báo Giá Tốt Nhất</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <button 
                onClick={scrollToForm}
                className="inline-flex cursor-pointer items-center gap-2 font-bold text-[#065e9b] hover:text-[#033e6a] border-b border-[#065e9b] hover:border-[#033e6a] transition-colors pb-1"
            >
              Và đầy đủ các kích thước Tủ Rack dự án khác. Chat Zalo để nhận thư viện ảnh và báo giá!
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof & Metrics Section */}
      <section id="doi-tac" className="py-24 bg-orange-50 border-y border-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#065e9b] mb-6 leading-tight tracking-tight">Đối Tác Bền Vững Của Các Ông Lớn</h2>
              <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
                Trong 10 năm qua, Maxtel tự hào là nhà cung cấp Tủ Rack nền tảng phía sau hàng nghìn phòng máy chủ, hệ thống CNTT nội bộ và các Data Center lớn trên khắp lãnh thổ Việt Nam.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="group p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-[#e0effa] hover:border-[#9ad5f2] transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                     <Clock className="w-6 h-6 text-[#22a8e0] group-hover:animate-spin-slow" />
                     <div className="text-4xl lg:text-5xl font-black text-slate-900 group-hover:text-[#065e9b] transition-colors">10+</div>
                  </div>
                  <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">Năm Hoạt Động</div>
                </div>
                <div className="group p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                     <Shield className="w-6 h-6 text-[#d31820]" />
                     <div className="text-4xl lg:text-5xl font-black text-slate-900 group-hover:text-[#b3141a] transition-colors">5K+</div>
                  </div>
                  <div className="text-slate-500 font-bold uppercase tracking-wider text-xs">Dự Án Đã Cấp</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm font-bold text-slate-700 bg-amber-50 py-3 px-5 rounded-full w-fit border border-amber-200">
                 <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-300 z-[${10-i}] relative`} style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }}></div>
                   ))}
                 </div>
                 <span>Hơn 2000 Quản trị dự án & Kỹ thuật viên tin tưởng</span>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:col-span-7 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 grid grid-cols-2 gap-4 sm:gap-6 shadow-inner relative"
            >
               {/* Pattern overlay */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-[2.5rem] pointer-events-none"></div>
               
              {[
                { name: 'VIETTEL PARTNER', color: 'text-red-600', icon: '📞' },
                { name: 'VNPT NETWORK', color: 'text-[#044d7e]', icon: '🌐' },
                { name: 'FPT TELECOM', color: 'text-[#d31820]', icon: '⚡' },
                { name: 'CMC CORP', color: 'text-cyan-700', icon: '💻' }
              ].map((logo, idx) => (
                <div key={idx} className="bg-white py-12 px-4 rounded-3xl border border-slate-200 flex flex-col items-center justify-center shadow-sm group hover:shadow-xl transition-all hover:-translate-y-1 relative z-10 cursor-default">
                  <div className="text-3xl mb-3 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all">{logo.icon}</div>
                  <div className={`font-black text-sm lg:text-lg tracking-widest uppercase text-center ${logo.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form (CRO focused) */}
      <section id="nhan-bao-gia" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#065e9b]/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b3141a]/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-800">
            {/* Left side info */}
            <div className="md:w-5/12 bg-gradient-to-br from-[#044d7e] to-[#011e36] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-white/10">
                     <Box className="w-4 h-4 text-[#e8333c]" />
                     Báo Giá Chuyên Sâu
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight bg-white p-6 md:p-8 rounded-3xl inline-block shadow-xl border-2 border-[#22a8e0]/20">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22a8e0] via-[#d31820] to-[#22a8e0] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                      Yêu Cầu <br />Báo Giá Dự Án
                    </span>
                  </h3>
                  <p className="text-[#badfef] mb-12 text-lg font-medium leading-relaxed">
                    Nhập số lượng vật tư cần báo. Chúng tôi sẽ phân tích và gửi lại mức <strong className="text-white">chiết khấu sâu nhất</strong> cho bạn trong vòng 15 phút.
                  </p>
                </div>
                
                <div className="space-y-8 mt-auto">
                  <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#065e9b] flex items-center justify-center shadow-lg border border-[#22a8e0] group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#60bfea] uppercase tracking-wider font-bold mb-1">Gọi Trực Tiếp Phân Phối</div>
                      <div className="font-black text-2xl">0973.497.685</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-sm font-medium text-[#badfef] italic">
                      "Báo giá nhanh, chứng từ minh bạch, giao xe tải tận nơi đúng cam kết. Tủ Rack Maxtel cực kỳ chắc chắn, lớp sơn tĩnh điện sắc nét và thẩm mỹ cao."
                    </p>
                    <p className="text-xs font-bold mt-2 text-white">- Anh Hoàng, Quản lý dự án Viettel.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="md:w-7/12 p-10 md:p-14 bg-white relative">
              <form onSubmit={submitForm} className="space-y-6 relative z-10 flex flex-col h-full">
                <div className="mb-4">
                   <h4 className="text-2xl font-black text-slate-800 mb-2">Thông tin công trình</h4>
                   <p className="text-slate-500 font-medium text-sm">Điền đầy đủ thông tin để nhận chính sách dự án (Bảo mật 100%).</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Họ & Tên / Chức vụ</label>
                    <input type="text" id="name" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#22a8e0]/10 focus:border-[#22a8e0] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="VD: ThS. Nguyễn Văn A..." />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Hotline Zalo <span className="text-[#d31820]">*</span></label>
                    <input type="tel" id="phone" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#22a8e0]/10 focus:border-[#22a8e0] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="09xx..." />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Công Ty (Tùy chọn nhận file PDF)</label>
                  <input type="email" id="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#22a8e0]/10 focus:border-[#22a8e0] outline-none transition-all font-semibold text-slate-800 placeholder-slate-400" placeholder="duan@congtychucdanh.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                    <span>Liệt kê vật tư & Số lượng (hoặc dán mô tả) <span className="text-[#d31820]">*</span></span>
                  </label>
                  <textarea id="message" required rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-[#22a8e0]/10 focus:border-[#22a8e0] outline-none transition-all resize-none font-semibold text-slate-800 placeholder-slate-400" placeholder="- 5 Tủ Rack 42U D1000&#10;- 10 Tủ Rack Treo Tường 12U D600&#10;- 5 Thanh nguồn PDU 12 Port"></textarea>
                </div>
                
                <div className="mt-auto pt-4">
                  <button type="submit" className="cursor-pointer group w-full relative overflow-hidden bg-gradient-to-r from-[#d31820] to-[#b3141a] hover:from-[#b3141a] hover:to-[#920f14] text-white font-black text-lg py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(211,24,32,0.7)] transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 whitespace-nowrap">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    GỬI YÊU CẦU BÁO GIÁ
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="text-center mt-4">
                    <span className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 cursor-default">
                      <Shield className="w-4 h-4 text-green-500" /> Cam kết bảo mật thông tin nội bộ của thầu.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 border-t-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          <div className="md:col-span-5">
            <div className="mb-8 cursor-pointer inline-block bg-white px-4 py-2 rounded-xl">
              <MaxtelLogo className="h-12" />
            </div>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-8">
              Tổng kho sản xuất và phân phối chuyên nghiệp Tủ Rack Server, Tủ Mạng các loại và phụ kiện đồng bộ với quy mô lớn nhất Việt Nam.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex flex-col justify-center items-center hover:bg-[#065e9b] transition-colors cursor-pointer text-white font-bold text-sm">f</div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex flex-col justify-center items-center hover:bg-red-600 transition-colors cursor-pointer text-white font-bold text-[10px]">YT</div>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-white font-black tracking-widest uppercase mb-8 text-sm cursor-default">Văn Phòng & Tổng Kho</h4>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-[#22a8e0] mt-0.5" />
                <span className="leading-relaxed">Lô 12, Cụm Công Nghiệp Quang Minh, Huyện Mê Linh, Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center gap-4 cursor-pointer hover:text-white transition-colors">
                <Phone className="w-5 h-5 shrink-0 text-[#22a8e0]" />
                <span className="font-bold text-white text-lg">0973.497.685</span>
              </li>
              <li className="flex items-center gap-4 cursor-pointer hover:text-white transition-colors">
                <Mail className="w-5 h-5 shrink-0 text-[#22a8e0]" />
                <span>duan@maxtel.vn</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-black tracking-widest uppercase mb-8 text-sm cursor-default">Chăm Sóc Dự Án</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/>Bảo hành tủ kệ chính hãng</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/>Mua nợ cho Chủ Dự Án (B2B)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/>Setup Data Center Trọn Gói</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/>Tư vấn hồ sơ thầu Viễn thông</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-sm font-semibold flex flex-col md:flex-row items-center justify-between gap-4 cursor-default">
            <p>&copy; {new Date().getFullYear()} TỔNG KHO VẬT TƯ MẠNG MAXTEL. Đã đăng ký bản quyền. <span className="opacity-50 font-normal">Trang Landing Page chuyên dùng cho chiến dịch. (Noindex enabled)</span></p>
            <div className="flex gap-4 opacity-50">
               <Box className="w-5 h-5" />
               <Server className="w-5 h-5" />
            </div>
        </div>
      </footer>

      {/* Floating Action Button Zalo */}
      <motion.button
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ delay: 1, type: "spring" }}
         onClick={scrollToForm}
         className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#065e9b] text-white w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.5)] flex items-center justify-center hover:bg-[#044d7e] transition-colors border-4 border-white/20 group cursor-pointer"
         aria-label="Gọi ngay tổng đài"
      >
         <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
         {/* Ping animation effect */}
         <span className="absolute inline-flex h-full w-full rounded-full bg-[#22a8e0] opacity-30 animate-ping"></span>
      </motion.button>
      
      {/* Global CSS for shimmer effect & index.html has noindex meta */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </div>
  );
}
