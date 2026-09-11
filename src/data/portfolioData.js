import jewelryImg from '../assets/images/jewelry-product.png';
import docLibImg from '../assets/images/document_library.png';

export const profileData = {
  name: "ณัฐธิชา ลาสองชั้น",
  nameEn: "NATTICHA LASONGCHAN",
  role: "นักศึกษาสาขา Computer Science ที่มีความสนใจด้าน Full-Stack Development โดยเน้นการพัฒนา Backend และการวางโครงสร้างระบบ มีประสบการณ์พัฒนา Web Application ด้วยตนเอง สนใจเรียนรู้การพัฒนา Web Application ในการทำงานจริง",
  university: "มหาวิทยาลัยศรีปทุม (Sripatum University)",
  faculty: "คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์",
  tagline: "Building software that solves real-world problems with Vibe Coding & precision.",
  email: " natticha.lasongchan@gmail.com",
  github: "https://github.com/nat-care",
  linkedin: "https://www.linkedin.com/in/natticha-lasongchan-022964427/"
};

export const skillsData = [
  {
    title: "Frontend Development",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3"]
  },
  {
    title: "Backend & Database",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    skills: ["Node.js", "Express.js", "Python (FastAPI)", "PostgreSQL", "Supabase", "RESTful APIs"]
  },
  {
    title: "AI & Vibe Coding Tools",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    skills: ["Claude 3.7", "Cursor AI", "ChatGPT Plus", "GitHub Copilot", "Prompt Engineering", "v0.dev"]
  },
  {
    title: "DevOps & Deployment",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    skills: ["Vercel", "Git / GitHub", "Docker Basics", "Postman", "Vite", "CI/CD Pipelines"]
  }
];

export const projectsData = [
  {
    id: "Jewelry-Product",
    title: "Jewelry Product Management & Customer Chat Web Application",
    featured: true,
    category: "web",
    image: jewelryImg,
    shortDesc: "Web Application สำหรับร้านเครื่องประดับที่รวมระบบแสดงสินค้า ข้อมูลร้านค้า และระบบ Real-time Customer Chat ไว้ในเว็บไซต์เดียว",
    problem: "เครื่องประดับเป็นสินค้ามูลค่าสูง ความสวยงามและความถูกต้องของข้อมูลจึงสำคัญมาก",
    solution: "สร้าง Web Application สำหรับให้ผู้ใช้งานดูข้อมูลและสินค้าที่มีอยู่ภายในร้าน",
    role: "Full-Stack Developer",
    tech: ["React", "Tailwind CSS", "Node.js", "WebSocket", "MongoDB Atlas"],
    proofUrl: "https://github.com/PW-R/Jewery",
    demoUrl: "https://pw-r.github.io/Jewery/",
  },
  {
    id: "vibe-portfolio",
    title: "Document_Library",
    featured: false,
    category: "web",
    image: docLibImg,
    shortDesc: "เว็บ จัดการเอกสารในรูปแบบการดาษ ให้เป็นแบบดิจิตอล โดยใช้งานได้ทั้งเว็บและแอปพลิเคชั่น",
    problem: "การใช้งานจัดเก็บเอกสารในรูปแบบกระดาษ ซึ่งมีข้อจำกัด ทั้งความยุ่งยากในการจัดเก็บ จัดเรียงและค้นหา รวบถึงความเสี่ยงที่เอกสารจะเสียหายหรือสูญหาย",
    solution: "พัฒนา Document Library ที่ช่วยแก้ไข เพิ่มความสะดวกและความรวดเร็วในการทำงานในยุคที่เทคโนโลยีมีบทบาทสำคัญ ",
    role: "Frontend Designer & Full-Stack Developer",
    tech: ["React", " JavaScript", "LCascading Style Sheets (css)",],
    proofUrl: "https://github.com/Tatsunori-Kato-Spu/document_library",
    demoUrl: " https://tatsunori-kato-spu.github.io/document_library",
  }
];