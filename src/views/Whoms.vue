<template>
  <div class="whoms-page font-sans text-[var(--ink)] [background:radial-gradient(circle_at_8%_4%,rgba(211,163,63,0.18),transparent_30rem),radial-gradient(circle_at_100%_0%,rgba(116,57,163,0.16),transparent_36rem),linear-gradient(180deg,#fffdf8_0%,#fbf6ff_50%,#fffaf0_100%)] leading-[1.65] overflow-x-hidden">
    <!-- Hero -->
    <section
      id="home"
      class="min-h-[600px] relative isolate text-white grid items-center overflow-hidden [background:linear-gradient(105deg,rgba(43,24,72,0.90)_0%,rgba(95,58,143,0.76)_52%,rgba(43,24,72,0.28)_100%),url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1900&q=80')_center/cover]"
    >
      <div class="absolute inset-0 -z-10 [background:radial-gradient(circle_at_18%_20%,rgba(199,136,29,0.22),transparent_20rem),radial-gradient(circle_at_92%_18%,rgba(255,255,255,0.10),transparent_18rem)]"></div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-[90px] [background:linear-gradient(0deg,var(--cream),transparent)]"></div>

      <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto grid grid-cols-[minmax(0,1fr)_minmax(280px,345px)] max-[1140px]:grid-cols-1 gap-[30px] items-center py-[76px_0_98px] pt-[76px] pb-[98px]">
        <div v-reveal class="reveal">
          <div class="inline-flex items-center gap-[10px] text-[var(--gold-300)] font-black tracking-[0.14em] uppercase text-[0.72rem] bg-white/[0.12] border border-white/[0.22] rounded-full py-[7px] px-[13px] backdrop-blur-[14px] mb-[18px]">
            <i class="fa-solid fa-hands-praying"></i> Faith &bull; Service &bull; Mission
          </div>
          <h1 class="font-[Cormorant_Garamond,Georgia,serif] max-w-[690px] text-[clamp(2.45rem,5.8vw,4.85rem)] leading-[0.98] mb-[18px]">
            Reaching The Masses in an Ever-Changing World: The Journey Continues&hellip;
          </h1>

          <div class="flex flex-wrap items-center gap-[10px] mb-7">
            <a href="#fieldworkers" class="inline-flex items-center justify-center gap-[10px] rounded-full py-[11px] px-5 text-[0.92rem] font-black text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_16px_34px_rgba(211,163,63,0.30)] hover:-translate-y-[3px] transition-transform">
              <i class="fa-solid fa-people-group"></i> Meet our Field Workers
            </a>
            <a href="#fiscal-officers" class="inline-flex items-center justify-center gap-[10px] rounded-full py-[11px] px-5 text-[0.92rem] font-black text-white bg-white/[0.12] border border-white/[0.42] backdrop-blur-[14px] hover:-translate-y-[3px] transition-transform">
              <i class="fa-solid fa-file-circle-check"></i> Meet our Officers
            </a>
          </div>

          <div class="grid grid-cols-4 max-[860px]:grid-cols-1 gap-[10px] w-[min(690px,100%)]">
            <div v-for="stat in heroStats" :key="stat.label" ref="statRefs" class="bg-white/[0.12] border border-white/[0.18] backdrop-blur-[10px] rounded-2xl py-[14px] px-[15px]">
              <strong class="block text-[var(--gold-300)] text-[1.62rem] leading-none mb-[7px] font-black">{{ stat.value }}</strong>
              <span class="block text-white/80 text-[0.78rem] font-extrabold">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="relative min-h-[360px] max-[1140px]:hidden" aria-hidden="true">
          <div class="absolute inset-0">
            <div class="absolute overflow-hidden rounded-[24px] border-[5px] border-white/[0.14] shadow-[0_22px_54px_rgba(43,24,72,0.15)] bg-[var(--purple-100)] w-[74%] h-[64%] top-[2%] right-0 animate-[float_5s_ease-in-out_infinite]">
              <img src="/images/MissionarySupervisor/missionarysupervisor.jpg" alt="" class="w-full h-full object-cover" />
            </div>
            <div class="absolute overflow-hidden rounded-[24px] border-[5px] border-white/[0.14] shadow-[0_22px_54px_rgba(43,24,72,0.15)] bg-[var(--purple-100)] w-[54%] h-[38%] left-0 bottom-0 animate-[float_6s_ease-in-out_infinite_reverse]">
              <img src="/images/Home/pic4.jpeg" alt="" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="absolute w-[min(265px,88%)] p-[15px] rounded-[18px] right-1 bottom-[34px] bg-white/95 text-[var(--purple-950)] shadow-[0_22px_54px_rgba(43,24,72,0.15)] [animation:rise_0.9s_ease_0.45s_both]">
            <i class="w-9 h-9 rounded-xl mb-[9px] grid place-items-center text-[var(--purple-950)] bg-[var(--gold-100)]"><i class="fa-solid fa-book-bible"></i></i>
            <strong class="block text-[0.96rem] leading-[1.3] mb-[7px]">&ldquo;Whatever you do, do it heartily, as to the Lord and not to men.&rdquo;</strong>
            <span class="text-[var(--muted)] font-bold text-[0.92rem]">Colossians 3:23</span>
          </div>
        </div>
      </div>
    </section>

    <main>
      <!-- Intro cards -->
      <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
        <div class="grid grid-cols-4 max-[1140px]:grid-cols-3 max-[640px]:grid-cols-1 gap-[14px] -mt-11 relative z-[3]">
          <article
            v-for="card in introCards"
            :key="card.title"
            v-reveal
            class="reveal bg-white border border-[var(--border)] rounded-[18px] shadow-[0_8px_22px_rgba(43,24,72,0.08)] p-[18px] transition-all hover:-translate-y-2 hover:shadow-[0_14px_34px_rgba(43,24,72,0.11)]"
            :class="'hover:border-[rgba(211,163,63,0.42)]'"
          >
            <div class="w-[46px] h-[46px] rounded-2xl grid place-items-center text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_8px_18px_rgba(199,136,29,0.18)] mb-[14px]">
              <i :class="card.icon"></i>
            </div>
            <h3 class="text-[var(--purple-950)] text-[1.02rem] leading-[1.25] mb-2">{{ card.title }}</h3>
            <p class="text-[var(--muted)] text-[0.9rem] leading-[1.55]">{{ card.desc }}</p>
          </article>
        </div>
      </div>

      <!-- Regional Convention advert -->
      <section id="regional-convention" class="pt-[54px] pb-[54px]">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div
            v-reveal
            aria-label="WH&OMS Regional Convention advert"
            class="reveal relative isolate grid grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] max-[980px]:grid-cols-1 items-stretch gap-[26px] overflow-hidden rounded-[26px] p-[clamp(26px,5vw,48px)] text-white [background:radial-gradient(circle_at_85%_20%,rgba(217,152,36,0.32),transparent_16rem),linear-gradient(135deg,#6f4aa3_0%,#8861bc_54%,#5d3c8d_100%)] shadow-[0_18px_42px_rgba(68,37,110,0.18)]"
          >
            <div class="pointer-events-none absolute inset-4 border border-white/20 rounded-[20px]"></div>
            <div class="absolute top-[18px] -right-[42px] w-[230px] text-center rotate-[34deg] py-2 px-3 [background:linear-gradient(135deg,var(--gold-600),var(--gold-500))] text-[var(--purple-950)] text-[0.72rem] font-black tracking-[0.06em] uppercase shadow-[0_10px_22px_rgba(0,0,0,0.16)] z-[2] max-[520px]:hidden">
              <i class="fa-solid fa-bullhorn"></i> Regional Convention
            </div>

            <div class="relative z-[1]">
              <span class="inline-flex items-center gap-[10px] text-[#ffe3a0] font-black tracking-[0.14em] uppercase text-[0.78rem]">
                <i class="fa-solid fa-calendar-days"></i> Coming this August
              </span>
              <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[clamp(2.2rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.035em] mb-[14px] mt-3">
                WH&amp;OMS Regional Convention 2026
              </h2>
              <p class="max-w-[720px] text-white/85 text-[1.03rem]">
                Join the Women&rsquo;s Home &amp; Overseas Missionary Society for a regional convention of worship, mission training, fellowship, stewardship, and renewed commitment to compassionate service.
              </p>
              <div class="flex flex-wrap gap-[10px] my-5 mb-6">
                <span
                  v-for="meta in conventionMeta"
                  :key="meta.text"
                  class="inline-flex items-center gap-2 border border-white/[0.18] bg-white/[0.11] rounded-full py-[9px] px-[13px] text-white/90 font-extrabold backdrop-blur-[10px]"
                >
                  <i :class="meta.icon" class="text-[#ffe3a0]"></i> {{ meta.text }}
                </span>
              </div>
            </div>

            <div aria-label="Regional convention flyer display panel" class="relative z-[1] self-stretch w-full grid gap-[14px] p-[14px] rounded-[24px] bg-white/[0.92] text-[var(--purple-950)] border border-white/55 shadow-[0_20px_44px_rgba(43,24,72,0.16)] [animation:float_4.8s_ease-in-out_infinite]">
              <div class="relative w-full aspect-video rounded-[18px] overflow-hidden grid place-items-center text-center [background:linear-gradient(135deg,rgba(255,249,236,0.98),rgba(249,246,255,0.98))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.68)]">
                <img v-if="flyerUrl" :src="flyerUrl" alt="Official WH&OMS Regional Convention flyer" class="w-full h-full object-contain bg-white" />
                <div v-else class="grid place-items-center gap-2 p-[clamp(16px,3vw,28px)] text-[var(--purple-850)] w-full h-full">
                  <i class="w-[62px] h-[62px] rounded-2xl grid place-items-center [background:linear-gradient(135deg,var(--gold-700),var(--gold-500))] text-white text-[1.65rem] shadow-[0_14px_28px_rgba(177,117,26,0.22)]">
                    <i class="fa-solid fa-scroll"></i>
                  </i>
                  <strong class="font-[Cormorant_Garamond,Georgia,serif] text-[1.18rem] leading-none text-[var(--purple-950)]">Convention Flyer</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-16">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto grid grid-cols-2 max-[860px]:grid-cols-1 gap-[34px] items-center">
          <div v-reveal class="reveal bg-white border border-[var(--border)] rounded-[22px] shadow-[0_8px_22px_rgba(43,24,72,0.08)] relative overflow-hidden p-[clamp(22px,3vw,32px)]">
            <div class="absolute w-[170px] h-[170px] rounded-full bg-[rgba(211,163,63,0.14)] -right-20 -bottom-[90px]"></div>
            <div class="max-w-[720px] mb-6 relative z-[1]">
              <span class="inline-flex items-center gap-[10px] text-[var(--gold-600)] font-black tracking-[0.14em] uppercase text-[0.78rem] mb-2">
                <i class="fa-solid fa-star"></i> Department Profile
              </span>
              <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.85rem,3.8vw,3.2rem)] leading-[1.06] mb-[10px] mt-2">
                Nurturing Faith for all ages&hellip;
              </h2>
              <p class="text-[var(--muted)] text-[0.98rem]">
                The Women&rsquo;s Home and Overseas Missionary Society advances the mission of The A.M.E. Zion Church through six departments serving different generations and areas of ministry.
              </p>
            </div>
            <p class="relative z-[1] text-[0.98rem]">
              From the Buds of Promise to the Parent Body, WH&amp;OMS nurtures spiritual growth, Christian leadership and missionary service across generations. The Bureau of Supply supports missions at home and overseas, while the Life Members Council strengthens fellowship and commitment to Zion.
            </p>
            <p class="relative z-[1] text-[0.98rem] mt-4">
              Together, the departments advance evangelism, Christian education, community outreach and the Kingdom of God.
            </p>
            <div class="relative z-[1] flex flex-wrap gap-2 mt-[18px]">
              <span v-for="place in servedPlaces" :key="place" class="inline-flex items-center gap-2 py-[7px] px-3 border border-[var(--border)] rounded-full text-[var(--purple-800)] bg-[var(--purple-50)] font-black text-[0.82rem]">
                <i class="fa-solid fa-location-dot"></i> {{ place }}
              </span>
            </div>
          </div>

          <div v-reveal class="reveal group min-h-[390px] rounded-[24px] overflow-hidden relative bg-[var(--purple-100)] shadow-[0_14px_34px_rgba(43,24,72,0.11)]">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80"
              alt="Community outreach and mission support"
              class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.06]"
            />
            <div class="absolute left-[18px] bottom-[18px] bg-white/[0.92] text-[var(--purple-950)] rounded-2xl py-[11px] px-[14px] font-black text-[0.92rem] shadow-[0_14px_34px_rgba(27,9,47,0.15)]">
              <i class="fa-solid fa-heart"></i> Mission with compassion
            </div>
          </div>
        </div>
      </section>

      <!-- Supervisor -->
      <section id="supervisor" class="py-[50px]">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div
            v-reveal
            class="reveal text-white relative overflow-hidden rounded-[26px] p-[clamp(24px,4vw,42px)] shadow-[0_22px_54px_rgba(43,24,72,0.15)] [background:radial-gradient(circle_at_top_right,rgba(199,136,29,0.20),transparent_20rem),linear-gradient(135deg,rgba(95,58,143,0.94),rgba(43,24,72,0.94))]"
          >
            <div class="absolute w-[440px] h-[440px] right-[-130px] top-[-160px] bg-[rgba(211,163,63,0.16)] rounded-full [animation:pulseGlow_5.5s_ease-in-out_infinite]"></div>

            <div class="relative z-[1] grid grid-cols-[0.58fr_1.42fr] max-[860px]:grid-cols-1 gap-[30px] items-center">
              <div class="aspect-[4/5] max-h-[360px] rounded-[22px] overflow-hidden border-[6px] border-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.25)] mx-auto max-[860px]:max-w-[360px] max-[860px]:w-full">
                <img src="/images/MissionarySupervisor/missionarysupervisor.jpg" alt="Missionary supervisor" class="w-full h-full object-cover" />
              </div>
              <div>
                <span class="inline-flex items-center gap-[10px] text-[var(--gold-300)] font-black tracking-[0.14em] uppercase text-[0.78rem]">
                  <i class="fa-solid fa-user-tie"></i> Missionary Supervisor
                </span>
                <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1] my-2">Mrs. Promise C. Effiong</h2>
                <p class="text-[var(--gold-300)] font-black mb-[18px]">Missionary Supervisor, Women&rsquo;s Home &amp; Overseas Missionary Society &ndash; EWAED</p>
                <p class="text-white/85">
                  Under faithful leadership, WH&amp;OMS continues to strengthen conference societies, support women&rsquo;s ministry, advance community outreach and promote accountability in missionary work. Mrs. Promise C. Effiong is a devoted member of the African Methodist Episcopal Zion Church, with many years of service in Christian education and missionary leadership.
                </p>
                <p class="text-white/85 mt-4">
                  She has served in several capacities within the Women&rsquo;s Home and Overseas Missionary Society, including District President and Conference Worker. Appointed Missionary Supervisor of the Eastern West Africa Episcopal District in 2016, her ministry has continued to expand across Africa. She currently provides missionary leadership across 11 Annual Conferences in Nigeria, Uganda and Burundi, advancing discipleship, women&rsquo;s ministry and Christian service.
                </p>
                <div class="grid grid-cols-2 max-[860px]:grid-cols-1 gap-[9px] mt-[18px]">
                  <span
                    v-for="meta in supervisorMeta"
                    :key="meta.text"
                    class="flex items-center gap-[10px] bg-white/10 border border-white/15 rounded-xl py-[10px] px-3 text-white/90 font-extrabold text-[0.88rem]"
                  >
                    <i :class="meta.icon" class="text-[var(--gold-300)]"></i> {{ meta.text }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Personnel directory -->
      <section id="team-directory" class="py-16 [background:linear-gradient(180deg,rgba(255,255,255,0.76),rgba(252,249,255,0.86)),radial-gradient(circle_at_12%_14%,rgba(199,136,29,0.10),transparent_18rem)] border-y border-[var(--border)]">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div v-reveal class="reveal max-w-[720px] mx-auto text-center mb-5">
            <span class="inline-flex items-center justify-center gap-[10px] text-[var(--gold-600)] font-black tracking-[0.14em] uppercase text-[0.78rem] mb-2">
              <i class="fa-solid fa-address-card"></i> Personnel Directory
            </span>
            <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.85rem,3.8vw,3.2rem)] leading-[1.06] mb-[10px] mt-2">Field Workers and Officers</h2>
            <p class="text-[var(--muted)] text-[0.98rem]">Meet our Leaders</p>
          </div>

          <div v-reveal aria-label="Directory controls" class="reveal grid grid-cols-[minmax(0,1fr)_auto] max-[860px]:grid-cols-1 gap-3 items-center mb-5">
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-[18px] top-1/2 -translate-y-1/2 text-[var(--gold-600)]"></i>
              <input
                v-model="teamSearch"
                type="search"
                placeholder="Search name, role, conference or country..."
                class="w-full border border-[var(--border)] bg-white rounded-full py-[11px] pl-[44px] pr-[18px] text-[var(--ink)] outline-none shadow-[0_6px_16px_rgba(43,24,72,0.06)] focus:border-[rgba(211,163,63,0.62)] focus:shadow-[0_16px_38px_rgba(211,163,63,0.18)] transition-all"
              />
            </div>
            <div role="group" aria-label="Filter team cards" class="flex flex-wrap justify-end max-[860px]:justify-start gap-[10px]">
              <button
                v-for="filter in teamFilters"
                :key="filter.value"
                type="button"
                class="border border-[var(--border)] text-[var(--purple-950)] bg-white rounded-full py-[10px] px-[14px] font-black text-[0.88rem] transition-all hover:-translate-y-[2px]"
                :class="activeFilter === filter.value ? '!border-[rgba(211,163,63,0.50)] !bg-[var(--gold-100)] !text-[var(--purple-800)] -translate-y-[2px]' : ''"
                @click="activeFilter = filter.value"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>

          <!-- Field workers -->
          <div v-show="activeFilter === 'all' || activeFilter === 'fieldworker'" id="fieldworkersBlock">
            <div id="fieldworkers" v-reveal class="reveal flex items-center justify-between gap-5 my-[30px] mb-4 pb-[14px] border-b border-[var(--border)]">
              <h3 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.55rem,2.6vw,2.2rem)] leading-none">Field Workers</h3>
            </div>

            <div ref="fieldworkersCarouselEl" v-reveal aria-label="Fieldworkers carousel" class="reveal grid grid-cols-[46px_minmax(0,1fr)_46px] max-[520px]:grid-cols-2 items-center gap-[10px]">
              <button
                type="button"
                aria-label="Previous fieldworker"
                :disabled="filteredFieldworkers.length <= 1"
                class="w-[46px] h-[46px] max-[520px]:col-start-1 max-[520px]:row-start-2 max-[520px]:justify-self-end grid place-items-center rounded-full border border-[rgba(169,107,16,0.35)] text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_12px_24px_rgba(169,107,16,0.20)] transition-all hover:-translate-y-[3px] disabled:opacity-40 disabled:pointer-events-none disabled:translate-y-0 disabled:shadow-none"
                @click="moveFieldworker(-1)"
              >
                <i class="fa-solid fa-arrow-left"></i>
              </button>

              <div class="max-[520px]:col-span-2 max-[520px]:row-start-1 overflow-hidden rounded-[24px] bg-white/[0.72] border border-[var(--border)] shadow-[0_12px_28px_rgba(43,24,72,0.08)]">
                <div class="min-h-[360px] max-[860px]:min-h-0 grid" aria-live="polite">
                  <div v-if="!filteredFieldworkers.length" class="min-h-[260px] grid place-items-center text-center p-8 text-[var(--muted)] bg-white">
                    <div>
                      <i class="fa-solid fa-magnifying-glass text-[var(--gold-600)] text-[2rem] mb-[10px]"></i>
                      <strong class="block">No fieldworker matched your search.</strong>
                      <p>Try searching by another name, conference or country.</p>
                    </div>
                  </div>
                  <article
                    v-else
                    :key="filteredFieldworkers[fieldworkerIndex]?.name"
                    class="[animation:slideSoft_0.38s_ease_both] grid grid-cols-[0.42fr_0.58fr] max-[860px]:grid-cols-1"
                  >
                    <div class="min-h-[360px] max-[860px]:min-h-[260px] max-[860px]:h-[260px] [background:linear-gradient(135deg,var(--purple-100),var(--gold-100))] overflow-hidden">
                      <img
                        :src="filteredFieldworkers[fieldworkerIndex]?.image"
                        :alt="`${filteredFieldworkers[fieldworkerIndex]?.name} portrait`"
                        loading="lazy"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="p-[clamp(24px,4vw,42px)] flex flex-col justify-center">
                      <h3 class="font-[Cormorant_Garamond,Georgia,serif] text-[clamp(2rem,4vw,3.2rem)] leading-none mb-2 text-[var(--purple-950)]">
                        {{ filteredFieldworkers[fieldworkerIndex]?.name }}
                      </h3>
                      <span class="text-[var(--gold-700)] text-[0.95rem] tracking-[0.08em] uppercase">{{ filteredFieldworkers[fieldworkerIndex]?.role }}</span>
                      <div class="grid grid-cols-2 max-[860px]:grid-cols-1 gap-[10px] mt-5">
                        <span class="bg-[var(--purple-50)] border border-[var(--border)] rounded-2xl py-[10px] px-3 flex items-center gap-2 text-[var(--muted)] text-[0.86rem] font-extrabold">
                          <i class="fa-solid fa-church text-[var(--purple-700)] w-[15px]"></i> {{ filteredFieldworkers[fieldworkerIndex]?.conference }}
                        </span>
                        <span class="bg-[var(--purple-50)] border border-[var(--border)] rounded-2xl py-[10px] px-3 flex items-center gap-2 text-[var(--muted)] text-[0.86rem] font-extrabold">
                          <i class="fa-solid fa-location-dot text-[var(--purple-700)] w-[15px]"></i> {{ filteredFieldworkers[fieldworkerIndex]?.location }}
                        </span>
                        <span class="bg-[var(--purple-50)] border border-[var(--border)] rounded-2xl py-[10px] px-3 flex items-center gap-2 text-[var(--muted)] text-[0.86rem] font-extrabold">
                          <i class="fa-solid fa-envelope text-[var(--purple-700)] w-[15px]"></i> {{ filteredFieldworkers[fieldworkerIndex]?.email }}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <button
                type="button"
                aria-label="Next fieldworker"
                :disabled="filteredFieldworkers.length <= 1"
                class="w-[46px] h-[46px] max-[520px]:col-start-2 max-[520px]:row-start-2 max-[520px]:justify-self-start grid place-items-center rounded-full border border-[rgba(169,107,16,0.35)] text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_12px_24px_rgba(169,107,16,0.20)] transition-all hover:-translate-y-[3px] disabled:opacity-40 disabled:pointer-events-none disabled:translate-y-0 disabled:shadow-none"
                @click="moveFieldworker(1)"
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div v-reveal class="reveal flex items-center justify-between gap-4 mt-4 text-[var(--muted)] font-black">
              <span>{{ fieldworkerStatus }}</span>
              <div aria-label="Fieldworker position controls" class="flex items-center justify-end gap-[7px] flex-wrap">
                <button
                  v-for="(item, index) in filteredFieldworkers"
                  :key="item.name"
                  type="button"
                  :aria-label="`Show ${item.name}`"
                  class="h-[10px] rounded-full transition-all"
                  :class="index === fieldworkerIndex ? 'w-7 bg-[var(--gold-600)]' : 'w-[10px] bg-[rgba(95,58,143,0.26)]'"
                  @click="fieldworkerIndex = index"
                ></button>
              </div>
            </div>
          </div>

          <!-- Fiscal officers -->
          <div v-show="activeFilter === 'all' || activeFilter === 'fiscal'" id="fiscalBlock">
            <div id="fiscal-officers" v-reveal class="reveal flex items-center justify-between gap-5 my-[30px] mb-4 pb-[14px] border-b border-[var(--border)]">
              <h3 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.55rem,2.6vw,2.2rem)] leading-none">Officers</h3>
            </div>

            <div ref="fiscalCarouselEl" v-reveal aria-label="Fiscal officers carousel" class="reveal grid grid-cols-[46px_minmax(0,1fr)_46px] max-[520px]:grid-cols-2 items-center gap-[10px]">
              <button
                type="button"
                aria-label="Previous fiscal officer"
                :disabled="filteredFiscalOfficers.length <= 1"
                class="w-[46px] h-[46px] max-[520px]:col-start-1 max-[520px]:row-start-2 max-[520px]:justify-self-end grid place-items-center rounded-full border border-[rgba(169,107,16,0.35)] text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_12px_24px_rgba(169,107,16,0.20)] transition-all hover:-translate-y-[3px] disabled:opacity-40 disabled:pointer-events-none disabled:translate-y-0 disabled:shadow-none"
                @click="moveFiscalOfficer(-1)"
              >
                <i class="fa-solid fa-arrow-left"></i>
              </button>

              <div class="max-[520px]:col-span-2 max-[520px]:row-start-1 overflow-hidden rounded-[24px] bg-white/[0.72] border border-[var(--border)] shadow-[0_12px_28px_rgba(43,24,72,0.08)]">
                <div class="min-h-[360px] max-[860px]:min-h-0 grid" aria-live="polite">
                  <div v-if="!filteredFiscalOfficers.length" class="min-h-[260px] grid place-items-center text-center p-8 text-[var(--muted)] bg-white">
                    <div>
                      <i class="fa-solid fa-magnifying-glass text-[var(--gold-600)] text-[2rem] mb-[10px]"></i>
                      <strong class="block">No fiscal officer matched your search.</strong>
                      <p>Try searching by another name, conference or country.</p>
                    </div>
                  </div>
                  <article
                    v-else
                    :key="filteredFiscalOfficers[fiscalIndex]?.name"
                    class="[animation:slideSoft_0.38s_ease_both] grid grid-cols-[0.42fr_0.58fr] max-[860px]:grid-cols-1"
                  >
                    <div class="min-h-[360px] max-[860px]:min-h-[260px] max-[860px]:h-[260px] [background:linear-gradient(135deg,var(--gold-100),var(--purple-100))] overflow-hidden">
                      <img
                        :src="filteredFiscalOfficers[fiscalIndex]?.image"
                        :alt="`${filteredFiscalOfficers[fiscalIndex]?.name} portrait`"
                        loading="lazy"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="p-[clamp(24px,4vw,42px)] flex flex-col justify-center">
                      <h3 class="font-[Cormorant_Garamond,Georgia,serif] text-[clamp(2rem,4vw,3.2rem)] leading-none mb-2 text-[var(--purple-950)]">
                        {{ filteredFiscalOfficers[fiscalIndex]?.name }}
                      </h3>
                      <span class="text-[var(--gold-700)] text-[0.95rem] tracking-[0.08em] uppercase">{{ filteredFiscalOfficers[fiscalIndex]?.role }}</span>
                      <div class="grid grid-cols-2 max-[860px]:grid-cols-1 gap-[10px] mt-5">
                        <span class="bg-[var(--purple-50)] border border-[var(--border)] rounded-2xl py-[10px] px-3 flex items-center gap-2 text-[var(--muted)] text-[0.86rem] font-extrabold">
                          <i class="fa-solid fa-church text-[var(--purple-700)] w-[15px]"></i> {{ filteredFiscalOfficers[fiscalIndex]?.conference || '&mdash;' }}
                        </span>
                        <span class="bg-[var(--purple-50)] border border-[var(--border)] rounded-2xl py-[10px] px-3 flex items-center gap-2 text-[var(--muted)] text-[0.86rem] font-extrabold">
                          <i class="fa-solid fa-location-dot text-[var(--purple-700)] w-[15px]"></i> {{ filteredFiscalOfficers[fiscalIndex]?.location }}
                        </span>
                        <span class="bg-[var(--purple-50)] border border-[var(--border)] rounded-2xl py-[10px] px-3 flex items-center gap-2 text-[var(--muted)] text-[0.86rem] font-extrabold">
                          <i class="fa-solid fa-envelope text-[var(--purple-700)] w-[15px]"></i> {{ filteredFiscalOfficers[fiscalIndex]?.email }}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <button
                type="button"
                aria-label="Next fiscal officer"
                :disabled="filteredFiscalOfficers.length <= 1"
                class="w-[46px] h-[46px] max-[520px]:col-start-2 max-[520px]:row-start-2 max-[520px]:justify-self-start grid place-items-center rounded-full border border-[rgba(169,107,16,0.35)] text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_12px_24px_rgba(169,107,16,0.20)] transition-all hover:-translate-y-[3px] disabled:opacity-40 disabled:pointer-events-none disabled:translate-y-0 disabled:shadow-none"
                @click="moveFiscalOfficer(1)"
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div v-reveal class="reveal flex items-center justify-between gap-4 mt-4 text-[var(--muted)] font-black">
              <span>{{ fiscalStatus }}</span>
              <div aria-label="Fiscal officer position controls" class="flex items-center justify-end gap-[7px] flex-wrap">
                <button
                  v-for="(item, index) in filteredFiscalOfficers"
                  :key="item.name"
                  type="button"
                  :aria-label="`Show ${item.name}`"
                  class="h-[10px] rounded-full transition-all"
                  :class="index === fiscalIndex ? 'w-7 bg-[var(--gold-600)]' : 'w-[10px] bg-[rgba(95,58,143,0.26)]'"
                  @click="fiscalIndex = index"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Directorates -->
      <section id="directorates" class="py-16">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div v-reveal class="reveal max-w-[720px] mx-auto text-center mb-6">
            <span class="inline-flex items-center justify-center gap-[10px] text-[var(--gold-600)] font-black tracking-[0.14em] uppercase text-[0.78rem] mb-2">
              <i class="fa-solid fa-diagram-project"></i> Directorates
            </span>
            <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.85rem,3.8vw,3.2rem)] leading-[1.06] mb-[10px] mt-2">Organized for effective mission impact.</h2>
            <p class="text-[var(--muted)] text-[0.98rem]">Each directorate gives structure to mission work and helps local churches turn compassion into practical ministry action.</p>
          </div>

          <div class="grid grid-cols-3 max-[1140px]:grid-cols-2 max-[640px]:grid-cols-1 gap-4">
            <article
              v-for="dept in directorates"
              :key="dept.title"
              v-reveal
              class="reveal relative overflow-hidden bg-white border border-[var(--border)] rounded-[18px] shadow-[0_8px_22px_rgba(43,24,72,0.08)] p-5 transition-all hover:-translate-y-[5px] hover:shadow-[0_14px_34px_rgba(43,24,72,0.11)] group"
            >
              <span class="absolute inset-x-[22px] -bottom-px h-1 rounded-t-full [background:linear-gradient(90deg,var(--gold-500),var(--purple-600))] opacity-0 transition-opacity group-hover:opacity-100"></span>
              <div class="w-[46px] h-[46px] rounded-2xl grid place-items-center text-[var(--purple-950)] [background:linear-gradient(135deg,var(--gold-500),var(--gold-300))] shadow-[0_8px_18px_rgba(199,136,29,0.18)] mb-[14px]">
                <i :class="dept.icon"></i>
              </div>
              <h3 class="text-[var(--purple-950)] text-[1.02rem] leading-[1.25] mb-2">{{ dept.title }}</h3>
              <p class="text-[var(--muted)] text-[0.9rem] leading-[1.55]">{{ dept.desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Impact -->
      <section id="impact" class="py-[50px]">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div
            v-reveal
            class="reveal text-white rounded-[26px] p-[clamp(24px,4vw,44px)] grid grid-cols-[0.9fr_1.1fr] max-[860px]:grid-cols-1 gap-7 items-center overflow-hidden shadow-[0_22px_54px_rgba(43,24,72,0.15)] [background:radial-gradient(circle_at_top_left,rgba(199,136,29,0.22),transparent_20rem),linear-gradient(135deg,rgba(43,24,72,0.92),rgba(95,58,143,0.88)),url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80')_center/cover]"
          >
            <div>
              <span class="inline-flex items-center gap-[10px] text-[var(--gold-300)] font-black tracking-[0.14em] uppercase text-[0.78rem]">
                <i class="fa-solid fa-globe-africa"></i> Mission Highlights
              </span>
              <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[clamp(1.8rem,3.5vw,3.1rem)] leading-none my-3">Serving communities beyond the church walls.</h2>
              <p class="text-white/85">From feeding programs to vocational training and health support, the department brings the church&rsquo;s witness into everyday community needs.</p>
            </div>
            <div class="grid gap-[10px]">
              <div v-for="item in impactItems" :key="item.title" class="flex items-start gap-3 bg-white/[0.11] border border-white/15 rounded-[14px] p-[13px] backdrop-blur-[14px]">
                <i :class="item.icon" class="w-[34px] h-[34px] shrink-0 rounded-[10px] grid place-items-center text-[var(--purple-950)] bg-[var(--gold-300)]"></i>
                <div>
                  <strong class="block">{{ item.title }}</strong>
                  <p class="text-white/85">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Events -->
      <section id="events" class="py-16">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div v-reveal class="reveal max-w-[720px] mx-auto text-center mb-6">
            <span class="inline-flex items-center justify-center gap-[10px] text-[var(--gold-600)] font-black tracking-[0.14em] uppercase text-[0.78rem] mb-2">
              <i class="fa-solid fa-calendar-days"></i> Programs
            </span>
            <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.85rem,3.8vw,3.2rem)] leading-[1.06] mb-[10px] mt-2">Upcoming department activities.</h2>
            <p class="text-[var(--muted)] text-[0.98rem]">Join us as we extend attributes of Jesus to our communities</p>
          </div>

          <div class="grid grid-cols-3 max-[1140px]:grid-cols-2 max-[640px]:grid-cols-1 gap-4">
            <article
              v-for="event in upcomingEvents"
              :key="event.title"
              v-reveal
              class="reveal overflow-hidden bg-white border border-[var(--border)] rounded-[18px] shadow-[0_8px_22px_rgba(43,24,72,0.08)] transition-all hover:-translate-y-[5px] hover:shadow-[0_14px_34px_rgba(43,24,72,0.11)]"
            >
              <div class="h-[175px] bg-cover bg-center" :style="{ backgroundImage: `url('${event.image}')` }"></div>
              <div class="p-5">
                <div class="w-[58px] h-[58px] inline-grid place-items-center rounded-2xl text-white bg-[var(--purple-800)] font-black leading-[1.05] mb-[14px] shadow-[0_12px_26px_rgba(66,26,107,0.22)]">
                  {{ event.day }} <span class="block text-[var(--gold-300)] text-[0.72rem] tracking-[0.12em]">{{ event.month }}</span>
                </div>
                <h3 class="text-[var(--purple-950)] text-[1.02rem] leading-[1.25] mb-2">{{ event.title }}</h3>
                <p class="text-[var(--muted)] text-[0.9rem] leading-[1.55]">{{ event.desc }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-[50px]">
        <div class="w-[min(1180px,calc(100%_-_40px))] mx-auto">
          <div v-reveal class="reveal bg-white border border-[var(--border)] rounded-[26px] shadow-[0_8px_22px_rgba(43,24,72,0.08)] p-[clamp(24px,4vw,40px)] grid grid-cols-[0.85fr_1.15fr] max-[860px]:grid-cols-1 gap-7 items-start [background:radial-gradient(circle_at_top_left,rgba(211,163,63,0.20),transparent_24rem),var(--white)]">
            <div>
              <span class="inline-flex items-center gap-[10px] text-[var(--gold-600)] font-black tracking-[0.14em] uppercase text-[0.78rem]">
                <i class="fa-solid fa-envelope-open-text"></i> Contact WH&amp;OMS
              </span>
              <h2 class="font-[Cormorant_Garamond,Georgia,serif] text-[var(--purple-950)] text-[clamp(1.8rem,3.5vw,3rem)] leading-none my-[14px]">Connect with the department.</h2>
              <p class="text-[var(--muted)]">Please reach out for enquiries, support, reporting, program collaboration and official department communication.</p>
              <div class="grid gap-[10px] mt-[18px]">
                <span v-for="item in contactList" :key="item.text" class="flex items-center gap-3 text-[var(--muted)] font-extrabold">
                  <i :class="item.icon" class="w-[34px] h-[34px] rounded-[11px] grid place-items-center text-[var(--purple-950)] bg-[var(--gold-100)]"></i> {{ item.text }}
                </span>
              </div>
            </div>

            <form class="grid grid-cols-2 max-[640px]:grid-cols-1 gap-4" @submit.prevent="handleContactSubmit">
              <div class="grid gap-[6px]">
                <label for="whomsName" class="text-[var(--purple-950)] font-black">Full Name</label>
                <input id="whomsName" v-model="contactForm.name" type="text" placeholder="Enter your name" class="w-full border border-[var(--border)] rounded-[14px] bg-[var(--purple-50)] text-[var(--ink)] py-[11px] px-[13px] outline-none focus:border-[rgba(211,163,63,0.64)] focus:bg-white focus:shadow-[0_14px_34px_rgba(211,163,63,0.14)] transition-all" />
              </div>
              <div class="grid gap-[6px]">
                <label for="whomsEmail" class="text-[var(--purple-950)] font-black">Email Address</label>
                <input id="whomsEmail" v-model="contactForm.email" type="email" placeholder="Enter your email" class="w-full border border-[var(--border)] rounded-[14px] bg-[var(--purple-50)] text-[var(--ink)] py-[11px] px-[13px] outline-none focus:border-[rgba(211,163,63,0.64)] focus:bg-white focus:shadow-[0_14px_34px_rgba(211,163,63,0.14)] transition-all" />
              </div>
              <div class="grid gap-[6px]">
                <label for="whomsPurpose" class="text-[var(--purple-950)] font-black">Purpose</label>
                <select id="whomsPurpose" v-model="contactForm.purpose" class="w-full border border-[var(--border)] rounded-[14px] bg-[var(--purple-50)] text-[var(--ink)] py-[11px] px-[13px] outline-none focus:border-[rgba(211,163,63,0.64)] focus:bg-white focus:shadow-[0_14px_34px_rgba(211,163,63,0.14)] transition-all">
                  <option>General enquiry</option>
                  <option>Mission support</option>
                  <option>Fieldworker update</option>
                  <option>Reports</option>
                </select>
              </div>
              <div class="grid gap-[6px]">
                <label for="whomsPhone" class="text-[var(--purple-950)] font-black">Phone Number</label>
                <input id="whomsPhone" v-model="contactForm.phone" type="tel" placeholder="Enter phone number" class="w-full border border-[var(--border)] rounded-[14px] bg-[var(--purple-50)] text-[var(--ink)] py-[11px] px-[13px] outline-none focus:border-[rgba(211,163,63,0.64)] focus:bg-white focus:shadow-[0_14px_34px_rgba(211,163,63,0.14)] transition-all" />
              </div>
              <div class="grid gap-[6px] col-span-2 max-[640px]:col-span-1">
                <label for="whomsMessage" class="text-[var(--purple-950)] font-black">Message</label>
                <textarea id="whomsMessage" v-model="contactForm.message" placeholder="Write your message here..." class="w-full min-h-[110px] border border-[var(--border)] rounded-[14px] bg-[var(--purple-50)] text-[var(--ink)] py-[11px] px-[13px] outline-none resize-y focus:border-[rgba(211,163,63,0.64)] focus:bg-white focus:shadow-[0_14px_34px_rgba(211,163,63,0.14)] transition-all"></textarea>
              </div>
              <div v-if="formStatus" aria-live="polite" class="col-span-2 max-[640px]:col-span-1 text-[var(--muted)] text-[0.9rem] font-bold">{{ formStatus }}</div>
              <button type="submit" class="col-span-2 max-[640px]:col-span-1 inline-flex items-center justify-center gap-[10px] rounded-full py-3 px-5 font-black text-white bg-[var(--purple-800)] shadow-[0_16px_34px_rgba(66,26,107,0.23)] hover:-translate-y-[3px] transition-transform">
                <i class="fa-solid fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

/* ---------------------------------------------------------------------- *
 * v-reveal: same scroll-in pattern used across the rest of the site.
 * ------------------------------------------------------------------- */
const vReveal = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el) {
    el.__revealObserver?.disconnect()
  },
}

