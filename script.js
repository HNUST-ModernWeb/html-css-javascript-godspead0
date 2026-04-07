// 获取DOM元素
const avatar = document.getElementById('avatar');
const avatarUpload = document.getElementById('avatar-upload');
const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');
const saveBtn = document.getElementById('save-btn');
const themeToggle = document.getElementById('theme-toggle');

// 检查本地存储中的主题偏好
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// 头像上传功能
avatarUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// 保存按钮功能
saveBtn.addEventListener('click', function() {
    alert('保存成功！');
});

// 主题切换功能
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
