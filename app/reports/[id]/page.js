"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCoastWatch } from "../../../context/CoastWatchContext";
import StatusBadge from "../../../components/StatusBadge";
export default function ReportDetail(){const {id}=useParams();
const {reports}=useCoastWatch();
const report=reports.find(r=>r.id===id);
if(!report)return <main className="page-shell">
  <h1>Report not found</h1>
  <Link href="/reports" className="text-link">Back to reports</Link>
</main>;
return <main className="page-shell narrow-shell">
  <Link href="/reports" className="back-link">← Back to reports</Link>
  <img className="detail-image" src={report.image} alt="Coastal report"/>
  <div className="detail-panel">
    <div className="card-topline">
      <span className="eyebrow">{report.id} · {report.category}</span>
      <StatusBadge>{report.status}</StatusBadge>
    </div>
  <h1>{report.title}</h1>
  <p className="muted">⌖ {report.location}</p>
  <div className="detail-facts">
    <span>
      <b>Reported by</b>{report.reporter}</span>
    <span>
      <b>Date</b>{report.date}</span>
    <span>
      <b>Severity</b>{report.severity}</span>
  </div>
<h3>What was observed</h3>
<p>{report.description}</p>
<div className="demo-note">Status and report information are sample application data. Reports are not verified by an authority.</div>
</div>
</main>}
