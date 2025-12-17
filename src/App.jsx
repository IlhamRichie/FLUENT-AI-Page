import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  ScanFace, 
  Brain, 
  Trophy, 
  ArrowRight, 
  Star, 
  Download, 
  Play, 
  Menu,
  X,
  Sparkles,
  Diamond,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link download aplikasi
  const downloadLink = "https://appdistribution.firebase.dev/i/f7c4928321c30dd7";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="pointer-events-auto w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl shadow-slate-200/50 rounded-full pl-6 pr-2 py-2 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
             <img 
               src="/logo.png" 
               alt="Fluent AI Logo" 
               className="w-full h-full object-contain" 
             />
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">FLUENT<span className="text-[#d84040]">.AI</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Fitur', 'Harga', 'Cara Kerja', 'Testimoni'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-bold text-slate-500 hover:text-[#d84040] transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-2">
           <a href={downloadLink} target="_blank" rel="noopener noreferrer">
             <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-[#d84040] transition-colors shadow-lg"
            >
              Unduh Sekarang
            </motion.button>
           </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900 w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto absolute top-24 left-4 right-4 bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 md:hidden origin-top z-40"
          >
            <div className="flex flex-col gap-2">
              {['Fitur', 'Harga', 'Cara Kerja', 'Testimoni'].map((item) => (
                <a key={item} href="#" className="text-lg font-bold text-slate-800 py-3 px-4 hover:bg-slate-50 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="block w-full mt-2">
                <button className="w-full py-4 bg-[#d84040] text-white font-bold rounded-xl shadow-lg shadow-red-200">
                  Unduh Aplikasi
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const downloadLink = "https://appdistribution.firebase.dev/i/f7c4928321c30dd7";

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F8F9FC]">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              AI Interview Trainer #1 di Indonesia
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tight">
              BICARA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d84040] to-orange-600">LEBIH PEDE.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              Lupakan rasa gugup. Latih wawancara kerjamu dengan AI yang menganalisis ekspresi wajah, intonasi suara, dan kualitas jawabanmu secara real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tombol Download Link */}
              <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#d84040] text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-200 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Download size={24} />
                  Download APK
                </motion.button>
              </a>
              
              {/* Tombol Lihat Demo */}
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-slate-300 transition-colors"
              >
                <Play size={24} fill="currentColor" className="text-slate-900" />
                Lihat Demo
              </motion.button>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+50}`} alt="user" />
                    </div>
                  ))}
               </div>
               <div className="text-sm font-semibold text-slate-600">
                 <span className="text-[#d84040] font-bold">4.9/5</span> Rating dari User
               </div>
            </div>
          </motion.div>

          {/* Hero Visual - Dynamic Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            {/* Main Phone Card */}
            <div className="relative z-20 w-[320px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-300 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out border-8 border-white">
              <div className="bg-slate-800 rounded-[2.2rem] overflow-hidden h-[600px] relative">
                {/* Simulated App UI */}
                <img 
                  src="/image.png" 
                  alt="Candidate" 
                  className="w-full h-full object-cover opacity-90" 
                />
                
                {/* Face Tracking Overlay */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-40 border-2 border-white/30 rounded-[3rem]">
                   <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#d84040] rounded-tl-lg" />
                   <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#d84040] rounded-tr-lg" />
                   <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#d84040] rounded-bl-lg" />
                   <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#d84040] rounded-br-lg" />
                </div>

                {/* Floating Feedback Bubble */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-24 right-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20"
                >
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#d84040] shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Analisis Gemini</p>
                      <p className="text-sm font-semibold text-slate-800">"Kontak matamu bagus! Coba kurangi kata 'hmm' saat berpikir."</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Action Bar */}
                <div className="absolute bottom-6 left-0 w-full px-6 flex justify-center gap-4">
                  <div className="w-14 h-14 bg-[#d84040] rounded-full flex items-center justify-center text-white shadow-lg">
                    <Mic />
                  </div>
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                    <X />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -left-10 z-30 bg-white p-5 rounded-3xl shadow-xl shadow-red-100 border border-slate-50"
            >
               <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                   <Trophy size={24} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-500 font-bold uppercase">Confidence Score</div>
                   <div className="text-2xl font-black text-slate-900">94%</div>
                 </div>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-40 -right-8 z-30 bg-slate-900 p-5 rounded-3xl shadow-xl"
            >
               <div className="flex items-center gap-3">
                 <div className="bg-slate-800 p-2.5 rounded-xl text-white">
                   <ScanFace size={24} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-400 font-bold uppercase">Face Tracking</div>
                   <div className="text-lg font-bold text-white">Active</div>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <video 
                src="/demo-video.mp4" 
                autoPlay 
                loop 
                muted 
                controls 
                playsInline
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FeatureBento = () => {
  return (
    <section className="py-24 bg-white" id="fitur">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#d84040] font-bold tracking-wider text-sm uppercase bg-red-50 px-3 py-1 rounded-full">Fitur Super</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">Latihan Wawancara <br/> Senyata Aslinya.</h2>
          <p className="text-slate-500 text-lg">Kami menggabungkan Computer Vision dan Generative AI untuk memberikan pengalaman simulasi yang belum pernah ada sebelumnya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {/* Card 1: Face Analysis (Large) */}
           <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-2 bg-[#F8F9FC] rounded-[2.5rem] p-10 relative overflow-hidden group border border-slate-100"
           >
             <div className="relative z-10 max-w-md">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6">
                 <ScanFace size={32} />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Deteksi Ekspresi Wajah</h3>
               <p className="text-slate-600 text-lg leading-relaxed">
                 Jangan biarkan wajah tegang merusak peluangmu. AI kami melacak 468 titik wajah untuk memastikan kamu tersenyum di saat yang tepat dan menjaga kontak mata.
               </p>
             </div>
             <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute right-10 bottom-10 hidden md:block opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <ScanFace size={150} className="text-red-200" />
             </div>
           </motion.div>

           {/* Card 2: Voice Analysis (Tall) */}
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden md:row-span-2 flex flex-col justify-between"
           >
             <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/10">
                 <Mic size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Analisis Suara & Filler Words</h3>
               <p className="text-slate-300 leading-relaxed mb-8">
                 Terlalu banyak "Eee.." atau "Hmm.."? Kami mendeteksinya secara real-time dan memberimu skor kelancaran bicara.
               </p>
               
               {/* Visualizer */}
               <div className="flex gap-1 h-12 items-end justify-center mb-4 opacity-50">
                 {[1,3,2,5,3,6,2,4,1,3,2].map((h, i) => (
                   <motion.div 
                     key={i}
                     animate={{ height: [10, h*8, 10] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                     className="w-2 bg-[#d84040] rounded-full"
                   />
                 ))}
               </div>
             </div>
           </motion.div>

           {/* Card 3: Gemini Feedback */}
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-[#d84040] rounded-[2.5rem] p-10 text-white relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                     <Brain size={32} />
                   </div>
                   <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase backdrop-blur-sm">Powered by Gemini</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Feedback Cerdas</h3>
                <p className="text-red-100">Dapatkan saran jawaban yang lebih baik, dikurasi langsung oleh AI Google.</p>
             </div>
           </motion.div>

           {/* Card 4: Gamification */}
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-[#FFF5F5] rounded-[2.5rem] p-10 relative overflow-hidden border border-red-50"
           >
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#d84040] shadow-sm mb-6">
                 <Trophy size={32} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Sistem Level</h3>
               <p className="text-slate-600">Naikkan level dari 'Intern' ke 'CEO' dengan latihan rutin.</p>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- PRICING SECTION ---
const Pricing = () => {
  const downloadLink = "https://appdistribution.firebase.dev/i/f7c4928321c30dd7";

  return (
    <section className="py-24 bg-[#FFF5F5]" id="harga">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-amber-500 font-bold tracking-wider text-sm uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            Upgrade Karirmu
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">Investasi Kecil, <br/> Hasil Maksimal.</h2>
          <p className="text-slate-600 text-lg">Pilih paket yang sesuai dengan kebutuhan persiapan karirmu. Mulai dari gratis hingga akses tanpa batas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* Free Plan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter (Gratis)</h3>
              <p className="text-slate-500 mb-6">Cukup untuk pemanasan.</p>
              <div className="text-4xl font-black text-slate-900 mb-8">Rp 0 <span className="text-lg font-medium text-slate-400">/ selamanya</span></div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "1x Latihan Interview / Hari",
                  "Akses Topik Dasar (HR)",
                  "Feedback AI Standar",
                  "Iklan di Aplikasi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                  Mulai Gratis
                </button>
              </a>
            </div>
          </motion.div>

          {/* Premium Plan - Highlighted */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-1 bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 rounded-[2.6rem] shadow-2xl shadow-orange-200/50 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-b-xl text-sm font-bold shadow-sm z-20">
              PALING LARIS 🔥
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-8 h-full relative overflow-hidden">
               {/* Background Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        Premium <Diamond size={20} className="text-amber-500 fill-amber-500" />
                      </h3>
                      <p className="text-amber-600 font-medium">Latihan tanpa batas.</p>
                    </div>
                  </div>

                  <div className="text-5xl font-black text-slate-900 mb-2">Rp 30.000</div>
                  <p className="text-slate-400 mb-8 font-medium">per bulan</p>
                  
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-8">
                    <ul className="space-y-4">
                      {[
                        "✅ 7x Latihan Interview / Hari",
                        "✅ Bebas Akses Semua Topik",
                        "✅ Feedback AI Lebih Detail",
                        "✅ Analisis Emosi Wajah Full",
                        "🚫 Tanpa Iklan Mengganggu"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                      <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                        Upgrade Sekarang
                      </button>
                    </a>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                      <Mail size={16} />
                      <span>Aktivasi: </span>
                      <a href="mailto:ilhamrigan22@gmail.com" className="font-bold text-slate-900 hover:text-amber-600 underline decoration-amber-200 decoration-2 underline-offset-2">
                        ilhamrigan22@gmail.com
                      </a>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative" id="cara-kerja">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
           <div>
             <h2 className="text-4xl md:text-5xl font-black mb-4">Cara Kerja <br/> <span className="text-[#d84040]">Simpel & Cepat</span></h2>
             <p className="text-slate-400 text-lg">Hanya butuh 3 langkah untuk memulai.</p>
           </div>
           <button className="hidden md:flex items-center gap-2 text-white font-bold border-b-2 border-[#d84040] pb-1 hover:text-[#d84040] transition-colors">
             Lihat Tutorial Lengkap <ArrowRight size={20} />
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Pilih Topik", desc: "Pilih jenis wawancara: HR, User, atau Technical. Sesuaikan dengan bidang pekerjaanmu." },
            { num: "02", title: "Rekam Video", desc: "Jawab pertanyaan yang diberikan AI lewat kamera depan. Bersikaplah natural." },
            { num: "03", title: "Evaluasi Instan", desc: "Tunggu 30 detik. Dapatkan laporan lengkap tentang performa verbal & non-verbalmu." }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm group hover:bg-slate-800 transition-colors"
            >
              <div className="text-6xl font-black text-slate-700 mb-6 group-hover:text-red-600/20 transition-colors select-none">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white" id="testimoni">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center text-slate-900 mb-16">Mereka Lolos Wawancara.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { name: "Andi P.", role: "Diterima di Gojek", text: "Fitur face tracking-nya juara. Ternyata muka saya terlalu tegang pas mikir. Fluent.AI bantu saya rileks." },
             { name: "Siti N.", role: "Diterima di Tokopedia", text: "Latihan di sini berasa real banget. Pas wawancara asli jadi nggak kaget lagi sama pertanyaannya." },
             { name: "Budi S.", role: "Diterima di Traveloka", text: "Saya pake ini 3 hari berturut-turut buat benerin 'filling words'. Hasilnya confidence score naik drastis." }
           ].map((t, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -5 }}
               className="p-8 bg-[#F8F9FC] rounded-[2rem] border border-slate-100"
             >
               <div className="flex gap-1 mb-6 text-yellow-400">
                 {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
               </div>
               <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">"{t.text}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[#d84040] font-bold text-xl">
                   {t.name[0]}
                 </div>
                 <div>
                   <div className="font-bold text-slate-900">{t.name}</div>
                   <div className="text-sm text-slate-500">{t.role}</div>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const downloadLink = "https://appdistribution.firebase.dev/i/f7c4928321c30dd7";

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-black mb-4">Siap untuk <span className="text-[#d84040]">Hired?</span></h2>
             <p className="text-slate-400 max-w-md">Download sekarang dan ubah caramu mempersiapkan masa depan karirmu.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4">
             <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-[#d84040] hover:bg-[#d84040]/90 text-white font-bold rounded-2xl transition-colors shadow-lg shadow-red-900/20 flex items-center justify-center gap-2">
                  <Download size={20} /> Download untuk Android
                </button>
             </a>
           </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 FLUENT.AI Indonesia. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-200 selection:text-red-900">
      <Navbar />
      <Hero />
      <FeatureBento />
      <Pricing />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  );
}