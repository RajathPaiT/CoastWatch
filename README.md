# CoastWatch

Community-powered coastal pollution reporting and cleanup coordination prototype, aligned primarily with UN SDG 14: Life Below Water.

## Tech stack
- Next.js App Router
- React
- JavaScript
- CSS
- React Context API
- Local sample data + browser localStorage for demo persistence

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Pages
- `/` — Landing page
- `/dashboard` — Community dashboard
- `/reports` — Search/filter pollution reports
- `/reports/new` — Submit a demo report
- `/reports/CW-1042` — Example report details
- `/events` — Browse and join demo cleanup events
- `/impact` — Demo activity breakdown

## State and data
`context/CoastWatchContext.js` uses React Context to share reports, events and event registrations. `data/dummyData.js` contains seed data. Demo changes are saved in browser localStorage. No backend, real geolocation, authority integration, verified event listings, or real photo upload is implemented in this sprint MVP.

## Important demo-data note
Locations, people, reports, event details and metrics are illustrative sample data. Do not present them as verified reports or confirmed real-world events.

## Inspiration
The team should select and cite an actual reference product from Product Hunt, Antler India or Y Combinator, as required by the course brief. Inspiration must not become a copy of that product. Record your own analysis and cite the reference in the presentation.

## Suggested two-person work split
- Member 1: app setup, shared layout/navbar, Context provider, dashboard, reports state and GitHub integration.
- Member 2: landing page, report form/detail UI, event cards, impact page, responsive QA and documentation.
- Both: user interviews, wireframe, review each other's pull requests, test the MVP and prepare the demo.

## Suggested commit style
- `feat: add coastal dashboard layout`
- `feat: implement report submission flow`
- `feat: add cleanup event registration`
- `feat: add impact summary`
- `docs: add design system and setup guide`
- `fix: improve mobile report cards`
