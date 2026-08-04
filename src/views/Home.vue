<template>
    <!-- <SiteHeader /> -->


    <main class="font-sans">
    <!-- Hero -->
    <section id="home" class="relative isolate overflow-hidden text-white bg-brand-green950 grid items-center min-h-[min(820px,calc(100vh-38px))] max-[720px]:min-h-[720px]">
      <div class="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(6,28,20,0.94)_0%,rgba(6,28,20,0.76)_48%,rgba(6,28,20,0.35)_100%),url('/images/Home/wide.jpeg')] bg-cover bg-[center_42%] max-[720px]:bg-[linear-gradient(90deg,rgba(6,28,20,0.92),rgba(6,28,20,0.68)),url('/images/Home/wide.jpeg')] max-[720px]:bg-center animate-heroZoom"></div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-[150px] bg-gradient-to-t from-brand-green950/75 to-transparent"></div>
      <div class="absolute -z-20 w-[520px] h-[520px] -left-[180px] -bottom-[200px] rounded-full bg-brand-gold500/[0.17] blur-[20px]" aria-hidden="true"></div>

      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div class="max-w-[780px] py-[120px_160px] pt-[120px] pb-[160px] max-[720px]:pt-[100px] max-[720px]:pb-[150px]">
          <p class="inline-flex items-center gap-3 mb-6 text-brand-gold300 text-[0.8rem] font-extrabold tracking-[0.2em] uppercase animate-fadeUp [animation-delay:100ms] before:content-[''] before:w-[42px] before:h-[2px] before:bg-current">Welcome home</p>
          <h1 class="max-w-[760px] font-serif text-[clamp(3.4rem,18vw,5.5rem)] min-[721px]:text-[clamp(3.8rem,8.5vw,7.4rem)] leading-[0.86] tracking-[-0.045em] animate-fadeUp [animation-delay:220ms]">Being Creative <span class="text-brand-gold300 italic font-medium">In Our</span> Methods</h1>
          <p class="max-w-[650px] mt-7 text-white/80 text-[clamp(1rem,2vw,1.16rem)] animate-fadeUp [animation-delay:340ms]">
            The African Methodist Episcopal Zion Church in Nigeria is a worshipping, witnessing and serving community—proclaiming Christ and transforming lives across generations.
          </p>
          <div class="flex flex-wrap gap-[14px] mt-[34px] max-[480px]:grid animate-fadeUp [animation-delay:450ms]">
            <a href="#welcome" class="max-[480px]:w-full inline-flex items-center justify-center gap-[10px] min-h-[52px] px-6 rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-gold500 text-brand-green950 shadow-[0_12px_28px_rgba(208,164,68,0.28)] hover:bg-[#dfb657] hover:-translate-y-[3px] transition-all">Discover Our Church <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Service strip -->
    <section id="services" aria-label="Worship information" class="relative z-[5] -mt-[76px] max-[720px]:-mt-[90px]">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div v-reveal class="reveal grid grid-cols-[1.1fr_repeat(3,1fr)] max-[1120px]:grid-cols-3 max-[720px]:grid-cols-1 border border-white/55 rounded-[24px] overflow-hidden bg-white shadow-brand-lg">
          <div class="max-[1120px]:col-span-full flex flex-col justify-center min-h-[150px] max-[1120px]:min-h-0 p-7 max-[1120px]:py-5 max-[1120px]:px-7 bg-brand-green900 text-white">
            <small class="text-brand-gold300 text-[0.73rem] font-extrabold tracking-[0.18em] uppercase">Gather with us</small>
            <h2 class="mt-[6px] font-serif text-[2.1rem] leading-none">Worship &amp; Fellowship</h2>
          </div>
          <div
            v-for="(service, index) in serviceItems"
            :key="service.title"
            class="group relative flex items-start gap-[15px] min-h-[150px] max-[720px]:min-h-0 p-7 bg-white hover:z-10 hover:bg-brand-green50 hover:-translate-y-[5px] transition-all"
            :class="index < serviceItems.length - 1 ? 'border-r border-brand-green950/10 max-[720px]:border-r-0 max-[720px]:border-b' : ''"
          >
            <span class="grid place-items-center w-[46px] h-[46px] shrink-0 rounded-full text-brand-gold600 bg-brand-gold500/[0.14]"><i :class="service.icon"></i></span>
            <div>
              <strong class="block text-brand-green950 text-[0.96rem]">{{ service.title }}</strong>
              <span class="block mt-1 text-brand-ink font-extrabold">{{ service.time }}</span>
              <small class="block mt-[5px] text-brand-muted text-[0.75rem]">{{ service.desc }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome / About -->
    <section id="welcome" class="py-[130px] pb-[110px] max-[720px]:py-[82px]">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto grid grid-cols-[1fr_0.95fr] max-[940px]:grid-cols-1 items-center gap-[clamp(48px,8vw,100px)]">
        <div v-reveal class="reveal from-left relative min-h-[610px] max-[720px]:min-h-[500px] max-[480px]:min-h-[430px]">
          <div class="absolute inset-0 right-[90px] bottom-[80px] max-[720px]:right-[45px] max-[720px]:bottom-[65px] max-[480px]:right-5 max-[480px]:bottom-[60px] overflow-hidden shadow-brand-lg rounded-[180px_180px_24px_24px]">
            <img src="/images/Home/pic3.jpeg" alt="Church congregation gathered for worship" class="w-full h-full object-cover transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(.2,.8,.2,1)] group-hover:scale-105">
          </div>
          <div class="absolute w-[240px] h-[280px] max-[720px]:w-[190px] max-[720px]:h-[220px] max-[480px]:w-[150px] max-[480px]:h-[180px] right-0 bottom-0 border-8 border-brand-cream rounded-[24px] overflow-hidden shadow-brand-lg">
            <img src="/images/Home/pic4.jpeg" alt="An open Bible during devotion" class="w-full h-full object-cover">
          </div>
          <div class="absolute top-[58px] right-4 max-[720px]:top-9 max-[720px]:right-0 w-[150px] h-[150px] max-[720px]:w-[125px] max-[720px]:h-[125px] max-[480px]:w-[108px] max-[480px]:h-[108px] grid place-items-center p-[18px] rounded-full text-center text-brand-green950 bg-brand-gold500 shadow-brand-sm animate-floatY">
            <div><strong class="block font-serif text-[2.25rem] max-[480px]:text-[1.8rem] leading-[0.9]">1932</strong><span class="block mt-[7px] text-[0.67rem] font-black tracking-[0.08em] uppercase">Established in Nigeria</span></div>
          </div>
        </div>

        <div v-reveal class="reveal from-right">
          <span class="inline-flex items-center gap-[10px] text-brand-gold600 text-[0.78rem] font-extrabold tracking-[0.18em] uppercase before:content-[''] before:w-9 before:h-[2px] before:bg-current">A place to belong</span>
          <h2 class="mt-3 font-serif text-brand-green950 text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">Welcome to the Freedom Church.</h2>
          <p class="mt-6 text-brand-muted text-[1.04rem]">
            Established in Nigeria in 1932 by Bishop William Walls Matthews, The A. M. E. Zion Church has grown into a vibrant Christian family committed to worship, discipleship, education, mission and compassionate service.
          </p>
          <blockquote class="my-7 py-[22px] px-6 border-l-4 border-brand-gold500 rounded-r-[14px] text-brand-green900 bg-brand-green50 font-serif text-[1.45rem] font-semibold leading-[1.25]">"For the earnest expectation of the creature waiteth for the manifestation of the sons of God."</blockquote>
          <div class="flex items-center gap-4 mb-[30px]">
            <span class="w-[58px] h-[58px] overflow-hidden border-[3px] border-brand-gold300 rounded-full shrink-0">
              <img src="/images/TheBishop/bishopEffiong.jpg" alt="Church leader portrait placeholder" class="w-full h-full object-cover">
            </span>
            <span>
              <strong class="block text-brand-green950">Office of the Presiding Prelate</strong>
              <small class="block text-brand-muted">Eastern West Africa Episcopal District</small>
            </span>
          </div>
          <a href="#beliefs" class="inline-flex items-center justify-center gap-[10px] min-h-[52px] px-6 rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-green900 text-white hover:bg-brand-green700 hover:-translate-y-[3px] transition-all">Learn More About Us <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section aria-label="Church statistics" class="pt-4 pb-[110px] max-[720px]:pb-[82px]">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div v-reveal class="reveal grid grid-cols-4 max-[940px]:grid-cols-2 max-[480px]:grid-cols-1 rounded-[24px] overflow-hidden text-white bg-brand-green900 shadow-brand-lg">
          <div
            v-for="stat in statsData"
            :key="stat.label"
            :ref="(el) => setStatRef(el, stat)"
            class="relative py-[38px] px-7 text-center"
            :class="stat.borderClass"
          >
            <strong class="block font-serif text-brand-gold300 text-[clamp(2.5rem,5vw,4.1rem)] leading-none">{{ stat.value }}</strong>
            <span class="block mt-[9px] text-white/75 text-[0.75rem] font-extrabold tracking-[0.14em] uppercase">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Beliefs -->
    <section id="beliefs" class="relative overflow-hidden py-[110px] max-[720px]:py-[82px] bg-brand-green50">
      <span aria-hidden="true" class="pointer-events-none absolute -right-10 -top-[120px] text-brand-green900/[0.035] font-serif text-[480px] leading-none max-[720px]:hidden">✝</span>
      <div class="relative w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto grid grid-cols-[0.9fr_1.1fr] max-[940px]:grid-cols-1 items-start gap-[clamp(44px,8vw,100px)]">
        <div v-reveal class="reveal from-left max-[940px]:static sticky top-[112px]">
          <span class="inline-flex items-center gap-[10px] text-brand-gold600 text-[0.78rem] font-extrabold tracking-[0.18em] uppercase before:content-[''] before:w-9 before:h-[2px] before:bg-current">What we believe</span>
          <h2 class="mt-3 font-serif text-brand-green950 text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">Historic faith. Living witness.</h2>
          <p class="my-[22px] mb-7 text-brand-muted">
            We profess the historic Christian faith in God revealed through Jesus Christ. By grace and the power of the Holy Spirit, believers are formed into a reconciled community that bears witness to God's Kingdom.
          </p>
          <a href="#" class="inline-flex items-center justify-center gap-[10px] min-h-[52px] px-6 rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-green900 text-white hover:bg-brand-green700 hover:-translate-y-[3px] transition-all">Read Our Doctrine <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div v-reveal class="reveal from-right grid gap-4">
          <article
            v-for="belief in beliefsData"
            :key="belief.num"
            class="grid grid-cols-[auto_1fr_auto] max-[480px]:grid-cols-[auto_1fr] items-center gap-[18px] p-6 border border-brand-green950/10 rounded-[14px] bg-white shadow-[0_8px_20px_rgba(8,41,29,0.04)] hover:translate-x-2 hover:border-brand-gold500/60 hover:shadow-brand-sm transition-all"
          >
            <span class="font-serif text-brand-gold600 text-[1.6rem] font-bold">{{ belief.num }}</span>
            <div><h3 class="text-brand-green950 text-base">{{ belief.title }}</h3><p class="mt-1 text-brand-muted text-[0.88rem]">{{ belief.desc }}</p></div>
            <i class="fa-solid fa-arrow-right text-brand-gold600 max-[480px]:hidden"></i>
          </article>
        </div>
      </div>
    </section>

    <!-- Ministries -->
    <section id="ministries" class="py-[110px] max-[720px]:py-[82px]">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div v-reveal class="reveal max-w-[720px] mx-auto text-center mb-10">
          <span class="inline-flex items-center gap-[10px] justify-center text-brand-gold600 text-[0.78rem] font-extrabold tracking-[0.18em] uppercase">Find your place</span>
          <h2 class="mt-3 font-serif text-brand-green950 text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">Ministries for every generation.</h2>
          <p class="mt-[18px] text-brand-muted text-[1.03rem]">Grow in discipleship, build lasting relationships and serve God through one of our ministry communities.</p>
        </div>

        <div class="grid grid-cols-3 max-[940px]:grid-cols-2 max-[720px]:grid-cols-1 gap-6">
          <article
            v-for="ministry in ministriesData"
            :key="ministry.title"
            v-reveal
            class="reveal group relative isolate min-h-[440px] max-[720px]:min-h-[390px] flex items-end overflow-hidden rounded-[24px] text-white shadow-brand-sm"
            :class="ministry.extraClass"
          >
            <img :src="ministry.img" :alt="ministry.alt" class="absolute inset-0 -z-20 w-full h-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.08]">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(6,31,22,0.96)] via-[rgba(6,31,22,0.42)] to-[rgba(6,31,22,0.05)]"></div>
            <div class="p-7 translate-y-[42px] group-hover:translate-y-0 max-[720px]:translate-y-0 transition-transform duration-300">
              <span class="grid place-items-center w-[50px] h-[50px] mb-[18px] rounded-full text-brand-green950 bg-brand-gold500"><i :class="ministry.icon"></i></span>
              <h3 class="font-serif text-[2rem] leading-none">{{ ministry.title }}</h3>
              <p class="mt-3 text-white/75 text-[0.9rem]">{{ ministry.desc }}</p>
              <a href="#" class="inline-flex items-center gap-2 mt-5 text-brand-gold300 text-[0.8rem] font-extrabold opacity-0 translate-y-[14px] group-hover:opacity-100 group-hover:translate-y-0 max-[720px]:opacity-100 max-[720px]:translate-y-0 transition-all">Explore ministry <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Events -->
    <section id="events" class="py-[110px] max-[720px]:py-[82px] bg-white">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div v-reveal class="reveal max-w-[720px] mb-10">
          <span class="inline-flex items-center gap-[10px] text-brand-gold600 text-[0.78rem] font-extrabold tracking-[0.18em] uppercase before:content-[''] before:w-9 before:h-[2px] before:bg-current">Church adverts</span>
          <h2 class="mt-3 font-serif text-brand-green950 text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">Upcoming Episcopal District gatherings.</h2>
          <p class="mt-[18px] text-brand-muted text-[1.03rem]">Two major August 2026 gatherings are highlighted below for worship, mission, fellowship and district-wide participation.</p>
        </div>

        <div class="grid grid-cols-2 max-[940px]:grid-cols-1 gap-7 items-stretch">
          <article
            v-for="(event, index) in eventHighlights"
            :key="event.badgeText"
            v-reveal
            class="relative isolate min-h-[680px] max-[940px]:min-h-0 grid grid-rows-[minmax(280px,0.96fr)_auto] max-[720px]:grid-rows-[minmax(230px,auto)_auto] overflow-hidden rounded-[36px] text-white bg-brand-green950 shadow-brand-lg"
            :class="index === 0 ? 'reveal from-left' : 'reveal from-right'"
          >
            <div class="absolute inset-0 -z-10 opacity-90" :class="event.gradient"></div>
            <div :class="event.imageWrapClass">
              <img :src="event.image" :alt="event.alt" :class="event.imageClass">
            </div>
            <div class="relative z-10 p-[clamp(26px,4vw,38px)] max-[720px]:py-[26px] max-[720px]:px-[22px]">
              <span class="inline-flex items-center gap-2 py-[7px] px-3 rounded-full text-brand-green950 bg-brand-gold500 text-[0.68rem] font-black tracking-[0.11em] uppercase"><i :class="event.badgeIcon"></i> {{ event.badgeText }}</span>
              <p class="mt-[18px] text-white/80 text-[0.96rem]">{{ event.description }}</p>
              <div class="grid gap-[10px] mt-[22px]">
                <span
                  v-for="meta in event.meta"
                  :key="meta.text"
                  class="flex items-start gap-[10px] py-[10px] px-3 border border-white/15 rounded-[14px] bg-white/[0.08] text-white/85 text-[0.82rem] font-extrabold"
                ><i :class="meta.icon" class="mt-[3px] text-brand-gold300 shrink-0"></i> {{ meta.text }}</span>
              </div>
            </div>
          </article>
        </div>

        <div v-reveal class="reveal grid grid-cols-3 max-[940px]:grid-cols-1 gap-4 mt-[30px]">
          <a
            v-for="item in upcomingEvents"
            :key="item.title"
            href="#"
            class="group grid grid-cols-[82px_1fr_auto] max-[480px]:grid-cols-[68px_1fr] items-center gap-[18px] p-[22px] border border-brand-green950/10 rounded-[14px] bg-brand-cream hover:translate-x-[6px] hover:border-brand-gold500/60 hover:shadow-brand-sm transition-all"
          >
            <span class="grid place-items-center min-h-[76px] max-[480px]:min-h-[68px] rounded-xl text-white bg-brand-green900"><strong class="block font-serif text-[2rem] leading-[0.9]">{{ item.day }}</strong><span class="block mt-1 text-brand-gold300 text-[0.66rem] font-black tracking-[0.14em]">{{ item.month }}</span></span>
            <span><h4 class="text-brand-green950 leading-[1.25]">{{ item.title }}</h4><p class="mt-[7px] text-brand-muted text-[0.78rem]"><i class="fa-regular fa-clock"></i> {{ item.meta }}</p></span>
            <i class="fa-solid fa-arrow-right text-brand-gold600 group-hover:translate-x-[5px] transition-transform max-[480px]:hidden"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Sermon -->
    <section id="sermon" class="relative isolate grid items-center overflow-hidden min-h-[660px] text-white bg-brand-green950">
      <div class="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(6,31,22,0.96),rgba(6,31,22,0.68),rgba(6,31,22,0.24)),url('/images/Home/pic7.jpeg')] bg-cover bg-center"></div>
      <div class="absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_right,black,transparent_75%)]"></div>
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div v-reveal class="reveal from-left max-w-[680px] py-[100px]">
          <span class="inline-flex items-center gap-[10px] text-brand-gold300 text-[0.78rem] font-extrabold tracking-[0.18em] uppercase before:content-[''] before:w-9 before:h-[2px] before:bg-current">Latest message</span>
          <h2 class="mt-4 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[-0.035em]">A faith that moves beyond the sanctuary.</h2>
          <p class="mt-[25px] text-white/80 text-[1.03rem]">Discover how living faith becomes visible through courage, compassion, justice and everyday obedience to Christ.</p>
          <div class="flex flex-wrap gap-5 my-[25px] mb-8 text-brand-gold300 text-[0.8rem] font-extrabold">
            <span class="inline-flex items-center gap-2"><i class="fa-regular fa-user"></i> Dedication Service</span>
            <span class="inline-flex items-center gap-2"><i class="fa-regular fa-calendar"></i> 29 August, 2026</span>
          </div>
          <a href="#" class="inline-flex items-center gap-[14px] font-extrabold">
            <span class="grid place-items-center w-[62px] h-[62px] rounded-full text-brand-green950 bg-brand-gold500 animate-pulseGold"><i class="fa-solid fa-play"></i></span>
            <span>Watch the sermon</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Campaign -->
    <section id="campaign" class="py-[110px] max-[720px]:py-[82px]">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto">
        <div v-reveal class="reveal relative grid grid-cols-[1fr_0.86fr] max-[940px]:grid-cols-1 items-center gap-[50px] overflow-hidden p-[clamp(38px,7vw,76px)] max-[720px]:py-[38px] max-[720px]:px-6 rounded-[36px] text-white bg-brand-wine700 shadow-brand-lg">
          <span aria-hidden="true" class="pointer-events-none absolute -right-[22px] -bottom-[70px] text-white/[0.06] font-serif text-[clamp(9rem,23vw,20rem)] font-bold leading-[0.7]">1796</span>
          <div class="relative z-10">
            <span class="text-brand-gold300 inline-flex items-center gap-[10px] text-[0.78rem] font-extrabold tracking-[0.18em] uppercase">Securing our future</span>
            <h2 class="mt-3 text-white font-serif text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">The 1796 Campaign</h2>
            <p class="max-w-[640px] my-[22px] mb-[30px] text-white/80">Your generous giving strengthens evangelism, education, church development, digital ministry and compassionate service throughout the Episcopal District.</p>
            <a href="#" class="inline-flex items-center justify-center gap-[10px] min-h-[52px] px-6 rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-gold500 text-brand-green950 shadow-[0_12px_28px_rgba(208,164,68,0.28)] hover:bg-[#dfb657] hover:-translate-y-[3px] transition-all">Support the Campaign <i class="fa-solid fa-heart"></i></a>
          </div>
          <div aria-hidden="true" class="relative z-10 min-h-[300px] max-[720px]:min-h-[250px] grid place-items-center">
            <div class="w-[min(320px,100%)] aspect-square grid place-items-center p-[38px] rounded-full text-center border border-white/[0.22] bg-white/[0.07] shadow-[inset_0_0_0_20px_rgba(255,255,255,0.025)] animate-floatY">
              <div><strong class="block font-serif text-brand-gold300 text-[4.6rem] leading-[0.9]">1796</strong><span class="block mt-[10px] text-[0.74rem] font-black tracking-[0.14em] uppercase">Faith · Legacy · Future</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-[110px] max-[720px]:py-[82px] bg-brand-green50">
      <div class="w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[calc(100%_-_28px)] mx-auto grid grid-cols-[0.82fr_1.18fr] max-[940px]:grid-cols-1 gap-[34px] items-stretch">
        <div v-reveal class="reveal from-left relative overflow-hidden p-12 max-[720px]:py-[30px] max-[720px]:px-6 rounded-[24px] text-white bg-brand-green900">
          <span aria-hidden="true" class="pointer-events-none absolute -right-5 -bottom-[84px] text-white/5 font-serif text-[280px] leading-none">✝</span>
          <span class="relative z-10 inline-flex items-center gap-[10px] text-brand-gold300 text-[0.78rem] font-extrabold tracking-[0.18em] uppercase">We are here for you</span>
          <h2 class="relative z-10 mt-3 text-white font-serif text-[clamp(2.25rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">Connect with the church.</h2>
          <p class="relative z-10 my-5 mb-[30px] text-white/70">Send a prayer request, ask a question, plan a visit or learn how to become part of a local congregation.</p>

          <div class="relative z-10 grid gap-[18px]">
            <div class="flex items-start gap-[14px]">
              <i class="fa-solid fa-location-dot grid place-items-center w-[38px] h-[38px] shrink-0 rounded-full text-brand-gold300 bg-white/10"></i>
              <div><strong class="block text-[0.8rem] tracking-[0.06em] uppercase">Episcopal Office Annex</strong><span class="block mt-[3px] text-white/70 text-[0.86rem]">57, School Road, Unical Satellite Town, Calabar, Cross River State, Nigeria</span></div>
            </div>
            <div class="flex items-start gap-[14px]">
              <i class="fa-regular fa-envelope grid place-items-center w-[38px] h-[38px] shrink-0 rounded-full text-brand-gold300 bg-white/10"></i>
              <div><strong class="block text-[0.8rem] tracking-[0.06em] uppercase">Email</strong><span class="block mt-[3px] text-white/70 text-[0.86rem]">info@amez-ewaed.org</span></div>
            </div>
            <div class="flex items-start gap-[14px]">
              <i class="fa-solid fa-phone grid place-items-center w-[38px] h-[38px] shrink-0 rounded-full text-brand-gold300 bg-white/10"></i>
              <div><strong class="block text-[0.8rem] tracking-[0.06em] uppercase">Telephone</strong><span class="block mt-[3px] text-white/70 text-[0.86rem]">+234 (0) 803 676 5479</span></div>
            </div>
          </div>
        </div>

        <div v-reveal class="reveal from-right p-[42px] max-[720px]:py-[30px] max-[720px]:px-6 rounded-[24px] border border-brand-green950/10 bg-white shadow-brand-sm">
          <form class="grid grid-cols-2 max-[720px]:grid-cols-1 gap-[18px]" @submit.prevent="handleContactSubmit">
            <div class="grid gap-2">
              <label for="name" class="text-brand-green950 text-[0.78rem] font-black">Full Name</label>
              <input v-model="contactForm.name" type="text" id="name" name="name" placeholder="Your full name" required class="w-full min-h-[52px] px-4 border border-brand-green950/10 rounded-xl outline-none text-brand-ink bg-brand-cream focus:border-brand-gold500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(208,164,68,0.14)] transition-all">
            </div>
            <div class="grid gap-2">
              <label for="email" class="text-brand-green950 text-[0.78rem] font-black">Email Address</label>
              <input v-model="contactForm.email" type="email" id="email" name="email" placeholder="name@example.com" required class="w-full min-h-[52px] px-4 border border-brand-green950/10 rounded-xl outline-none text-brand-ink bg-brand-cream focus:border-brand-gold500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(208,164,68,0.14)] transition-all">
            </div>
            <div class="grid gap-2">
              <label for="phone" class="text-brand-green950 text-[0.78rem] font-black">Phone Number</label>
              <input v-model="contactForm.phone" type="tel" id="phone" name="phone" placeholder="+234 ..." class="w-full min-h-[52px] px-4 border border-brand-green950/10 rounded-xl outline-none text-brand-ink bg-brand-cream focus:border-brand-gold500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(208,164,68,0.14)] transition-all">
            </div>
            <div class="grid gap-2">
              <label for="subject" class="text-brand-green950 text-[0.78rem] font-black">Subject</label>
              <input v-model="contactForm.subject" type="text" id="subject" name="subject" placeholder="How can we help?" class="w-full min-h-[52px] px-4 border border-brand-green950/10 rounded-xl outline-none text-brand-ink bg-brand-cream focus:border-brand-gold500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(208,164,68,0.14)] transition-all">
            </div>
            <div class="grid gap-2 col-span-2 max-[720px]:col-span-1">
              <label for="message" class="text-brand-green950 text-[0.78rem] font-black">Message</label>
              <textarea v-model="contactForm.message" id="message" name="message" placeholder="Write your message or prayer request..." required class="w-full min-h-[145px] py-[14px] px-4 border border-brand-green950/10 rounded-xl outline-none text-brand-ink bg-brand-cream resize-y focus:border-brand-gold500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(208,164,68,0.14)] transition-all"></textarea>
            </div>
            <div aria-live="polite" class="col-span-2 max-[720px]:col-span-1 min-h-[24px] text-brand-green700 text-[0.82rem] font-extrabold">{{ formStatus }}</div>
            <div class="col-span-2 max-[720px]:col-span-1">
              <button type="submit" class="inline-flex items-center justify-center gap-[10px] min-h-[52px] px-6 rounded-full text-[0.88rem] font-extrabold tracking-[0.04em] bg-brand-green900 text-white hover:bg-brand-green700 hover:-translate-y-[3px] transition-all">Send Message <i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </main>


    <AppFooter />
    
    
