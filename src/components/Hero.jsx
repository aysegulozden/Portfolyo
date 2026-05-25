function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-tag">Junior Frontend Developer</div>
      <h1 className="hero-title">
        Merhaba, ben <span className="hero-highlight">Ayşegül Özden</span>.
      </h1>
      <p className="hero-sub">
        React.js ve TypeScript ile kullanıcı odaklı, responsive web arayüzleri
        geliştiriyorum. Component bazlı mimari, REST API entegrasyonu ve clean
        code prensipleri benim için önemli.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          Projeleri Gör
        </a>
        <a href="#contact" className="btn btn-ghost">
          İletişime Geç
        </a>
      </div>
    </section>
  );
}

export default Hero;
