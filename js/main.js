// 初始化 Swiper
document.addEventListener('DOMContentLoaded', function() {
    // 轮播图初始化
    const swiper = new Swiper('.swiper', {
        loop: true,
        // 自动播放配置
        autoplay: {
            delay: 5000,  // 5秒切换一次
            disableOnInteraction: true,  // 鼠标互动时暂停自动播放
            pauseOnMouseEnter: true,     // 鼠标进入时暂停
        },
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 鼠标离开时恢复自动播放
    const swiperContainer = document.querySelector('.swiper');
    if (swiperContainer) {
        swiperContainer.addEventListener('mouseleave', function() {
            swiper.autoplay.start();
        });
    }
}); 