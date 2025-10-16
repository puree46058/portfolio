const siteContent = {
  meta: {
    title: "Puree Vongpunya | Portfolio",
    description:
      "Portfolio แสดงผลงานและทักษะการออกแบบและพัฒนาเว็บแอปพลิเคชันของ Puree Vongpunya พร้อมดาวน์โหลด Resume/CV และช่องทางติดต่อ",
    email: "puree.vongpunya@gmail.com",
    location: "เชียงใหม่ ประเทศไทย",
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com",
      },
      {
        label: "GitHub",
        url: "https://github.com",
      },
    ],
  },
  hero: {
   
    name: "Puree Vongpunya",
    title: "Programmer & Ai Automation",
    tagline:
      "ผมชอบทำโปรเจคที่ตอบโจทย์ธุรกิจ ตั้งแต่ UX/UI, Front-end, Mobile develop จนถึง Workflow Automation",
    ctaPrimary: {
      label: "ดูผลงานเด่น",
      href: "#projects",
    },
  
    quickFacts: [
      "2+ ปี ประสบการณ์สร้างเว็บและแอป",
      "ประยุกต์ AI & Automation ในงานจริง",
      "ออกแบบ UX/UI พร้อมส่งต่อทีม dev",
    ],
    profileImage: "/asset/profile2.png",
  },
  about: {
    heading: "เกี่ยวกับฉัน",
    subheading: "สวัสดีครับผมนายภูรี วงษ์ปัญญา ชื่อเล่น เอิรธ์ อายุ 25 ปี",
    description: [
      " ผมพร้อมเรียนรู้เทคโนโลยีใหม่ๆ มาประยุกต์กับการทำงานในด้าน แอป และ การพัฒนาเว็ปไซต์ พร้อมเรียนรู้สิ่งใหม่ๆเสมอและปรับตัวให้เข้ากับสิ่งแวดล้อมใหม่ๆ",
    ],
    highlights: [
      "ออกแบบและพัฒนาเว็บไซต์, Application",
      "ทำงานข้ามทีมกับ Designer, Marketer และ Stakeholders",
      "ชอบทดลองเครื่องมือใหม่ เช่น AI, n8n, Supabase",
    ],
    details: [
      { label: "อยู่ที่", value: "เชียงใหม่ ประเทศไทย" },
      { label: "ถนัด", value: "Front-end, Mobile develop, Workflow Automation" },
      { label: "กำลังสนใจ", value: "Product Design, AI-Automation" },
    ],
    profileImage: "/asset/profile.jpg",
  },
  skills: {
    heading: "ทักษะและเครื่องมือ",
   
    categories: [
      {
        title: "Web Fundamentals",
        items: [
          { name: "HTML", icon: "/asset/icon/html.png" },
          { name: "CSS", icon: "/asset/icon/css.png" },
          { name: "Bootstrap", icon: "/asset/icon/bootstrap.png" },
          { name: "JavaScript", icon: "/asset/icon/javascript.png" },
        ],
      },
      {
        title: "Back-end & Database",
        items: [
          { name: "Node.js", icon: "/asset/icon/nodejs.png" },
   
          { name: "PHP", icon: "/asset/icon/php.png" },
          { name: "MySQL", icon: "/asset/icon/mysql.png" },
          { name: "MongoDB", icon: "/asset/icon/mongodb.png" },
          { name: "Supabase", icon: "/asset/icon/superbase.png" },
        ],
      },
      {
        title: "Product & Design",
        items: [
          { name: "Adobe XD", icon: "/asset/icon/adobe-xd.png" },
          { name: "Figma", icon: "/asset/icon/figma.png" },
          { name: "WordPress", icon: "/asset/icon/wordpress.png" },
          { name: "Flutter", icon: "/asset/icon/flutter.png" },
        ],
      },
      {
        title: "Automation & Collaboration",
        items: [
          { name: "n8n", icon: "/asset/icon/n8n.png" },
          { name: "AI Tools", icon: "/asset/icon/chatgpt.png" },
          { name: "Git", icon: "/asset/icon/git.png" },
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    subheading: "Project ที่ผมเคยทำและร่วมพัฒนา",
    items: [
      {
        title: "Sleep App",
        description:
          "แอปฟังเพลงให้นอนหลับกลางคืน หรือ ระหว่างออกกำลังกาย มีฟังก์ชั่นฟังเพลง ตั้งค่าเวลาเตือนส่ง Notification , นับเวลาในเดือนนี้นอนไปเท่าไรหรือ 7 วันหลับไปเท่าไร",
        coverImage: "/asset/project/app_sleep/1.jpg",
        gallery: [
          "/asset/project/app_sleep/1.jpg",
          "/asset/project/app_sleep/2.jpg",
          "/asset/project/app_sleep/3.jpg",
          "/asset/project/app_sleep/4.jpg",
          "/asset/project/app_sleep/5.jpg",
          "/asset/project/app_sleep/6.jpg",
          "/asset/project/app_sleep/7.jpg",
          "/asset/project/app_sleep/8.jpg",
          "/asset/project/app_sleep/9.jpg",
          "/asset/project/app_sleep/10.jpg",
          "/asset/project/app_sleep/11.jpg",
          "/asset/project/app_sleep/12.jpg",
          "/asset/project/app_sleep/13.jpg",
          "/asset/project/app_sleep/14.jpg",
          "/asset/project/app_sleep/15.png",
          "/asset/project/app_sleep/16.jpg",
        ],
        tags: ["Flutter","Admob","Subscription Google"],
        role: "Flutter Developer",
        contributions: [
          "ออกแบบและพัฒนา UI/UX สำหรับหน้าหลัก, Subscription, Premium Plans",
          "เชื่อมต่อระบบสมัครสมาชิกกับ Google Play Billing (Subscription)",
          "พัฒนาระบบแจ้งเตือนตั้งเวลาเข้านอน/ตื่นนอน (Notification Scheduler)",
            "ใส่ AdMob และจัดการตำแหน่งแสดงผล",
        ],
        links: [],
      },
      {
        title: "Life Countdown App",
        description:
          "แอปแสดงเตือนสติให้คำแนะนำสำหรับคนที่หมดกำลังใจ พร้อมคำให้กำลังใจ สำหรับคนที่หมดกำลังใจในชีวิตช่วงนี้ ย้ำเตือนถึงการที่เกิดมา",
        coverImage: "/asset/project/life_countdown/icon.png",
        gallery: [
          "/asset/project/life_countdown/1.jpg",
          "/asset/project/life_countdown/2.jpg",
          "/asset/project/life_countdown/3.jpg",
          "/asset/project/life_countdown/4.jpg",
          "/asset/project/life_countdown/5.jpg",
          "/asset/project/life_countdown/6.jpg",
     
        ],
        tags: ["Flutter", "Admob"],
        role: "Flutter Developer",
        contributions: [
          "แก้ Package Error android",
          "ใส่ AdMob และจัดการตำแหน่งแสดงผล",
        ],
          links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.think.lifecountdown&pcampaignid=web_share",
          },
        ]
      },
      {
        title: "Mystic Oracle App",
        description:
          "แอปดูดวง ตามหลักการ ไพ่ทาโร่, ราศี , เซียมซี ที่ใช้ เสียง AI ภาพ AI อนาคตมีการแชตแบบเรียลไทม์",
        coverImage: "/asset/project/mysticoracle/icon.jpg",
        gallery: [
          "/asset/project/mysticoracle/1.jpg",
          "/asset/project/mysticoracle/2.jpg",
          "/asset/project/mysticoracle/3.jpg",
          "/asset/project/mysticoracle/4.jpg",
          "/asset/project/mysticoracle/5.jpg",
          "/asset/project/mysticoracle/6.jpg",
          "/asset/project/mysticoracle/7.jpg",
          "/asset/project/mysticoracle/8.jpg",
          "/asset/project/mysticoracle/9.jpg",
          "/asset/project/mysticoracle/10.jpg",
        ],
        tags: ["Flutter", "MySql", "AI Integration","Admob","Subscription Google"],
        role: "Flutter Developer",
        contributions: [
          "แก้ Package Error android",
          "ใส่ AdMob และจัดการตำแหน่งแสดงผล",
          "Generate เสียง ภาพ แม่หมอ",
          "ทำ ฟังก์ชั่น Premium ร่วมกับ Subscription Google",
        ],
        links: [
          {
            label: "Google Play ",
            href: "https://play.google.com/store/apps/details?id=com.mysticoracle.horoscopeastrology&pcampaignid=web_share",
          },
        ]
      },
      {
        title: "Recipient Menu App",
        description:
          "แอปแสดงวิธีการทำอาหาร พร้อมสูตร แอปนี้คือตัวอย่าง สปาเก็ตตี้ ความจริงมี 7 แอป",
        coverImage: "/asset/project/recipient/app_icon.png",
        gallery: [
          "/asset/project/recipient/1.jpg",
          "/asset/project/recipient/2.jpg",
          "/asset/project/recipient/3.jpg",
          "/asset/project/recipient/4.jpg",
          "/asset/project/recipient/5.jpg",
          "/asset/project/recipient/6.jpg",
        ],
        tags: ["Flutter", "MySql","Admob"],
          role: "Flutter Developer",
        contributions: [
          "แก้ Package Error android",
          "แก้ Widget และ ฟังก์ชั่น ถูกใจ ทั้งหมด",
          "ใส่ AdMob และจัดการตำแหน่งแสดงผล",
          
        ],
          links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.ktcccp.spaghettirecipes&pcampaignid=web_share",
          },
        ]
      },
      {
        title: "Web Wordpress Adella",
        description:
          "Web ขายสินค้า ลดน้ำหนัก Adella ใช้ Wordpressและทำ seo เบื้องต้น",
        coverImage: "/asset/project/adella/icon.png",
        gallery: [
          "/asset/project/adella/web1.png",
          "/asset/project/adella/web2.png",
          "/asset/project/adella/web3.png",
          "/asset/project/adella/web4.png",
          "/asset/project/adella/web5.png",

        ],
        tags: ["Wordpress","Divi"],
        
          links: [
          {
            label: "Website",
            href: "https://adellaofficial.com/",
          },
        ]
      },
      {
        title: "n8n Automation Library",
        description:
          "คลัง Workflow n8n ที่ผมเรียนรู้ด้วยเองและทำตามความต้องการของผู้ที่สนใจ",
        coverImage: "/asset/project/n8n/workflow.png",
        gallery: [
          "/asset/project/n8n/workflow.png",
          "/asset/project/n8n/workflow2.png",
          "/asset/project/n8n/line_chat1.png",
          "/asset/project/n8n/line_chat2.png",
          "/asset/project/n8n/ads.png",
          "/asset/project/n8n/ads_more.png",
          "/asset/project/n8n/bottrade.png",
          
        ],
       
        tags: ["n8n", "Automation", "API Integration", "MySQL",
          "Superbase"],
        links: [],
      },
      {
        "title": "N8N Live Tiktok",
         "description":
          "ระบบ AI ที่จะที่จะพูกคุยกับผู้ใช้ที่พิมพ์แชททาง TikTok",
         "coverImage": "/asset/project/n8n-nodejs/1.jpg",
         "gallery": [
          "/asset/project/n8n-nodejs/1.jpg",
          "/asset/project/n8n-nodejs/2.jpg",
          "/asset/project/n8n-nodejs/3.jpg",
          "/asset/project/n8n-nodejs/4.png"
        
          
        ],
        "role": "AI Automation",
        "contributions": [
          "สร้าง Flow ที่รับค่า จาก Nodejs ที่มีการเช็คคำจาก Chat TikTok",
          "สร้าง Flow ที่รับค่า จาก Nodejs ที่มีการเช็ค สถานะผู้แชตว่าส่งของขวัญมาแล้วรึยัง เพื่อจะสามารถคุยได้ละเอียดมากขึ้น",
          "เขียน Nodejs ที่มีการติดต่อทั้ง TikTok N8N",
          "สร้างวิดีโอเคลื่อนไว  AI แม่หมอ ให้ทำท่าตามที่มีกำหนดเบื้องต้น และเสียงเบื้องต้น และมีการ สร้างเสียง Real Time ในการโต้ตอบ"
          
        ],
        "tags": ["n8n", "Automation", "Nodejs","Superbase","MySQL"],
        "links": []
      },
{
        "title": "Backlink-Web",
         "description":
          "ระบบ Backlink เว็ปไซต์ที่ต้องการเพื่อดู Traffic",
         "coverImage": "/asset/project/backlink/1.jpg",
         "gallery": [
          "/asset/project/backlink/1.jpg",
          "/asset/project/backlink/2.jpg",
          "/asset/project/backlink/3.jpg",
          "/asset/project/backlink/4.jpg"
        
          
        ],
        "role": "Full Stack",
        "contributions": [
          "มีระบบ Login",
          "ใช้ API เว็ปนอกเพื่อแกะ Data ของเว็ป และ plot ออกเป็นกราฟให้มองง่ายทีล่ะ 1 เว็ป ",
          "สร้างระบบ Cron เพื่อรีเซ็ต เช็คทุกวันศุกร์"
          
    
        ],
        "tags": ["PHP","MySQL","Rest API"],
        "links": []
      }
    ],
  },
  resume: {
    heading: "Resume & CV",
    subheading: "เอกสารประกอบพร้อมดาวน์โหลดทันที",
    tabs: [
      {
        key: "resume",
        label: "Resume",
        description:
          "สรุปประสบการณ์ทำงาน ผลงาน และทักษะที่โดดเด่น เพื่อให้นายจ้างเห็นภาพรวมอย่างรวดเร็ว",
        previewImage: "/pdf/img_resume.png",
        file: "/pdf/resume_puree_vongpunya.pdf",
        buttonLabel: "Download Resume",
      },
       {
        key: "resume-eng",
        label: "Resume-eng",
        description:
          "Summary of Work Experience, Achievements, and Key Skills",
        previewImage: "/pdf/img_resume-eng.png",
        file: "/pdf/resume_puree_vongpunya-eng.pdf",
        buttonLabel: "Download Resume Eng",
      },
      {
        key: "cv",
        label: "CV",
        description:
          "รายละเอียดเชิงลึกของโปรเจ็กต์ ประวัติการศึกษา และผลงานวิชาชีพ ใช้สำหรับการนำเสนอแบบเต็มรูปแบบ",
        previewImage: "/pdf/img_cv.jpg",
        file: "/pdf/cv_puree_vongpunya.pdf",
        buttonLabel: "Download CV",
      },
    ],
  },
  footer: {
    contactText: "ติดต่อฉันที่ mail",
    email: "puree.vongpunya@gmail.com",
    rights: `© ${new Date().getFullYear()} Puree Vongpunya. All rights reserved.`,
  },
};

export default siteContent;
