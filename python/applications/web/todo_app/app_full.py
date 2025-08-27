"""
Simple Todo Web App (single file)
---------------------------------
▶ Features
- Add, edit, toggle done, and delete tasks
- SQLite persistence (tasks.db)
- Minimal responsive UI with Tailwind CDN

▶ How to run
1) pip install flask
2) python app.py
3) Open http://127.0.0.1:5000
"""
from __future__ import annotations
from flask import Flask, request, redirect, url_for, render_template_string, abort
import sqlite3
from contextlib import closing
from pathlib import Path

APP_TITLE = "Todo App"
DB_PATH = Path("tasks.db")

app = Flask(__name__)

SCHEMA_SQL = """
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
"""

def get_db_connection() -> sqlite3.Connection:
  conn = sqlite3.connect(DB_PATH)
  conn.row_factory = sqlite3.Row
  return conn

# Initialize DB
with closing(get_db_connection()) as conn:
  conn.executescript(SCHEMA_SQL)
  conn.commit()

BASE_HTML = """
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{ title }}</title>
  <script>
    // Simple confirm helpers
    function confirmDelete(title){
      return confirm('Delete task: "' + title + '" ?');
    }
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
  <div class="max-w-2xl mx-auto p-6">
    <header class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">📝 {{ title }}</h1>
      <a href="{{ url_for('index') }}" class="text-sm text-blue-600 hover:underline">Refresh</a>
    </header>

    <section class="mb-6">
      <form action="{{ url_for('add') }}" method="post" class="flex gap-2">
        <input required name="title" placeholder="Add a new task..." class="flex-1 rounded-xl border px-3 py-2 focus:outline-none focus:ring" />
        <button class="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">Add</button>
      </form>
    </section>

    <section class="bg-white shadow-sm rounded-2xl divide-y">
      {% if tasks %}
        {% for t in tasks %}
          <div class="flex items-center gap-3 p-3">
            <form action="{{ url_for('toggle', task_id=t.id) }}" method="post">
              <button title="Toggle done" class="w-6 h-6 rounded border flex items-center justify-center">
                {% if t.done %}
                  ✓
                {% endif %}
              </button>
            </form>

            <form action="{{ url_for('edit', task_id=t.id) }}" method="post" class="flex-1">
              <input name="title" value="{{ t.title }}" class="w-full bg-transparent focus:bg-gray-50 px-2 py-1 rounded outline-none {{ 'line-through text-gray-400' if t.done else '' }}" />
            </form>

            <form action="{{ url_for('delete', task_id=t.id) }}" method="post" onsubmit="return confirmDelete('{{ t.title|e }}')">
              <button class="px-3 py-1 text-sm rounded-xl border hover:bg-red-50 hover:border-red-400">Delete</button>
            </form>
          </div>
        {% endfor %}
      {% else %}
        <div class="p-6 text-center text-gray-500">No tasks yet. Add your first one above 👆</div>
      {% endif %}
    </section>

    <footer class="text-xs text-gray-400 mt-6 text-center">SQLite file: tasks.db · {{ count }} task{{ '' if count == 1 else 's' }}</footer>
  </div>
</body>
</html>
"""

@app.get("/")
def index():
  with closing(get_db_connection()) as conn:
    cur = conn.execute("SELECT id, title, done, created_at FROM tasks ORDER BY done, id DESC")
    tasks = cur.fetchall()
  return render_template_string(
    BASE_HTML,
    title=APP_TITLE,
    tasks=tasks,
    count=len(tasks),
  )

@app.post("/add")
def add():
  title = (request.form.get("title") or "").strip()
  if not title:
    return redirect(url_for("index"))
  with closing(get_db_connection()) as conn:
    conn.execute("INSERT INTO tasks(title) VALUES (?)", (title,))
    conn.commit()
  return redirect(url_for("index"))

@app.post("/toggle/<int:task_id>")
def toggle(task_id: int):
  with closing(get_db_connection()) as conn:
    cur = conn.execute("SELECT done FROM tasks WHERE id=?", (task_id,))
    row = cur.fetchone()
    if not row:
      abort(404)
    new_done = 0 if row["done"] else 1
    conn.execute("UPDATE tasks SET done=? WHERE id=?", (new_done, task_id))
    conn.commit()
  return redirect(url_for("index"))

@app.post("/edit/<int:task_id>")
def edit(task_id: int):
  title = (request.form.get("title") or "").strip()
  if not title:
    return redirect(url_for("index"))
  with closing(get_db_connection()) as conn:
    cur = conn.execute("SELECT id FROM tasks WHERE id=?", (task_id,))
    if not cur.fetchone():
      abort(404)
    conn.execute("UPDATE tasks SET title=? WHERE id=?", (title, task_id))
    conn.commit()
  return redirect(url_for("index"))

@app.post("/delete/<int:task_id>")
def delete(task_id: int):
  with closing(get_db_connection()) as conn:
    conn.execute("DELETE FROM tasks WHERE id=?", (task_id,))
    conn.commit()
  return redirect(url_for("index"))

if __name__ == "__main__":
  # For development only. Use a real WSGI server (e.g., gunicorn) for production.
  app.run(debug=True)
