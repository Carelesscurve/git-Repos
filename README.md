# Local Git Quick Reference — Serve Locally

This repository is a simple static site with a Git cheat-sheet. You can serve it locally using either Node (npm) or Python.

Node (recommended if you have Node):

1. Start the site (uses `npx http-server`):

```bash
npm start
```

This runs `npx http-server . -p 8000` and serves the folder at http://localhost:8000

If you prefer to install the server globally:

```bash
npm i -g http-server
http-server . -p 8000
```

Python (no extra packages required):

```bash
python app.py
```

Or via npm script:

```bash
npm run start:py
```

Notes:
- `npx` will temporarily fetch `http-server` on first run if you don't have it installed.
- You can change the port by setting the `PORT` environment variable before running the Python server, e.g. `PORT=9000 python app.py` (POSIX) or `set PORT=9000 && python app.py` (Windows PowerShell).
Just for knowing some git and github commands
