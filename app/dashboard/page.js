"use client";
import Link from "next/link";
import { useCoastWatch } from "../../context/CoastWatchContext";
import StatCard from "../../components/StatCard";
import ReportCard from "../../components/ReportCard";
import { FileWarning, Waves, Users, CheckCircle2, ArrowRight, Plus } from "lucide-react";
export default function Dashboard(){const {reports,events,joinedEvents}=useCoastWatch();
const resolved=reports.filter(r=>r.status==="Resolved").length;
return <main className="page-shell">
  <div className="page-heading">
    <div>
      <span className="eyebrow">COMMUNITY OVERVIEW</span>
      <h1>Coastal dashboard</h1>
      <p>Here's what's happening across your coastal community.</p>
    </div>
  <Link className="button button-primary" href="/reports/new">
    <Plus size={17}/> New report</Link>
</div>
<div className="stats-grid">
  <StatCard label="Total reports" value={reports.length} note="Community-submitted incidents" icon={FileWarning}/>
  <StatCard label="Open reports" value={reports.filter(r=>r.status!=="Resolved").length} note="Awaiting follow-up" icon={Waves} tone="orange"/>
    <StatCard label="Resolved reports" value={resolved} note="Marked resolved in this demo" icon={CheckCircle2} tone="green"/>
    <StatCard label="Volunteer sign-ups" value={joinedEvents.length} note="Your event registrations" icon={Users} tone="purple"/>
  </div>
<div className="dashboard-grid">
  <section className="panel">
    <div className="panel-heading">
      <div>
        <span className="eyebrow">LATEST ACTIVITY</span>
        <h2>Recent reports</h2>
      </div>
    <Link href="/reports" className="text-link">View all <ArrowRight size={15}/>
    </Link>
</div>
<div className="report-list">{reports.slice(0,3).map(r=>
  <ReportCard key={r.id} report={r}/>)}</div>
</section>
<aside className="panel side-panel">
  <span className="eyebrow">GET INVOLVED</span>
  <h2>Cleaner shores start together.</h2>
  <p>Join a local activity and turn awareness into action.</p>
  <div className="mini-event">
    <div className="mini-date">
      <b>29</b>
      <small>NOV</small>
    </div>
  <div>
    <b>{events[0].title}</b>
    <small>{events[0].location}</small>
  </div>
</div>
<Link href="/events" className="button button-primary full-button">Explore cleanup events <ArrowRight size={16}/>
</Link>
<div className="demo-note">Demo data · Sample locations and activity are illustrative.</div>
</aside>
</div>
</main>}
