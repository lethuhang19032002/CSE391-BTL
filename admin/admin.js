var listPosts = document.querySelector(".list-posts");
var posts = [
    {
        id: 1,
        type: "Tin tức",
        title: "FAPTV BỊ HACK KÊNH YOUTUBE, ĐANG LIVESTREAM TIỀN ẢO",
        content: "Hôm nay, kênh YouTube FAPTV đã bất ngờ bị thay đổi tên kênh, đồng thời phát trực tiếp một video về tiền số. Nội dung được đặt ở tiêu đề có đề cập tới việc Tesla chấp nhận thanh toán bằng Bitcoin (BTC) và Ethereum Classic (ETC). Đồng thời, hình ảnh của tỷ phú Elon Musk cũng được sử dụng dưới dạng ở ảnh đại diện. Hiện tại, Kênh YouTube FAPTV đã bị đổi tên thành Tesla US. Trên mục Trang chủ, kênh YouTube này không hiện bất kỳ video hay danh sách phát nào. Tuy nhiên, ở mục Video thì toàn bộ video vẫn tồn tại và chưa hề bị xóa. Hiện tại, người dùng vẫn có thể xem toàn bộ video trước đó của FAPTV. Đại diện của FAPTV vẫn chưa đưa ra bất kỳ phản hồi nào về vụ việc trên. Hiện tại, FAPTV đang có tới 13,3 triệu người đăng ký trên nền tảng YouTube. Đây cũng là một trong số rất ít kênh YouTube tại Việt Nam cán mốc 10 triệu lượt đăng ký và nhận nút kim cương của nền tảng này. ",
        image: "",
    },
    {
        id: 2,
        type: "Vật vờ đánh giá",
        title: "Đánh giá Lenovo ThinkBook 16p Gen2: Laptop hiệu năng cao cho dân đồ họa",
        content: "Khi nhắc tới các mẫu máy tính có hiệu năng cao, hầu hết chúng ta sẽ nhớ tới những mẫu laptop Gaming có ngoại hình to, hầm hố. Tuy nhiên, nhiều người dùng vẫn cần một mẫu máy hiệu năng cao nhưng ngoại hình phải tinh tế, thanh thoát, loại bỏ được những đường nét của một mẫu máy thiên về Gaming. Đây có thể là những người làm đồ họa 3D, các bạn học chuyên ngành kiến trúc. Với nhu cầu trên, Lenovo ThinkBook 16p Gen 2 sẽ là một lựa chọn đáng cân nhắc. Lenovo ThinkBook 16p Gen 2 được hoàn thiện chủ yếu bằng nhôm. Do đó, máy có được sự cứng cáp và chắc chắn trong quá trình sử dụng. Thêm nữa, chất liệu này là cần thiết trên một thiết bị có giá trên 30 triệu, từ đó đem lại độ bền cao trong quá trình sử dụng. Nếu so sánh với các sản phẩm cùng phân khúc giá, Lenovo ThinkBook 16p Gen 2 sẽ không phải là sản phẩm đẹp nhất, sang trọng nhất. Tuy nhiên, nó giữ được sự thân thiện và cứng cáp cần thiết.",
        image: "",
    },
    {
        id: 3,
        type: "Tip&tricks",
        title: "Cách sử dụng Apple Pay để thanh toán tại Việt Nam",
        content: "Apple Pay là dịch vụ thanh toán di động và ví điện tử online được Apple giới thiệu tích hợp lần đầu trên bộ đôi iPhone 6/6 Plus, ra mắt tháng 9 năm 2014. Hiện tại, Apple Pay chủ yếu hỗ trợ các quốc gia thuộc Châu Âu và Bắc Mỹ. Một số quốc gia Châu Á khác có hỗ trợ như: Trung Quốc, Hong Kong, Singapore hay Nhật Bản, tuy nhiên, chưa hỗ trợ tại Việt Nam.Hiện tại, người dùng không thể thêm các ngân hàng Việt Nam để sử dụng Apple Pay. Tuy nhiên nếu bạn muốn sử dụng, chúng ta có thể chọn một ngân hàng quốc tế làm trung gian nạp tiền, từ đó sử dụng Apple Pay với đầy đủ tính năng.",
        image: "",
    },
    {
        id: 4,
        type: "Người dùng đánh giá",
        title: "NĂM 2022, NHÌN LẠI GOOGLE PIXEL THẾ HỆ ĐẦU TIÊN: CAMERA VẪN TỐT, ANDROID THUẦN SIÊU MƯỢT",
        content: "Tháng 10 năm 2016, Google đã giới thiệu bộ đôi điện thoại thông minh Google Pixel và Google Pixel XL tới với người dùng. Khác với phiên bản XL, Google Pixel sẽ có kích thước màn hình nhỏ hơn cũng như độ phân giải màn hình sẽ thấp hơn. Các thông số còn lại của hai sản phẩm về cơ bản sẽ khá tương đương nhau. Sau gần 6 năm ra mắt, chiếc điện thoại này vẫn giữ được độ mượt mà của Android thuần cùng camera ổn định. Đây là điểm mà Google vẫn giữ được tới thế hệ Pixel 6 ngày nay.- Thiết kế tối giản- Thiết kế của Google Pixel thật sự rất tối giản, không có điểm gì quá nổi bật, thậm chí khung viền của chiếc điện thoại này còn làm chúng ta liên tưởng đến những chiếc iPhone 6/6S của Apple. Tuy nhiên, khác với thiết kế nhôm nguyên khối trên những chiếc iPhone, mặt lưng của Google Pixel là sự kết hợp giữa kính vào kim loại. Hơn nữa, phần camera của Google Pixel cũng được làm chìm xuống, khác hẳn với thiết kế camera lồi ra trên những chiếc điện thoại được ra mắt tại thời điểm đó.",
        image: "",
    },
    {
        id: 5,
        type: "Góc nhìn",
        title: "Google kiếm tiền từ Android bằng cách nào?",
        content: "Năm 2008, chiếc điện thoại Android đầu tiên được bán ra thị trường, đồng thời mở ra một kỷ nguyên hoàn toàn mới cho điện thoại thông minh ngày nay. Android có mã nguồn mở và Google phát hành mã nguồn theo Giấy phép Apache. Chính mã nguồn mở cùng với một giấy phép không có nhiều ràng buộc đã cho phép các nhà phát triển thiết bị, mạng di động và các lập trình viên nhiệt huyết được điều chỉnh và phân phối Android một cách tự do. Các nhà sản xuất điện thoại thông minh như Samsung, Xiaomi, OPPO,… đều có thể sản xuất các mẫu máy chạy Android mà không phải mất bất cứ chi phí bản quyền nào cho Google. Tuy không thu phí bản quyền của Android nhưng hằng năm, doanh thu của Google từ hệ điều hành vẫn lên đến hàng tỷ USD. Vậy tại sao họ lại có thể kiếm ra tiền từ một sản phẩm miễn phí?",
        image: "",
    },
]
//Display posts
function renderPosts() {
    var list = "";
    posts.forEach(function (post) {
        list += `
        <tr>
            <td>${post.id}</td>
            <td>${post.type}</td>
            <td>${post.title}</td>
            <td>${post.content}</td>
            <td>${post.image}</td>
            <td>
                <a href = "#posts-managerment">
                <button onclick="editPosts(id)" class="btn btn-primary btn-edit" id="${post.id}">Sửa</button></a>
                <button onclick="deletePosts(id)" class="btn btn-danger btn-delete" id="${post.id}">Xóa</button>
            </td>
        </tr>
        `
    });
    listPosts.innerHTML = list;
}
renderPosts();

//Add posts

var typePosts = document.querySelector("input[name=type]");
var titlePosts = document.querySelector("input[name=title]");
var contentPosts = document.querySelector("input[name=content]");
var imagePosts = document.querySelector("input[name=image]");
var create = document.querySelector("#create");

create.addEventListener("click", addPosts);

function addPosts(){
    var newPosts = {
        id: posts.length +1,
        type: typePosts.value,
        title: titlePosts.value,
        content: contentPosts.value,
        image: imagePosts.value,
    };
    posts.push(newPosts);
    renderPosts();
}
