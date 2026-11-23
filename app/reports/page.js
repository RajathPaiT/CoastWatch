"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCoastWatch } from "../../context/CoastWatchContext";
import ReportCard from "../../components/ReportCard";
export default function Reports(){const {reports}=useCoastWatch();
const [query,setQuery]=useState("");
const [status,setStatus]=useState("All");
const filtered=useMemo(()=>reports.filter(r=>(status==="All"||r.status===status)&&`${r.title} ${r.location} ${r.category}`.toLowerCase().includes(query.toLowerCase())),[reports,query,status]);
return <main className="page-shell">
  <div className="page-heading">
    <div>
      <span className="eyebrow">COMMUNITY REPORTS</span>
      <h1>Pollution reports</h1>
      <p>Explore incidents shared by the CoastWatch community.</p>
    </div>
  <Link href="/reports/new" className="button button-primary">＋ Report pollution</Link>
</div>
<div className="filter-bar">
  <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search reports, places or categories..."/>
    <select value={status} onChange={e=>setStatus(e.target.value)}>
      <option>All</option>
      <option>Open</option>
      <option>Cleanup planned</option>
      <option>Resolved</option>
    </select>
</div>
<div className="results-line">Showing {filtered.length} of {reports.length} reports</div>
<div className="reports-grid">{filtered.map(r=>
  <ReportCard key={r.id} report={r}/>)}</div>{filtered.length===0&&<div className="empty-state">
  <h3>No reports found</h3>
  <p>Try another search or status filter.</p>
</div>}</main>}
