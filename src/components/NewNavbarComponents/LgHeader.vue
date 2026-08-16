<template>
  <!-- Topbar -->
  <div class="font-sans relative z-[1001] bg-brand-green950 text-white/80 text-[0.76rem] tracking-[0.05em]">
    <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto min-h-[38px] flex items-center justify-between gap-5">
      <div class="flex items-center gap-[22px]">
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-location-dot"></i> Eastern West Africa Episcopal District
        </span>
        <span class="inline-flex items-center gap-2">
          <i class="fa-regular fa-clock"></i> Sunday worship: 8:00 AM
        </span>
      </div>
      <div class="flex items-center gap-[22px]">
        <a
          href="mailto:info@amez-ewaed.org"
          class="inline-flex items-center gap-2 hover:text-brand-gold300 transition-colors"
        >
          <i class="fa-regular fa-envelope"></i> info@amez-ewaed.org
        </a>
        <a href="#contact" class="inline-flex items-center gap-2 hover:text-brand-gold300 transition-colors">
          <i class="fa-solid fa-phone"></i> Contact us
        </a>
      </div>
    </div>
  </div>

  <!-- Header / Nav (desktop only) -->
  <header
    ref="headerRef"
    class="font-sans sticky top-0 z-[1000] flex items-center min-h-[84px] bg-brand-cream/95 backdrop-blur-md border-b transition-shadow duration-300"
    :class="isScrolled ? 'shadow-[0_12px_30px_rgba(8,41,29,0.08)] border-brand-green950/10' : 'border-transparent'"
  >
    <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto flex flex-nowrap items-center justify-between gap-7 min-h-[84px]">
      <!-- Brand -->
      <router-link to="/" class="inline-flex items-center gap-3 shrink-0" aria-label="A. M. E. Zion Church home">
        <span
          class="relative w-[52px] h-[52px] rounded-full bg-cover bg-center shadow-[inset_0_0_0_3px_rgba(208,164,68,0.3)]"
          :style="{ backgroundImage: `url(${logoUrl})` }"
          aria-hidden="true"
        ></span>
        <span class="block">
          <strong class="block font-serif text-brand-green950 text-[1.28rem] leading-none">
            A. M. E. Zion Church
          </strong>
          <small class="block mt-[5px] text-brand-muted text-[0.62rem] font-extrabold tracking-[0.11em] uppercase">
            Eastern West Africa Episcopal District
          </small>
        </span>
      </router-link>

      <!-- Primary nav -->
      <nav aria-label="Primary navigation" class="shrink-0 max-w-full">
        <ul class="flex items-center gap-[2px]">
          <li v-for="item in navItems" :key="item.id" class="relative" @mouseleave="closeDropdown(item.id)">
            <!-- Plain link -->
            <router-link
              v-if="!item.dropdown"
              :to="item.to"
              class="nav-link inline-flex items-center gap-[7px] whitespace-nowrap min-h-[44px] px-3 text-[0.78rem] font-extrabold tracking-[0.035em] transition-colors"
             
            >
              {{ item.label }}
          </router-link>

            <!-- Dropdown trigger -->
            <button
              v-else
              type="button"
              class="dropdown-toggle inline-flex items-center gap-[7px] whitespace-nowrap min-h-[44px] px-3 bg-transparent text-brand-green950 text-[0.78rem] font-extrabold tracking-[0.035em] hover:text-brand-gold600 transition-colors"
              :aria-expanded="openDropdownId === item.id"
              @click="toggleDropdown(item.id)"
              @mouseenter="openDropdown(item.id)"
            >
              {{ item.label }}
              <i
                v-if="item.dropdown.length"
                class="fa-solid fa-chevron-down text-[0.65rem] transition-transform duration-200"
                :class="{ 'rotate-180': openDropdownId === item.id }"
              ></i>
            </button>

            <!-- Dropdown panel: flush against the trigger (top-full, zero-gap
                 hit area) instead of floating with a real gap above it. The
                 pt-[22px] recreates the old visual spacing as padding inside
                 the hoverable box, so there's no dead zone between trigger
                 and panel for the mouse to fall through. -->
            <div
              v-if="item.dropdown && item.dropdown.length"
              class="dropdown-menu absolute top-full pt-[22px] px-[10px] pb-[10px] left-0 w-[265px] border border-brand-green950/10 rounded-[18px] bg-white shadow-brand-lg transition-all duration-200"
              :class="openDropdownId === item.id
                ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                : 'opacity-0 invisible -translate-y-1 pointer-events-none'"
              @mouseenter="openDropdown(item.id)"
            >
              <router-link
                v-for="link in item.dropdown"
                :key="link.label"
                :to="link.to"
                class="flex items-center gap-[10px] px-3 py-[11px] rounded-[10px] text-brand-ink text-[0.83rem] font-bold hover:text-brand-green800 hover:bg-brand-green50 hover:translate-x-1 transition-all"
                @click="closeDropdown(item.id)"
              >
                <i class="fa-regular fa-circle-dot"></i> {{ link.label }}
              </router-link>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-[10px] shrink-0">
        <router-link
          :to="'#campaign'"
          class="hidden min-[1121px]:inline-flex items-center justify-center gap-[10px] min-h-[44px] px-[18px] rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-green900 text-white hover:bg-brand-green700 hover:-translate-y-[3px] transition-all"
        >
          Give Online
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import logoUrl from '/images/logo/amez.jpeg'