// --- Static, data-driven content ---
const introCards = [
  { icon: 'fa-solid fa-church', title: 'Church Mission', desc: 'Mobilizing women for worship, witness, discipleship and compassionate care.' },
  { icon: 'fa-solid fa-hand-holding-heart', title: 'Community Care', desc: 'Supporting children, families, widows and vulnerable communities with dignity.' },
  { icon: 'fa-solid fa-briefcase', title: 'Field Structure', desc: 'A dedicated space for 12 fieldworkers with profile photos and ministry locations.' },
  { icon: 'fa-solid fa-coins', title: 'Fiscal Stewardship', desc: 'A clean directory for 10 fiscal officers responsible for reporting and accountability.' },
]

const conventionMeta = [
  { icon: 'fa-solid fa-calendar-days', text: 'August 25th - 30th, 2026' },
  { icon: 'fa-solid fa-location-dot', text: 'Holy Trinity A.M.E. Zion Church, Ndon Ebom, Akwaibom State, Nigeria' },
  { icon: 'fa-solid fa-cross', text: 'Empathy and Compassion' },
]

// No official flyer uploaded yet — set this to a real URL/path once one is
// available and the placeholder above swaps for the image automatically.
const flyerUrl = ref('')

const servedPlaces = ['Nigeria', 'Kenya', 'Tanzania', 'Uganda']

