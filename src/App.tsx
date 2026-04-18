import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  CreditCard, 
  Globe2, 
  Link as LinkIcon, 
  Smartphone, 
  Sparkles, 
  Wifi, 
  Zap,
  PlayCircle,
  MonitorPlay,
  Music,
  FileText
} from 'lucide-react';
import { cn } from './lib/utils';
import { ReactNode } from 'react';

// Decorative components
const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-8 h-8 text-black", className)}>
    <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SquiggleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-5 text-red-500", className)}>
    <path d="M2 10C20 10 30 -5 50 10C70 25 80 10 98 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SectionHeading = ({ children, className }: { children: ReactNode, className?: string }) => (
  <h2 className={cn("text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight", className)}>
    {children}
  </h2>
);

const RedUnderline = () => (
  <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full h-3 text-red-500" fill="none" preserveAspectRatio="none">
    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tight">MONEA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#pageforge" className="hover:text-slate-900 transition-colors">PageForge</a>
            <a href="#pay" className="hover:text-slate-900 transition-colors">MONEA Pay</a>
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Commencer
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl relative z-10"
          >
            <StarIcon className="absolute -top-12 left-0 w-10 h-10 text-slate-800 hidden md:block animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              L'Infrastructure de <br/>
              <span className="relative inline-block">
                Commerce
              </span> et de <br/>
              <span className="relative inline-block text-slate-900">
                Paiement
                <RedUnderline />
              </span> de demain.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              Nous construisons un écosystème complet qui permet de transformer n'importe quelle idée en une activité rentable en Afrique de l'Ouest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 group">
                Lancer ma boutique
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 border-2 border-slate-200">
                Découvrir MONEA Pay
              </button>
            </div>
          </motion.div>

          {/* Hero Graphics (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full hidden md:block"
          >
            {/* The abstract shapes imitating the provided image */}
            <div className="absolute right-0 top-0 w-4/5 h-full bg-yellow-400 rounded-l-[100px] overflow-hidden shadow-2xl">
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply opacity-90 blur-[2px]" />
            </div>
            
            {/* Floating Profile Widget simulate */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 w-64 border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/moneausera/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Amadou S.</p>
                <div className="flex items-center gap-1 text-teal-600 text-xs font-semibold mt-1 bg-teal-50 px-2 py-0.5 rounded-full w-fit">
                  <CheckCircle2 className="w-3 h-3" /> Vente payée
                </div>
              </div>
            </motion.div>

            {/* Floating Notification Widget */}
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 -left-10 bg-white p-5 rounded-3xl shadow-xl w-72 border border-slate-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">Maintenant</span>
              </div>
              <p className="font-bold text-slate-900 mb-1 text-lg">Paiement Reçu</p>
              <p className="text-slate-500 text-sm mb-4">Transfert Mobile Money validé.</p>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-full h-full bg-teal-500 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="border-y border-slate-100 bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale font-bold text-slate-700 text-xl">
          <span>TRUSTED BY</span>
          <div className="flex items-center gap-2"><Globe2/> E-commerçants</div>
          <div className="flex items-center gap-2"><Wifi/> Boutiques Locales</div>
          <div className="flex items-center gap-2"><Sparkles/> Créateurs</div>
        </div>
      </section>

      {/* PageForge Section */}
      <section id="pageforge" className="py-24 md:py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-40 right-10 opacity-10">
           <svg viewBox="0 0 200 200" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FDE047" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.6,30.6,74.9,43.3C66.3,56,53.5,66.1,39.4,73.1C25.4,80,10.2,83.8,-4.2,84.9C-18.6,85.9,-32.2,84.2,-44.6,77.7C-56.9,71.1,-68,59.8,-75.6,46.2C-83.3,32.6,-87.5,16.3,-86.3,0.7C-85.1,-15,-78.5,-29.9,-70.2,-43.1C-61.8,-56.3,-51.7,-67.7,-39.2,-75.9C-26.6,-84,-13.3,-88.9,1.1,-90.8C15.6,-92.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
            </svg>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <StarIcon className="absolute -top-10 -left-10 w-12 h-12 text-teal-400 rotate-12" />
             {/* Brutalist PageForge UI Mockup based on screenshot */}
             <div className="relative z-10 w-full max-w-lg mx-auto">
               {/* PAGEFORGE Header Logo */}
               <div className="flex flex-col items-center mb-8">
                 <div className="relative mb-3">
                    <div className="absolute top-1.5 -right-2 w-full h-full bg-[#0E9F6E]" />
                    <div className="relative bg-[#09090b] px-6 py-1 border-2 border-transparent">
                      <h3 className="text-white font-black italic text-3xl tracking-tighter">PAGEFORGE</h3>
                    </div>
                 </div>
                 <p className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em] text-slate-500 mt-2 text-center">ADVANCED NEURAL ORCHESTRATION CORE V2.0</p>
               </div>

               {/* The Application Card */}
               <div className="w-full bg-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-[#27272a] relative">
                  {/* Decorative background element simulating the app frame */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

                 {/* Toggle / Tabs */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                    <button className="bg-[#0E9F6E] active:scale-95 transition-transform text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                      <LinkIcon className="w-5 h-5" />
                      INJECT PRODUCT LINK
                    </button>
                    <button className="bg-[#09090b] text-slate-400 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[13px] border border-[#27272a] hover:bg-[#1f1f22] transition-colors">
                      <FileText className="w-5 h-5" />
                      DIRECT DESCRIPTION
                    </button>
                 </div>

                 {/* Input Area */}
                 <div className="mb-8 relative z-10">
                   <div className="flex justify-between items-end mb-3">
                      <span className="text-slate-400 text-xs font-mono font-bold tracking-wider">VECTORED_INPUT_SOURCE</span>
                      <span className="text-slate-500 text-[10px] font-mono tracking-widest hidden sm:block">PROTO_VERSION: 1.0.4</span>
                   </div>
                   <div className="bg-[#09090b] rounded-xl border border-[#27272a] p-4 flex items-center gap-3">
                     <input type="text" disabled placeholder="https://www.alibaba.com/..." className="bg-transparent border-none outline-none w-full text-slate-400 font-mono text-sm placeholder:text-slate-600" />
                     <Zap className="w-4 h-4 text-slate-800" />
                   </div>
                 </div>

                 {/* Deploy Button */}
                 <button className="w-full bg-[#0E9F6E] text-white font-bold text-lg py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-[#047857] transition-colors active:scale-[0.98] relative z-10">
                   <Zap className="w-6 h-6 fill-white" />
                   DEPLOY_NEURAL_AGENTS
                 </button>
               </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wide">
              PageForge
            </div>
            <SectionHeading className="mb-6">
              Automatisation <br />
              <span className="text-teal-500">E-commerce</span> complète.
            </SectionHeading>
            <p className="text-lg text-slate-600 mb-8 font-medium">
              Transformez un simple lien Alibaba en une boutique de classe mondiale en 60 secondes. Ne perdez plus des heures en technique. Laissez l'IA forger votre succès.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: 'L\'Importation Magique', desc: 'Saisissez un lien (Alibaba, Amazon), notre agent extrait et traduit tout pour votre marché cible. Zéro friction.' },
                { title: 'Design Génératif IA', desc: 'Styles modernes (Bento Grid, Minimalism), codes purs (React/Tailwind), ultra-rapides et taillés pour convertir.' },
                { title: 'Optimisation SEO & RAG', desc: 'Descriptions marketing générées intelligemment pour vendre plus, adaptées à la culture locale.' }
              ].map((feature, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section / The "Faster with Startup X" equivalent */}
      <section className="py-20 bg-yellow-400 relative overflow-hidden">
        <SquiggleIcon className="absolute top-10 right-20 text-yellow-500/50 w-64 h-32" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <SectionHeading className="mb-16">
            Allez plus vite avec MONEA
          </SectionHeading>
          
          <div className="grid sm:grid-cols-3 gap-12 sm:gap-24">
            <div className="space-y-2">
              <p className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
                60<span className="text-4xl md:text-6xl text-red-500">s</span>
              </p>
              <p className="font-bold text-slate-800 text-lg uppercase tracking-wider">Création Boutique</p>
            </div>
            <div className="space-y-2">
              <p className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
                0<span className="text-4xl md:text-6xl text-teal-600">%</span>
              </p>
              <p className="font-bold text-slate-800 text-lg uppercase tracking-wider">Compétence Technique</p>
            </div>
            <div className="space-y-2">
              <p className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
                100<span className="text-4xl md:text-6xl text-slate-900">%</span>
              </p>
              <p className="font-bold text-slate-800 text-lg uppercase tracking-wider">Mobile-First</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section id="pay" className="py-32 px-4 max-w-7xl mx-auto bg-slate-50 border-y border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading className="mb-6 text-center">
            Un écosystème conçu pour les réalités locales
          </SectionHeading>
          <p className="text-lg text-slate-600 font-medium">
            Nous servons de pont entre les infrastructures physiques et le monde numérique via des intégrations technologiques fluides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
             <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Wifi className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Zifi Zone & Hotspots</h3>
             <p className="text-slate-600 leading-relaxed">
               Automatisation de la vente de forfaits internet sur vos portails captifs. Transformez facilement votre signal Wi-Fi en source de revenus gérée automatiquement.
             </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-teal-500 relative overflow-hidden">
             <SquiggleIcon className="absolute -top-4 right-4 text-teal-100 w-24 h-12" />
             <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Smartphone className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">MONEA Pay</h3>
             <p className="text-slate-600 leading-relaxed relative z-10">
               Interface simplifiée pour le règlement des factures courantes et services publics en ligne. Acceptez les paiements Mobile Money instantanément depuis votre PageForge.
             </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white to-yellow-50">
             <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Zéro Carte Visa Requise</h3>
             <p className="text-slate-600 leading-relaxed">
               Nous brisons les barrières. Payez vos abonnements internationaux et accédez à des services globaux directement avec votre solde Mobile Money.
             </p>
          </div>
        </div>
      </section>

      {/* Services Internationaux */}
      <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <StarIcon className="absolute top-20 right-20 w-16 h-16 text-slate-800" />
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              {/* Graphic showing subscription access */}
              <div className="bg-slate-800 p-8 rounded-[3rem] shadow-2xl border border-slate-700 relative">
                 <div className="absolute -left-10 top-10 w-24 h-24 bg-teal-500 rounded-full mix-blend-screen blur-xl opacity-50" />
                 <div className="absolute -right-10 bottom-10 w-32 h-32 bg-red-500 rounded-full mix-blend-screen blur-xl opacity-30" />
                 
                 <h4 className="text-center font-bold text-slate-400 mb-8 uppercase tracking-widest text-sm">Vos Abonnements, Payés Simplement</h4>
                 
                 <div className="space-y-4">
                    {/* Netflix Mock */}
                    <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-slate-700/50 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-900/20">
                          <MonitorPlay className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Streaming Vidéo</p>
                          <p className="text-slate-400 text-sm">Netflix, Prime...</p>
                        </div>
                      </div>
                      <span className="text-teal-400 font-bold bg-teal-400/10 px-3 py-1 rounded-full text-sm">Actif</span>
                    </div>

                    {/* Gemini/AI Mock */}
                    <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-slate-700/50 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Intelligence Artificielle</p>
                          <p className="text-slate-400 text-sm">Gemini Advanced, ChatGPT</p>
                        </div>
                      </div>
                      <span className="text-teal-400 font-bold bg-teal-400/10 px-3 py-1 rounded-full text-sm">Actif</span>
                    </div>

                    {/* Spotify Mock */}
                    <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-slate-700/50 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-slate-900 shadow-lg shadow-green-900/20">
                          <Music className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Musique & Podcasts</p>
                          <p className="text-slate-400 text-sm">Spotify Premium</p>
                        </div>
                      </div>
                      <span className="text-slate-500 font-semibold bg-slate-800 px-3 py-1 rounded-full text-sm border border-slate-700">Renouveler</span>
                    </div>
                 </div>

                 <div className="mt-8 bg-teal-500 text-teal-950 font-bold p-4 rounded-2xl flex items-center justify-center gap-3 w-full shadow-lg shadow-teal-500/20">
                    <Smartphone className="w-5 h-5" />
                    Payer via Mobile Money
                 </div>
              </div>
            </div>

            <div>
              <SectionHeading className="mb-6 text-white">
                Le monde numérique, <br/>
                <span className="text-yellow-400">sans carte bancaire.</span>
              </SectionHeading>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                MONEA simplifie l'accès aux plateformes mondiales souvent inaccessibles au grand public en Afrique.
              </p>
              <p className="text-slate-400 text-lg mb-8">
                Ne soyez plus bloqués par l'absence d'une carte Visa ou Mastercard. Réglez vos abonnements favoris directement avec votre solde local en toute sécurité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-white/10">
                  Explorer les Services
                </button>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-yellow-400 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Prêt à lancer votre activité ?
            </h2>
            <p className="text-xl text-yellow-900 mb-10 font-medium max-w-2xl mx-auto">
              Devenez l'un des pionniers à utiliser MONEA pour générer des ventes et gérer vos paiements en Afrique.
            </p>
            <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20 inline-flex items-center gap-3">
              Créer un compte MONEA
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Decorative shapes for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-bl-full opacity-80 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-400 rounded-tr-full opacity-60 mix-blend-multiply" />
          <StarIcon className="absolute top-10 left-10 w-12 h-12 text-yellow-500 animate-spin-slow" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl">MONEA</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900">PageForge</a>
            <a href="#" className="hover:text-slate-900">MONEA Pay</a>
            <a href="#" className="hover:text-slate-900">À Propos</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} MONEA. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

