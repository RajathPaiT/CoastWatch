"use client";
import { useCoastWatch } from "../../context/CoastWatchContext";
import EventCard from "../../components/EventCard";
export default function Events(){const {events,joinedEvents}=useCoastWatch();
return <main className="page-shell">
  <div className="page-heading">
    <div>
      <span className="eyebrow">TAKE PART LOCALLY</span>
      <h1>Cleanup & community events</h1>
      <p>Meet people who care about healthier coastlines.</p>
    </div>
  <div className="joined-counter">{joinedEvents.length} event{joinedEvents.length===1?"":"s"} joined</div>
</div>
<div className="event-grid">{events.map(e=>
  <EventCard key={e.id} event={e}/>)}</div>
<p className="form-footnote">Events and organisers shown here are illustrative demo data, not confirmed real-world events.</p>
</main>}