const supervisorMeta = [
  { icon: 'fa-solid fa-envelope', text: 'pceffiong67@yahoo.com' },
  { icon: 'fa-solid fa-map-pin', text: 'Nigeria' },
  { icon: 'fa-solid fa-award', text: 'Teacher & Mentor' },
  { icon: 'fa-solid fa-hands-holding-child', text: 'Mission Advocate' },
]

const directorates = [
  { icon: 'fa-solid fa-bible', title: 'Evangelism & Discipleship', desc: 'Strengthens prayer, witnessing, Bible teaching, visitation and spiritual formation among women and families.' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Health & Wellness', desc: 'Promotes health talks, wellness campaigns, hospital support and compassionate care programs.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Education & Training', desc: 'Supports literacy, leadership training, mentorship, workshops and Christian education.' },
  { icon: 'fa-solid fa-child-reaching', title: 'Children & Youth', desc: 'Coordinates programs that nurture children, young women and youth participation in mission.' },
  { icon: 'fa-solid fa-hand-holding-dollar', title: 'Stewardship & Support', desc: 'Encourages giving, accountability, resource mobilization and transparent mission reporting.' },
  { icon: 'fa-solid fa-seedling', title: 'Economic Empowerment', desc: 'Provides skills support, entrepreneurship guidance and practical empowerment programs.' },
]

const impactItems = [
  { icon: 'fa-solid fa-bowl-food', title: 'Feeding & welfare support', desc: 'Local societies provide practical assistance for children, families and vulnerable households.' },
  { icon: 'fa-solid fa-user-nurse', title: 'Clinic and hospital outreach', desc: 'Women\u2019s groups support health awareness, visitation and care-centered ministry activities.' },
  { icon: 'fa-solid fa-chalkboard-user', title: 'Workshops and leadership development', desc: 'Conference programs equip women for mission, service, teaching and local church leadership.' },
]

const upcomingEvents = [
  { day: '15', month: 'SEP', title: 'Mission Awareness Sunday', desc: 'A district-wide emphasis on missionary giving, women\u2019s service and local society mobilization.', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80' },
  { day: '05', month: 'OCT', title: 'Women\u2019s Empowerment Workshop', desc: 'Capacity-building sessions for leadership, family support, ministry planning and entrepreneurship.', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80' },
  { day: '22', month: 'NOV', title: 'Community Health Outreach', desc: 'Health education, visitation, prayer support and practical welfare services for local communities.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80' },
]

const contactList = [
  { icon: 'fa-solid fa-envelope', text: 'info@amez-ewaed.org' },
  { icon: 'fa-solid fa-phone', text: '+234 000 000 0000' },
  { icon: 'fa-solid fa-location-dot', text: 'Eastern West Africa Episcopal District' },
]

// --- Fieldworkers & fiscal officers ---
const fieldworkers = [
  { name: 'Deac. Uduak S. Williams', role: 'Field Worker', group: 'fieldworker', conference: 'Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/deac. U. Williams.jpeg' },
  { name: 'Deac. Lovelyn Nwadike', role: 'Field Worker', group: 'fieldworker', conference: 'Central Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/deaclovelyn.png' },
  { name: 'Deac. Manda Jack', role: 'Field Worker', group: 'fieldworker', conference: 'Rivers Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/deacmanda.png' },
  { name: 'Deac. Mfon M. Udoh', role: 'Field Worker', group: 'fieldworker', conference: 'Lagos West Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/deac. Mfon Udoh.jpeg' },
  { name: 'Deac. Emem U. Thompson', role: 'Field Worker', group: 'fieldworker', conference: 'Mainland Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/EmemThompson.jpeg' },
  { name: 'Mrs. Nse E. Amos', role: 'Field Worker', group: 'fieldworker', conference: 'Northern Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/NseAmos.jpg' },
  { name: 'Mrs. Uduak Ekeng', role: 'Field Worker', group: 'fieldworker', conference: 'Cross River Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Deac. Uduak Ekeng.jpeg' },
  { name: 'Deac. Confidence Patrick', role: 'Field Worker', group: 'fieldworker', conference: 'Southeastern Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Deac. ConfidencePatrick.jpeg' },
  { name: 'Deac. Eno I. Udoekpe', role: 'Field Worker', group: 'fieldworker', conference: 'Southern Nigeria Conference', location: 'Kenya', email: 'N/A', image: '/images/Fieldworkerss/Deac. EnoUkpe.jpg' },
  { name: 'Mrs. Nsisong M. Akpan', role: 'Field Worker', group: 'fieldworker', conference: 'Akwa Nigeria Conference', location: 'Tanzania', email: 'N/A', image: '/images/Fieldworkerss/mrsnsisong.png' },
  { name: 'Deac. Ingonimi E. Moro', role: 'Field Worker', group: 'fieldworker', conference: 'Port Harcourt Nigeria Conference', location: 'Uganda', email: 'N/A', image: '/images/Fieldworkerss/deacingonimi.png' },
]

const fiscalOfficers = [
  { name: 'Sis. Esther Umor Olu', role: 'Recording Secretary', group: 'fiscal', conference: 'Rivers Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Sis. Esther Umor Olu.jpg' },
  { name: 'Sis. Imaikop Ikemesit', role: 'Assistant Recording Secretary', group: 'fiscal', conference: 'Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Sis. Imaikop.jpg' },
  { name: 'Prof. Anthonia U. Ubom', role: 'Executive Secretary', group: 'fiscal', conference: 'Akwa Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Prof. Anthonia.jpg' },
  { name: 'Sis. Precious Uzoma Luke', role: 'Treasurer', group: 'fiscal', conference: 'Central Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '' },
  { name: 'Mrs. Christiana Godwin', role: 'Reporter', group: 'fiscal', conference: '', location: 'Nigeria', email: 'N/A', image: '' },
  { name: 'Deac. Biriayi O. Ilombo', role: 'Chaplain', group: 'fiscal', conference: 'Rivers Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/deac. Biriayi Ilombo.jpeg' },
  { name: 'Mrs. Christiana Ekokoiesua', role: 'Secretary, Youth Missionary Society', group: 'fiscal', conference: 'Akwa Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '' },
  { name: 'Mrs. Gloria Nwachukwu', role: 'Cordinator, Young Adult Missionary', group: 'fiscal', conference: 'Port Harcourt Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/mrs. Gloria Nwachukwu.jpeg' },
  { name: 'Sis. Eunice Effiom', role: 'Supretendent, Buds of Promise', group: 'fiscal', conference: 'Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Sis. Eunice.jpg' },
  { name: 'Sis. Uduak Umoh', role: 'Secretary, Bureau of Supply', group: 'fiscal', conference: 'Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '' },
  { name: 'Sis. Chinyerye Oje', role: 'Chairman, Life Member Council', group: 'fiscal', conference: 'Cross River Nigeria Conference', location: 'Nigeria', email: 'N/A', image: '/images/Fieldworkerss/Sis. C. Oje.jpg' },
]

// --- Search + filter ---
const teamFilters = [
  { label: 'All', value: 'all' },
  { label: 'Field Workers', value: 'fieldworker' },
  { label: 'Officers', value: 'fiscal' },
]
const activeFilter = ref('all')
const teamSearch = ref('')

function getSearchText(person) {
  return `${person.name} ${person.role} ${person.conference} ${person.location} ${person.email}`.toLowerCase()
}
function personMatchesSearch(person, query) {
  return !query || getSearchText(person).includes(query)
}

const filteredFieldworkers = computed(() =>
  fieldworkers.filter((p) => personMatchesSearch(p, teamSearch.value.trim().toLowerCase())),
)
const filteredFiscalOfficers = computed(() =>
  fiscalOfficers.filter((p) => personMatchesSearch(p, teamSearch.value.trim().toLowerCase())),
)

// --- Carousel state ---
const fieldworkerIndex = ref(0)
const fiscalIndex = ref(0)

const fieldworkerStatus = computed(() => {
  if (!filteredFieldworkers.value.length) return 'No fieldworker found'
  const person = filteredFieldworkers.value[fieldworkerIndex.value]
  return `Showing ${fieldworkerIndex.value + 1} of ${filteredFieldworkers.value.length}: ${person?.name ?? ''}`
})
const fiscalStatus = computed(() => {
  if (!filteredFiscalOfficers.value.length) return 'No fiscal officer found'
  const person = filteredFiscalOfficers.value[fiscalIndex.value]
  return `Showing ${fiscalIndex.value + 1} of ${filteredFiscalOfficers.value.length}: ${person?.name ?? ''}`
})

function moveFieldworker(direction) {
  const len = filteredFieldworkers.value.length
  if (!len) return
  fieldworkerIndex.value = (fieldworkerIndex.value + direction + len) % len
}
function moveFiscalOfficer(direction) {
  const len = filteredFiscalOfficers.value.length
  if (!len) return
  fiscalIndex.value = (fiscalIndex.value + direction + len) % len
}

// Reset to the first result whenever the search/filter changes, and keep the
// index in range if the filtered list shrinks.
function clampIndices() {
  if (fieldworkerIndex.value >= filteredFieldworkers.value.length) fieldworkerIndex.value = 0
  if (fiscalIndex.value >= filteredFiscalOfficers.value.length) fiscalIndex.value = 0
}

// --- Keyboard arrow navigation (mirrors the original: prefers whichever
// carousel currently has focus, falls back to whichever block is visible) ---
const fieldworkersCarouselEl = ref(null)
const fiscalCarouselEl = ref(null)

function handleKeydown(event) {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  const direction = event.key === 'ArrowLeft' ? -1 : 1

  const fieldVisible = activeFilter.value === 'all' || activeFilter.value === 'fieldworker'
  const fiscalVisible = activeFilter.value === 'all' || activeFilter.value === 'fiscal'
  const focusedFiscal = fiscalCarouselEl.value?.contains(document.activeElement)

  if (focusedFiscal && fiscalVisible) {
    moveFiscalOfficer(direction)
    return
  }
  if (!fieldVisible && fiscalVisible) {
    moveFiscalOfficer(direction)
    return
  }
  if (fieldVisible) moveFieldworker(direction)
}

// --- Hero stat counters ---
const heroStats = reactive([
  { label: 'Fieldworkers', target: 11, value: 0 },
  { label: 'Officers', target: 11, value: 0 },
  { label: 'Countries Served', target: 4, value: 0 },
])

const statRefs = ref([])
let statsObserver

function animateCounter(stat) {
  const duration = 1200
  const start = performance.now()
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    stat.value = Math.floor(stat.target * progress)
    if (progress < 1) requestAnimationFrame(tick)
    else stat.value = stat.target
  }
  requestAnimationFrame(tick)
}

// --- Contact form ---
const contactForm = reactive({ name: '', email: '', purpose: 'General enquiry', phone: '', message: '' })
const formStatus = ref('')

function handleContactSubmit() {
  // Hand off to your actual submission endpoint/store action here.
  formStatus.value = `Thank you${contactForm.name ? `, ${contactForm.name}` : ''}. Your message has been prepared for submission.`
  Object.assign(contactForm, { name: '', email: '', purpose: 'General enquiry', phone: '', message: '' })
}

onMounted(() => {
  clampIndices()
  document.addEventListener('keydown', handleKeydown)

  statsObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroStats.forEach((stat) => animateCounter(stat))
          obs.disconnect()
        }
      })
    },
    { threshold: 0.5 },
  )
  if (statRefs.value?.[0]) statsObserver.observe(statRefs.value[0])
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  statsObserver?.disconnect()
})
</script>

