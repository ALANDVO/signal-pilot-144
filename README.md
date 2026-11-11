# signal-pilot-144

> Work in progress. This checkpoint may be incomplete or fail tests. See PLAN.md and STATUS.md before use.


**Domain**: AI/ML Developer Tools  
**Brief**: Reverse engineer anything with agents, from app behavior down to native binaries.

## Features

- **FastAPI Backend**: Provides health and agent endpoints for reverse engineering tasks.
- **React Frontend**: Simple UI to interact with the backend and visualize results.

## Installation

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. (Optional) Run tests:
   ```bash
   pytest
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install Node.js dependencies:
   ```bash
   pnpm install
   ```
   **Note**: If pnpm fails due to build script approvals, you may need to run `pnpm approve-builds --yes` in an interactive terminal, or adjust pnpm configuration. For local development, you can also use `npm install` and `npm start` if preferred.
3. (Optional) Run type check:
   ```bash
   pnpm run type-check
   ```
4. (Optional) Build:
   ```bash
   pnpm run build
   ```
5. (Optional) Start development server:
   ```bash
   pnpm run dev
   ```

## Usage

- Use the UI to trigger reverse engineering agents.
- View results and logs in the browser.

## Contact

Alan Vo — https://alanvo.net  |  X: https://x.com/alanvoasi

---
*Owned by the signal-pilot-144 project.*
Maintainer: Alan Vo <alanvo@gmail.com>