</template>

<script setup>
import SiteHeader from '@/components/NewNavbarComponents/SiteHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import { reactive, ref, onMounted, onUnmounted } from 'vue'


/* ---------------------------------------------------------------------- *
 * v-reveal: replaces the original scroll-in IntersectionObserver.
 * Elements keep their literal "reveal" / "reveal from-left" / "reveal
 * from-right" classes in the template (for the initial opacity/transform
 * state — see <style> below); this directive just watches each one and
 * adds "visible" once it scrolls into view, same as the original.
 * A shared counter reproduces the original's staggered transition-delay.
 * ------------------------------------------------------------------- */
  let revealIndex = 0
  const vReveal = {
    mounted(el) {
      el.style.transitionDelay = `${Math.min(revealIndex % 3, 2) * 90}ms`
      revealIndex += 1

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: '0px 0px -40px' },
      )
      observer.observe(el)
      el.__revealObserver = observer
    },
    unmounted(el) {
      el.__revealObserver?.disconnect()
    },
  }

  // --- Service strip ---
  const serviceItems = reactive([
    { icon: 'fa-solid fa-church', title: 'Sunday Worship', time: '8:00 AM', desc: 'Celebration, prayer and the Word' },
    { icon: 'fa-solid fa-book-bible', title: 'Midweek Bible Study', time: 'Wednesday, 5:30 PM', desc: 'Growing deeper in Scripture' },
    { icon: 'fa-solid fa-hands-praying', title: 'Prayer Meeting', time: 'Friday, 6:00 PM', desc: 'Seeking God together' },
  ])

  // --- Stats / counters ---
  // borderClass reproduces the original's irregular per-position border
  // rules across the 4-col -> 2-col -> 1-col responsive grid.
  const statsData = reactive([
    { label: 'Annual Conferences', target: 11, value: 0, borderClass: 'border-r border-white/[0.16] max-[940px]:border-b max-[940px]:border-r-0 max-[480px]:border-b-0' },
    { label: 'Districts', target: 60, value: 0, borderClass: 'border-r border-white/[0.16] max-[940px]:border-r-0 max-[940px]:border-b max-[480px]:border-b-0' },
    { label: 'Local Churches', target: 214, value: 0, borderClass: 'border-r border-white/[0.16] max-[480px]:border-r-0' },
    { label: 'Years of Ministry', target: 94, value: 0, borderClass: '' },
  ])

  const statEls = new Map()
  function setStatRef(el, stat) {
    if (el) statEls.set(stat, el)
  }

  function animateCounter(stat) {
    const duration = 1400
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      stat.value = Math.floor(stat.target * eased)
      if (progress < 1) requestAnimationFrame(tick)
      else stat.value = stat.target
    }

    requestAnimationFrame(tick)
  }

  let statsObserver
  onMounted(() => {
    statsObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const stat = [...statEls.entries()].find(([, el]) => el === entry.target)?.[0]
          if (stat) {
            animateCounter(stat)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.7 },
    )
    statEls.forEach((el) => statsObserver.observe(el))
  })

  onUnmounted(() => statsObserver?.disconnect())

  // --- Beliefs ---
  const beliefsData = [
    { num: '01', title: 'The Triune God', desc: 'We worship one God—Father, Son and Holy Spirit—Creator, Redeemer and Sustainer.' },
    { num: '02', title: 'Salvation Through Christ', desc: 'We proclaim Jesus Christ as Lord and trust His saving grace to renew every life.' },
    { num: '03', title: 'The Authority of Scripture', desc: 'We receive the Holy Scriptures as the inspired foundation for faith and Christian living.' },
    { num: '04', title: 'Holiness and Service', desc: 'We pursue holy living expressed through justice, mercy, mission and love of neighbour.' },
  ]

  // --- Ministries ---
  // Restored to the original live Unsplash URLs (not local /images/home/ assets).
  const ministriesData = [
    {
      img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=85',
      alt: 'Young people in Christian fellowship',
      icon: 'fa-solid fa-people-group',
      title: 'Youth & Children',
      desc: 'Raising a generation grounded in Scripture, purpose, leadership and joyful Christian community.',
      extraClass: '',
    },
    {
      img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1000&q=85',
      alt: 'Women serving together in community',
      icon: 'fa-solid fa-earth-africa',
      title: "Women's Home & Overseas Missionary Society",
      desc: 'Equipping women for prayer, global mission, compassionate outreach and transformational service.',
      extraClass: '',
    },
    {
      img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85',
      alt: 'Men in fellowship and community service',
      icon: 'fa-solid fa-handshake-angle',
      title: 'Men of Zion Ministry',
      desc: 'Developing men of faith, integrity and responsibility for stronger homes, churches and communities.',
      extraClass: 'max-[940px]:col-span-2 max-[720px]:col-span-1',
    },
  ]

  // --- Events ---
  const eventHighlights = [
    {
      gradient: 'bg-[radial-gradient(circle_at_16%_16%,rgba(208,164,68,0.24),transparent_20rem),linear-gradient(145deg,rgba(8,41,29,0.96),rgba(29,107,76,0.92))]',
      imageWrapClass: 'relative grid place-items-center p-[18px] max-[720px]:p-[10px] bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(251,248,240,0.96))]',
      imageClass: 'w-full h-full object-contain bg-white rounded-2xl shadow-[0_12px_28px_rgba(8,41,29,0.14)] transition-transform duration-700 group-hover:scale-[1.04]',
      image: '/images/Home/pic5.jpeg',
      alt: "13th Regional Convention of the Women's Home and Overseas Missionary Society flyer",
      badgeIcon: 'fa-solid fa-earth-africa',
      badgeText: 'WH&OMS Regional Convention',
      description: "A regional gathering of the Women's Home & Overseas Missionary Society for worship, mission training, stewardship, fellowship and renewed commitment to compassionate service.",
      meta: [
        { icon: 'fa-regular fa-calendar', text: 'August 25th–30th, 2026' },
        { icon: 'fa-solid fa-location-dot', text: 'Holy Trinity A.M.E. Zion Church, Ndon Ebom, Akwa Ibom State, Nigeria' },
        { icon: 'fa-solid fa-cross', text: 'Theme: Empathy & Compassion' },
      ],
    },
    {
      gradient: 'bg-[radial-gradient(circle_at_88%_12%,rgba(208,164,68,0.28),transparent_20rem),linear-gradient(145deg,rgba(122,31,42,0.96),rgba(8,41,29,0.94))]',
      imageWrapClass: 'relative min-h-[290px] overflow-hidden bg-white/[0.08]',
      imageClass: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
      image: '/images/Home/invite.jpeg',
      alt: 'A.M.E. Zion Church sanctuary dedication service advert image',
      badgeIcon: 'fa-solid fa-church',
      badgeText: 'Sanctuary Dedication Service',
      description: 'The Presiding Prelate and the leadership of the Eastern West Africa Episcopal District invite members, friends and the general public to the dedication service of the new church sanctuary.',
      meta: [
        { icon: 'fa-regular fa-calendar', text: 'August 29th, 2026' },
        { icon: 'fa-solid fa-location-dot', text: 'Holy Trinity A.M.E. Zion Church, Ndon Ebom, Akwa Ibom State, Nigeria' },
        { icon: 'fa-regular fa-clock', text: 'Time: 11am' },
      ],
    },
  ]

  const upcomingEvents = [
    { day: '25', month: 'AUG', title: 'WH&OMS Regional Convention Begins', meta: 'August 25–30, 2026 · Holy Trinity A.M.E. Zion Church' },
    { day: '29', month: 'AUG', title: 'Sanctuary Dedication Service', meta: 'Time to be announced · New 2,000-seater sanctuary' },
    { day: '30', month: 'AUG', title: 'WH&OMS Closing Service', meta: 'Convention closing worship and fellowship' },
  ]

  // --- Contact form (was querySelector + textContent writes) ---
  const contactForm = reactive({ name: '', email: '', phone: '', subject: '', message: '' })
  const formStatus = ref('')

  function handleContactSubmit() {
    // Hand off to your actual submission endpoint/store action here.
    formStatus.value = `Thank you${contactForm.name ? `, ${contactForm.name}` : ''}. Your message has been prepared for submission.`
    Object.assign(contactForm, { name: '', email: '', phone: '', subject: '', message: '' })
  }
</script>

<style scoped>
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 750ms ease, transform 750ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .reveal.from-left { transform: translateX(-35px); }
  .reveal.from-right { transform: translateX(35px); }
  .reveal.visible { opacity: 1; transform: translate(0, 0); }

  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; }
  }
</style>