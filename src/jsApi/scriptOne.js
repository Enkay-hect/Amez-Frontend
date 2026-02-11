import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useGalleryAutoPlay(options = {}) {
    const autoPlaySpeed = options.speed || 3000;

    const containers = ref([]);
    let interval = null;
    const galleries = [];

    const registerContainer = (el) => {
        if (el && !containers.value.includes(el)) {
            containers.value.push(el);
        }
    };

    const initGallery = (container) => {
        const images = container.querySelectorAll('img');
        let currentIndex = 0;

        const showImage = (index) => {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        };

        const nextImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        };

        showImage(0);

        return { nextImage };
    };

    const startAutoPlay = () => {
        stopAutoPlay();

        interval = setInterval(() => {
            galleries.forEach(gallery => gallery.nextImage());
        }, autoPlaySpeed);
    };

    const stopAutoPlay = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    };

    onMounted(() => {
        containers.value.forEach(container => {
            galleries.push(initGallery(container));
        });

        if (galleries.length) {
            startAutoPlay();
        }
    });

    onBeforeUnmount(() => {
        stopAutoPlay();
    });

    return {
        registerContainer
    };
}
