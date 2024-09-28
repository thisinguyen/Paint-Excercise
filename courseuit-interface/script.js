document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn form submit

    // Lấy giá trị của username và password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Giả lập kiểm tra đăng nhập (ở đây chỉ kiểm tra đơn giản)
    if (username === '21522624' && password === '123456') {
        alert('Đăng nhập thành công!');
    } else {
        alert('Sai thông tin đăng nhập.');
    }
});
