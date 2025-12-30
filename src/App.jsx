import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, User, Moon, Sun, 
  ChevronDown, ChevronUp, Terminal as TerminalIcon, Cpu, Shield, Users, 
  Activity, Calendar, Cloud, FileText, Hexagon, Monitor, 
  Lock, TrendingUp, Database, BookOpen, Award, Zap, X, Target,
  MessageSquare, Settings, CheckCircle2, ArrowRight, FileBarChart, Send, 
  ClipboardList, Palette
} from 'lucide-react';

// --- DATA ---

const personalInfo = {
  name: "Jacob Benjamin",
  title: "Technical Program Manager & Low-Code Expert",
  location: "Marshall, VA",
  phone: "(540) 270-3664",
  email: "jacobbrianbenjamin@gmail.com",
  summary: "Technical Program Manager & Low-Code Expert holding PMP, Active Secret Clearance, Appian Certified Lead Developer, and Security+. Combines strategic leadership of a $70M program with hands-on expertise in Appian, Salesforce, OneStream, Docusign, and Agile methodologies. Specialized in leading digital transformation efforts that modernized legacy DoD systems, resulting in an annual $142k labor cost reduction, a ~$2M profit increase, and significant NPS improvements.",
  expertise: [
    "Technical Program Management", "Agile SDLC", "Digital Modernization", "Enterprise Low-Code Strategy",
    "Solution Architecture", "Strategic Roadmap Planning", "Process Reengineering", "Risk & Conflict Management",
    "OCM", "Requirements Engineering"
  ]
};

const experience = [
  {
    id: 1,
    company: "MANTECH",
    role: "Program Manager",
    period: "Oct 2022 - Present",
    type: "Remote",
    project: "Army – RMW & IRIT",
    hasCaseStudy: true, 
    caseStudyData: {
      title: "Project Recovery: Army RMW",
      challenge: "Inherited a $70M project with significant post-deployment issues, low user adoption, and looming budget cuts.",
      strategy: "Implemented strict Agile controls, transparent OCM protocols, and strategic OneStream deployment across 26 commands.",
      outcome: "NPS score improved from Detractor to Promoter. Identified legacy divestiture opportunities. Increased profitability by $2M via optimization."
    },
    details: [
      "Leads 20+ team executing $70M Army RMW/IRIT projects.",
      "Strategic deployment of OneStream PPBE to 26 commands.",
      "Rescued failing project; NPS from Detractor to Promoter.",
      "Navigated budget reductions to minimize impact and increased profitability by +$2M."
    ]
  },
  {
    id: 2,
    company: "MANTECH",
    role: "Lead Software Engineer",
    period: "Oct 2022 - Dec 2024",
    type: "Remote",
    project: "NDU Connect",
    hasCaseStudy: true,
    caseStudyData: {
      title: "Digital Transformation: NDU Connect",
      challenge: "Manual paper processing (DD 2875 forms) causing massive delays and an 11% data entry error rate.",
      strategy: "Architected a Salesforce + Docusign automated workflow for account creation and academic support.",
      outcome: "1,450 labor hours saved annually ($142k equivalent). 11% error reduction. 30% faster system load times."
    },
    details: [
      "Deputy PM & Scrum Master for NDU Connect.",
      "Configured Salesforce/Docusign, saving $142k/yr.",
      "Reduced system load times by ~30% for high-volume operations.",
      "Improved Section 508 compliance."
    ]
  },
  {
    id: 3,
    company: "Nuvitek",
    role: "Appian Developer",
    period: "Aug 2021 - Oct 2022",
    type: "Remote",
    project: "NOAA & Dept of Labor",
    details: [
      "Built joint enforcement case mgmt system for NOAA.",
      "Dynamic XML PDF generation for 60+ docs.",
      "Migrated DOL Trade Adjustment data."
    ]
  },
  {
    id: 4,
    company: "REI Systems",
    role: "Tech Consultant",
    period: "Aug 2020 - Aug 2021",
    type: "Remote",
    project: "OCC",
    details: [
      "Led Appian prototyping teams.",
      "Integrated Google Cloud AI (Vision, NLP).",
      "Database developer on 3 concurrent projects."
    ]
  },
  {
    id: 5,
    company: "Groundswell",
    role: "Appian Consultant",
    period: "Jul 2019 - Aug 2020",
    type: "Tysons, VA",
    project: "CMS",
    details: [
      "Designed BPM solutions for CMS.",
      "Created UX prototypes.",
      "Researched enterprise frameworks."
    ]
  }
];

