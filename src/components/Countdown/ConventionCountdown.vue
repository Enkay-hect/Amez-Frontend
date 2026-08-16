<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-brand-green950/70 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="conventionModalTitle"
          class="relative w-full max-w-lg rounded-[28px] bg-brand-cream shadow-brand-lg overflow-hidden"
        >
          <!-- Close -->
          <button
            type="button"
            aria-label="Close"
            class="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            @click="close"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <!-- Countdown -->
          <div class="bg-gradient-to-br from-brand-green900 to-brand-green950 text-white text-center px-6 py-9 sm:px-10 sm:py-10">
            <p class="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-brand-gold300">
              Prepare to Gather
            </p>
            <h2 id="conventionModalTitle" class="mt-2 font-serif text-2xl sm:text-3xl font-bold">
              Convention Countdown
            </h2>

            <!-- Countdown -->
            <div v-if="status === 'countdown'" class="grid grid-cols-4 gap-2 sm:gap-3 mt-7">
              <div
                v-for="item in countdownItems"
                :key="item.label"
                class="rounded-xl bg-white/10 border border-white/15 px-2 py-3 sm:p-4 text-center"
              >
                <div class="font-serif text-xl sm:text-3xl font-bold leading-none text-brand-gold300">
                  {{ item.value }}
                </div>
                <div class="mt-1 text-[8px] sm:text-[11px] font-black uppercase leading-none tracking-wide sm:tracking-widest text-white/70">
                  {{ item.label }}
                </div>
              </div>
            </div>

            <!-- Running / Ended -->
            <div v-else class="mt-7 rounded-xl bg-white/10 border border-white/15 p-4 sm:p-5 text-center text-sm sm:text-base font-bold">
              <template v-if="status === 'running'">The convention is now in progress.</template>
              <template v-else>Thank you for being part of the 2026 Regional Convention.</template>
            </div>

            <button
              type="button"
              class="mt-7 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-brand-gold500 text-brand-green950 text-sm sm:text-base font-extrabold px-6 py-3 shadow-[0_12px_28px_rgba(208,164,68,0.28)] hover:bg-[#dfb657] hover:-translate-y-[2px] transition-all"
              @click="addToCalendar"
            >
              <i class="fa-regular fa-calendar-plus"></i> Add to Calendar
            </button>
          </div>

          <!-- Info strip -->
          <div class="bg-brand-wine700 text-white text-xs sm:text-sm py-3 px-5">
            <div class="flex flex-wrap items-center justify-center gap-2 text-center">
              <span class="font-black uppercase tracking-wider text-brand-gold300">13th Regional Convention</span>
              <span>25–30 August 2026</span>
              <span class="hidden md:block h-1 w-1 rounded-full bg-brand-gold300"></span>
              <span>Holy Trinity A.M.E. Zion Church, Ndon Ebom, Akwa Ibom State, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// In-memory flag (not localStorage/sessionStorage) — this variable lives
// for as long as the page's JS is running. Navigating between routes with
// Vue Router keeps this same JS module loaded, so the flag survives and
// the modal won't reshow. A real browser refresh re-evaluates this module
// from scratch, resetting the flag automatically, so the modal shows again.
let hasBeenDismissedThisLoad = false

const isVisible = ref(false)

const start = new Date('2026-08-25T08:00:00+01:00').getTime()
const end = new Date('2026-08-30T18:00:00+01:00').getTime()

const days = ref('--')
const hours = ref('--')
const minutes = ref('--')
const seconds = ref('--')

const status = ref('countdown') // countdown | running | ended

const countdownItems = computed(() => [
  { label: 'Days', value: days.value },
  { label: 'Hours', value: hours.value },
  { label: 'Minutes', value: minutes.value },
  { label: 'Seconds', value: seconds.value },
])

function pad(num) {
  return String(num).padStart(2, '0')
}

function updateCountdown() {
  const now = Date.now()

  if (now >= start && now <= end) {
    status.value = 'running'
    return
  }

  if (now > end) {
    status.value = 'ended'
    return
  }

  status.value = 'countdown'

  let remaining = start - now

  const d = Math.floor(remaining / (1000 * 60 * 60 * 24))
  remaining %= 1000 * 60 * 60 * 24

  const h = Math.floor(remaining / (1000 * 60 * 60))
  remaining %= 1000 * 60 * 60

  const m = Math.floor(remaining / (1000 * 60))
  remaining %= 1000 * 60

  const s = Math.floor(remaining / 1000)

  days.value = d
  hours.value = pad(h)
  minutes.value = pad(m)
  seconds.value = pad(s)
}

let timer = null

function startTimer() {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
}

function stopTimer() {
  clearInterval(timer)
  timer = null
}

function addToCalendar() {
  const calendarContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//EWAED//Regional Convention 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:ewaed-regional-convention-2026@amez-ewaed.org',
    'DTSTAMP:20260624T120000Z',
    'DTSTART:20260825T070000Z',
    'DTEND:20260830T170000Z',
    'SUMMARY:EWAED 13th Regional Convention 2026',
    'DESCRIPTION:Empathy and Compassion. Reaching the masses in an ever-changing world.',
    'LOCATION:Holy Trinity A.M.E. Zion Church\\, Ndon Ebom-Uruan\\, Akwa Ibom State\\, Nigeria',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'ewaed-regional-convention-2026.ics'
  link.click()

  URL.revokeObjectURL(url)
}

function close() {
  isVisible.value = false
  document.body.style.overflow = ''
  hasBeenDismissedThisLoad = true
  stopTimer()
}

function handleKeydown(event) {
  if (event.key === 'Escape' && isVisible.value) close()
}

onMounted(() => {
  if (!hasBeenDismissedThisLoad) {
    isVisible.value = true
    document.body.style.overflow = 'hidden'
    startTimer()
  }
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
  stopTimer()
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 220ms ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>