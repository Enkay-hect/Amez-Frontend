<template>
  <!-- Topbar -->
  <div ref="topbarRef" class="font-sans relative z-[1001] bg-brand-green950 text-white/80 text-[0.76rem] tracking-[0.05em]">
      <div class="w-[calc(100%_-_28px)] mx-auto min-h-[38px] flex items-center justify-center gap-[10px] text-center">
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-location-dot"></i> Eastern West Africa Episcopal District
        </span>
        <span class="hidden min-[481px]:inline-flex items-center gap-2">
          <i class="fa-regular fa-clock"></i> Sunday worship: 8:00 AM
        </span>
      </div>
    </div>

    <!-- Spacer: reserves the header's height in normal flow once it goes fixed,
         so content beneath it doesn't jump up. Height is measured live. -->
    <div v-if="isFixed" :style="{ height: headerHeight + 'px' }"></div>

    <!-- Header -->
    <header
      ref="headerRef"
      class="font-sans z-[1000] flex items-center min-h-[72px] w-full bg-brand-cream border-b transition-shadow duration-300"
      :class="[
        isFixed ? 'fixed top-0 left-0 right-0 gap-2' : 'relative', 
        isScrolled ? 'shadow-[0_12px_30px_rgba(8,41,29,0.08)] border-brand-green950/10' : 'border-transparent',
      ]"
    >
      <div class="w-[calc(100%_-_28px)] mx-auto flex flex-nowrap items-center justify-between gap-4 min-h-[72px]">
      
        <!-- Brand -->
        <router-link to="/" class="inline-flex items-center gap-3 shrink-0" aria-label="A. M. E. Zion Church home" @click="closePanel">
          <span
            class="relative w-[46px] h-[46px] rounded-full bg-cover bg-center shadow-[inset_0_0_0_3px_rgba(208,164,68,0.3)]"
            :style="{ backgroundImage: `url(${logoUrl})` }"
            aria-hidden="true"
          ></span>
          <span class="block">
            <strong class="block font-serif text-brand-green950 text-[1.08rem] leading-none">A. M. E. Zion Church</strong>
          </span>
        </router-link>

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
            <router-link
              v-if="!item.dropdown"
              :to="item.to"
              class="flex items-center justify-between min-h-[50px] px-3 border-b border-brand-green950/10 text-[0.84rem] font-extrabold tracking-[0.035em]"
              :class="item.active ? 'text-brand-gold600' : 'text-brand-green950'"
              @click="closePanel"
            >
              {{ item.label }}
            </router-link>

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
                  <router-link
                    v-for="link in item.dropdown"
                    :key="link.label"
                    :to="link.to"
                    class="flex items-center gap-[10px] px-3 py-[11px] rounded-[10px] text-brand-ink text-[0.83rem] font-bold hover:bg-brand-green50"
                    @click="closePanel"
                  >
                    <i class="fa-regular fa-circle-dot"></i> {{ link.label }}
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <router-link
          to="#campaign"
          class="mt-6 flex items-center justify-center gap-[10px] min-h-[48px] rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-green900 text-white"
          @click="closePanel"
        >
          Give Online
        </router-link>
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

// --- Fixed-on-scroll (manual toggle, not CSS position:sticky) ---
// position: sticky combined with backdrop-filter has known rendering bugs
// on Chrome for Android (header gets visually clipped mid-scroll and
// doesn't recover). Toggling between in-flow and position:fixed based on
// scroll position avoids that class of bug entirely. isFixed switches the
// positioning; the spacer above reserves the header's height so nothing
// jumps when it engages; isScrolled (a lower threshold) just controls the
// shadow, same as before.
const isScrolled = ref(false)
const isFixed = ref(false)
const headerRef = ref(null)
const topbarRef = ref(null)
const headerHeight = ref(0)
const topbarHeight = ref(0)

function measureHeights() {
  headerHeight.value = headerRef.value?.offsetHeight ?? 0
  topbarHeight.value = topbarRef.value?.offsetHeight ?? 0
}

function handleScroll() {
  isScrolled.value = window.scrollY > 10
  isFixed.value = window.scrollY > topbarHeight.value
}

function handleResize() {
  measureHeights()
}

// Track the *visual* viewport separately from the layout viewport.
// getBoundingClientRect() confirmed the header's own box math is correct
// (top: 0, full width, correct height) even while it visibly appears
// clipped — meaning the bug isn't in our layout/CSS at all. On Chrome for
// Android, position:fixed anchors to the layout viewport, which stays
// constant, while the browser's own address bar animates in/out of the
// *visual* viewport independently as you scroll. Mid-transition, the
// address bar can be physically drawn over the top of the page even
// though the page's own coordinate system still says "y: 0" there. The
// visualViewport API reports where the actually-visible area really is,
// so we offset the header to track it instead of trusting a bare top: 0.
function updateViewportOffset() {
  const el = headerRef.value
  if (!el || !window.visualViewport) return
  el.style.top = `${window.visualViewport.offsetTop}px`
}

onMounted(() => {
  measureHeights()
  handleScroll()
  updateViewportOffset()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  document.addEventListener('keydown', handleKeydown)
  window.visualViewport?.addEventListener('resize', updateViewportOffset)
  window.visualViewport?.addEventListener('scroll', updateViewportOffset)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('keydown', handleKeydown)
  window.visualViewport?.removeEventListener('resize', updateViewportOffset)
  window.visualViewport?.removeEventListener('scroll', updateViewportOffset)
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