let listTask = [];
window.onload = function () {
  check();
  readTask();
};

function check() {
  let a1 = run();
  let a = localStorage.ten;
  if (localStorage.check == 1) {
    const html = `
    <div class="dungg">
        <h2 class="dung"><b>Xin chào ${a} !</b></h2>
        <br>
        <div class="khung1">
        <div class="giaynho">
        <input type="text" id="dientask" placeholder="Thêm note của bạn...">
        <button class="nutbam" onclick="bam1()">➕</button>
        </div>
        </div>
      
        <div class="tep">
        </div>
     
     
        <div class="sotask">
      
        <div class="cla">
        <button class="xoahet" onclick="xoahet()"> Xóa hết</button>
         <button class="xoahet" onclick="doiten()"> Đổi tên</button>
         <div>
         <div class="odunggg"> 
         <b>Bạn có ${a1} note</b>
         </div>
         </div>
         </div>
    </div>
        `;
    $(".gioithieu").replaceWith(html);
  }
}

function bam() {
  let a1 = run();
  let input = $(".input ").val();
  if (input == "") {
    alert("Bạn chưa nhập tên");
  } else if (input != "") {
    localStorage.setItem("check", 1);
    localStorage.setItem("ten", input);
    let a = localStorage.ten;
    const html = `
    <div class="dungg">
    <h2 class="dung"><b>Xin chào ${a} !</b></h2>
    <br>
    <div class="khung1">
   
    <div class="giaynho">
    <input type="text" id="dientask" placeholder="Thêm note của bạn...">
    <button class="nutbam" onclick="bam1()">➕</button>
    </div>
    </div>
  
    <div class="tep">
    </div>
 
 
    <div class="sotask">
    <div class="cla">
    <button class="xoahet" onclick="xoahet()"> Xóa hết</button>
     <button class="xoahet" onclick="doiten()"> Đổi tên</button>
     <div>
     <div class="odunggg"> 
     <b>Bạn có ${a1} note</b>
     </div>
     </div>
     </div>
     </div>
    `;

    $(".gioithieu").replaceWith(html);
  }
  readTask();
}

function bam1() {
  var task = document.getElementById("dientask").value;
  if (task == "") {
    alert("Hãy điền note");
    return;
  }

  const luu = {
    task: task,
  };
  listTask = listTask || [];
  listTask.push(luu);
  localStorage.setItem("listTask", JSON.stringify(listTask));

  const addHTML = ` 
  
  <div class="khungnho">
  <div class="view">
  <p class="chu">${task}</p></div> 
  <button class="xoa1" onclick="xoapt()">✖</button>

  </div>
  `;

  $(".tep").append(addHTML);
  let a1 = Number(run());
  const html = `

       <div class="odunggg"> 
       <b>Bạn có ${a1} note</b>
       </div>
    `;
  $(".odunggg").replaceWith(html);
}

function xoapt() {
  $(".khungnho").click(function () {
    $(this).remove();
  });

  listTask.splice("listTask", 1);
  localStorage.removeItem("listTask");
  localStorage.setItem("listTask", JSON.stringify(listTask));
  let a1 = Number(run());
  const html = `

  <div class="odunggg"> 
  <b>Bạn có ${a1} note</b>
  </div>
   `;
  $(".odunggg").replaceWith(html);
}

function xoahet() {
  $(".khungnho").remove();
  listTask.length = 0;
  localStorage.setItem("listTask", JSON.stringify(listTask));
  let a1 = Number(run());
  const html = `

  <div class="odunggg"> 
  <b>Bạn có ${a1} note</b>
  </div>
   `;
  $(".odunggg").replaceWith(html);
}

function readTask() {
  listTask = localStorage.getItem("listTask");
  listTask = JSON.parse(listTask);
  console.log(listTask);
  let tasksHTML = "";
  for (element of listTask) {
    console.log(element);
    tasksHTML += `<div class="khungnho">
      <div class="view">
      <p class="chu">${element.task}</p></div> 
      <button class="xoa1" onclick="xoapt()">✖</button>
      
      </div>`;
  }
  document.querySelector(".tep").innerHTML = tasksHTML;
}
function doiten() {
  localStorage.removeItem("check");
  const html2 = `<div class="gioithieu">
    <div class="gt1">
      <h1 class="goiten"><b>Chúng tôi nên gọi bạn là gì ?</b></h1>

      <input class="input" type="text" placeholder="Nhập tên của bạn..." />
      <div class="dungnutbam">
        <button class="bam" onclick="bam()">Tiếp tục</button>
      </div>
    </div>
  </div>`;
  $(".dungg").replaceWith(html2);
}
function run() {
  let listTask = localStorage.getItem("listTask"); //lấy dữ liệu
  listTask = JSON.parse(listTask);
  listTask = listTask || [];
  return listTask.length;
}