<style>
/* Page-scoped design tokens (distinct from the site's main green/gold brand
   palette). Kept as plain CSS custom properties + keyframes rather than
   Tailwind config so this page stays self-contained. */
.whoms-page {
  --purple-950: #2b1848;
  --purple-900: #3a225d;
  --purple-850: #4b2c74;
  --purple-800: #5f3a8f;
  --purple-700: #7650a9;
  --purple-600: #8d6ac1;
  --purple-100: #f1eafa;
  --purple-50: #fcf9ff;
  --gold-700: #8a5208;
  --gold-600: #a96b10;
  --gold-500: #c7881d;
  --gold-300: #e2b85d;
  --gold-100: #fff0c2;
  --cream: #fffaf0;
  --white: #ffffff;
  --ink: #211629;
  --muted: #75677e;
  --border: rgba(66, 26, 107, 0.14);
}

.whoms-page .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.72s ease, transform 0.72s ease;
}
.whoms-page .reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}
@keyframes rise {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes pulseGlow {
  0%, 100% { transform: scale(1); opacity: 0.62; }
  50% { transform: scale(1.08); opacity: 0.95; }
}
@keyframes slideSoft {
  from { opacity: 0; transform: translateX(18px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .whoms-page .reveal { opacity: 1; transform: none; }
  .whoms-page *, .whoms-page *::before, .whoms-page *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>