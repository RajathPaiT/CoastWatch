"use client";
import { useCoastWatch } from "../../context/CoastWatchContext";
import { FileWarning, CheckCircle2, Users, Waves } from "lucide-react";
import StatCard from "../../components/StatCard";
export default function Impact(){const {reports,joinedEvents}=useCoastWatch();
const resolved=reports.filter(r=>r.status==="Resolved").length;
const open=reports.filter(r=>r.status!=="Resolved").length;
const categories=["Plastic waste","Fishing waste","Dumping","Other","Oil or chemical spill","Construction debris"];
return <main className="page-shell">
  <div className="page-heading">
    <div>
      <span className="eyebrow">MEASURE WHAT MATTERS</span>
      <h1>Community impact</h1>
      <p>A transparent snapshot of activity recorded in this CoastWatch demo.</p>
    </div>
</div>
<div className="stats-grid">
  <StatCard label="Reports recorded" value={reports.length} note="All submitted demo reports" icon={FileWarning}/>
  <StatCard label="Reports resolved" value={resolved} note="Status marked resolved" icon={CheckCircle2} tone="green"/>
  <StatCard label="Still requiring follow-up" value={open} note="Open or cleanup planned" icon={Waves} tone="orange"/>
  <StatCard label="Your event registrations" value={joinedEvents.length} note="Volunteer sign-ups in this browser" icon={Users} tone="purple"/>
</div>
<section className="panel impact-panel">
  <div className="panel-heading">
    <div>
      <span className="eyebrow">REPORT BREAKDOWN</span>
      <h2>Reported pollution categories</h2>
    </div>
</div>{categories.map(c=>{const count=reports.filter(r=>r.category===c).length;return <div className="bar-row" key={c}>
<div className="bar-label">
  <span>{c}</span>
  <b>{count}</b>
</div>
<div className="bar-track">
  <div className="bar-fill" style={{width:`${reports.length?count/reports.length*100:0}%`}}/>
</div>
</div>})}<div className="demo-note">These figures are calculated from the prototype's local sample data. No actual kilograms of waste removed or environmental recovery are claimed.</div></section></main>}
