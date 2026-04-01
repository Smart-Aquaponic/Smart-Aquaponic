export default function App() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:Arial,sans-serif;line-height:1.6;color:#1e293b;background:#fff}
        header{position:sticky;top:0;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);border-bottom:1px solid #e2e8f0;z-index:1000}
        .container{max-width:1100px;margin:auto;padding:0 24px}
        nav{display:flex;justify-content:space-between;align-items:center;padding:18px 0}
        nav a{text-decoration:none;color:#0f172a;margin-left:18px}
        .hero{background:linear-gradient(135deg,#065f46,#14b8a6);color:#fff;padding:90px 0}
        .hero-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center}
        .hero h1{font-size:52px;line-height:1.1;margin-bottom:18px}
        .hero p{font-size:18px;opacity:.95;margin-bottom:24px}
        .btn{display:inline-block;padding:14px 22px;border-radius:14px;text-decoration:none;font-weight:bold;transition:.3s}
        .btn-primary{background:#fff;color:#065f46}
        .btn-wa{background:#25D366;color:#fff;margin-left:10px}
        .dashboard{background:#fff;color:#0f172a;border-radius:24px;padding:24px;box-shadow:0 20px 50px rgba(0,0,0,.15);animation:float 4s ease-in-out infinite}
        .stats{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:16px}
        .stat{background:#f8fafc;padding:18px;border-radius:18px}
        section{padding:80px 0}
        .features,.pitch{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .card{padding:24px;border:1px solid #e2e8f0;border-radius:22px;box-shadow:0 8px 20px rgba(0,0,0,.06);transition:.3s;background:#fff}
        .card:hover{transform:translateY(-6px)}
        .img-box{border-radius:22px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.1)}
        .img-box img{width:100%;display:block}
        footer{background:#0f172a;color:#fff;text-align:center;padding:24px}
        @keyframes float{50%{transform:translateY(-8px)}}
        @media(max-width:900px){.hero-grid,.features,.pitch{grid-template-columns:1fr}.hero h1{font-size:38px}}
      `}</style>

      <header>
        <div className="container">
          <nav>
            <h2>Smart-Aquaponic</h2>
            <div>
              <a href="#fitur">Fitur</a>
              <a href="#pitch">Pitch</a>
              <a href="#kontak">Kontak</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Budidaya Cerdas Berbasis IoT untuk Panen Maksimal</h1>
            <p>Solusi startup agritech modern untuk monitoring sensor, automasi nutrisi, dan optimasi hasil panen berkelanjutan.</p>
            <a className="btn btn-primary" href="#pitch">Lihat Pitch Startup</a>
            <a className="btn btn-wa" href="https://wa.me/6282287487635?text=Halo%20Smart-Aquaponic,%20saya%20tertarik%20konsultasi%20sistem%20IoT" target="_blank" rel="noreferrer">Chat WhatsApp</a>
          </div>
          <div className="dashboard">
            <h3>Live IoT Dashboard</h3>
            <div className="stats">
              <div className="stat"><strong>pH</strong><br />6.8</div>
              <div className="stat"><strong>Suhu</strong><br />27°C</div>
              <div className="stat"><strong>Nutrisi</strong><br />Optimal</div>
              <div className="stat"><strong>Pompa</strong><br />ON</div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur">
        <div className="container">
          <h2 style={{ marginBottom: '28px' }}>Fitur Premium</h2>
          <div className="features">
            <div className="card">Monitoring real-time sensor pH, suhu, TDS, dan level air.</div>
            <div className="card">Automasi pompa, nutrisi, dan notifikasi WhatsApp.</div>
            <div className="card">Dashboard analitik untuk UMKM, greenhouse, dan sekolah.</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop" alt="Smart Aquaponic System" />
          </div>
        </div>
      </section>

      <section id="pitch">
        <div className="container">
          <h2 style={{ marginBottom: '28px' }}>Startup Pitch Highlights</h2>
          <div className="pitch">
            <div className="card"><strong>Problem</strong><br />Pembudidaya masih monitoring manual dan boros air.</div>
            <div className="card"><strong>Solution</strong><br />IoT + automasi aquaponic hemat air hingga 90%.</div>
            <div className="card"><strong>Business Model</strong><br />Penjualan perangkat, instalasi, subscription dashboard.</div>
          </div>
        </div>
      </section>

      <section id="kontak">
        <div className="container">
          <h2>Siap Kolaborasi?</h2>
          <p>Cocok untuk investor, dosen, lomba startup, dan customer UMKM agribisnis.</p>
          <br />
          <a className="btn btn-wa" href="https://wa.me/6282287487635?text=Halo%20Smart-Aquaponic,%20saya%20ingin%20demo%20pitch%20startup" target="_blank" rel="noreferrer">Hubungi via WhatsApp</a>
        </div>
      </section>

      <footer>© 2026 Smart-Aquaponic — Premium Startup Pitch Website</footer>
    </>
  );
}
