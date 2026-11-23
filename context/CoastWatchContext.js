"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialReports, initialEvents } from "../data/dummyData";
const CoastWatchContext = createContext(null);
export function CoastWatchProvider({ children }) {
const [reports, setReports] = useState(initialReports);
const [events, setEvents] = useState(initialEvents);
const [joinedEvents, setJoinedEvents] = useState([]);
const [ready, setReady] = useState(false);
useEffect(() => {
try {
const saved = localStorage.getItem("coastwatch-state");
if (saved) {
const parsed = JSON.parse(saved);
if (parsed.reports) setReports(parsed.reports);
if (parsed.joinedEvents) setJoinedEvents(parsed.joinedEvents);
}
} catch (e) { console.error("Could not load saved demo data", e); }
setReady(true);
}, []);
useEffect(() => {
if (ready) localStorage.setItem("coastwatch-state", JSON.stringify({ reports, joinedEvents }));
}, [reports, joinedEvents, ready]);
function addReport(report) {
setReports(current => [{ ...report, id: `CW-${1043 + current.length - initialReports.length}`, status: "Open", date: new Date().toISOString().slice(0, 10), reporter: "You" }, ...current]);
}
function joinEvent(id) { setJoinedEvents(current => current.includes(id) ? current : [...current, id]);
}
function resetDemo() { setReports(initialReports);
setJoinedEvents([]);
localStorage.removeItem("coastwatch-state");
}
const value = useMemo(() => ({ reports, events, joinedEvents, addReport, joinEvent, resetDemo }), [reports, events, joinedEvents]);
return <CoastWatchContext.Provider value={value}>{children}</CoastWatchContext.Provider>;
}
export function useCoastWatch() {
const context = useContext(CoastWatchContext);
if (!context) throw new Error("useCoastWatch must be used inside CoastWatchProvider");
return context;
}
