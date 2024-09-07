


document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');

    // Kiểm tra nếu trên di động, yêu cầu người dùng nhấn nút để phát nhạc
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        playButton.style.display = 'block'; // Hiển thị nút phát nhạc trên di động
        playButton.addEventListener('click', function() {
            audio.play();
            playButton.style.display = 'none'; // Ẩn nút sau khi nhạc được phát
            function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.onclick = () => makeDisappear(heart);

    // Tạo vị trí ngẫu nhiên cho trái tim
    const container = document.body; // Toàn bộ body
    const x = Math.floor(Math.random() * (container.offsetWidth - 30)); // Đảm bảo trái tim không bị cắt bớt ở bên phải
    const y = container.offsetHeight; // Bắt đầu từ dưới cùng của trang
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Thêm trái tim vào container
    container.appendChild(heart);

    // Thêm hiệu ứng bay lên cho trái tim
    heart.style.animation = `rise ${Math.random() * 5 + 5}s ease-in forwards`; // Tạo hiệu ứng bay lên ngẫu nhiên trong khoảng thời gian từ 5 đến 10 giây

    // Đặt thời gian để biến mất sau 5 giây
    setTimeout(() => {
        makeDisappear(heart);
    }, 5000); // Thay đổi độ trong suốt để làm biến mất sau 5 giây
}

// Hàm để biến mất trái tim
function makeDisappear(element) {
    element.style.opacity = '0'; // Thay đổi độ trong suốt để làm biến mất
    setTimeout(() => {
        element.remove(); // Loại bỏ hoàn toàn phần tử khỏi DOM
    }, 500); // Thời gian trễ trước khi loại bỏ hoàn toàn (500ms là thời gian cần để fade out)
}

// Tạo trái tim một cách ngẫu nhiên
function spawnHearts() {
    setInterval(() => {
        createHeart();
    }, 100); // Tạo trái tim mỗi 100ms để có rất nhiều trái tim
}

// Bắt đầu tạo trái tim
spawnHearts();
        });
    } else {
        audio.autoplay = true; // Tự động phát nhạc trên máy tính
        audio.play();
    }
});



