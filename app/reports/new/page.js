"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCoastWatch } from "../../../context/CoastWatchContext";
export default function NewReport(){const {addReport}=useCoastWatch();
const router=useRouter();
const [form,setForm]=useState({title:"",location:"",category:"Plastic waste",severity:"Medium",description:""});
const [error,setError]=useState("");
function update(e){setForm({...form,[e.target.name]:e.target.value});
}function submit(e){e.preventDefault();
if(!form.title.trim()||!form.location.trim()||!form.description.trim()){setError("Please complete all required fields.");
return;
}addReport({...form,image:"https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=900"});
router.push("/reports");
}return <main className="page-shell narrow-shell">
  <Link href="/reports" className="back-link">← Back to reports</Link>
  <div className="page-heading">
    <div>
      <span className="eyebrow">HELP PROTECT OUR COAST</span>
      <h1>Report pollution</h1>
      <p>Share what you observed so your community can understand the issue.</p>
    </div>
</div>
<form className="form-panel" onSubmit={submit}>
  <label>Report title *<input name="title" value={form.title} onChange={update} placeholder="e.g. Plastic waste near the pier"/>
  </label>
<label>Location *<input name="location" value={form.location} onChange={update} placeholder="Beach or coastal area, town"/>
</label>
<div className="form-row">
  <label>Pollution category<select name="category" value={form.category} onChange={update}>
      <option>Plastic waste</option>
      <option>Fishing waste</option>
      <option>Dumping</option>
      <option>Oil or chemical spill</option>
      <option>Construction debris</option>
      <option>Other</option>
    </select>
</label>
<label>Severity<select name="severity" value={form.severity} onChange={update}>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select>
</label>
</div>
<label>Description *<textarea name="description" value={form.description} onChange={update} rows="5" placeholder="Describe what you saw, approximate quantity, and any immediate concerns..."/>
</label>
<div className="upload-placeholder">Photo upload is represented by sample imagery in this milestone prototype.</div>{error&&<p className="form-error">{error}</p>}<div className="form-actions">
  <Link href="/reports" className="button button-outline">Cancel</Link>
  <button className="button button-primary" type="submit">Submit report →</button>
</div>
<p className="form-footnote">Prototype notice: this report is saved in this browser only. It is not sent to an authority.</p>
</form>
</main>}
