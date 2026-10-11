import React, { useState, useEffect, useRef, useMemo } from 'react';

// أيقونات SVG مدمجة لضمان النشر السلس في Vercel دون مكاتب خارجية
const Icon = ({ children, className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const Edit3 = (p) => <Icon {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></Icon>;
const Eye = (p) => <Icon {...p}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></Icon>;
const EyeOff = (p) => <Icon {...p}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></Icon>;
const Plus = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
const Trash2 = (p) => <Icon {...p}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></Icon>;
const ImageIcon = (p) => <Icon {...p}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></Icon>;
const Mail = (p) => <Icon {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></Icon>;
const MapPin = (p) => <Icon {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>;
const Phone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const X = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;
const Settings = (p) => <Icon {...p}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></Icon>;
const Upload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></Icon>;
const Type = (p) => <Icon {...p}><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></Icon>;
const Droplet = (p) => <Icon {...p}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></Icon>;
const LayoutTemplate = (p) => <Icon {...p}><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></Icon>;
const AlertTriangle = (p) => <Icon {...p}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>;
const Check = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const Bold = (p) => <Icon {...p}><path d="M6 12h9a4 4 0 0 1 0 8H6v-8zm0 0h8a3.5 3.5 0 0 0 0-7H6v7z"/></Icon>;
const Italic = (p) => <Icon {...p}><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></Icon>;
const Underline = (p) => <Icon {...p}><path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="4" y1="21" x2="20" y2="21"/></Icon>;
const Palette = (p) => <Icon {...p}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/></Icon>;
const MessageCircle = (p) => <Icon {...p}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></Icon>;
const Download = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></Icon>;

const DEFAULT_DATA = {
  profile: {
    name: "براءة <span style='color: var(--accent);'>يوسف</span>",
    title: "مصممة جرافيك وخبيرة هوية بصرية",
    bio: "أصنع تجارب بصرية فريدة تجمع بين البساطة والفخامة. أؤمن بأن التصميم الابدعي لا يقتصر على الشكل الجميل، بل هو <span style='color: var(--accent); font-weight: bold;'>لغة صامتة</span> تروي قصة علامتك التجارية وتترك انطباعاً لا يُنسى.",
    email: "hello@basel-design.com",
    phone: "+966 50 123 4567",
    location: "المملكة العربية السعودية"
  },
  settings: {
    fontFamily: "Tajawal", 
    accentColor: "#e5b741", 
    textColor: "#ffffff", 
    heroBgImage: null,
    whatsappNumber: "966501234567",
    sections: {
      hero: true,
      portfolio: true,
      contact: true
    }
  },
  social: [
    { id: "1", platform: "TikTok", url: "https://tiktok.com", iconClass: "fa-brands fa-tiktok" },
    { id: "2", platform: "X", url: "https://x.com", iconClass: "fa-brands fa-x-twitter" },
    { id: "3", platform: "Behance", url: "https://behance.net", iconClass: "fa-brands fa-behance" },
    { id: "4", platform: "Snapchat", url: "https://snapchat.com", iconClass: "fa-brands fa-snapchat" }
  ],
  projects: [
    {
      id: "1",
      title: "علامة أورينت للعطور",
      category: "هوية بصرية",
      description: "تصميم هوية بصرية متكاملة تعكس الفخامة والأناقة، مع خطوط عربية ملكية وتناسق ألوان هادئ وجذاب.",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: "2",
      title: "حملة سوشيال ميديا",
      category: "سوشيال ميديا",
      description: "تصاميم إبداعية لحملات رقمية تستهدف التفاعل العالي وإبراز المنتجات بأحدث أساليب التصميم المعاصر.",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      gallery: []
    }
  ]
};

const SOCIAL_OPTIONS = [
  { key: 'x-twitter', class: 'fa-brands fa-x-twitter', name: 'X' },
  { key: 'tiktok', class: 'fa-brands fa-tiktok', name: 'TikTok' },
  { key: 'snapchat', class: 'fa-brands fa-snapchat', name: 'Snapchat' },
  { key: 'instagram', class: 'fa-brands fa-instagram', name: 'Instagram' },
  { key: 'behance', class: 'fa-brands fa-behance', name: 'Behance' },
  { key: 'linkedin', class: 'fa-brands fa-linkedin', name: 'LinkedIn' },
  { key: 'youtube', class: 'fa-brands fa-youtube', name: 'YouTube' },
  { key: 'link', class: 'fa-solid fa-link', name: 'رابط خارجي' }
];

const compressImage = (file, maxWidth, maxHeight, callback) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height *= maxWidth / width));
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width *= maxHeight / height));
          height = maxHeight;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL('image/jpeg', 0.8));
    };
  };
};

