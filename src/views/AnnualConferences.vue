<template>
  <main class="font-sans">
    <!-- Hero -->
    <section
      class="relative isolate overflow-hidden text-white [background:linear-gradient(110deg,rgba(8,41,29,.96),rgba(13,56,40,.84)_48%,rgba(8,41,29,.30)),url('/images/annual-conferences/wide.jpeg')_center/cover_no-repeat]"
    >
      <div class="absolute -left-40 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-brand-gold500/20 blur-2xl"></div>
      <div class="mx-auto grid min-h-[650px] w-[min(1180px,calc(100%-28px))] items-center py-24">
        <div class="max-w-4xl">
          <p class="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[.22em] text-brand-gold300 before:h-0.5 before:w-12 before:bg-brand-gold300">
            Annual Conferences
          </p>
          <h1 class="font-serif mt-5 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-bold leading-[.88] tracking-[-.045em]">
            One Episcopal District, fourteen conferences, one mission.
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Explore the Annual Conferences of the Eastern West Africa Episcopal District, their administrative leadership, districts, ministries, churches, records, and conference pages.
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <a
              href="#conference-list"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-gold500 px-6 text-sm font-black text-brand-green950 shadow-lg shadow-brand-gold500/25 transition hover:-translate-y-1 hover:bg-brand-gold300"
            >
              View Our Conferences <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section id="overview" class="relative -mt-16 z-10">
      <div class="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div class="grid overflow-hidden rounded-[1.7rem] bg-white shadow-brand-lg md:grid-cols-4">
          <div class="bg-brand-green900 p-7 text-white md:col-span-1">
            <small class="text-xs font-black uppercase tracking-[.18em] text-brand-gold300">Structure</small>
            <h2 class="font-serif mt-2 text-4xl font-bold leading-none">How the District is organized</h2>
          </div>
          <div class="grid gap-0 md:col-span-3 md:grid-cols-3">
            <div
              v-for="(item, index) in leadershipLevels"
              :key="item.title"
              class="p-7"
              :class="index < leadershipLevels.length - 1 ? 'border-b border-brand-green950/10 md:border-b-0 md:border-r' : ''"
            >
              <span class="grid h-12 w-12 place-items-center rounded-full bg-brand-gold500/15 text-[#9b6a16]">
                <i :class="item.icon"></i>
              </span>
              <h3 class="mt-4 font-black text-brand-green950">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-brand-muted">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-24">
      <div class="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div class="grid gap-5 md:grid-cols-4">
          <div v-for="stat in districtStats" :key="stat.label" class="rounded-3xl p-8 text-center shadow-brand-sm" :class="stat.class">
            <strong class="font-serif block text-6xl leading-none" :class="stat.numberClass">{{ stat.value }}</strong>
            <span class="mt-3 block text-xs font-black uppercase tracking-[.15em]" :class="stat.labelClass">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Conference directory -->
    <section id="conference-list" class="bg-white py-24">
      <div class="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div class="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <span class="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[.18em] text-brand-gold600 before:h-0.5 before:w-10 before:bg-brand-gold600">
              Conference Directory
            </span>
            <h2 class="font-serif mt-4 text-[clamp(2.5rem,5vw,4.8rem)] font-bold leading-[.95] tracking-[-.035em] text-brand-green950">
              Click to access each conference.
            </h2>
          </div>
          <div class="grid gap-4 rounded-3xl border border-brand-green950/10 bg-brand-cream p-5 shadow-brand-sm sm:grid-cols-[1fr_auto]">
            <label class="relative block">
              <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold600"></i>
              <input
                v-model="conferenceSearch"
                type="search"
                placeholder="Search conference, country or status..."
                class="h-12 w-full rounded-full border border-brand-green950/10 bg-white pl-11 pr-4 text-sm font-bold outline-none transition focus:border-brand-gold500 focus:ring-4 focus:ring-brand-gold500/15"
              />
            </label>
            <select
              v-model="conferenceFilter"
              class="h-12 rounded-full border border-brand-green950/10 bg-white px-4 text-sm font-black text-brand-green950 outline-none transition focus:border-brand-gold500 focus:ring-4 focus:ring-brand-gold500/15"
            >
              <option value="all">All Conferences</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Uganda">Uganda</option>
              <option value="Kenya">Kenya</option>
              <option value="Tanzania">Tanzania</option>
            </select>
          </div>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <router-link
            v-for="(conf, index) in filteredConferences"
            :key="conf.slug"
            :to="`/annual-conferences/${conf.slug}`"
            class="group relative overflow-hidden rounded-3xl border border-brand-green950/10 bg-brand-cream p-6 shadow-brand-sm transition hover:-translate-y-2 hover:border-brand-gold500/60 hover:shadow-brand-lg"
          >
            <span class="absolute right-5 top-5 font-serif text-6xl font-bold leading-none text-brand-green950/5">
              {{ String(conferences.indexOf(conf) + 1).padStart(2, '0') }}
            </span>
            <span
              class="inline-flex rounded-full px-3 py-1 text-[.68rem] font-black uppercase tracking-[.12em]"
              :class="conf.status.includes('Provisional') ? 'bg-brand-wine700 text-white' : 'bg-brand-gold500 text-brand-green950'"
            >
              {{ conf.status }}
            </span>
            <h3 class="font-serif relative mt-5 pr-10 text-3xl font-bold leading-none text-brand-green950 group-hover:text-brand-green700">
              {{ conf.name }}
            </h3>
            <div class="mt-5 grid gap-3 text-sm font-bold text-brand-muted">
              <span class="flex items-start gap-3"><i class="fa-solid fa-location-dot mt-1 text-brand-gold600"></i>{{ conf.region }}</span>
              <span class="flex items-start gap-3"><i class="fa-solid fa-user-tie mt-1 text-brand-gold600"></i>{{ conf.assistant }}</span>
              <span class="flex items-start gap-3"><i class="fa-solid fa-sitemap mt-1 text-brand-gold600"></i>{{ conf.districts }}</span>
            </div>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#9b6a16]">
              Open Conference Page <i class="fa-solid fa-arrow-right transition group-hover:translate-x-1"></i>
            </span>
          </router-link>
        </div>

        <p v-if="!filteredConferences.length" class="mt-10 text-center text-brand-muted font-bold">
          No conference matched your search.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// --- Overview cards ---
