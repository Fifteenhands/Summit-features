function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function navigateTo(page) {
    // 隐藏所有内容区域
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });

    // 移除所有导航项的 active 类
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    if (page.startsWith('article')) {
        // 隐藏其他内容区域，显示 iframe
        document.getElementById('articleFrame').classList.remove('hidden');
        document.getElementById('articleFrame').src = `${page}.html`;
    } else {
        // 显示选定的内容区域
        document.getElementById(`${page}-content`).classList.add('active');
        document.getElementById(`${page}-content`).classList.remove('hidden');
        // 隐藏 iframe
        document.getElementById('articleFrame').classList.add('hidden');
        // 添加选定导航项的 aActive 类
        document.getElementById(page).classList.add('active');
    }
}

// 设置初始页面为 Home
navigateTo('home');


// community// 
// 生成随机用户名
function generateRandomUsername() {
    const usernames = ['Alice', 'Bob', 'Carol', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    return usernames[Math.floor(Math.random() * usernames.length)];
}

// 设置随机用户名
function setRandomUsername() {
    const usernameElements = document.querySelectorAll('.username');
    usernameElements.forEach(element => {
        element.textContent = generateRandomUsername();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setRandomUsername();

    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');
    const shareButtons = document.querySelectorAll('.share-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You liked this post!');
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You commented on this post!');
        });
    });

    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You shared this post!');
        });
    });
});
