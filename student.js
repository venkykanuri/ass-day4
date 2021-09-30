const studentlist = [];
const studentlistelement = document.querySelector("#student-list"); //connecting unordered list to js
document
  .querySelector("#viewbutton")
  .addEventListener("click", addstudentdetails);

function addstudentdetails() {
  {
    const nametextbox = document.querySelector("#stuname").value;
    const phntextbox = document.querySelector("#stuphn").value;
    const emailtextbox = document.querySelector("#stuemail").value;

    if (nametextbox == "" && phntextbox == "" && emailtextbox == "") {
      return;
    } else {
      const studentobject = {
        id: studentlist.length + 1,
        name: nametextbox,
        phnno: phntextbox,
        email: emailtextbox,
      };
      console.log(studentobject);
      studentlist.unshift(studentobject);
      console.log(studentlist);
    }
  }
  displaystudentdetails();
}

function displaystudentdetails() {
  studentlistelement.innerHTML = "";
  document.querySelector("#stuname").value = "";
  document.querySelector("#stuphn").value = "";
  document.querySelector("#stuemail").value = "";

  studentlist.forEach((detail) => {
    const listelement = document.createElement("li");
    listelement.innerHTML =
      " Name : " + detail.name + " mobile : " + detail.phnno + " mail :" + detail.email;
    studentlistelement.appendChild(listelement);
    console.log(listelement);
  });
}