const ContentEditable = ({ html, onChange, isEditMode, className, tagName: Tag = 'div', placeholder = "" }) => {
  const contentEditableRef = useRef(null);

  useEffect(() => {
    if (contentEditableRef.current && contentEditableRef.current.innerHTML !== html) {
      contentEditableRef.current.innerHTML = html || "";
    }
  }, [html]);

  const handleInput = () => {
    if (onChange && contentEditableRef.current) {
      onChange(contentEditableRef.current.innerHTML);
    }
  };

  return (
    <Tag
      ref={contentEditableRef}
      contentEditable={isEditMode}
      onInput={handleInput}
      onBlur={handleInput}
      className={`${className} ${isEditMode ? 'border border-dashed border-white/30 hover:border-[var(--accent)] focus:outline-none focus:bg-black/40 rounded-lg px-2 py-1 cursor-text transition-all min-w-[40px]' : 'border border-transparent'}`}
      dangerouslySetInnerHTML={{ __html: html || "" }}
      data-placeholder={placeholder}
    />
  );
};

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('basel_portfolio_master');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_DATA;
  });

  const [isEditMode, setIsEditMode] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [formState, setFormState] = useState({});
  const [toastMessage, setToastMessage] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(null);
  const [customColor, setCustomColor] = useState(data.settings?.accentColor || '#e5b741');
  const [activeCategory, setActiveCategory] = useState('الكل');
  const importFileRef = useRef(null);

  useEffect(() => {
    const linkId = 'fa-cdn-link';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(data.projects?.map(p => p.category).filter(Boolean));
    return ['الكل', ...Array.from(cats)];
  }, [data.projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'الكل') return data.projects || [];
    return (data.projects || []).filter(p => p.category === activeCategory);
  }, [data.projects, activeCategory]);

  useEffect(() => {
    try {
      localStorage.setItem('basel_portfolio_master', JSON.stringify(data));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        showToast("مساحة الذاكرة ممتلئة؛ يرجى مسح بعض الصور القديمة", "error");
      }
    }
  }, [data]);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  const confirmAction = (message, action) => setConfirmDialog({ message, action });

  const handleFileUpload = (e, callback, maxWidth = 1200, maxHeight = 1200) => {
    const file = e.target.files[0];
    if (file) compressImage(file, maxWidth, maxHeight, callback);
  };

  const updateProfile = (field, value) => setData(prev => ({ ...prev, profile: { ...prev.profile, [field]: value } }));
  const updateSettings = (field, value) => setData(prev => ({ ...prev, settings: { ...prev.settings, [field]: value } }));
  
  const toggleSection = (sectionKey) => {
    setData(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        sections: {
          ...prev.settings.sections,
          [sectionKey]: !prev.settings.sections?.[sectionKey]
        }
      }
    }));
  };

  const formatText = (command, value = null) => document.execCommand(command, false, value);

  const handleExportData = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = `data.json`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);
    showToast("تم تنزيل النسخة الاحتياطية data.json بنجاح");
  };

  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        setData(importedData);
        showToast("تم استيراد كافة بياناتك وصورك بنجاح!");
      } catch (err) {
        showToast("تعذر قراءة الملف المرفوع", "error");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const saveProject = () => {
    if (!selectedProject.title) return showToast("يرجى إدخال عنوان للمشروع", "warning");
    setData(prev => {
      const exists = prev.projects?.find(p => p.id === selectedProject.id);
      if (exists) {
        return { ...prev, projects: prev.projects.map(p => p.id === selectedProject.id ? selectedProject : p) };
      }
      return { ...prev, projects: [selectedProject, ...(prev.projects || [])] };
    });
    showToast("تم حفظ المشروع بنجاح");
    setActiveModal(null);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#070707] transition-colors duration-500 selection:bg-[var(--accent)] selection:text-black">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Readex+Pro:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        * { 
          font-family: '${data.settings?.fontFamily || 'Tajawal'}', sans-serif; 
          scrollbar-width: thin;
          scrollbar-color: var(--accent) #111;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }
        
        :root {
          --accent: ${data.settings?.accentColor || '#e5b741'};
          --text-main: ${data.settings?.textColor || '#ffffff'};
        }
        
        body { color: var(--text-main); }
        .text-accent { color: var(--accent); }
        .bg-accent { background-color: var(--accent); }
        .border-accent { border-color: var(--accent); }
        
        .section-hidden { opacity: 0.35; border: 2px dashed #ef4444; position: relative; }
        .section-hidden::after {
          content: "هذا القسم مخفي ولن يظهر للزوار";
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          background: rgba(220, 38, 38, 0.95); color: white; padding: 8px 18px;
          border-radius: 12px; font-weight: bold; pointer-events: none; z-index: 20;
          font-size: 14px;
        }
        
        .hover-lift { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 15px 35px -10px var(--accent); }
      `}} />

      {/* زر المعاينة السريعة */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button 
          onClick={() => { setIsEditMode(!isEditMode); setIsSettingsOpen(false); }}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
            isEditMode ? 'bg-red-500/90 border-red-400 text-white' : 'bg-black/60 border-white/20 text-white/70 hover:text-white'
          }`}
          title={isEditMode ? "معاينة كزائر" : "تفعيل التحرير"}
        >
          {isEditMode ? <Eye className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
        </button>
      </div>

      {/* زر الواتساب العائم */}
      {!isEditMode && data.settings?.whatsappNumber && (
        <a 
          href={`https://wa.me/${data.settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300"
          title="تواصل عبر واتساب"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      )}

      {/* شريط أدوات التحرير العلوي */}
      {isEditMode && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 w-[92%] md:w-auto">
          <div className="bg-[#111]/95 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-2xl flex flex-wrap items-center justify-center gap-2 md:gap-4 shadow-2xl">
            <span className="text-xs font-bold text-accent px-2 border-l border-white/10 hidden md:block">أدوات التحرير:</span>
            
            <div className="flex items-center gap-1">
              <button onMouseDown={e => { e.preventDefault(); formatText('bold'); }} className="p-2 text-white hover:bg-white/10 rounded-lg"><Bold className="w-4 h-4"/></button>
              <button onMouseDown={e => { e.preventDefault(); formatText('italic'); }} className="p-2 text-white hover:bg-white/10 rounded-lg"><Italic className="w-4 h-4"/></button>
              <button onMouseDown={e => { e.preventDefault(); formatText('underline'); }} className="p-2 text-white hover:bg-white/10 rounded-lg"><Underline className="w-4 h-4"/></button>
            </div>
            
            <div className="h-6 w-[1px] bg-white/20"></div>
            
            <div className="flex items-center gap-2">
              <button onMouseDown={e => { e.preventDefault(); formatText('foreColor', data.settings?.accentColor); }} className="w-7 h-7 rounded-full border border-white/20 hover:scale-110 transition-transform" style={{backgroundColor: data.settings?.accentColor}} title="لون ذهبي (أساسي)" />
              <button onMouseDown={e => { e.preventDefault(); formatText('foreColor', '#ffffff'); }} className="w-7 h-7 rounded-full border border-white/20 bg-white hover:scale-110 transition-transform" title="أبيض" />
              <button onMouseDown={e => { e.preventDefault(); formatText('foreColor', '#888888'); }} className="w-7 h-7 rounded-full border border-white/20 bg-neutral-500 hover:scale-110 transition-transform" title="رمادي" />
              
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 overflow-hidden hover:opacity-90">
                 <input type="color" value={customColor} onChange={e => setCustomColor(e.target.value)} onBlur={() => formatText('foreColor', customColor)} className="absolute inset-[-10px] w-[50px] h-[50px] cursor-pointer" />
                 <Palette className="w-3.5 h-3.5 text-white pointer-events-none drop-shadow mix-blend-difference" />
              </div>
            </div>

            <div className="h-6 w-[1px] bg-white/20"></div>

            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-black bg-accent font-bold hover:brightness-110 transition-all shadow-md"
            >
              <Settings className="w-4 h-4" />
              <span>إعدادات الموقع</span>
            </button>
          </div>
        </div>
      )}

      {/* لوحة الإعدادات الجانبية */}
      {isSettingsOpen && isEditMode && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-[#111] border-l border-white/10 shadow-2xl z-50 flex flex-col">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/60 sticky top-0 backdrop-blur-md z-10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Settings className="w-5 h-5 text-accent"/> إعدادات الموقع</h2>
            <button onClick={() => setIsSettingsOpen(false)} className="text-neutral-400 hover:text-white bg-white/5 p-2 rounded-full"><X className="w-5 h-5" /></button>
          </div>

          <div className="p-6 space-y-6 flex-1 overflow-y-auto pb-28">
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2 mb-3"><Droplet className="w-4 h-4"/> اللون الأساسي</h3>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium">لون اللمسات والأزرار</span>
                <input type="color" value={data.settings?.accentColor} onChange={(e) => updateSettings('accentColor', e.target.value)} className="w-10 h-10 rounded cursor-pointer bg-transparent border-0" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2 mb-3"><Type className="w-4 h-4"/> نوع الخط</h3>
              <div className="grid grid-cols-1 gap-2">
                {['Tajawal', 'Cairo', 'Readex Pro'].map(font => (
                  <button key={font} onClick={() => updateSettings('fontFamily', font)} className={`p-3 rounded-xl text-right font-medium transition-all ${data.settings?.fontFamily === font ? 'bg-accent text-black font-bold' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                    خط {font} {data.settings?.fontFamily === font && <Check className="w-4 h-4 inline mr-2" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2 mb-3"><LayoutTemplate className="w-4 h-4"/> خلفية القسم الأول</h3>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                {data.settings?.heroBgImage && (
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/10 group">
                    <img src={data.settings.heroBgImage} className="w-full h-full object-cover" alt="Hero Background" />
                    <button onClick={() => updateSettings('heroBgImage', null)} className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-sm">
                      حذف الخلفية
                    </button>
                  </div>
                )}
                <label className="flex items-center justify-center gap-2 w-full p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl cursor-pointer transition-colors border border-dashed border-white/20">
                  <Upload className="w-4 h-4 text-accent" /> 
                  <span className="text-sm font-bold">رفع صورة خلفية جديدة</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, (b64) => updateSettings('heroBgImage', b64), 1920, 1080)} />
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-400 flex items-center gap-2 mb-2"><MessageCircle className="w-4 h-4"/> رقم الواتساب</h3>
              <input type="text" value={data.settings?.whatsappNumber || ''} onChange={e => updateSettings('whatsappNumber', e.target.value)} placeholder="مثال: 966501234567" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-left focus:border-accent outline-none font-mono" dir="ltr" />
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold text-neutral-400 block mb-2">إدارة النسخ الاحتياطية والبيانات</span>
              
              <button onClick={handleExportData} className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition">
                <Download className="w-4 h-4 text-accent" />
                تصدير البيانات وحفظ النسخة الاحتياطية
              </button>

              <button onClick={() => importFileRef.current?.click()} className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition">
                <Upload className="w-4 h-4 text-sky-400" />
                استيراد البيانات من ملف محفوظ
              </button>

              <input type="file
