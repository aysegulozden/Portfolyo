const projects = [
  {
    id: 1,
    title: "LUMOSIFY",
    company: "Arpeta Yazılım · Ağu 2024 – Nis 2025",
    desc: "React.js tabanlı çok rollü yönetim paneli. Çalışan ekleme/silme, sınıf ve workshop oluşturma, randevu planlama modülleri ile işletme, çalışan ve müşteri operasyonlarını dijitalleştirdik. REST API entegrasyonu ile gerçek zamanlı responsive akışlar geliştirdim.",
    tech: ["React", "REST API", "Responsive", "State Management"],
    link: "#",
  },
  {
    id: 2,
    title: "WINGARDIUM",
    company: "Arpeta Yazılım · Ağu 2024 – Nis 2025",
    desc: "Tarım sektörüne yönelik B2B uygulama. Türkçe ve İngilizce çoklu dil desteğini entegre ederek ürünün uluslararası pazara açılmasını sağladım. Component bazlı mimari korunarak UI/UX iyileştirmeleri ve responsive tasarım tutarlılığı sağlandı.",
    tech: ["React", "i18n", "Component Architecture", "UI/UX"],
    link: "#",
  },
  {
    id: 3,
    title: "ENGLISH NIGHTS",
    company: "LaSolist (Staj) · Temmuz 2024",
    desc: "Yönetici ve katılımcı için iki taraflı etkinlik sistemi tasarlayıp kodladım. QR kod entegrasyonu ile etkinlik katılım sürecini dijitalleştirdik, kağıt tabanlı yoklama ihtiyacını ortadan kaldırdık. Profil yönetimi ekranları geliştirdim.",
    tech: ["React", "QR Code", "Auth", "Multi-role"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projeler</h2>
      <p className="section-sub">
        Profesyonel deneyimimde yer aldığım projeler.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-number">
              {String(p.id).padStart(2, "0")}
            </div>
            <h3 className="project-title">{p.title}</h3>
            <div className="project-company">{p.company}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
