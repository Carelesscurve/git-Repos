"""
Simple Python static file server for the repository.

Run:
  python app.py

Or via npm (on systems with Python available):
  npm run start:py

This uses the standard library http.server and serves the current directory.
"""
import http.server
import socketserver
import os

PORT = int(os.environ.get("PORT", 8000))

Handler = http.server.SimpleHTTPRequestHandler

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving {os.getcwd()} at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped")
