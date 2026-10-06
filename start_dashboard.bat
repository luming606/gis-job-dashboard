@echo off
REM GIS Job Dashboard - local launcher
REM Starts API (port 3111) + web dev server (port 5173), then opens browser.
REM PostgreSQL service (postgresql-x64-16) must be running (auto-start by default).

cd /d E:\coding\zcode\projects\gis-job-dashboard\server
start "GIS-Job-Dashboard API (keep this window open)" cmd /k "node index.js"

cd /d E:\coding\zcode\projects\gis-job-dashboard\web
start "GIS-Job-Dashboard Web (keep this window open)" cmd /k "npm run dev"

timeout /t 6 >nul
start http://localhost:5173
echo Dashboard starting in your browser. Close the two server windows to stop it.
pause
