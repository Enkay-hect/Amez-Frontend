<template>
  <section class="bg-gradient-to-r from-amber-600 to-amber-300 py-8">
    <div
      class="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_auto_auto] lg:items-center"
    >
      <div>
        <p class="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-800/70">
          Prepare to Gather
        </p>

        <h2 class="font-serif text-4xl font-bold text-slate-900">
          Convention Countdown
        </h2>
      </div>

      <div
        v-if="status === 'countdown'"
        class="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        <div
          v-for="item in countdownItems"
          :key="item.label"
          class="rounded-xl border border-white/40 bg-white/80 p-4 text-center shadow backdrop-blur"
        >
          <div class="font-serif text-3xl font-bold text-slate-900">
            {{ item.value }}
          </div>

          <div
            class="mt-1 text-[11px] font-black uppercase tracking-widest text-slate-700"
          >
            {{ item.label }}
          </div>
        </div>
      </div>

      <div
        v-else
        class="rounded-xl bg-white/80 p-5 text-center font-bold text-slate-900"
      >
        <template v-if="status === 'running'">
          The convention is now in progress.
        </template>

        <template v-else>
          Thank you for being part of the 2026 Regional Convention.
        </template>
      </div>

      <button
        @click="addToCalendar"
        class="rounded-full bg-white px-6 py-3 font-bold text-slate-900 shadow transition hover:-translate-y-1 hover:shadow-lg"
      >
        Add to Calendar
      </button>
    </div>
  </section>

  <section class="bg-[#1b092f] py-3 text-sm text-white">
    <div
      class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 text-center"
    >
      <span class="font-black uppercase tracking-wider text-amber-300">
        13th Regional Convention
      </span>

      <span>25–30 August 2026</span>

      <span class="hidden h-1 w-1 rounded-full bg-amber-400 sm:block"></span>

      <span>
        Holy Trinity A.M.E. Zion Church, Ndon Ebom, Akwa Ibom State, Nigeria
      </span>
    </div>
  </section>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const start = new Date("2026-08-25T08:00:00+01:00").getTime();
const end = new Date("2026-08-30T18:00:00+01:00").getTime();

const days = ref("--");
const hours = ref("--");
const minutes = ref("--");
const seconds = ref("--");

const status = ref("countdown"); // countdown | running | ended

const countdownItems = computed(() => [
  { label: "Days", value: days.value },
  { label: "Hours", value: hours.value },
  { label: "Minutes", value: minutes.value },
  { label: "Seconds", value: seconds.value },
]);

function pad(num) {
  return String(num).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();

  if (now >= start && now <= end) {
    status.value = "running";
    return;
  }

  if (now > end) {
    status.value = "ended";
    return;
  }

  status.value = "countdown";

  let remaining = start - now;

  const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
  remaining %= 1000 * 60 * 60 * 24;

  const h = Math.floor(remaining / (1000 * 60 * 60));
  remaining %= 1000 * 60 * 60;

  const m = Math.floor(remaining / (1000 * 60));

  remaining %= 1000 * 60;

  const s = Math.floor(remaining / 1000);

  days.value = d;
  hours.value = pad(h);
  minutes.value = pad(m);
  seconds.value = pad(s);
}

let timer;

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(timer));

function addToCalendar() {
  const calendarContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//EWAED//Regional Convention 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:ewaed-regional-convention-2026@amez-ewaed.org",
    "DTSTAMP:20260624T120000Z",
    "DTSTART:20260825T070000Z",
    "DTEND:20260830T170000Z",
    "SUMMARY:EWAED 13th Regional Convention 2026",
    "DESCRIPTION:Empathy and Compassion. Reaching the masses in an ever-changing world.",
    "LOCATION:Holy Trinity A.M.E. Zion Church\\, Ndon Ebom-Uruan\\, Akwa Ibom State\\, Nigeria",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([calendarContent], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "ewaed-regional-convention-2026.ics";
  link.click();

  URL.revokeObjectURL(url);
}
</script>