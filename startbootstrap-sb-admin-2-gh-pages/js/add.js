const title = document.getElementById("titleImg");
const deltais = document.getElementById("deltaisImg");
const img = document.getElementById("img_add");
const submit = document.getElementById("add_prd");
const img_preview = document.getElementById("img_preview");
const img_choose = document.getElementById("image");

function previewFile() {
  const preview = document.querySelector("#img_preview");
  const file = document.querySelector("#image").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // chuyển ảnh thành chuỗi base64
      preview.src = reader.result;
      img.value = reader.result; // cái này để post lên server
      console.log(img.value);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
    console.log(img.value);
  }
}

const products = [];

submit.addEventListener("click", function () {
  const product = {
    titles: title.value,
    del: deltais.value,
    img_prd: img.value,
  };

  if (check() == true) {
    products.push(product);
  }
  console.log(products);
  show_prd(products);
});

// function show_prd() {
//   var list = document.getElementById("listProduct");
//   for (var i = 0; i < products.length; i++) {
//     list.innerHTML += `<tr>
//     <td>${products[i].titles}</td>
//     <td>${products[i].del}</td>
//     <td><img src="${products[i].img_prd}" width="50px" height="50px" alt="" srcset=""></td>
//     <td><button id="remove">Xóa sản phẩm</button></td>
//     </tr>`;
//   }
// }

function show_prd(data) {
  const result = data
    .map((item, index) => {
      return `<tr>
    <td>${item.titles}</td>
    <td>${item.del}</td>
    <td><img src="${item.img_prd}" width="50px" height="50px" alt="" srcset=""></td>
    <td><button id="remove">Xóa sản phẩm</button></td>
    </tr>`;
    })
    .join("");

  document.getElementById("listProduct").innerHTML = result;
}

function check() {
  if (title.value.trim() == "" || deltais.value.trim() == "" || img.value.trim() == "") {
    alert("Vui lòng điền đầy đủ thông tin !");
    return false;
  } else {
    alert("Thêm thành công !");
    title.value = "";
    deltais.value = "";
    img_preview.src = "";
    img_choose.value = "";

    return true;
  }
}
