function addTask() {
    let task = document.getElementById("taskInput").value;

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
        this.remove();
    };

    document.getElementById("list").appendChild(li);
}