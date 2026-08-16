<template>
  <footer class="font-sans text-white/70 bg-brand-footer">
    <div
      class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto grid grid-cols-[1.35fr_0.8fr_0.8fr_1fr] max-[940px]:grid-cols-3 max-[720px]:grid-cols-2 gap-[50px] max-[720px]:gap-9 py-20 pb-[60px]"
    >
      <!-- Brand / about -->
      <div class="max-[720px]:col-span-2">
        <a href="#home" class="inline-flex items-center gap-3">
          <span
            class="w-[52px] h-[52px] rounded-full bg-cover bg-center shadow-[inset_0_0_0_3px_rgba(208,164,68,0.3)]"
            :style="{ backgroundImage: `url(${logoUrl})` }"
            aria-hidden="true"
          ></span>
          <span class="block">
            <strong class="block text-white font-serif text-[1.28rem] leading-none">A. M. E. Zion Church</strong>
            <small class="block mt-[5px] text-brand-muted text-[0.62rem] font-extrabold tracking-[0.11em] uppercase">
              Eastern West Africa Episcopal District
            </small>
          </span>
        </a>
        <p class="mt-[22px] max-w-[360px] text-[0.88rem]">
          Proclaiming the Gospel of Jesus Christ, developing disciples and serving communities with faith, hope and love.
        </p>
        <div aria-label="Social media links" class="flex gap-[10px] mt-6">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            class="grid place-items-center w-10 h-10 rounded-full border border-white/[0.14] hover:text-brand-green950 hover:bg-brand-gold500 hover:-translate-y-[3px] transition-all"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>

      <!-- Explore -->
      <div>
        <h3 class="mb-5 text-white font-serif text-[1.35rem]">Explore</h3>
        <div class="grid gap-[10px]">
          <a
            v-for="link in exploreLinks"
            :key="link.label"
            :href="link.href"
            class="text-[0.84rem] hover:text-brand-gold300 hover:translate-x-1 transition-all"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="mb-5 text-white font-serif text-[1.35rem]">Resources</h3>
        <div class="grid gap-[10px]">
          <a
            v-for="link in resourceLinks"
            :key="link.label"
            :href="link.href"
            class="text-[0.84rem] hover:text-brand-gold300 hover:translate-x-1 transition-all"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="max-[720px]:col-span-2">
        <h3 class="mb-5 text-white font-serif text-[1.35rem]">Stay Connected</h3>
        <p class="text-[0.84rem]">Receive worship updates, district news and event announcements.</p>
        <form class="relative mt-[18px]" @submit.prevent="handleNewsletterSubmit">
          <input
            v-model="newsletterEmail"
            type="email"
            aria-label="Email address"
            placeholder="Your email address"
            required
            class="w-full min-h-[50px] pl-4 pr-[52px] border border-white/[0.14] rounded-full outline-none text-white bg-white/[0.06]"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            class="absolute top-[5px] right-[5px] w-10 h-10 rounded-full text-brand-green950 bg-brand-gold500"
          >
            <i :class="justSubscribed ? 'fa-solid fa-check' : 'fa-solid fa-arrow-right'"></i>
          </button>
        </form>
      </div>
    </div>

    <div
      class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto min-h-[76px] flex items-center justify-between max-[720px]:flex-col max-[720px]:justify-center max-[720px]:py-5 max-[720px]:text-center gap-5 border-t border-white/10 text-[0.76rem]"
    >
      <span>© {{ currentYear }} The A. M. E. Zion Church, Eastern West Africa Episcopal District.</span>
      <span>Faith · Freedom · Service</span>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import logoUrl from '/images/logo/amez.jpeg'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1Ev2GmRGrY/', icon: 'fa-brands fa-facebook-f' },
  { label: 'Instagram', href: 'https://www.instagram.com/amez_ewaed?igsh=ZDBveWQzNXYyc3Bm&utm_source=qr', icon: 'fa-brands fa-instagram' },
  { label: 'YouTube', href: 'https://youtube.com/@theafricanmethodistepiscopalzi?si=qsQggjg9cxMpKXjJ', icon: 'fa-brands fa-youtube' },
]

const exploreLinks = [
  { label: 'About the Church', href: '#welcome' },
  { label: 'Our Beliefs', href: '#beliefs' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Events', href: '#events' },
  { label: 'Latest News', href: '#news' },
]

const resourceLinks = [
  { label: 'Sermons', href: '#sermon' },
  { label: 'Livestream', href: '#' },
  { label: 'Schools & Seminary', href: '#' },
  { label: 'Annual Conferences', href: '#' },
  { label: 'Give Online', href: '#campaign' },
]

// --- Footer year (was a one-off DOM write on page load) ---
const currentYear = computed(() => new Date().getFullYear())

// --- Newsletter form (was classList/innerHTML swapping on the button) ---
const newsletterEmail = ref('')
const justSubscribed = ref(false)
let revertTimeout = null

function handleNewsletterSubmit() {
  // Hand off to your actual subscribe endpoint/store action here.
  justSubscribed.value = true
  newsletterEmail.value = ''

  clearTimeout(revertTimeout)
  revertTimeout = setTimeout(() => {
    justSubscribed.value = false
  }, 2200)
}
</script>
