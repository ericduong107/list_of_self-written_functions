from flask import Flask, render_template, request, redirect, url_for
from models import get_tasks, add_task, toggle_task, update_task, delete_task

app = Flask(__name__)

# BUG: Đã chạy đƯợc nhưng khi mở lên local thì có rất nhiều lỗi.
@app.route("/")
def index():
    tasks = get_tasks()
    return render_template("index.html", tasks=tasks)

@app.post("/add")
def add():
    add_task(request.form["title"])
    return redirect(url_for("index"))

@app.post("/toggle/<int:task_id>")
def toggle(task_id):
    toggle_task(task_id)
    return redirect(url_for("index"))

@app.post("/edit/<int:task_id>")
def edit(task_id):
    update_task(task_id, request.form["title"])
    return redirect(url_for("index"))

@app.post("/delete/<int:task_id>")
def delete(task_id):
    delete_task(task_id)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
