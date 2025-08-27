import mysql.connector
from config import DB_CONFIG

def get_conn():
  return mysql.connector.connect(**DB_CONFIG)

def get_tasks():
  conn = get_conn()
  cur = conn.cursor(dictionary=True)
  cur.execute("SELECT * FROM tasks ORDER BY done, id DESC")
  tasks = cur.fetchall()
  conn.close()
  return tasks

def add_task(title):
  conn = get_conn()
  cur = conn.cursor()
  cur.execute("INSERT INTO tasks (title, done) VALUES (%s, %s)", (title, 0))
  conn.commit()
  conn.close()

def toggle_task(task_id):
  conn = get_conn()
  cur = conn.cursor()
  cur.execute("UPDATE tasks SET done = NOT done WHERE id=%s", (task_id,))
  conn.commit()
  conn.close()

def update_task(task_id, title):
  conn = get_conn()
  cur = conn.cursor()
  cur.execute("UPDATE tasks SET title=%s WHERE id=%s", (title, task_id))
  conn.commit()
  conn.close()

def delete_task(task_id):
  conn = get_conn()
  cur = conn.cursor()
  cur.execute("DELETE FROM tasks WHERE id=%s", (task_id,))
  conn.commit()
  conn.close()
