import Link from "next/link";
import StatusBadge from "./StatusBadge";
export default function ReportCard({ report }) { return <Link href={`/reports/${report.id}`} className="report-card">
  <img src={report.image} alt="Coastal pollution report"/>
  <div className="report-content">
    <div className="card-topline">
      <span className="eyebrow">{report.id} · {report.category}</span>
      <StatusBadge>{report.status}</StatusBadge>
    </div>
  <h3>{report.title}</h3>
  <p className="muted">
    <span>⌖</span> {report.location}</p>
  <div className="report-bottom">
    <span>{new Date(report.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</span>
    <span className={`severity ${report.severity.toLowerCase()}`}>{report.severity} priority</span>
  </div>
</div>
</Link>;
}
