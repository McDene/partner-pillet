// Variation 1 — Éditoriale & typographique (page d'accueil complète)
// Serif d'affichage (Spectral), beaucoup de blanc, usage minimal de la photo.
function Variation1() {
  const navy = 'var(--navy)', ink = 'var(--ink)', inkSoft = 'var(--ink-soft)', sand = 'var(--sand)';
  const W = 1440, PAD = 96;
  const navLinks = ['Approche', 'Domaines', 'Line Pillet', 'Contact'];
  const eyebrow = (txt, color = sand) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
      <span style={{ width: 38, height: 1, background: color }} />
      <span style={{ fontSize: 13.5, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color, whiteSpace: 'nowrap' }}>{txt}</span>
    </div>
  );

  const domaines = [
    { n: '01', t: 'Transitions stratégiques', d: 'Clarifier les choix, sécuriser les décisions et mobiliser les acteurs autour d’une nouvelle trajectoire.' },
    { n: '02', t: 'Transformation organisationnelle', d: 'Faire évoluer les structures, les responsabilités et les modes de fonctionnement pour soutenir la croissance.' },
    { n: '03', t: 'Transmission & gouvernance', d: 'Préparer les étapes sensibles de succession, d’association ou de réorganisation.' },
    { n: '04', t: 'Direction stratégique externalisée', d: 'Bénéficier d’un regard externe et d’un accompagnement régulier dans les décisions stratégiques.' },
  ];
  const defis = ['les décisions deviennent plus complexes', 'les responsabilités se chevauchent', 'les équipes perdent en visibilité', 'la gouvernance atteint ses limites', 'les projets avancent plus lentement', 'l’organisation peine à suivre les ambitions'];
  const approche = [
    { k: 'Clarifier', d: 'Comprendre les enjeux réels et identifier les priorités.' },
    { k: 'Aligner', d: 'Créer une cohérence entre vision, gouvernance, leadership et organisation.' },
    { k: 'Activer', d: 'Transformer les décisions en actions.' },
    { k: 'Ancrer', d: 'Faire vivre les changements dans la durée.' },
  ];
  const pourquoi = [
    { t: 'Une double expertise stratégique et humaine', d: 'Nous intervenons à la fois sur les enjeux de performance et sur les conditions humaines qui permettent leur réussite.' },
    { t: 'Une lecture systémique', d: 'Nous analysons les interactions entre stratégie, gouvernance, organisation et leadership.' },
    { t: 'Un interlocuteur unique', d: 'Fondatrice et Managing Partner de Pillet & Partners, j’accompagne personnellement chaque mission.' },
    { t: 'La force d’un collectif d’experts', d: 'Selon les besoins, je mobilise un réseau de partenaires spécialisés afin d’apporter les compétences les plus adaptées à chaque situation.' },
  ];
  const pourQui = ['Dirigeants de PME', 'Fondateurs et entrepreneurs', 'Associés', 'Comités de direction', 'Entreprises en croissance', 'Organisations en transformation'];

  return (
    <div className="v1" style={{ width: W, position: 'relative' }} data-screen-label="V1 Éditoriale">
      {/* NAV */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '34px 96px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="brand-mark" style={{ width: 46, height: 46, backgroundSize: '76px 76px' }} />
          <span className="serif" style={{ fontSize: 21, fontWeight: 500, letterSpacing: '.14em', color: navy }}>PILLET&nbsp;&amp;&nbsp;PARTNERS</span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {navLinks.map((l) => (<a key={l} href="#" style={{ fontSize: 15, fontWeight: 500, color: inkSoft }}>{l}</a>))}
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: '92px 96px 0' }}>
        {eyebrow('Conseil stratégique · Suisse romande')}
        <h1 className="serif" style={{ margin: 0, fontSize: 74, lineHeight: 1.06, fontWeight: 400, letterSpacing: '-0.012em', color: navy, maxWidth: 1120, textWrap: 'balance' }}>
          Accompagner les dirigeants dans les <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>étapes décisives</em> de leur entreprise
        </h1>
        <p style={{ marginTop: 36, marginBottom: 0, fontSize: 21, lineHeight: 1.62, color: inkSoft, maxWidth: 760 }}>
          Croissance, transformation, transmission, repositionnement ou évolution de la gouvernance : nous aidons les dirigeant·e·s et leurs équipes à aligner stratégie, organisation et dynamiques humaines pour transformer leurs ambitions en résultats durables.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 46 }}>
          <a href="#" className="v1-cta1" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--blue)', color: '#fff', fontSize: 16, fontWeight: 600, padding: '17px 30px', borderRadius: 2 }}>Planifier un premier échange confidentiel</a>
          <a href="#" className="v1-cta2" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: ink, fontSize: 16, fontWeight: 600, padding: '17px 26px', borderRadius: 2, border: '1px solid rgba(26,39,51,.22)' }}>
            Demander une offre d’accompagnement<span style={{ fontSize: 18, lineHeight: 1, color: sand }}>→</span>
          </a>
        </div>
      </section>

      {/* BANDEAU SIGNATURE — coupe de tronc, clin d'œil au logo */}
      <section style={{ marginTop: 96, position: 'relative', width: W, height: 468, overflow: 'hidden' }}>
        <img src="assets/wood-rings.png" alt="Coupe d’un tronc — les cernes de croissance" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,58,92,.88) 0%, rgba(14,58,92,.62) 40%, rgba(14,58,92,.12) 72%, rgba(14,58,92,0) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '0 96px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 820 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 26 }}>
            <span style={{ width: 38, height: 1, background: 'var(--sand-2)' }} />
            <span style={{ fontSize: 13.5, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--sand-2)' }}>Notre signature</span>
          </div>
          <p className="serif" style={{ margin: 0, fontSize: 40, lineHeight: 1.28, fontWeight: 400, color: '#fff', maxWidth: 660 }}>
            Comme les <em style={{ fontStyle: 'italic', color: 'var(--sand-2)' }}>cernes d’un arbre</em>, chaque décision inscrit l’entreprise dans la durée.
          </p>
        </div>
      </section>

      {/* DÉFIS */}
      <section style={{ padding: '92px 96px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            {eyebrow('Le contexte')}
            <h2 className="serif" style={{ margin: 0, fontSize: 42, lineHeight: 1.12, fontWeight: 400, color: navy, letterSpacing: '-.01em' }}>Les défis que rencontrent les entreprises en croissance</h2>
            <p style={{ margin: '28px 0 0', fontSize: 18.5, lineHeight: 1.6, color: inkSoft, maxWidth: 520 }}>Lorsque l’entreprise évolue, les enjeux se multiplient. Ces situations sont naturelles ; elles deviennent problématiques lorsqu’elles créent un <em className="serif" style={{ fontStyle: 'italic', color: navy }}>écart entre la vision des dirigeants et la réalité du terrain.</em></p>
          </div>
          <div>
            {defis.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 22, alignItems: 'baseline', padding: '18px 0', borderTop: '1px solid rgba(26,39,51,.13)' }}>
                <span className="serif" style={{ fontSize: 16, color: sand, fontStyle: 'italic', flex: '0 0 auto', width: 22 }}>{String(i + 1).padStart(2, '0').slice(1)}</span>
                <span style={{ fontSize: 19, lineHeight: 1.4, color: ink }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="serif" style={{ margin: '56px 0 0', fontSize: 25, lineHeight: 1.5, fontWeight: 400, color: navy, maxWidth: 900, fontStyle: 'italic' }}>
          Chez Pillet &amp; Partners, nous accompagnons les entreprises pour franchir ces étapes avec clarté, cohérence et engagement collectif.
        </p>
      </section>

      {/* DOMAINES */}
      <section style={{ padding: '96px 96px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 30 }}>
          <h2 className="serif" style={{ margin: 0, fontSize: 38, fontWeight: 400, color: navy, letterSpacing: '-.01em' }}>Nos domaines d’accompagnement</h2>
          <span style={{ fontSize: 13.5, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: sand }}>Quatre expertises</span>
        </div>
        {domaines.map((s, i) => (
          <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '92px 1fr 26px', alignItems: 'center', gap: 30, padding: '30px 4px', borderTop: '1px solid rgba(26,39,51,.13)', ...(i === domaines.length - 1 ? { borderBottom: '1px solid rgba(26,39,51,.13)' } : {}) }}>
            <span className="serif" style={{ fontSize: 30, color: sand, fontWeight: 400 }}>{s.n}</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 28 }}>
              <h3 className="serif" style={{ margin: 0, fontSize: 27, fontWeight: 400, color: ink, flex: '0 0 360px' }}>{s.t}</h3>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.5, color: inkSoft, maxWidth: 520 }}>{s.d}</p>
            </div>
            <span style={{ fontSize: 20, color: 'var(--blue)' }}>→</span>
          </div>
        ))}
      </section>

      {/* APPROCHE */}
      <section style={{ padding: '100px 96px 0' }}>
        {eyebrow('Notre approche')}
        <h2 className="serif" style={{ margin: 0, fontSize: 46, fontWeight: 400, color: navy, letterSpacing: '-.015em' }}>Clarifier. <span style={{ color: 'var(--teal)' }}>Aligner.</span> Activer. <span style={{ color: sand }}>Ancrer.</span></h2>
        <p style={{ margin: '24px 0 56px', fontSize: 18.5, lineHeight: 1.6, color: inkSoft, maxWidth: 680 }}>Une méthode structurée pour transformer les intentions stratégiques en changements concrets et durables.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36 }}>
          {approche.map((a, i) => (
            <div key={a.k} style={{ borderTop: `2px solid ${navy}`, paddingTop: 22 }}>
              <div className="serif" style={{ fontSize: 15, fontStyle: 'italic', color: sand, marginBottom: 14 }}>Étape {i + 1}</div>
              <h3 className="serif" style={{ margin: 0, fontSize: 26, fontWeight: 400, color: navy }}>{a.k}</h3>
              <p style={{ margin: '12px 0 0', fontSize: 16, lineHeight: 1.55, color: inkSoft }}>{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI */}
      <section style={{ padding: '100px 96px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'start' }}>
          <div>
            {eyebrow('Pourquoi nous')}
            <h2 className="serif" style={{ margin: 0, fontSize: 42, lineHeight: 1.12, fontWeight: 400, color: navy, letterSpacing: '-.01em' }}>Pourquoi Pillet &amp; Partners ?</h2>
            <figure style={{ margin: '40px 0 0' }}>
              <div style={{ overflow: 'hidden', borderRadius: 3, height: 440 }}>
                <img src="assets/line-pillet.jpg" alt="Line Pillet, fondatrice & Managing Partner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%' }} />
              </div>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 18 }}>
                <span style={{ width: 26, height: 1, background: sand }} />
                <span style={{ fontSize: 16, color: ink }}><span className="serif" style={{ fontStyle: 'italic' }}>Line Pillet</span> — Fondatrice &amp; Managing Partner</span>
              </figcaption>
            </figure>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px 56px' }}>
            {pourquoi.map((p) => (
              <div key={p.t}>
                <h3 className="serif" style={{ margin: 0, fontSize: 22, fontWeight: 500, color: ink, lineHeight: 1.25 }}>{p.t}</h3>
                <p style={{ margin: '12px 0 0', fontSize: 16.5, lineHeight: 1.55, color: inkSoft }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ padding: '100px 96px 0' }}>
        {eyebrow('Pour qui ?')}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, maxWidth: 1040 }}>
          {pourQui.map((p) => (
            <span key={p} className="serif" style={{ fontSize: 22, color: navy, padding: '12px 26px', border: '1px solid rgba(26,39,51,.2)', borderRadius: 999 }}>{p}</span>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ margin: '110px 96px 96px', background: 'var(--paper)', borderRadius: 4, padding: '72px 80px', textAlign: 'center' }}>
        <h2 className="serif" style={{ margin: 0, fontSize: 48, fontWeight: 400, color: navy, letterSpacing: '-.015em' }}>Vous préparez une étape décisive ?</h2>
        <p style={{ margin: '20px auto 0', fontSize: 19, lineHeight: 1.6, color: inkSoft, maxWidth: 620 }}>Parlons-en. Un premier échange permet souvent de clarifier rapidement les enjeux et les options possibles.</p>
        <a href="#" className="v1-cta1" style={{ display: 'inline-flex', alignItems: 'center', marginTop: 36, background: 'var(--blue)', color: '#fff', fontSize: 16, fontWeight: 600, padding: '18px 34px', borderRadius: 2 }}>Planifier un entretien confidentiel</a>
      </section>
    </div>
  );
}
window.Variation1 = Variation1;