const leadershipLevels = [
  { icon: 'fa-solid fa-user-tie', title: 'The Bishop', desc: 'Provides episcopal oversight, spiritual direction, governance, and connectional leadership across the whole Episcopal District.' },
  { icon: 'fa-solid fa-user-tie', title: 'Bishop\u2019s Administrative Assistants', desc: 'Administer the Annual Conferences under episcopal authority and coordinate conference-level reporting and implementation.' },
  { icon: 'fa-solid fa-people-roof', title: 'Presiding Elders', desc: 'Administer the districts within each Annual Conference, supervise pastors and churches, and support local ministry work.' },
]

// --- Stats band ---
const districtStats = [
  { value: '14', label: 'Annual Conferences', class: 'bg-brand-green900 text-white', numberClass: 'text-brand-gold300', labelClass: 'text-white/70' },
  { value: '3', label: 'Leadership Levels', class: 'bg-white', numberClass: 'text-brand-green950', labelClass: 'text-brand-muted' },
  { value: '4', label: 'Countries', class: 'bg-white', numberClass: 'text-brand-green950', labelClass: 'text-brand-muted' },
  { value: '1', label: 'Episcopal District', class: 'bg-brand-wine700 text-white', numberClass: 'text-brand-gold300', labelClass: 'text-white/70' },
]

// --- Conference directory ---
// NOTE: :to points at /annual-conferences/:slug, a nested route whose
// children are the individual conference pages living in
// components/Conferences/*.vue. Each slug below must exactly match its
// component's filename (minus .vue) for the router to resolve it — see the
// router config snippet in the response for a setup that maps them
// automatically via import.meta.glob, so you don't have to hand-list 14
// route entries.
const conferences = [
  { name: 'Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'NigeriaConferences', region: 'Akwaibom', assistant: 'Rev. Dr. Ifreke E. Ekpenyong', districts: 'To be supplied' },
  { name: 'Central Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'CentralNigeriaConferences', region: 'To be supplied', assistant: 'Rev. Dr. Samuel O. Ibemere, SR', districts: 'To be supplied' },
  { name: 'Rivers Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'RiversNigeriaConferences', region: 'Rivers State', assistant: 'Rev. Dr. Umor Olu', districts: 'To be supplied' },
  { name: 'Lagos-West Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'LagosWestNigeriaConferences', region: 'Lagos, Oyo & Ogun', assistant: 'Rev. Dr. Michael S. Udoh', districts: '4 districts' },
  { name: 'Mainland Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'MainlandNigeriaConferences', region: 'Akwaibom', assistant: 'Rev. Dr. Samuel Asuamiom', districts: 'To be supplied' },
  { name: 'Northern Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'NorthernNigeriaConferences', region: 'FCT', assistant: 'Rev. Barr. Ozioha V. Ekemam', districts: 'To be supplied' },
  { name: 'Cross River Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'CrossRiverConferences', region: 'Cross River', assistant: 'Rev. Ekeng E. Ekeng', districts: 'To be supplied' },
  { name: 'South-Eastern Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'SouthEasternNigeriaConferences', region: 'Abia State', assistant: 'Rev. Dr. Godson N. Elijah', districts: 'To be supplied' },
  { name: 'Southern Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'SouthernNigeriaConferences', region: 'Akwaibom', assistant: 'Rev. Dr. Donald J. Ekpo', districts: 'To be supplied' },
  { name: 'Akwa Nigeria Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'AkwaNigeriaConferences', region: 'Akwaibom', assistant: 'Rev. Prof. Imo E. Umoinyang', districts: '6 districts' },
  { name: 'Port Harcourt Annual Conference', country: 'Nigeria', status: 'Annual Conference', slug: 'PortHarcourtConferences', region: 'Port Harcourt', assistant: 'Rev. Clement Eghuanoye-Graham', districts: 'To be supplied' },
  { name: 'Uganda Annual Conference', country: 'Uganda', status: 'Annual Conference', slug: 'UgandaConferences', region: 'Uganda', assistant: 'To be supplied', districts: 'To be supplied' },
  { name: 'Kenya Annual Conference', country: 'Kenya', status: 'AnnualConference', slug: 'KenyaConferences', region: 'Kenya', assistant: 'To be supplied', districts: 'To be supplied' },
  { name: 'Tanzania Annual Conference', country: 'Tanzania', status: 'AnnualConference', slug: 'TanzaniaConferences', region: 'Tanzania', assistant: 'To be supplied', districts: 'To be supplied' },
]

const conferenceSearch = ref('')
const conferenceFilter = ref('all')

function conferenceSearchText(conf) {
  return `${conf.name} ${conf.country} ${conf.status} ${conf.region} ${conf.assistant}`.toLowerCase()
}

const filteredConferences = computed(() => {
  const query = conferenceSearch.value.trim().toLowerCase()
  const filter = conferenceFilter.value

  return conferences.filter((conf) => {
    const matchQuery = !query || conferenceSearchText(conf).includes(query)
    const matchFilter = filter === 'all' || conf.country === filter || conf.status.includes(filter)
    return matchQuery && matchFilter
  })
})
</script>