"use client";
import { MapPin, CalendarDays, Clock, Users } from "lucide-react";
import { useCoastWatch } from "../context/CoastWatchContext";
export default function EventCard({ event }) { const {joinedEvents,joinEvent}=useCoastWatch();
const joined=joinedEvents.includes(event.id);
return <article className="event-card">
  <img src={event.image} alt="Coastal volunteer activity"/>
  <div className="event-body">
    <span className="eyebrow">{event.category}</span>
    <h3>{event.title}</h3>
    <p>{event.description}</p>
    <div className="event-meta">
      <span>
        <MapPin size={15}/>{event.location}</span>
      <span>
        <CalendarDays size={15}/>{new Date(event.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</span>
      <span>
        <Clock size={15}/>{event.time}</span>
      <span>
        <Users size={15}/>{event.volunteers+(joined?1:0)} / {event.capacity} volunteers</span>
    </div>
  <button className={joined?"button button-joined":"button button-primary"} onClick={()=>joinEvent(event.id)} disabled={joined}>{joined?"✓ You're registered":"Join this cleanup"}</button>
</div>
</article>;
}
