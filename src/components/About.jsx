const technicalSkills = [
  "JavaScript ES6+",
  "TypeScript",
  "React",
  "React Router",
  "Redux Toolkit",
  "Context API",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Responsive Tasarım",
  "REST API",
  "Axios",
  "State Management",
  "Clean Code",
];

const personalSkills = [
  "Takım Çalışması",
  "Hızlı Öğrenme",
  "Problem Çözme",
  "Analitik Düşünme",
  "Proaktif İletişim",
];

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Hakkımda</h2>
      <p className="section-sub">
        İskenderun Teknik Üniversitesi Bilgisayar Mühendisliği mezunu.
      </p>
      <div className="about-grid">
        <div className="about-text">
          <p>
            React.js ve TypeScript ile modern frontend teknolojileri kullanarak
            kullanıcı odaklı web uygulamaları geliştiriyorum. Responsive arayüz
            geliştirme, REST API entegrasyonu, state management ve component
            bazlı mimari konularında pratik deneyimim var.
          </p>
          <p>
            Arpeta Yazılım'da 9 ay part-time olarak çalıştım: LUMOSIFY'da çok
            rollü yönetim panelleri, WINGARDIUM'da B2B tarım uygulamasının
            Türkçe/İngilizce çoklu dil desteği. LaSolist'teki stajda ENGLISH
            NIGHTS projesinde yönetici ve katılımcı taraflarını kodladım, QR kod
            entegrasyonu yaptım.
          </p>
          <p>
            Şubat–Nisan 2026 arasında Sırbistan/Belgrad'da Human Ports
            Consulting'te proje yönetimi stajı yaptım; bu deneyim süreç yönetimi
            ve çok paydaşlı iletişim tarafımı güçlendirdi.
          </p>
          <p>
            Agile süreçlere hızlı uyum sağlayan, sürdürülebilir ve clean code
            prensiplerine uygun projeler geliştirmeye odaklı bir geliştiriciyim.
          </p>
        </div>
        <div className="about-skills">
          <h3>Teknik Yetkinlikler</h3>
          <ul>
            {technicalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <h3 className="skills-second">Kişisel Yetkinlikler</h3>
          <ul>
            {personalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
