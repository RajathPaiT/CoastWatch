import Link from "next/link";
import { Waves, MapPin, Camera, Users, ArrowRight, ShieldCheck } from "lucide-react";
export default function Home(){return <main>
  <section className="hero">
    <div className="hero-copy">
      <span className="hero-kicker">
        <span className="pulse-dot"/> COMMUNITY-POWERED COASTAL CARE</span>
      <h1>Our coast is<br/>
      <em>our responsibility.</em>
    </h1>
  <p>Spot pollution. Share what you see. Bring your community together to protect the places we all love.</p>
  <div className="hero-actions">
    <Link href="/dashboard" className="button button-primary">Explore dashboard <ArrowRight size={17}/>
    </Link>
  <Link href="/reports/new" className="button button-outline">Report pollution</Link>
</div>
<div className="hero-trust">
  <ShieldCheck size={17}/> Small actions. Shared impact. Healthier coastlines.</div>
</div>
<div className="hero-image">
  <div className="image-caption">
    <Waves size={18}/>
    <span>
      <b>Every coastline has a story.</b>
      <small>Help your community tell it.</small>
    </span>
</div>
</div>
</section>
<section className="how-section">
  <div className="section-heading">
    <span className="eyebrow">HOW COASTWATCH WORKS</span>
    <h2>Turn a concern into collective action.</h2>
    <p>Three simple steps can help make coastal pollution visible and actionable.</p>
  </div>
<div className="how-grid">
  <div className="how-card">
    <span className="how-number">01</span>
    <Camera/>
  <h3>Spot & report</h3>
  <p>Capture visible pollution and share its location, category, and details.</p>
</div>
<div className="how-card">
  <span className="how-number">02</span>
  <MapPin/>
<h3>See the bigger picture</h3>
<p>Explore community reports and identify areas that may need attention.</p>
</div>
<div className="how-card">
  <span className="how-number">03</span>
  <Users/>
<h3>Act together</h3>
<p>Find local cleanup activities and join people working for cleaner shores.</p>
</div>
</div>
</section>
<section className="home-banner">
  <div>
    <span className="eyebrow">YOUR COAST. YOUR COMMUNITY.</span>
    <h2>Be part of the change.</h2>
    <p>One thoughtful report can help start a meaningful local response.</p>
  </div>
<Link href="/reports/new" className="button button-light">Make a report <ArrowRight size={17}/>
</Link>
</section>
<footer className="footer">© 2026 CoastWatch · A community coastal-care prototype · Supporting SDG 14</footer>
</main>}
