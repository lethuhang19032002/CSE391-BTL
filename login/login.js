const username = document.getElementById("username");
const password = document.getElementById("password");

function login() {
  if (username.value.trim() == "admin" && password.value.trim() == "admin") {
    window.location.href = "login.html";
    window.location = "../admin/admin.html";
    console.log("A");
  } else {
    alert("Tên đăng nhập hoặc mật khẩu sai ! ");
  }
}
