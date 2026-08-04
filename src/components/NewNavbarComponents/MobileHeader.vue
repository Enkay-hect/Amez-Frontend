<template>
  <!-- Topbar -->
  <div class="font-sans relative z-[1001] bg-brand-green950 text-white/80 text-[0.76rem] tracking-[0.05em]">
      <div class="w-[calc(100%_-_28px)] mx-auto min-h-[38px] flex items-center justify-center gap-[10px] text-center">
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-location-dot"></i> Eastern West Africa Episcopal District
        </span>
        <span class="hidden min-[481px]:inline-flex items-center gap-2">
          <i class="fa-regular fa-clock"></i> Sunday worship: 8:00 AM
        </span>
      </div>
    </div>

    <!-- Header -->
    <header
      ref="headerRef"
      class="font-sans sticky top-0 z-[1000] flex items-center min-h-[72px] bg-brand-cream/95 backdrop-blur-md border-b transition-shadow duration-300"
      :class="isScrolled ? 'shadow-[0_12px_30px_rgba(8,41,29,0.08)] border-brand-green950/10' : 'border-transparent'"
    >
      <div class="w-[calc(100%_-_28px)] mx-auto flex flex-nowrap items-center justify-between gap-4 min-h-[72px]">
        <!-- Brand -->
        <a href="#home" class="inline-flex items-center gap-3 shrink-0" aria-label="A. M. E. Zion Church home" @click="closePanel">
          <span
            class="relative w-[46px] h-[46px] rounded-full bg-cover bg-center shadow-[inset_0_0_0_3px_rgba(208,164,68,0.3)]"
            :style="{ backgroundImage: `url(${logoUrl})` }"
            aria-hidden="true"
          ></span>
          <span class="block">
            <strong class="block font-serif text-brand-green950 text-[1.08rem] leading-none">A. M. E. Zion Church</strong>
          </span>
        </a>

        <!-- Hamburger -->
        <button
          ref="toggleRef"
          type="button"
          :aria-label="isOpen ? 'Close navigation' : 'Open navigation'"
          aria-controls="mobileNavPanel"
          :aria-expanded="isOpen"
          class="relative z-[1003] grid place-items-center w-[46px] h-[46px] shrink-0 rounded-full border border-brand-green950/10 bg-white text-brand-green950"
          @click="togglePanel"
        >
          <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </header>

    <!-- Backdrop -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-brand-green950/50 backdrop-blur-sm z-[1001]"
        @click="closePanel"
      ></div>
    </Transition>

    <!-- Off-canvas panel -->
    <Transition name="slide">
      <nav
        v-if="isOpen"
        id="mobileNavPanel"
        aria-label="Mobile navigation"
        class="font-sans fixed top-[110px] right-0 bottom-0 w-[min(380px,88vw)] z-[1002] overflow-y-auto bg-white p-[26px] shadow-[-20px_30px_60px_rgba(8,41,29,0.2)]"
      >
        <ul>
          <li v-for="item in navItems" :key="item.id" class="relative">
            <!-- Plain link -->
            <a
              v-if="!item.dropdown"
              :href="item.href"
              class="flex items-center justify-between min-h-[50px] px-3 border-b border-brand-green950/10 text-[0.84rem] font-extrabold tracking-[0.035em]"
              :class="item.active ? 'text-brand-gold600' : 'text-brand-green950'"
              @click="closePanel"
            >
              {{ item.label }}
            </a>

            <!-- Dropdown trigger -->
            <button
              v-else
              type="button"
              class="flex items-center justify-between w-full min-h-[50px] px-3 border-b border-brand-green950/10 bg-transparent text-brand-green950 text-[0.84rem] font-extrabold tracking-[0.035em]"
              :aria-expanded="openDropdownId === item.id"
              @click="toggleDropdown(item.id)"
            >
              {{ item.label }}
              <i
                v-if="item.dropdown.length"
                class="fa-solid fa-chevron-down text-[0.65rem] transition-transform duration-200"
                :class="{ 'rotate-180': openDropdownId === item.id }"
              ></i>
            </button>

            <!-- Accordion panel (CSS grid 0fr/1fr trick for smooth height animation) -->
            <div
              v-if="item.dropdown && item.dropdown.length"
              class="grid transition-[grid-template-rows] duration-300 ease-in-out"
              :style="{ gridTemplateRows: openDropdownId === item.id ? '1fr' : '0fr' }"
            >
              <div class="overflow-hidden">
                <div class="py-2 pl-3">
                  <a
                    v-for="link in item.dropdown"
                    :key="link.label"
                    :href="link.href"
                    class="flex items-center gap-[10px] px-3 py-[11px] rounded-[10px] text-brand-ink text-[0.83rem] font-bold hover:bg-brand-green50"
                    @click="closePanel"
                  >
                    <i class="fa-regular fa-circle-dot"></i> {{ link.label }}
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <a
          href="#campaign"
          class="mt-6 flex items-center justify-center gap-[10px] min-h-[48px] rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-green900 text-white"
          @click="closePanel"
        >
          Give Online
        </a>
      </nav>
    </Transition>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onUnmounted, nextTick } from 'vue'
import logoUrl from '/images/logo/amez.jpeg'

// --- Nav data ---
// NOTE: identical to AppHeader.vue's navItems. Worth lifting into a shared
// composable (e.g. useNavItems.js) once both headers are wired into the app,
// so the menu structure only has to be edited in one place.
const navItems = reactive([
  { id: 'home', label: 'Home', href: '#home', active: true, dropdown: null },
  { id: 'church', label: 'The Church', href: '#', dropdown: [] },
  {
    id: 'leadership',
    label: 'Leadership',
    href: '#',
    dropdown: [
      { label: 'The Presiding Prelate', href: '#' },
      { label: "Bishop's Administrative Assistants", href: '#' },
      { label: 'Annual Conferences', href: '#' },
    ],
  },
  {
    id: 'ministries',
    label: 'Departments & Ministries',
    href: '#',
    dropdown: [
      { label: "Women's Home & Overseas Missionary Society", href: '#ministries' },
      { label: 'Connectional Lay Council', href: '#ministries' },
      { label: 'Men of Zion Ministry', href: '#ministries' },
      { label: "Minister's Spouses Fellowship", href: '#ministries' },
      { label: 'Directorates', href: '#ministries' },
    ],
  },
  { id: 'schools', label: 'Schools & Seminary', href: '#events', dropdown: null },
  { id: 'events', label: 'Events', href: '#events', dropdown: null },
  { id: 'contact', label: 'Contact', href: '#contact', dropdown: null },
])

// --- Panel open/close ---
const isOpen = ref(false)
const openDropdownId = ref(null)
const toggleRef = ref(null)

function togglePanel() {
  isOpen.value ? closePanel() : openPanel()
}

function openPanel() {
  isOpen.value = true
}

function closePanel() {
  isOpen.value = false
  openDropdownId.value = null
  nextTick(() => toggleRef.value?.focus())
}

function toggleDropdown(id) {
  openDropdownId.value = openDropdownId.value === id ? null : id
}

// Lock body scroll while the panel is open
watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function handleKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) closePanel()
}

// --- Scroll shadow ---
const isScrolled = ref(false)
const headerRef = ref(null)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(105%);
}
</style>