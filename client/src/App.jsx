import React, { useEffect, useMemo, useState } from "react";
import NavBar from "@/components/NavBar.jsx";
import Footer from "@/components/Footer.jsx";
import HomeSection from "@/sections/HomeSection.jsx";
import AboutSection from "@/sections/AboutSection.jsx";
import SkillsSection from "@/sections/SkillsSection.jsx";
import ProjectsSection from "@/sections/ProjectsSection.jsx";
import ResumeSection from "@/sections/ResumeSection.jsx";
import { useSiteContent } from "@/hooks/useSiteContent.js";
import ProjectPage from "@/pages/ProjectPage.jsx";
import slugify from "@/utils/slugify.js";

const App = () => {
  const { content, loading, error } = useSiteContent();
  const [activeSection, setActiveSection] = useState("home");
  const [route, setRoute] = useState(() => (typeof window !== "undefined" ? window.location.hash.slice(1) || "/" : "/"));

  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "resume", label: "Resume" },
    ],
    [],
  );

  useEffect(() => {
    if (!content) {
      return;
    }
    document.title = content.meta?.title ?? document.title;
  }, [content]);

  // Lightweight hash routing: / => main page, /projects/:slug => project page
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections, content]);

  const handleNavigate = (event, sectionId) => {
    if (!sectionId) {
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    event?.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Route parsing helpers
  const isProjectRoute = route.startsWith("/projects/");
  const currentSlug = isProjectRoute ? route.split("/")[2] ?? "" : "";
  const currentProject =
    isProjectRoute && content
      ? content.projects.items.find((p) => slugify(p.title) === currentSlug)
      : null;
  const closeProjectPage = () => {
    window.location.hash = "";
  };

  if (loading || !content) {
    return (
      <div className="app-wrapper" style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <div className="chip">กำลังโหลดข้อมูล...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-wrapper" style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <h1>เกิดข้อผิดพลาด</h1>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  if (isProjectRoute) {
    return (
      <div className="app-wrapper">
        <NavBar sections={sections} activeSection={activeSection} onNavigate={handleNavigate} />
        <main id="main">
          <ProjectPage project={currentProject} onClose={closeProjectPage} />
        </main>
        <Footer footer={content.footer} />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <NavBar sections={sections} activeSection={activeSection} onNavigate={handleNavigate} />
      <main id="main">
        <HomeSection hero={content.hero} meta={content.meta} />
        <AboutSection about={content.about} />
        <SkillsSection skills={content.skills} />
        <ProjectsSection projects={content.projects} />
        <ResumeSection resume={content.resume} />
      </main>
      <Footer footer={content.footer} />
    </div>
  );
};

export default App;