const education = [
  { school: "University of Maryland Global Campus", degree: "M.S. IT: Systems Engineering", date: "Aug 2022" },
  { school: "Virginia Tech", degree: "B.S. Psychology", date: "Jul 2019" }
];

const volunteer = {
  org: "FIRST Chesapeake & FIRST Robotics Team 1731",
  role: "Volunteer Coordinator & Mentor",
  period: "Nov 2022 – Mar 2025",
  details: [
    "Lead presenter at 2024 Mentors Conference on adapting Agile Scrum.",
    "Assisted with recruiting volunteers for competitions in VA, MD, and DC.",
    "Mentored 15+ high school students in Agile and systems engineering.",
    "Supported team in winning 2023 & 2024 Championships."
  ]
};

const affiliations = [
  "Eagle Scout, BSA",
  "Member, Alpha Phi Omega",
  "Member, Phi Theta Kappa"
];

const certifications = [
  { name: "PMP", id: "PMI", type: "pmi" },
  { name: "Appian Lead Dev", id: "ACLD", type: "appian" },
  { name: "Security+", id: "SEC+", type: "security" },
  { name: "Lean Six Sigma Black Belt", id: "LSSBB", type: "lean" },
  { name: "CSM & PSM", id: "CSM", type: "scrum" },
  { name: "Salesforce Admin", id: "SF-ADM", type: "salesforce" },
  { name: "Docusign IAM", id: "DOCU", type: "docu" },
  { name: "Azure Fundamentals", id: "AZURE", type: "microsoft" },
  { name: "FinOps Practitioner", id: "FIN", type: "finance" },
  { name: "MIT GenAI", id: "MIT", type: "ai" },
];

const keyMetrics = [
  { label: "Program Value", value: "$70M", icon: TrendingUp, color: "text-emerald-500" },
  { label: "Annual Savings", value: "$142k", icon: FileText, color: "text-blue-500" },
  { label: "Hours Saved/Yr", value: "1,450", icon: Activity, color: "text-amber-500" },
  { label: "Users Supported", value: "10k+", icon: Users, color: "text-purple-500" },
];

// Re-introduced detailed skill categories from resume
const skillCategories = {
  "Platforms & Apps": ["Appian", "Salesforce", "OneStream", "Microsoft Power BI", "Docusign"],
  "Databases": ["MySQL", "MariaDB", "Oracle Database", "Microsoft SQL Server"],
  "Management Tools": ["Jira", "Azure DevOps", "Asana", "IBM Jazz", "MS Project", "Visio"]
};

const testimonials = [
  { source: "Army Stakeholder", text: "Successfully executed $70M projects by continuously driving process improvements." },
  { source: "NDU Leadership", text: "Decreased data entry errors by ~11% via full digitalization." },
  { source: "Senior Director", text: "Rescued a failing project, increasing NPS from Detractor to Promoter." }
];

// --- COMPONENTS ---

const AnimatedCounter = ({ value }) => {
  return <span>{value}</span>;
};

// Architecture Diagram
const ArchitectureBlueprint = () => {
  return (
    <div className="w-full h-48 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 relative overflow-hidden flex items-center justify-center select-none opacity-80 mt-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="absolute top-2 left-2 text-[10px] font-mono opacity-50 text-slate-500">ARCH_DIAGRAM_V1.4</div>
      <svg width="100%" height="100%" viewBox="0 0 600 200">
        <path d="M 100 100 L 250 100" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M 350 100 L 500 100" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="2" strokeDasharray="5,5" />
        <circle r="4" className="fill-blue-500">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 100 100 L 250 100" />
        </circle>
        <circle r="4" className="fill-emerald-500">
          <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 500 100 L 350 100" />
        </circle>
        <g transform="translate(50, 75)">
          <rect width="100" height="50" rx="8" fill="none" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
          <text x="50" y="30" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400" fontSize="12" fontWeight="bold">Salesforce</text>
        </g>
        <g transform="translate(250, 75)">
          <rect width="100" height="50" rx="8" fill="none" className="stroke-blue-500" strokeWidth="2" />
          <text x="50" y="30" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400" fontSize="12" fontWeight="bold">Appian</text>
        </g>
        <g transform="translate(450, 75)">
          <rect width="100" height="50" rx="8" fill="none" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
          <text x="50" y="30" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400" fontSize="12" fontWeight="bold">Docusign</text>
        </g>
      </svg>
    </div>
  );
};

