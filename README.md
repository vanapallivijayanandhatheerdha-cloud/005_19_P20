# Industrial Pollution Incident Reporting, Classification, Routing & Handler Management System

A responsive MERN application implementing report submission → validation → classification → routing → handler assignment → status tracking → resolution → analytics.

## Stack
React + Vite, React Router, Axios, Recharts; Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs.

## Requirements
Node.js 18+, MongoDB local or MongoDB Atlas.

## Run
1. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Copy `client/.env.example` to `client/.env`.
3. `cd server && npm install && npm run seed && npm run dev`
4. In a second terminal: `cd client && npm install && npm run dev`
5. Open http://localhost:5173

## Demo accounts
Admin: `admin@pollution.local` / `Admin@123`
Reporter: `user@pollution.local` / `Admin@123`

Handlers are seeded in the database. A handler account can be added through MongoDB or extended through the admin API.

## Key workflow
A submitted report is validated by the API, classified using description/urgency rules, routed using category/zone/availability/capacity scoring, persisted to MongoDB, and recorded in StatusHistory.

## Routing logic
Eligible handlers must be available and below capacity. Matching category and zone increase routing score; remaining capacity and active status provide additional score. If no eligible handler exists, the report is escalated to the fallback queue. Queue ordering should prioritize CRITICAL, HIGH, MEDIUM, LOW, then submission time.

## Test cases
1 valid submission; 2 missing description; 3 invalid zone; 4 invalid relevant code; 5 duplicate ID; 6 classification; 7 priority classification; 8 handler assignment; 9 capacity; 10 fallback escalation; 11 status update; 12 resolution; 13 analytics persistence; 14 protected API; 15 responsive layout.

## Note about assignment wording
The supplied assignment mentions Flask + SQLite in one section while the overall requirement requests MERN. This implementation preserves the requested workflow using Node/Express/MongoDB.