// --- Nav data (drives the whole menu reactively) ---
const navItems = reactive([
  { id: 'home', label: 'Home', to: '/', active: true, dropdown: null },
  { id: 'church', label: 'The Church', to: '/the-church', dropdown: null },

  {
    id: 'leadership',
    label: 'Leadership',
    to: '#',
    dropdown: [
      { label: 'The Presiding Prelate', to: '/the-bishop' },
      { label: "Bishop's Administrative Assistants", to: '/BAA' },
      { label: 'Annual Conferences', to: '#' },
    ],
  },

  {
    id: 'ministries',
    label: 'Departments & Ministries',
    to: '#',
    dropdown: [
      { label: "Women's Home & Overseas Missionary Society", to: '#ministries' },
      { label: 'Connectional Lay Council', to: '/connectional-lay-council' },
      { label: 'Men of Zion Ministry', to: '/men-of-zion' },
      { label: "Minister's Spouses Fellowship", to: '#ministries' },
      { label: 'Directorates', to: '#ministries' },
    ],
  },

  { id: 'schools', label: 'Schools & Seminary', to: '/hood-speaks', dropdown: null },
  { id: 'events', label: 'Events', to: '/event', dropdown: null },
  { id: 'contact', label: 'Contact', to: '/contact', dropdown: null },
])

// --- Dropdown open/close state ---
const openDropdownId = ref(null)
let closeTimer = null

function openDropdown(id) {
  const item = navItems.find((navItem) => navItem.id === id)
  if (!item?.dropdown?.length) return
  clearTimeout(closeTimer)
  openDropdownId.value = id
}

function closeDropdown(id) {
  if (!id || openDropdownId.value !== id) return
  // Small delay so a brief, imprecise mouse path (fast diagonal movement,
  // trackpad jitter) between the trigger and the panel doesn't close it
  // before the cursor lands — cancelled instantly by openDropdown() above
  // if the mouse re-enters the trigger or the panel in time.
  clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    if (openDropdownId.value === id) openDropdownId.value = null
  }, 150)
}

function toggleDropdown(id) {
  clearTimeout(closeTimer)
  openDropdownId.value = openDropdownId.value === id ? null : id
}

const headerRef = ref(null)

function handleClickOutside(event) {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    openDropdownId.value = null
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') openDropdownId.value = null
}

// --- Scroll shadow ---
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  clearTimeout(closeTimer)
})

// :class="item.active ? 'text-brand-gold600' : 'text-brand-green950 hover:text-brand-gold600'"
</script>