const input = document.getElementById("input");

const button = document.getElementById("button");
let index = 0;
button.addEventListener("click", (e) =>{
  addData(input.value, "2024-12-09", "to-do", "in-progress", "done", "blocked", "./trash.svg")
  index+=1;
  console.log(index);
});
const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "to-do",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];
function addTaskList(title, color, count, id) {
  const taskContainer = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  titleDiv.appendChild(cirlce);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  titleDiv.appendChild(h2);
  const p = document.createElement("p");
  p.innerText = count;
  p.setAttribute("class", "count");
  titleDiv.appendChild(p);
  taskContainer.appendChild(todoList);
}
containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});
let todoData = [
  {
    title: "Huvtssaa beldeh",
    dates: "2024-12-09",
    state: "to-do",
    state1: "in-progress",
    state2: "done",
    state3: "blocked",
  },
  // {
  //   title: "Shine jildee yvah",
  //   dates: "2024-12-09",
  //   state: "to-do",
  //   state1: "in-progress",
  //   state2: "done",
  //   state3: "blocked",
  // },
  // {
  //   title: "Geree tseverleh",
  //   dates: "2024-12-09",
  //   state: "in-progress",
  //   state1: "to-do",
  //   state2: "done",
  //   state3: "blocked",
  // },
  // {
  //   title: "Huvtssaa beldeh",
  //   dates: "2024-12-09",
  //   state: "in-progress",
  //   state1: "to-do",
  //   state2: "done",
  //   state3: "blocked",
  // },
  // {
  //   title: "Huvtssaa beldeh",
  //   dates: "2024-12-09",
  //   state: "done",
  //   state1: "in-progress",
  //   state2: "to-do",
  //   state3: "blocked",
  // },
  // {
  //   title: "Huvtssaa beldeh",
  //   dates: "2024-12-09",
  //   state: "blocked",
  //   state1: "done",
  //   state2: "in-progress",
  //   state3: "to-do",
  // },
];
const clearContainers = () => {
  const container1 = document.getElementById("to-do");
  const container2 = document.getElementById("in-progresss");
  const container3 = document.getElementById("done");
  const container4 = document.getElementById("blocked");
  container1.innerHTML = null;
  container2.innerHTML = null;
  container3.innerHTML = null;
  container4.innerHTML = null;
};
function addData(title, dates, state, state1, state2, state3) {
  const todo = document.querySelector(`#${state}`);
  const list = document.createElement("div");
  list.setAttribute("class", "list");
  const listItem = document.createElement("div");
  listItem.setAttribute("class", "listItem");
  list.appendChild(listItem);
  todo.appendChild(list);
  // console.log(todo);
  const h6 = document.createElement("h6");
  listItem.appendChild(h6);
  h6.innerText = title;
  const p = document.createElement("p");
  p.innerText = dates;
  listItem.appendChild(p);


  const select = document.createElement("select");
  listItem.appendChild(select);
  const option = document.createElement("option");
  select.appendChild(option);
  option.innerText = state;
  const option1 = document.createElement("option");
  select.appendChild(option1);
  option1.innerText = state1;
  const option2 = document.createElement("option");
  select.appendChild(option2);
  option2.innerText = state2;
  const option3 = document.createElement("option");
  select.appendChild(option3);
  option3.innerText = state3;
  const svg = document.createElement("img");
  svg.setAttribute("src", "./trash.svg");
  svg.setAttribute("id", "trash");
  listItem.appendChild(svg);
//   const trash = document.getElementById("trash");
// // const trash = document.getElementById("trash");
svg.addEventListener("click", () =>{
  todoData.pop(index);
  clearContainers();
  containerItems.map((item) => {
    addTaskList(item.title, item.color, item.count, item.id);
  });
  });
}
todoData.map((item) => {
  addData(
    item.title,
    item.dates,
    item.state,
    item.state1,
    item.state2,
    item.state3,

  );
  
});

// has context menu