// Modals
const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('challenge');
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-700">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800">
          <div>
            <h2 className="font-bold text-lg text-slate-900 dark:text-white">{project.caseStudyData.title}</h2>
            <span className="text-xs text-slate-500 uppercase">CASE STUDY</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-1">
            {['challenge', 'strategy', 'outcome'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-bold uppercase transition-colors ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}>{tab}</button>
            ))}
          </div>
          <div className="min-h-[150px] text-slate-700 dark:text-slate-300">
            {activeTab === 'challenge' && (
              <div className="animate-fadeIn">
                <p className="text-lg leading-relaxed">{project.caseStudyData.challenge}</p>
                {project.project.includes("Army") && (
                   <div className="mt-6 p-4 border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="text-sm font-bold mb-2 text-red-700 dark:text-red-400">Initial Status</h4>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                         <div className="h-full bg-red-500 w-[20%]"></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1 text-red-600 dark:text-red-400">
                         <span>Health: Critical</span>
                      </div>
                   </div>
                )}
              </div>
            )}
            {activeTab === 'strategy' && (
              <div className="animate-fadeIn">
                <p className="text-lg leading-relaxed">{project.caseStudyData.strategy}</p>
                {project.project.includes("NDU") && <ArchitectureBlueprint />}
              </div>
            )}
            {activeTab === 'outcome' && (
              <div className="animate-fadeIn">
                <p className="text-lg leading-relaxed">{project.caseStudyData.outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); 
  const handleSend = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); setTimeout(() => setStatus('idle'), 3000); }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg mt-12 mb-20 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white"><Send size={20} /> Direct Message</h3>
      </div>
      {status === 'sent' ? (
        <div className="h-48 flex flex-col items-center justify-center animate-fadeIn text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <CheckCircle2 size={48} className="mb-3" />
          <span className="text-lg font-bold">Message Transmitted</span>
        </div>
      ) : (
        <form onSubmit={handleSend} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="email" placeholder="Email Address" className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm outline-none bg-transparent focus:border-blue-500 dark:text-white" required />
            <select className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm outline-none bg-transparent focus:border-blue-500 dark:text-white dark:bg-slate-800">
              <option>Project Inquiry</option><option>Opportunity</option>
            </select>
          </div>
          <textarea placeholder="Message..." className="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm h-32 resize-none outline-none bg-transparent focus:border-blue-500 dark:text-white" required></textarea>
          <button type="submit" disabled={status === 'sending'} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md">
            {status === 'sending' ? 'Transmitting...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

const CertLogo = ({ name, type }) => {
  const styles = {
    pmi: { bg: "bg-[#005696]", icon: Briefcase, color: "text-white" },
    appian: { bg: "bg-[#1e3a8a]", icon: Hexagon, color: "text-white" },
    scrum: { bg: "bg-[#f57f20]", icon: Users, color: "text-white" },
    security: { bg: "bg-[#cc0000]", icon: Shield, color: "text-white" },
    salesforce: { bg: "bg-[#00a1e0]", icon: Cloud, color: "text-white" },
    microsoft: { bg: "bg-[#00a4ef]", icon: Monitor, color: "text-white" },
    lean: { bg: "bg-slate-800", icon: Activity, color: "text-white" },
    docu: { bg: "bg-[#ffce00]", icon: FileText, color: "text-black" },
    data: { bg: "bg-[#ce1126]", icon: TerminalIcon, color: "text-white" },
    finance: { bg: "bg-[#00c7b7]", icon: TrendingUp, color: "text-white" },
  };
  const style = styles[type] || styles.pmi;
  const Icon = style.icon;
  return (
    <div className="flex flex-col items-center justify-center w-[160px] h-[140px] mx-2 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${style.bg} ${style.color} shadow-sm`}>
        <Icon size={28} strokeWidth={2} />
      </div>
      <span className="font-bold text-slate-800 dark:text-slate-100 text-xs text-center line-clamp-2 leading-tight">{name}</span>
    </div>
  );
};

const LogoCarousel = ({ items }) => {
  const carouselItems = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-4 group">
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-white to-transparent dark:from-slate-800"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-white to-transparent dark:from-slate-800"></div>
      <div className="flex w-max animate-scroll group-hover:pause">
        {carouselItems.map((cert, idx) => (
          <CertLogo key={`${cert.name}-${idx}`} name={cert.name} type={cert.type} />
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedJob, setExpandedJob] = useState(1);
  const [activeModal, setActiveModal] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleJob = (id) => setExpandedJob(expandedJob === id ? null : id);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  const navItems = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Activity },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'volunteer', label: 'Volunteer', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* Styles Injection for Animations */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .group:hover .group-hover\\:pause { animation-play-state: paused; }
      `}</style>

      {/* Modals */}
      <CaseStudyModal project={experience.find(e => e.id === activeModal)} onClose={() => setActiveModal(null)} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
           <div className="font-bold text-lg flex items-center gap-2">
             <Shield size={24} className="text-blue-600 dark:text-blue-400" />
             <span className="tracking-tight">JACOB BENJAMIN</span>
           </div>
           <div className="flex items-center gap-3">
             <button 
               onClick={() => setDarkMode(!darkMode)} 
               className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
             >
               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
           </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* HERO */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-10 relative overflow-hidden transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10">
            <div className="space-y-6 max-w-2xl">
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                  CLEARANCE: SECRET
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">{personalInfo.name}</h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">{personalInfo.title}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-6">
                   <span className="flex items-center gap-2"><MapPin size={16} /> {personalInfo.location}</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Mail size={16} /> {personalInfo.email}</a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Phone size={16} /> {personalInfo.phone}</a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {keyMetrics.map((m, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <m.icon size={16} className={m.color} />
                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">{m.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white"><AnimatedCounter value={m.value} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MISSION PROFILE */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 mb-10 border-l-4 border-l-blue-600 shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white">
            <ClipboardList size={24} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold">Mission Profile</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase text-slate-500 mb-2">Executive Summary</h3>
              <p className="leading-relaxed text-lg text-slate-700 dark:text-slate-300">{personalInfo.summary}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase text-slate-500 mb-3">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.expertise.map((item, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-6 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeTab === item.id ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <item.icon size={16} /> {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SIDEBAR NAV */}
          <aside className="hidden md:block col-span-3">
            <nav className="sticky top-28 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all font-medium ${
                    activeTab === item.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-l-4 border-blue-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <item.icon size={18} /> {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* TAB CONTENT */}
          <div className="col-span-1 md:col-span-9 space-y-8">
            
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400">
                  <Briefcase size={24} /> <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h2>
                </div>
                
                <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700 space-y-8">
                  {experience.map((job) => (
                    <div key={job.id} className="relative">
                      <div className="absolute -left-[35px] sm:-left-[43px] top-6 w-4 h-4 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"></div>
                      <div className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 transition-all hover:shadow-md ${expandedJob === job.id ? 'ring-1 ring-blue-500' : ''}`}>
                        <div className="cursor-pointer flex flex-col sm:flex-row sm:items-start justify-between gap-4" onClick={() => toggleJob(job.id)}>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                            <div className="text-blue-600 dark:text-blue-400 font-medium mt-1">{job.company} • {job.type}</div>
                            {job.project && <p className="text-sm text-slate-500 mt-2 italic">{job.project}</p>}
                          </div>
                          <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                            <span className="flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                              <Calendar size={12} /> {job.period}
                            </span>
                            {expandedJob === job.id ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                          </div>
                        </div>
                        {expandedJob === job.id && (
                          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                            {job.hasCaseStudy && (
                              <button onClick={() => setActiveModal(job.id)} className="w-full mb-6 py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm transition-all border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200">
                                <FileBarChart size={16} className="text-blue-600 dark:text-blue-400" /> View Case Study <ArrowRight size={16} />
                              </button>
                            )}
                            <ul className="space-y-3">
                              {job.details.map((point, idx) => (
                                <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span> {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {testimonials.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase">{item.source}</div>
                      <p className="italic text-sm text-slate-600 dark:text-slate-300">"{item.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-10 animate-fadeIn">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white"><Shield size={20} className="text-blue-600" /> Credentials Vault</h3>
                  <LogoCarousel items={certifications} />
                </div>
                
                {/* Detailed Skills Section (Restored Categories) */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <Cpu size={20} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technical Proficiency</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(skillCategories).map(([cat, skills]) => (
                      <div key={cat} className="space-y-3">
                        <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 pb-2">{cat}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400"><BookOpen size={24} /> <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2></div>
                <div className="grid gap-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">{edu.degree}</p>
                      </div>
                      <div className="text-right text-xs text-slate-500">
                        <p>{edu.date}</p>
                        <p className="flex items-center gap-1 justify-end mt-1"><MapPin size={10} /> {edu.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400"><Users size={24} /> <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Volunteer Ops</h2></div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{volunteer.org}</h3>
                  <p className="text-amber-600 font-medium mb-4">{volunteer.role} | {volunteer.period}</p>
                  <ul className="space-y-2">
                    {volunteer.details.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-6">Affiliations</h3>
                <div className="grid gap-3">
                  {affiliations.map((aff, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-3 shadow-sm">
                      <Award size={18} className="text-blue-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{aff}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
        
        <ContactForm />
      </main>
    </div>
  );
}


