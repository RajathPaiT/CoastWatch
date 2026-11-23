# CoastWatch

Community-powered coastal pollution reporting and cleanup coordination platform, aligned primarily with **UN SDG 14: Life Below Water**.

## Tech Stack

- Next.js (App Router)
- React
- JavaScript
- CSS
- React Context API
- Local sample data
- Browser localStorage for demo persistence

## Getting Started

### Prerequisites
- Node.js (LTS)
- npm
- VS Code (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RajathPai/CoastWatch.git
   ```
2. Navigate into the project:
   ```bash
   cd CoastWatch
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## Application Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/dashboard` | Community dashboard |
| `/reports` | Search and filter pollution reports |
| `/reports/new` | Submit a demo pollution report |
| `/reports/CW-1042` | Example report details |
| `/events` | Browse and join demo cleanup events |
| `/impact` | Demo activity and impact breakdown |

## State Management and Data

- `context/CoastWatchContext.js` uses React Context API to share reports, events and event registrations.
- `data/dummyData.js` contains sample application data.
- Browser localStorage is used for demo persistence.

## Project Limitations

This is a frontend MVP prototype. It does not currently include:

- A backend or cloud database
- Real-time geolocation
- Government or authority integration
- Verified real-world cleanup events
- Persistent photo uploads

## Demo Data Disclaimer

Locations, people, pollution reports, event details and impact metrics are illustrative sample data. They should not be presented as verified environmental reports or confirmed real-world events.

## Team Contributions

**Member 1**
- Application setup
- Shared layout and navigation bar
- React Context provider
- Dashboard
- Reports state management
- GitHub integration

**Member 2**
- Landing page
- Pollution report form and details UI
- Cleanup event cards
- Impact dashboard
- Responsive design and documentation

**Both Members**
- User research and wireframing
- Pull request reviews
- Testing and debugging
- Final presentation and demonstration

## Commit Message Convention

We use descriptive commit messages to track development:

- `feat: add coastal dashboard layout`
- `feat: implement report submission flow`
- `feat: add cleanup event registration`
- `feat: add impact summary`
- `docs: add design system and setup guide`
- `fix: improve mobile report cards`

---

**CoastWatch — Together for Cleaner Coasts.**
