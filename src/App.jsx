import { useState, useEffect } from "react";
import ChannelLogo from './assets/channel.jpg'
import ChurchImg from './assets/Church.jpg';
import ChildrenImg from './assets/Children.jpg';
import YouthImg from './assets/Youth.jpg';
import WomenImg from './assets/Women.jpg';
import InterceptionImg from './assets/Intercession.jpg';
import CellImg from './assets/Cell.jpg';
import ChurchOneImg from './assets/ChurchOne.jpg';
import ChurchTwoImg from './assets/ChurchTwo.jpg';
import ChurchThreeImg from './assets/ChurchThree.jpg';
import FirstChurchImg from './assets/FirstChurch.jpg';



const G = "https://lh3.googleusercontent.com/aida-public/";
const IMG = {
  profile: "https://lh3.googleusercontent.com/aida/AEtjO1U61wtnuONAkTCF-5iwzzOFwdsRUNqVcYWrWDvUwElJ59ZnrXIm-67pVy4N_f9s-PZ-ubpSZJ8vOEdR6OPIV1alzutUV7mtdEkdTMWhdXWWTcAyj25LVvQpqaqWtVI3DlSrKrZeN1g_Ct_YdCk95p7cdje5grRJjaPMwGZYrt3J-hERgK8WW0eRyyp4p_L1tgrYX4vUwIoF-1elwtxPE8iZFJH9_mfso7ruAMYvbW4wKD6HAZGXNHbcMI_Sj6rMskYp2QXbBtc1rQ",
  // About
  pastor1: G + "AB6AXuCsfwbPgMMkji6FtNkpuviQ9Jy0I4ao-JL24f3l5q_xJ3W9EtwWqa_x1k-eDtrfZUxcD78RTj2xqHSlHJVV3aF9GhmRuNQq_rC4p1RTRmubAoLkORxc8wXLKIdiOBN-JZLGx_KxTmbMSm920Oahf2HrEeDgrmdfzS8kQnpDDQRG3YPEHP8SK3HvpwKkZBCdkY6X-E2JKZEBjxS1YtVsL0CpwQ5F8PnsYcXI1e0t6-VJv4AuBzWq1zZhQiPJnq0Y_dal6A",
  pastor2: G + "AB6AXuBChK9CGrHBwDG8L-uVkXTwrJIh_cmDhsNv9vSUVkxMSKklKYjnpvEl4vAKwZ_EPx-3WBDe91Od_uYkszCE2cDj8CpaJZ_f6cQflhm9vcBX8IeQRJ-neK_Aq7YSXjYAal85MRv0B2LpeJQGJTD9jok_YmIXw18CSVGTiR6hGanUAmZoH9VWjZzU4RY89-OwSU6HCO5baY6jwpIU-tJJ8mIGj83ZwHFTCRIMoXWNYSr4cdMUEhZUdsyPRXC4984M6zBUhw",
  pastor3: G + "AB6AXuDQjZTjh5AVkRtFPiGAJNJW0AfSWSwExomtTjAKQ3rBa97VVONwNiHOcZd_-3KUZnLcD8cTh1mx5FjZwmYVAXjg03h5ldpeilYNRbXySV0bT7KWv9ihjDeqhY4gOuURHk0mthz015MNIYu-fufKke3UWAdH7TIfo4d1_X8Zs-r_cIaAH5fE6QVgeFvGMbw8HXsfBSHo6Ha8_mGNkepVEGyUwO9ud0WD-iDkzvPutF1USVSZ0pEbDRRaBjSOew_ONSDeZg",
  mosaic1: G + "AB6AXuAEWD6n-6VBdZTdIepwdFzw3mG_49mDSyhnx8_aAdkVycaKhNd_7tlPi001fBOyIB7m24NKiF52jXTIC9WGKqKb-plTEC_5zcx4WGzf0k6hwHGOE9i472tWRDKuc6cGBrEaFj_LK6F8UAd_9oWHizjpDmxHxyhtBuBA11ejLL3wNwWE0CC3c1enT6vGbid5PeEy5YOxiOa4BFUaoLda6iwpOuoSZ-1Yea-rVE9O29yvBRPdjnBYM5zM",
  mosaic2: G + "AB6AXuBC1nCeuwkdmKy_ULUcAlhuoSM3utAhEM93QLgXHFD0wrNM-RZNYNdnwFZzRJM3u3LlCqsam37V0RQ-Pxj2icF_lBi_amhf5I-DCOsyWi2VdDaHn8xkIyACgs5IJ1Jgk_hq2R205RH72gkJ1R9x_wyPaHfhOKaTtcQ_6rRMN7C1eHFsBdn6yrYTnieM48pbduu9jTbIA3Nv6wiruvgdR10meuOsNl_28ebnPlBOyQN3aFU54JdzKaRW",
  // Admin event posters
  evt1: G + "AB6AXuBSWvrynxH7tDxFLFc1Do181fYCmSLCteTx9CPxyG5vdSpPoJjuTyseyu0obOq9XzChY0cykcTm5DUJTQLBuSnA43dza6vVpLYcq8QWl4BNk_HneHiy4DQtvWtuixZbVoK83a59kjt7QjnhS9zutyDqOEMHJu4GJfYlvMI-c89T5x1-UmOliROcQGdw7ZyX7qwhKcssR4H8oigg10zofbLN9USVm5bey7B44Fiabr1MrQD9rjqgLHpT",
  evt2: G + "AB6AXuAJsNRonAk-mifh_hjXJpj5WkGcGstnfwq9q0GaytP4-q4LreLE0jLzW",
  // Ministries
  min1: G + "AB6AXuDe97Txl3KfD95be2rIYRaR5JGpwCn7GV9mrnP4QrDA_BbRw37Tq2-me2FgLJI2k70UgqqkdsI_F8J3TZa2FHFTvaYAS8DGLnS1odD50QtvYsSApxlPcJG5OX5I3CBg5Sew_ZT5qxS5CDXM4ANsdnDtdPrFdUcGpSNO0DaLCcOrfjNExR_FYPvrBLlUdAQaQzcAmpf1OmBNa6GJDQQ2iFubSYA0zYICT0Nvl24Hy7XjAiNGjFV3CzGi",
  min2: G + "AB6AXuC5cgFlD9aKuE710I-v_Y5QPihivCryaEaLL5tQXUr0T1cV-NHLQ01ha9WQIdwGQVRJxt_60rrLUxaqi0eduV5DmAUgdhbEGL8O_QoDycMt2G1lXL1xeELHa6dVvkxpbC4N4d_yHwocfaV9lTq-qTKpTMW1PD0utBPu04AdUUcdp95PsvkPCOeRJQ87Ebfnvv03cq6WS7Qz97EIqZJ962YW2cMeFw5RBi8ul1gJBsyP6Ga8BCyj9VIP",
  min3: G + "AB6AXuDsdjdNcU967oPaspEgzekBlS0gjoWkzsa3fQThFGfc1mb92EfNhu19xYcuIfiKAvTZ1kNTWadvxWd88_g8b3uRlN9olo5LLYN2eYrByWmyymn09mYGCnfH3vB--tlRhjmGjmw-3Uh7iWyVa796AHSPKsr2RxJAajN1VTq9ZDLVaXjqH2dpNaZnq1f2kR3Lm85MPFeiStvGXrzkPxqof56hRF-tyNaPUKNaYaUCipQJTMt4nYmY3Mdy",
  min4: G + "AB6AXuCWTrFeqssGtqoxQyLAB1H-apl7vI1iTP6eG9vU9Su_u76KhUqSIeNWkMjoSNKNW_az7hNMJ_olFOQpfLnVmT0U-gwEn2SW3s9by9qNp5TaBFRCb6Tq6JXUODr2CHfXyPQppfzKUAjZr7FTYVEO86_L0X6fc-Ptkn1N1h_sckU9UBNDGeiwikHteBOJbsWxkRyZWhxsW8wL0kDEoOIKnC4nmlxoXFOKZb",
  min5: G + "AB6AXuDWnkR0i-I_-VPgLH6ehIDbCE92OZH9T_40SZggfvsDc1qnkZv8nqsFqinL5Fk3SVqQRrsngqtxuED08aFHt_oE7F21PURHcxWgdCrfN0hOQ1CY5O7st8B2ptpoYqGGKdQ1VMnfvAJaFWk7okD_4wclQBjQORtyQ3Ow10nO3xcAdPPZGCpTRM1rF75RNHI1MjMU6ObyOAaU0STJzJLZ0pxHm3UBR2CJL9YANAYiChmY_sAKovSpPJdS",
  min6: G + "AB6AXuAiLrCXlOKPQTbxPpyOvmNEa9VvhtqZ9jdBXSmNr",
  // Home
  home1: G + "AB6AXuACQsrWltnudhsTITeDCyCt2gQ2u2rtGsx9KYGMitByT2t2JIwAJnJ9A98uOIRw91XDq9ynegv4VyAKLa_mQuX2QHDRQ73iromJRnXA0QarBdBAnyOFLM2ixlH8fAevXnGM0Duz5nyceHG4rZqBzfB0JSPBGYRHTm3kC6m7tUy5lWXZnAMQ5-A09GH4ZqTsqI1sX1PiAVIpV_0cuGOsUhJB-UMZWUxo1Ab-IiO08fa3aLFDLLwNuTpD",
  home2: G + "AB6AXuBqx03goUpB9h4o-tlEcwDIewV2TbG2ee9d6bPlojSAGsmHm83TiQz8lbleEyQT-8PCWfCPYqK0sbC0X7oTVE8g1z3JzZYGD1pzFnESJ61tquMWRmcbyHjmN3qms8rm-hwe_A9rEz5O7h1_DyJGmVkORug80ZNysgoDepZ4Sj3M-Ri53j-3Dd1k3mnwpIl_LPhsQ9A8KR41nTMKVnZi30FyRwgPB3D6BB54F8kt5iQM3aMQ-CQSbJOr",
  home3: G + "AB6AXuAQzA2RUg1GgDUScCiQ5bmWWxMYMFEN0xCexpMIJizqfP1f4u8Xj4kml0hebSQCTHbcJ-jR2NA8leISftKGHeEgZr6Org3S4a0PsxWgd7MY2Enn7VFXZlGLjiHoHo0DiicUuUtEK1BFCA_Qcu2LdQuHgowwU0QQBYU9L1OXo7uTRKdJqNd37Idjto43JqJg_MlAdeQRycPGQZRqeU1XUPNxblo4HdWO7YecRwvR5GzD1rrUXIhICJCL",
  map: G + "AB6AXuBsep5nRL2-IRQeCluwJs7MBCRWCATqWS2A0AZ04Hm-corcbo-It3lFMqOmmk7SPGhqRRHYiAw8H7qbz9XZQHE8tucJAdazks-alK2-QHNUm5y6YdKcbDAYffzEk9RDIMemidatdSxqRO9MLTVlf7UEqOvtTWAr-CxOCanTHfrUJg3Wxu7bq2e_HFI1gugj6np087WwRkBd7yVK93eIJd3L79CwXCwxp0v5ju78_8OuHOUBYeX51mGl",
  // Watch live
  liveHero: G + "AB6AXuBTxF_I9lGfdWta2vkDFpp8p-QxesZZAWfeRVKAxNfd4HNPhqTlS4H7Qy9BlTqsFeGnxPg-op6F8DJz7Y59gPnkgATz5Hxcd7nMx9CGTZQFaV9klbyB5unJP9RdYRteIR6cg9xCfBd8ErBOCdlUBYhZrl586fAXqAjWB0Ufm9FWtxSPVA9MYHA5ZDf58JTmfwMbTM-RP8-IeDfPXXpiDsYCql4IappYkIWSrMy0Vm6rFt3qEPbx31T5",
  arch1: G + "AB6AXuAwIRp3hWY4-6MlOGL3KLyO3c-yorEXcQ_HF1E_6GyqymSvFmeixqT6ILSC8i7cZf6xD8-rIKSi6sGtCJgnsgAxGeCBdDACMOtFdQrZ2Y9BvB52SmgmVs4ava8bosYjwUm8Wwj6YsPpj8z_WGbsM6Q6mEnARzjU_VIhFiOvPa4pkumNiIHfffcM1y-6Nj1WLYKgHl3VMil1zLT0vVjt06bgyJUs5xnLQ54iAOWK3GSWEfuByQ4NBraH",
  arch2: G + "AB6AXuD-WjpNJ8EvaBljkaTu7YepH9eJUBT2DyATjNTSNqFFLfV9GoF5gACSutjWsrAsxMNOWr8GdxTu_hSmIsIFBIqvlXsp3hnPz7nwGLeNRaUpJa-_WtM3gKSvFD_Xal9p1cTjuQ5miQ6BotHbFGd45QK0SP6H780_NQRzjVbzmueA61qg60GHoRjbMiqFKXRKZXYasBgzPk81ZZQ24aJf2EXVpRmqe6H3ssYsdJz5QpANjdbcYWwsqwH6",
  arch3: G + "AB6AXuAgc8V5V5pqGPbjmLe8fz4jqRDfHvCQ6AUO85HSUG748servWi7LxHVye6AyR9HNcSxc0RIraxRiafw-8pdWvy8CIhZJNdHxWhH-h05WHDyN1ot9i4H8sZwTjK6nfmGuQHOc-bDorPy_Xy2jSN-i00AlKM__XYJF4KwTHi1gfxJygEBczJLfugO3UH0NjK_qryWYsa_ClHa85UqmYL8oS75CzTxK86M1KAqjDMgBqcpFeo4QaDfMbpg",
};

/* ---------- Small helpers ---------- */
const hide = (e) => { e.currentTarget.style.visibility = "hidden"; };
const Ic = ({ n, c = "" }) => <span className={`material-symbols-outlined ${c}`}>{n}</span>;
const Bg = (u) => ({ backgroundImage: `url('${u}')` });
const Eyebrow = ({ children, c = "text-secondary" }) => (
  <span className={`font-label-sm text-label-sm uppercase tracking-widest font-bold block mb-space-xs ${c}`}>{children}</span>
);
const Pill = ({ children, c = "bg-secondary-fixed text-on-secondary-fixed" }) => (
  <span className={`inline-block px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold ${c}`}>{children}</span>
);
const Btn = ({ children, onClick, c = "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim", type = "button" }) => (
  <button type={type} onClick={onClick} className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-title-md text-title-md transition-all ${c}`}>{children}</button>
);

const NAV = [["home", "Home"], ["about-us", "About Us"], ["ministries", "Ministries"]];
const FOOT_NAV = [["about-us", "Our Vision"], ["ministries", "Departements"], ["watch-live", "Direct & Sermons"], ["events", "Conferences"], ["give", "Tithes & Offerings"]];
const FOOT_TIMES = [["Sunday • Celebration Service", "8:30 AM – 11:30 AM • Main Sanctuary"], ["Wednesday • Bible Teaching & Prayer", "16h30 - 18h30 • Arche de l'Alliance"], ["Friday • Night of Impact & Spiritual Revival", "21h00 - 04h00 • Monthly Prayer Vigil"]];


function Header({ page, go }) {
  const on = (p) => page === p;
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(11,27,61,0.25)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
        <button onClick={() => go("home")} className="flex items-center gap-space-sm group text-left">
          <img alt="Effective Life Church Logo" className="w-10 h-10 rounded-full object-cover" src={ChannelLogo} />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight leading-none group-hover:text-secondary-fixed transition-colors">Effective Life Church</span>
          </div>
        </button>
        
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV.map(([p, l]) => (
            <button key={p} onClick={() => go(p)} className={`transition-colors ${on(p) ? "text-secondary-fixed-dim font-title-md" : "font-label-lg text-label-lg text-on-primary-container hover:text-on-primary"}`}>{l}</button>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
        </div>
      </div>
    </header>
  );
}

function Footer({ page, go }) {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-on-primary tracking-tight">Effective Life Church</span>
              <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider">Extension Arche de l'Alliance • Goma</span>
            </div>
            <p className="font-body-md text-body-md max-w-sm">Building a Strong Church for the Mission, Rooted in Grace, Spiritual Fervor, and Transformational Impact in the Heart of Kivu and to the Ends of the Earth.</p>
            <div className="flex items-center gap-space-md">
              {["live_tv", "podcasts", "location_on"].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-primary hover:bg-secondary-container hover:text-on-secondary-container transition-colors"><Ic n={i} c="text-title-md" /></a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-on-primary uppercase tracking-wider">Worship Service Times</h4>
            <div className="space-y-space-sm font-body-sm text-body-sm">
              {FOOT_TIMES.map(([t, s]) => (
                <div key={t} className="p-space-sm rounded-lg bg-surface-container-lowest/5"><p className="font-title-md text-title-md text-secondary-fixed">{t}</p><p>{s}</p></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-on-primary uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col items-start gap-space-sm font-body-md text-body-md">
              {FOOT_NAV.map(([p, l]) => (
                <button key={p} onClick={() => go(p)} className={`transition-colors ${page === p ? "text-secondary-fixed font-title-md" : "hover:text-on-primary"}`}>{l}</button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-on-primary uppercase tracking-wider">Contact & Headquarters</h4>
            <div className="space-y-space-sm font-body-sm text-body-sm">
              {[["location_city", "Konge, near Teletubbies, Kinobe Yoasi's close, Polt No 5, Lukuli Road"], ["call", "+243 977 853 370 / +256 750 989 518"], ["mail", "contact@effectivelife-goma.org"]].map(([i, t]) => (
                <p key={i} className="flex items-start gap-space-sm"><Ic n={i} c="text-secondary-fixed text-title-md" /><span>{t}</span></p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-space-2xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-md text-label-md opacity-80">
          <p>© © 2025 Effective Life Church – Extension Arche de l'Alliance Goma. All Rights Reserved.</p>
          <p className="text-secondary-fixed-dim">Jesus Christ Is the Lord of the City of Kampala.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HOME ---------- */
const SCHEDULE = [
  ["Sunday Worship", "English Celebration", "09:00 – 10:30 AM", "Sanctuaire Arche de l'Alliance. High-energy praise, scriptural teaching in English with live translation.", "Main Sanctuary", "bg-secondary-container"],
  ["Culte Principal", "Célébration en Français", "10:30 AM – 12:30 PM", "Grand Culte d'adoration, communion fraternelle et prédication pastorale pour toute la communauté.", "Sanctuaire Central", "bg-primary-container"],
  ["Tuesday", "Intercession & Fasting", "12:00 – 02:00 PM", "Midday prayer chapel for national peace, community healing, and supernatural breakthroughs.", "Prayer Chapel", "bg-secondary-container"],
  ["Home Fellowship Groups", "House Fellowships", "05:00 – 06:00 PM", "Small group clusters in Konge, Makindye, Luwafu, Namasuba, Munyonyo and Kampala Town for discipleship & care.", "Kampala Neighborhoods", "bg-tertiary-fixed-dim"],
  ["Samedi Jeunesse", "Youth Fellowship", "04:00 – 06:00 PM", "Passionate worship, youth discussions, creative arts, and leadership formation.", "Youth Auditorium", "bg-secondary-fixed-dim"],
];
const HOME_EVENTS = [
  [ChurchOneImg, "First Annual Conference", "01 st March- 30th March", "Eaux Profondes", "Days of doctrinal teaching, prophetic empowerment, and apostolic impartation for ministers and leaders.", "Kampala Central Arena & Online Stream", "Register Free", "Save Date"],
  [ChurchTwoImg, "Second Annual Conference", "01 st June - 30th June", "Tournant Decisif", "An uninterrupted night of travail, warfare praise, and targeted intercession for families and healing throughout the Kivu region.", "Arche Main Sanctuary, Kampala", "Service Guide", "Invite Family"],
  [ChurchThreeImg, "Third Annual Conference", "01 December - 14th December", "Grace Insondable", "Days of doctrinal teaching, prophetic empowerment, and apostolic impartation for ministers and leaders.", "Fellowship Hall", "Workers RSVP", "Save Date"],
];

function Home({ go }) {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative bg-primary-container text-on-primary overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 relative z-10">
          <div className="inline-flex items-center gap-space-sm px-4 py-1.5 rounded-full bg-surface-container-lowest/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Extension de l'Arche de l'Alliance Goma • Nord-Kivu, RD Congo</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display-hero text-display-hero tracking-tight mb-6">Building a <span className="italic text-secondary-fixed">Strong</span> Church  For the Mission.</h1>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mb-10">
                Welcome to Effective Life Church, a vibrant, 
                bilingual family of faith in Goma, 
                passionately pursuing the Great Commission, 
                supernatural prayer, and Christ-centered 
                transformation throughout the Great 
                Lakes region.
                </p>
              <div className="flex flex-wrap gap-4">
                <Btn c="bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20" onClick={() => document.getElementById("services-schedule")?.scrollIntoView({ behavior: "smooth" })}><Ic n="schedule" />Service Times & Visit</Btn>
                <Btn c="text-secondary-fixed hover:text-on-primary" onClick={() => document.getElementById("prayer-altar")?.scrollIntoView({ behavior: "smooth" })}><Ic n="favorite" />Altar of Prayer</Btn>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-72 h-72 rounded-full p-2 bg-gradient-to-tr from-secondary-container/40 via-tertiary-fixed-dim/20 to-transparent shadow-2xl">
                <div className="w-full h-full rounded-full bg-primary-container/80 p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-28 h-28 rounded-full bg-tertiary-container/80 flex items-center justify-center mb-4"><Ic n="church" c="text-5xl text-secondary-fixed" /></div>
                  <span className="font-headline-sm text-headline-sm">Effective Life</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed mt-1">Kampala Sanctury</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-surface-container-lowest/5">
            {[["groups", "2 Sunday Services", "French & Anglais"], ["home_pin", "Active Church Cell Groups", "House Fellowships Across Kampala"], ["local_fire_department", "Youth & Intercession", "Fire Generation"], ["public", "Kingdom Mission", "Kampala & Uganda"]].map(([i, t, s]) => (
              <div key={t} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/15 flex items-center justify-center text-secondary-fixed"><Ic n={i} /></div>
                <div><p className="font-title-md text-title-md">{t}</p><p className="font-body-sm text-body-sm text-on-primary-container">{s}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-schedule" className="py-space-2xl px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <Eyebrow>Weekly Church Schedule</Eyebrow>
        <h2 className="font-headline-lg text-headline-lg mb-12">Church Service & Gathering Times</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SCHEDULE.map(([tag, t, time, d, loc, bar]) => (
            <div key={t} className="relative bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_20px_-2px_rgba(11,27,61,0.06)] hover:shadow-lg transition-shadow flex flex-col justify-between overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${bar}`} />
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-4">{tag}</div>
                <h3 className="font-title-lg text-title-lg mb-1">{t}</h3>
                <p className="font-headline-sm text-headline-sm text-secondary mb-3">{time}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">{d}</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-secondary font-title-md text-title-md"><span>{loc}</span><Ic n="arrow_forward" c="text-lg" /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-space-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-secondary-container/20" />
            <div className="relative rounded-2xl overflow-hidden bg-primary-container shadow-2xl">
              <img alt="Pasteur Principal Papa - Église Effective Life" className="w-full h-auto object-cover block" src={IMG.profile} />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-transparent p-6 text-on-primary">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Conduite Pastorale</span>
                <h4 className="font-headline-sm text-headline-sm">Pasteur Principal & Fondateur du Ministère</h4>
                <p className="font-body-sm text-body-sm text-on-primary-container">Extension Arche de l'Alliance • Goma</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm mb-8 relative">
              <Ic n="format_quote" c="text-4xl text-secondary-fixed-dim absolute top-4 right-4" />
              <p className="font-headline-md text-headline-md italic pr-8 leading-snug">
              When God plants a vision in your spirit, 
              no storm in Kampala or anywhere else can 
              overturn His divine plan for your destiny.
              </p>
            </div>
            <h3 className="font-headline-lg text-headline-lg mb-4">A Haven of Grace & Power in the Heart of Kampala</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Welcome to Effective Life Church, 
              a dedicated extension of Arche 
              de l'Alliance Goma. Our mission 
              is to equip believers with a vibrant 
              and victorious faith that transforms 
              families, businesses, our city, 
              and the Body of Christ.
              </p>
            <div className="flex flex-wrap gap-4">
              <Btn c="bg-primary-container text-on-primary hover:bg-tertiary-container" onClick={() => go("about-us")}><Ic n="menu_book" />Read Pastoral Letters & Vision</Btn>
              <Btn c="bg-surface-container text-on-surface hover:bg-surface-variant" onClick={() => go("about-us")}><Ic n="handshake" />Meet the Pastoral Team</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-2xl px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <Eyebrow>Summits & Conferences</Eyebrow>
        <h2 className="font-headline-lg text-headline-lg mb-12">Upcoming Major Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_EVENTS.map(([img, tag, date, t, d, loc, b1, b2]) => (
            <div key={t} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 bg-cover bg-center" style={Bg(img)}>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{tag}</div>
                <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase text-secondary-fixed">{date}</span>
                  <h3 className="font-headline-sm text-headline-sm leading-tight">{t}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="font-body-md text-body-md text-on-surface-variant">{d}</p>
                  <div className="flex items-center gap-2 font-body-sm text-body-sm"><Ic n="location_on" c="text-secondary text-base" /><span>{loc}</span></div>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between">
                  <button className="px-4 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-title-md">{b1}</button>
                  <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface">{b2}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="prayer-altar" className="bg-surface-container-high py-space-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(11,27,61,0.06)]">
            <Eyebrow>Prayer Altar & Prayer Requests</Eyebrow>
            <h3 className="font-headline-md text-headline-md mb-4">Submit Your Prayer Request</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Our pastoral and intercessory team 
              faithfully lifts every prayer request 
              before God during our weekly fasting 
              sessions and overnight prayer vigils. 
              God hears and answers prayers.
              </p>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Name / Anonyme" className="h-12 px-4 rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-secondary-container" />
                <input required placeholder="+243 ... or email" className="h-12 px-4 rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-secondary-container" />
              </div>
              <select className="w-full h-12 px-4 rounded-lg bg-surface">
                {["Divine Healing & Deliverance", "Family & Home Restoration", "Financial Breakthrough & Employment", "Spiritual Growth & Calling", "Thanksgiving & Testimonies"].map((o) => <option key={o}>{o}</option>)}
              </select>
              <textarea required rows={4} placeholder="Describe What You’re Believing God For..." className="w-full p-4 rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-secondary-container" />
              <label className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface-variant"><input type="checkbox" /> Confidential: Shared Only with the Senior Pastor and Head of Intercession</label>
              <Btn type="submit">Lay Your Prayer at the Altar (Submit Prayer Request)</Btn>
              {sent && <div className="p-4 rounded-lg bg-surface-container text-secondary font-title-md text-title-md">Your prayer request has been received. Our intercession team stands with you in faith!</div>}
            </form>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary-container text-on-primary p-8 rounded-2xl shadow-xl space-y-5">
              <Eyebrow c="text-secondary-fixed">Plan Your Visit</Eyebrow>
              <h3 className="font-headline-md text-headline-md">Effectif Life Church Sanctuary</h3>
              {[["place", "Konge, near Teletubbies, Kinobe Yoasi's close, Plot No 5, Lukuli Road, Kampala Uganda"], ["directions_bus", "Near Konge Mosque"], ["family_restroom", "Dedicated Children’s Church & Childcare During Services"]].map(([i, t]) => (
                <p key={i} className="flex items-start gap-3 font-body-md text-body-md text-on-primary-container"><Ic n={i} c="text-secondary-fixed" />{t}</p>
              ))}
              <div className="flex flex-wrap gap-3">
                <a href="https://maps.google.com" 
                target="_blank" rel="noopener noreferrer" 
                className="px-4 py-2.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 inline-flex items-center gap-2 font-title-md text-title-md"><Ic n="map" />Open on Google Map</a>
                <a href="tel:+243977853370" className="px-4 py-2.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 inline-flex items-center gap-2 font-title-md text-title-md"><Ic n="call" />Call Reception</a>
              </div>
            </div>
            <div className="w-full h-56 rounded-2xl overflow-hidden shadow-md flex items-end relative">
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023881.5258349312!2d30.749110!3d1.373333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0e8444444d%3A0x4b0c0c0c0c0c0c0c!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1600000000000"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Uganda Map with Kampala"
    className="rounded-2xl"
  />
  <div className="absolute bottom-4 left-4 bg-primary-container/90 px-4 py-2 rounded-lg text-on-primary flex items-center gap-2 z-10">
    <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping" />
    <span className="font-label-md text-label-md">Kampala • Uganda</span>
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl bg-gradient-to-r from-primary-container via-tertiary-container to-primary-container p-8 md:p-12 text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <Eyebrow c="text-secondary-fixed">Take Part in the Work of the Kingdom</Eyebrow>
            <h3 className="font-headline-lg text-headline-lg mb-4">Support the Mission & Evangelism Projects</h3>
            <p className="font-body-md text-body-md text-on-primary-container">
              Your tithes and voluntary offerings 
              help us expand our fellowship groups,
               support widows and displaced people, 
               and spread the Word of Life throughout 
               North Kivu and online.
               </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Btn onClick={() => go("give")}>Give Online / via Mobile Money</Btn>
            <Btn c="bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20" onClick={() => go("ministries")}>Our Social Projects</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
/* ---------- ABOUT ---------- */
const PASTORS = [
  [IMG.pastor1, "Founding Father", "bg-secondary-container text-on-secondary-container", "podium", "Senior Lead Pastor", "Spiritual Father & Apostolic General", "Apostolic vision carrier and chief shepherd of Effective Life Church - Arche de l'Alliance Goma. Championing discipleship, national revival, and leading our major worship celebrations.", "Pastoral Counsel", "mail"],
  [IMG.pastor2, "Executive Pastoral Care", "bg-surface-container-highest text-primary", "hub", "Associate Pastor", "Ministry Oversight & Operations", "Coordinating our network of cell groups (cellules de maison), leadership pipelines, and evangelical operations throughout Goma and neighboring provinces.", "Connect & Groups", "groups"],
  [IMG.pastor3, "Shepherd & Discipleship", "bg-secondary-fixed text-on-secondary-fixed", "volunteer_activism", "Resident Shepherd", "Flock Care & Intercession", "Dedicated to one-on-one spiritual counseling, youth discipleship, family visitation, and fervent intercessory prayer across our congregation.", "Schedule a Pastoral Visit", "calendar_month"],
];

function About({ go }) {
  return (
    <>
      <section className="bg-primary-container text-on-primary py-space-2xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
          <div className="max-w-3xl space-y-space-md">
            <Pill c="bg-secondary-container/15 text-secondary-fixed">Extension Arche de l'Alliance • Goma, DR Congo</Pill>
            <h1 className="font-headline-lg text-headline-lg">Rooted in Faith, <span className="text-secondary-fixed italic">Sent with Purpose</span></h1>
            <p className="font-body-lg text-body-lg text-on-primary-container">Discover our sacred confession, church planting vision, and anointed pastoral shepherds guiding God's flock into revival and missionary excellence across Goma and the Great Lakes region.</p>
          </div>
          <div className="flex flex-wrap lg:flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-lowest/5 lg:min-w-[260px]">
            {[["Foundation", "1 Timothy 3:15"], ["Apostolic Call", "Acts 1:8 Commission"]].map(([a, b]) => (
              <div key={a}><p className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">{a}</p><p className="font-title-md text-title-md">{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-space-2xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Our Theological Anchor</Eyebrow>
          <h2 className="font-headline-md text-headline-md mb-space-xl">Confession of Faith</h2>
          <div className="rounded-xl bg-surface-container-low p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-4 space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center"><Ic n="auto_stories" c="text-headline-sm" /></div>
              <p className="font-headline-sm text-headline-sm">"Pillar and Buttress of the Truth"</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">An unwavering commitment to Christ-centered orthodoxy, active apostolic power, and the sanctified life of the local church.</p>
              <Pill>Affirmed in Unity</Pill>
            </div>
            <div className="lg:col-span-8 space-y-space-md">
              <div className="relative pl-6 lg:pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container rounded-full" />
                <p className="font-headline-sm text-headline-sm italic font-normal leading-relaxed">"We believe in one God, the Creator of heaven and earth, who is loving, holy, and faithful. We believe in Jesus Christ, the Son of God, who came to the world to save humanity through His life, death, and resurrection."</p>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant pl-6 lg:pl-8">We believe in the Holy Spirit, who guides, comforts, and empowers believers to live according to God's will. We believe that the Bible is the inspired Word of God and the foundation of our faith and teaching. We believe in salvation by grace through faith, and in the importance of prayer, worship, love, and service. We believe that the Church is the body of Christ, called to share the Gospel, care for one another, and bring hope to the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-space-2xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <Eyebrow>Apostolic Blueprint</Eyebrow>
            <h2 className="font-headline-md text-headline-md">Our Mission, Vision & Mandate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            <div className="rounded-xl bg-surface-container-lowest p-8 shadow-sm space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center"><Ic n="travel_explore" c="text-headline-sm" /></div>
              <h3 className="font-headline-sm text-headline-sm">Our Mission</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">To establish new churches in strategic cities of the country to serve as a base for the mission. To build up our members with the goal of multiplying servants capable of going to the peoples most in need of the Gospel for the establishment of new churches.</p>
            </div>
            <div className="rounded-xl bg-primary-container text-on-primary p-8 shadow-xl space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center"><Ic n="local_fire_department" c="text-headline-sm" /></div>
              <div><h3 className="font-headline-sm text-headline-sm">Our Vision • Acts 1:8</h3><p className="font-label-md text-label-md text-secondary-fixed mt-1">Building a Strong Church for Mission</p></div>
              <ul className="space-y-space-sm">
                {["A Church That Prays", "Dynamic & Effective House Cells", "Individual Evangelism as a Lifestyle", "Ministry Formation & Training"].map((t) => (
                  <li key={t} className="flex items-start gap-space-sm"><Ic n="check_circle" c="text-secondary-fixed text-title-md" /><span className="font-body-md text-body-md">{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-8 shadow-sm space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center"><Ic n="diversity_1" c="text-headline-sm" /></div>
              <h3 className="font-headline-sm text-headline-sm">The Salvation of Souls</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">The salvation of souls, their edification and training as disciples of Jesus Christ, in order to provide the nation and the world with a generation of men and women of integrity, faithful, God-fearing, and actively involved in fulfilling the missionary mandate of Jesus Christ in our generation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-space-2xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Anointed Shepherds</Eyebrow>
          <h2 className="font-headline-md text-headline-md mb-space-xl">Pastoral Leadership Council</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg items-stretch">
            {PASTORS.map(([img, tag, tagC, icon, title, role, desc, link, li]) => (
              <div key={title} className="flex flex-col rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-80 bg-primary-container overflow-hidden">
                  <img alt={title} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src={img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-1 rounded font-bold ${tagC}`}>{tag}</span>
                    <Ic n={icon} c="text-secondary-fixed" />
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow justify-between gap-space-md">
                  <div className="space-y-space-xs">
                    <h3 className="font-headline-sm text-headline-sm">{title}</h3>
                    <p className="font-title-md text-title-md text-secondary">{role}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md hover:text-secondary">{link} →</span>
                    <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center"><Ic n={li} c="text-sm" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-2xl px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <Eyebrow>Weekly Calendar</Eyebrow>
        <h2 className="font-headline-lg text-headline-lg mb-12">Service Times & Gatherings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            ["Sunday Worship", "English Celebration", "09:00 – 10:30 AM", "High-energy praise, scriptural teaching in English with live translation.", "Main Sanctuary", "bg-secondary-container"],
            ["Sunday Worship", "French Celebration", "10:30 AM – 12:30 PM", "Community worship, fellowship, and pastoral teaching for all ages.", "Central Sanctuary", "bg-primary-container"],
            ["Tuesday Fasting", "Intercession & Fasting", "12:00 – 02:00 PM", "Midday prayer chapel for national peace, community healing, and spiritual breakthroughs.", "Prayer Chapel", "bg-secondary-container"],
            ["House Cells", "House Fellowships", "05:00 – 06:00 PM", "Small group clusters across Goma neighborhoods for discipleship and care.", "Goma Neighborhoods", "bg-tertiary-fixed-dim"],
            ["Saturday Youth", "Youth Fellowship", "04:00 – 06:00 PM", "Passionate worship, youth discussions, creative arts, and leadership formation.", "Youth Auditorium", "bg-secondary-fixed-dim"],
          ].map(([tag, t, time, d, loc, bar]) => (
            <div key={t} className="relative bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_20px_-2px_rgba(11,27,61,0.06)] hover:shadow-lg transition-shadow flex flex-col justify-between overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${bar}`} />
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-4">{tag}</div>
                <h3 className="font-title-lg text-title-lg mb-1">{t}</h3>
                <p className="font-headline-sm text-headline-sm text-secondary mb-3">{time}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">{d}</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-secondary font-title-md text-title-md"><span>{loc}</span><Ic n="arrow_forward" c="text-lg" /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-space-2xl px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-5 space-y-space-md">
            <Eyebrow>Sanctuary Experience</Eyebrow>
            <h2 className="font-headline-md text-headline-md">An Atmosphere of Reverence, Joy & Transformation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Every Sunday celebration and midweek intercession at Arche de l'Alliance is an encounter with the tangible presence of God. We sing heartfelt praises, dive deeply into biblical exposition, and cultivate authentic fellowship.</p>
            <div className="grid grid-cols-2 gap-space-md">
              {[["12+", "Home Cells in Goma"], ["100%", "Gospel-Centered"]].map(([a, b]) => (
                <div key={a} className="p-space-md rounded-lg bg-surface-container-low"><p className="font-headline-sm text-headline-sm text-secondary font-bold">{a}</p><p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{b}</p></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-space-md">
            <div className="rounded-xl overflow-hidden shadow-md h-64 lg:h-80"><img alt="Congregation worshipping" className="w-full h-full object-cover" src={FirstChurchImg} /></div>
            <div className="rounded-xl overflow-hidden shadow-md h-64 lg:h-80 -mt-6 lg:-mt-10"><img alt="Bible study circle" className="w-full h-full object-cover" src={ChurchOneImg} /></div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container text-on-primary py-space-2xl px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-space-lg">
          <Pill c="bg-secondary-container/20 text-secondary-fixed">You Belong Here</Pill>
          <h2 className="font-display-hero text-display-hero">Join Our Mission in <span className="text-secondary-fixed">Goma</span></h2>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">Whether you are seeking a home church, desiring personal spiritual edification, or looking for pastoral counseling, the doors of Arche de l'Alliance are open to welcome you with the love of Christ.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <Btn onClick={() => go("home")}><Ic n="event" />Plan a Visit This Sunday</Btn>
            <Btn c="bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20" onClick={() => go("give")}><Ic n="support_agent" />Contact Pastoral Office</Btn>
          </div>
        </div>
      </section>
    </>
  );
}/* ---------- MINISTRIES ---------- */

const MINISTRIES = [
  [ChurchImg, "sunday", "Sunday Fellowship", "English: 09:00 AM – 10:30 AM | French: 10:30 AM – 12:30 PM", "Sunday Adults Ministry", "A meaningful space for adults to grow in faith, deepen their understanding of God's Word, and build strong relationships through Bible teaching, prayer, and fellowship.", "Join Adults Fellowship", "Ministry Details"],
  [ChildrenImg, "sunday generational", "Kids & Children", "Every Sunday: 10:30 AM – 12:30 PM", "Sunday Kids Ministry", "A joyful and safe space where children learn about God through age-appropriate Bible lessons, songs, games, and activities.", "Register Children", "Volunteer in Kids Ministry"],
  [YouthImg, "generational", "Youth & Leadership", "Every Saturday: 04:00 PM – 06:00 PM", "Youth Ministry", "A vibrant space where young people grow in faith, build relationships, and discover their purpose through worship, mentorship, and leadership training.", "Connect with Youth", "Youth Events"],
  [WomenImg, "generational midweek", "Women of Grace", "Every Thursday: 10:00 AM – 12:00 PM", "Women's Ministry", "A welcoming fellowship where women grow spiritually, support one another, and walk confidently in God's calling.", "Join Women of Grace", "Fellowship Info"],
  [InterceptionImg, "midweek", "House of Prayer", "Every Tuesday: 12:00 PM – 02:00 PM", "Intercession Ministry", "Believers come together to stand in prayer for the church, the community, and the needs of individuals, seeking God's guidance, healing, and strength.", "Join Prayer Intercessors", "Submit Prayer Item"],
  [CellImg, "midweek", "Small Groups & Homes", "Every Friday: 05:00 PM – 06:00 PM", "Cell's Prayer (Cell Ministry)", "A small-group ministry that brings believers together in homes for fellowship, prayer, Bible study, and mutual edification.", "Find a Cell Group in Goma", "Become a Cell Host"],
];

const RHYTHM = [["Sunday", "Adults & Kids", "09h00 & 10h30"], ["Tuesday", "Intercession", "12h00 – 14h00"], ["Wednesday", "Teaching & Word", "16h30 – 18h30"], ["Thursday", "Women of Grace", "10h00 – 12h00"], ["Friday", "Cell Groups", "17h00 – 18h00"], ["Saturday", "Youth Gathering", "16h00 – 18h00"]];

function Ministries() {
  const [f, setF] = useState("all");
  const filters = [["all", "All Ministries"], ["sunday", "Sunday Gatherings"], ["midweek", "Midweek & Cells"], ["generational", "Generational Ministries"]];
  return (
    <>
      <div className="bg-surface-container-low pb-space-2xl">
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
          <Pill c="bg-secondary-container/15 text-on-secondary-container">Arche de l'Alliance Fellowship</Pill>
          <h1 className="font-display-hero text-display-hero text-primary tracking-tight my-space-sm">Church Ministries & Gatherings</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Discover your spiritual family, develop your God-given gifts, and serve the Kingdom across our dynamic departments.</p>
          <div className="mt-space-lg flex flex-wrap gap-space-sm">
            {filters.map(([k, l]) => (
              <button key={k} onClick={() => setF(k)} className={`px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all shadow-sm ${f === k ? "bg-primary-container text-on-primary" : "bg-surface-container-highest text-on-surface hover:bg-secondary-fixed/40"}`}>{l}</button>
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {MINISTRIES.filter((m) => f === "all" || m[1].includes(f)).map(([img, , tag, time, t, d, b1, b2]) => (
            <div key={t} className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-52 w-full overflow-hidden bg-primary-container">
                <img alt={t} onError={hide} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 font-label-sm text-label-sm font-semibold text-primary uppercase tracking-wider">{tag}</span>
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-space-xs text-secondary-fixed"><Ic n="schedule" c="text-title-md" /><span className="font-label-sm text-label-sm font-semibold">{time}</span></div>
              </div>
              <div className="flex-1 p-space-lg flex flex-col justify-between">
                <div><h3 className="font-headline-sm text-headline-sm mb-space-xs group-hover:text-secondary transition-colors">{t}</h3><p className="font-body-md text-body-md text-on-surface-variant">{d}</p></div>
                <div className="mt-space-lg flex flex-col sm:flex-row gap-space-xs">
                  <a href="#" className="flex-1 px-4 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-title-md text-center hover:bg-secondary-fixed-dim">{b1}</a>
                  <a href="#" className="px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-title-md text-title-md text-center hover:bg-surface-variant">{b2}</a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <section className="bg-surface-container py-space-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Eyebrow>Weekly Cadence</Eyebrow>
          <h2 className="font-headline-md text-headline-md mb-space-lg">Your Weekly Rhythm of Growth</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
            {RHYTHM.map(([d, t, h]) => (
              <div key={d} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md font-bold text-secondary uppercase">{d}</span>
                <p className="font-title-md text-title-md">{t}</p>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low py-space-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl bg-primary-container text-on-primary p-space-xl md:p-space-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="max-w-2xl">
              <Eyebrow c="text-secondary-fixed">Personal Pastoral Direction</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg mb-space-sm">Unsure where to start your spiritual journey?</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">Our pastoral team is ready to guide you to the right fellowship, whether a prayer community, children's discipleship, or a home cell near Himbi or Quartier des Volcans.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-space-md">
              <Btn>Request Guidance →</Btn>
              <Btn c="bg-tertiary-container/80 text-on-primary hover:bg-tertiary-container">Schedule a Pastoral Call</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ---------- WATCH LIVE ---------- */
const ARCHIVE = [
  [IMG.arch1, "1:48:12", "Culte Français", "bg-secondary-container text-on-secondary-container", "Dimanche 16 Février 2025", "3.2k vues", "La Puissance de la Prière et de l'Intercession", "Découvrez comment renverser les forteresses spirituelles et ouvrir les écluses des cieux pour votre foyer et notre nation.", "Pasteur Safari"],
  [IMG.arch2, "1:32:05", "English Service", "bg-tertiary-fixed text-on-tertiary-fixed", "Sunday Feb 09, 2025", "2.8k views", "Walking in Supernatural Favor and Grace", "Navigating turbulent times through Christ's unmerited favor. Keys to supernatural breakthrough in every circumstance.", "Elder John K."],
  [IMG.arch3, "2:15:40", "Intercession & Réveil", "bg-surface-container-highest text-on-surface", "Mardi 04 Février 2025", "4.1k vues", "Breaking Chains & Standing in the Gap", "Une veillée d'autorité spirituelle pour libérer la jeunesse de Goma et proclamer la victoire de la Croix.", "Maman Pasteur Esther"],
];
const CHAT0 = [["Pasteur Safari (Goma)", "10:14", "Bienvenue aux familles connectées depuis Goma, Bukavu, Kinshasa et la diaspora ! Que la paix du Seigneur vous inonde."], ["Rachel K. (Goma Ouest)", "10:16", "Amen ! Cette parole sur la grâce transforme mon entendement ce matin. Gloire à Jésus !"], ["David Muhindo (Bruxelles)", "10:19", "En communion de cœur avec toute l'assemblée de l'Arche de l'Alliance depuis la Belgique."]];

function Watch({ go }) {
  const [tab, setTab] = useState("chat");
  const [chat, setChat] = useState(CHAT0);
  const [msg, setMsg] = useState("");
  const [likes, setLikes] = useState(942);
  const [liked, setLiked] = useState(false);
  const [notes, setNotes] = useState(() => { try { return localStorage.getItem("elc_goma_sermon_notes") || ""; } catch { return ""; } });
  const [saved, setSaved] = useState(false);
  const [q, setQ] = useState("");
  const [prayed, setPrayed] = useState(false);
  const [secs, setSecs] = useState(18 * 3600 + 42 * 60 + 15);
  useEffect(() => { const t = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000); return () => clearInterval(t); }, []);
  const saveNotes = () => { try { localStorage.setItem("elc_goma_sermon_notes", notes); } catch {} setSaved(true); setTimeout(() => setSaved(false), 2500); };
  const pad = (n) => String(n).padStart(2, "0");
  const cd = [["Heures", Math.floor(secs / 3600)], ["Mins", Math.floor((secs % 3600) / 60)], ["Secs", secs % 60]];
  const list = ARCHIVE.filter((a) => (a[6] + a[7] + a[8] + a[4]).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl flex flex-col gap-space-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error/10 text-error"><span className="w-2 h-2 rounded-full bg-error animate-ping" /><span className="font-label-sm text-label-sm uppercase tracking-widest">En Direct • Goma Sanctuary</span></span>
        <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md"><Ic n="visibility" c="text-sm text-secondary" /><span className="font-title-md text-title-md text-on-surface">1,482</span> Âmes connectées</div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-primary-container shadow-2xl">
            <div className="w-full h-full bg-cover bg-center" style={Bg(IMG.liveHero)} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/20 to-primary-container/60 flex flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 bg-primary-container/85 px-3.5 py-1.5 rounded-full"><span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse" /><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary">YouTube Live • Arche de l'Alliance</span></div>
                <span className="bg-primary-container/80 text-secondary-fixed font-label-sm text-label-sm px-2.5 py-1 rounded">1080p 60fps HD</span>
              </div>
              <button aria-label="Play" className="self-center w-16 h-16 rounded-full bg-secondary-container/90 hover:bg-secondary-container text-on-secondary-container flex items-center justify-center hover:scale-105 transition-all"><Ic n="play_arrow" c="text-3xl" /></button>
              <div className="flex flex-col gap-2">
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-secondary-container w-[72%]" /></div>
                <div className="flex justify-between text-on-primary font-label-sm text-label-sm"><span>LIVE 01:24:19</span><span>Direct • Sanctuaire Principal Himbi</span></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-space-sm">
            <div className="flex flex-wrap gap-2"><Pill c="bg-secondary-container/15 text-on-secondary-container">Culte Dominical Principal</Pill><span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full">Série : Alliance & Destinée</span></div>
            <h1 className="font-headline-md text-headline-md">Marcher dans la Grâce Souveraine et le Dessein Divin</h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <img alt="Pastor" src={IMG.profile} className="w-11 h-11 rounded-full object-cover" />
                <div><p className="font-title-md text-title-md">Senior Lead Pastor Papa</p><p className="font-body-sm text-body-sm text-on-surface-variant">Arche de l'Alliance • Effective Life Goma</p></div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setLikes(likes + (liked ? -1 : 1)); setLiked(!liked); }} className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg hover:bg-surface-container-high font-label-sm text-label-sm ${liked ? "bg-secondary-fixed/50 text-secondary" : "bg-surface-container"}`}><Ic n="favorite" c="text-base text-secondary-container" />{likes}</button>
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm"><Ic n="share" c="text-base" />Partager</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-error text-on-error font-title-md text-title-md hover:brightness-110"><Ic n="smart_display" c="text-lg" />Regarder sur YouTube</a>
              <Btn c="bg-primary-container text-on-primary hover:bg-tertiary-container"><Ic n="notifications_active" c="text-secondary-fixed text-lg" />S'abonner à la Chaîne</Btn>
              <Btn c="bg-surface-container-high text-on-surface hover:bg-surface-variant"><Ic n="download" c="text-base" />Plan du Sermon (PDF)</Btn>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center"><h3 className="font-title-lg text-title-lg flex items-center gap-2"><Ic n="edit_note" c="text-secondary text-xl" />Bloc-notes Spirituel & Révélations</h3>{saved && <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Enregistré automatiquement</span>}</div>
            <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} onBlur={saveNotes} placeholder="Écrivez vos notes inspirées pendant le culte... Elles restent privées dans votre navigateur." className="w-full p-3.5 rounded-lg bg-surface-container-low focus:outline-none focus:bg-surface-container" />
            <div className="flex justify-between text-body-sm text-on-surface-variant"><span>Points clés : La Grâce prévenante • La fidélité de l'Alliance à Goma</span><button onClick={saveNotes} className="font-label-md text-label-md font-semibold hover:text-secondary flex items-center gap-1"><Ic n="save" c="text-base" />Sauvegarder</button></div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="bg-primary-container text-on-primary p-5 rounded-xl shadow-md flex flex-col gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Prochain Rendez-vous</span>
            <div><p className="font-title-lg text-title-lg">Culte d'Intercession & Enseignement</p><p className="font-body-sm text-body-sm text-on-primary-container">Mercredi à 16:30 • Arche de l'Alliance</p></div>
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              {cd.map(([l, v]) => <div key={l} className="bg-tertiary-container/80 p-2 rounded"><span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">{pad(v)}</span><span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">{l}</span></div>)}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col h-[520px] overflow-hidden">
            <div className="flex bg-surface-container-low p-1.5 gap-1">
              {[["chat", "forum", "Communion en Direct"], ["prayer", "volunteer_activism", "Requête Pastorale"]].map(([k, i, l]) => (
                <button key={k} onClick={() => setTab(k)} className={`flex-1 py-2 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 ${tab === k ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant"}`}><Ic n={i} c="text-base" />{l}</button>
              ))}
            </div>
            {tab === "chat" ? (
              <div className="flex-1 flex flex-col justify-between p-4 overflow-hidden">
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-body-sm">
                  {chat.map(([n, t, m], i) => (
                    <div key={i} className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-low"><div className="flex justify-between"><span className="font-title-md text-title-md font-semibold">{n}</span><span className="font-label-sm text-label-sm text-outline">{t}</span></div><p>{m}</p></div>
                  ))}
                </div>
                <form className="pt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); if (msg.trim()) { setChat([...chat, ["Moi (En Ligne)", "À l'instant", msg.trim()]]); setMsg(""); } }}>
                  <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Envoyer un message de foi..." className="flex-1 px-3.5 py-2.5 rounded-lg bg-surface-container text-body-sm focus:outline-none" />
                  <button aria-label="Send" className="p-2.5 rounded-lg bg-secondary-container text-on-secondary-container"><Ic n="send" c="text-lg" /></button>
                </form>
              </div>
            ) : (
              <form className="flex-1 flex flex-col gap-3 p-4 overflow-y-auto" onSubmit={(e) => { e.preventDefault(); setPrayed(true); e.target.reset(); setTimeout(() => setPrayed(false), 5000); }}>
                <input placeholder="Votre Nom / Anonyme" className="px-3 py-2 rounded-lg bg-surface-container text-body-sm" />
                <select className="px-3 py-2 rounded-lg bg-surface-container text-body-sm">{["Santé & Guérison Divine", "Restauration Familiale & Foyer", "Percée Financière & Travail", "Protection Divine sur la Région", "Action de Grâce & Témoignage"].map((o) => <option key={o}>{o}</option>)}</select>
                <textarea rows={4} placeholder="Exprimez votre besoin avec foi..." className="p-3 rounded-lg bg-surface-container text-body-sm" />
                <label className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant"><input type="checkbox" defaultChecked />Garder confidentiel (Équipe pastorale uniquement)</label>
                <Btn type="submit"><Ic n="church" c="text-lg" />Déposer ma Requête à l'Autel</Btn>
                {prayed && <p className="font-body-sm text-body-sm text-secondary text-center font-medium">Votre requête a été reçue avec ferveur. Que la paix de Dieu garde votre cœur.</p>}
              </form>
            )}
          </div>

          <div className="bg-surface-container p-4 rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed"><Ic n="account_balance_wallet" c="text-xl" /></div><div><p className="font-title-md text-title-md">Dîmes & Offrandes en Ligne</p><p className="font-body-sm text-body-sm text-on-surface-variant">M-Pesa, Airtel Money & Visa Goma</p></div></div>
            <button onClick={() => go("give")} className="p-2 rounded-lg bg-surface-container-lowest hover:bg-secondary-container"><Ic n="arrow_forward" c="text-lg" /></button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-primary-container text-on-primary py-12 px-8 lg:px-16 shadow-xl text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-space-md">
          <Pill c="bg-secondary-container/20 text-secondary-fixed">Écriture d'Ancrage du Message</Pill>
          <blockquote className="font-headline-lg text-headline-lg leading-relaxed italic font-normal">« Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. »</blockquote>
          <cite className="not-italic font-title-lg text-title-lg text-secondary-fixed uppercase tracking-widest">Éphésiens 2:8</cite>
          <span className="font-label-sm text-label-sm text-on-primary-container tracking-wider uppercase">Version Louis Segond • Thème Annuel Arche de l'Alliance</span>
        </div>
      </section>

      <section className="flex flex-col gap-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div><Eyebrow>Médiathèque Spirituelle</Eyebrow><h2 className="font-headline-md text-headline-md">Archives & Enseignements Récents</h2></div>
          <div className="relative lg:w-80"><Ic n="search" c="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Chercher par verset, orateur, date..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-high text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container/40" /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {list.map(([img, dur, tag, tagC, date, views, t, d, who]) => (
            <article key={t} className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-video overflow-hidden bg-primary-container">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={Bg(img)} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 bg-primary-container/90 text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">{dur}</span>
                <span className={`absolute top-3 left-3 font-label-sm text-label-sm uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${tagC}`}>{tag}</span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-on-surface-variant font-label-sm text-label-sm">{date} • {views}</div>
                  <h3 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors line-clamp-2">{t}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{d}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center font-bold text-xs">{who[0]}</div><span className="font-title-md text-xs">{who}</span></div>
                  <button aria-label="Replay sermon" className="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary-container flex items-center justify-center"><Ic n="play_arrow" c="text-lg" /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <span className="font-body-sm text-body-sm text-on-surface-variant">Affichage de 1 à 3 sur 184 messages enregistrés</span>
      </section>

      <section className="rounded-xl bg-surface-container p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div><h4 className="font-title-lg text-title-lg">Vivez le Culte en Présentiel ce Dimanche</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Arche de l'Alliance, Quartier Himbi, Avenue du Lac, Goma • Accueil chaleureux & Garderie d'enfants</p></div>
        <Btn c="bg-primary-container text-on-primary hover:bg-tertiary-container" onClick={() => go("home")}>Planifier Ma Visite →</Btn>
      </section>
    </div>
  );
}

/* ---------- ADMIN PORTAL ---------- */
const A_NAV = [["dashboard", "Vue d'Ensemble"], ["groups", "Membres & Cellules"], ["cell_tower", "Diffusion Direct"], ["payments", "Dîmes & Offrandes"], ["volunteer_activism", "Requêtes de Prière"]];
const KPIS = [["groups", "+28 ce mois", "Membres Enregistrés", "1,240", "fidèles actifs", "Recensement 2025"], ["sensors", "En Direct YouTube", "Spectateurs Simultanés", "450+", "flux simultanés", "Régie YouTube & Facebook"], ["home_work", "Communion Fraternelle", "Départements & Cellules", "6 / 14", "Min. / Maisons", "Quartiers Himbi, Katindo, Mabanga"], ["event_upcoming", "Goma & Environs", "Événements Prévus", "4", "au calendrier", "Prochain: Veillée de Victoire"]];
const A_EVENTS = [[IMG.evt1, "Grande Nuit de la Traversée", "Psaume 91 • Sous l'Abri du Très-Haut", "Veillée", "31 Décembre • 21:00", "Grand Sanctuaire Himbi"], [IMG.evt2, "Conférence Annuelle Déborah", "Juges 5:7 • Une Mère s'est Levée", "Conférence", "18-20 Mai • 15:30", "Salle Polyvalente Bethsaïda"]];
const TIMINGS = [["1er Culte Dominical", "Français / Swahili", "09:00", "10:30"], ["2ème Culte Dominical", "Français / Anglais", "10:30", "12:30"], ["Mardi Intercession & Jeûne", "Parvis de Prière", "12:00", "14:00"], ["Vendredi Cellules de Maison", "14 Maisons Relais", "16:30", "18:00"]];
const PRAYERS = [["JK", "Maman Jeannette K.", "Hier à 19:42 • Cellule Mabanga", "Guérison", "Prière fervente pour mon jeune frère hospitalisé à l'Hôpital Heal Africa. Que la main puissante du Seigneur restaure sa santé..."], ["ES", "Frère Eric Safari", "Aujourd'hui à 08:15 • Jeunesse", "Examen / Emploi", "Demande de grâce pour mon entretien d'embauche ce jeudi à l'organisation internationale. Que l'Éternel m'accorde la faveur royale."], ["AN", "Anonyme", "Hier à 22:10 • Paroisse Centrale", "Actions de Grâce", "Action de grâce solennelle pour la naissance sans complication de nos jumeaux après 4 ans d'attente. Gloire au Dieu de l'Alliance !"]];
const ROLES = [["military_tech", "Collège Pastoral", "Accès Total (Dîmes, Prières, Stream)", "Admin Maître"], ["live_tv", "Équipe Multimédia", "Régie Live & Événements", "Diffusion Seule"], ["favorite", "Responsables d'Intercession", "Boîte de Réception des Requêtes", "Prière Seule"]];
const Panel = ({ icon, title, sub, badge, children }) => (
  <section className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-space-sm"><div className="p-2 rounded-lg bg-primary-container text-secondary-fixed"><Ic n={icon} c="text-title-lg" /></div><div><h2 className="font-headline-sm text-headline-sm">{title}</h2><p className="font-body-sm text-body-sm text-on-surface-variant">{sub}</p></div></div>
      {badge}
    </div>
    {children}
  </section>
);

function Admin({ go }) {
  const [banner, setBanner] = useState(true);
  const [state, setState] = useState("idle");
  const update = (e) => { e.preventDefault(); setState("sync"); setTimeout(() => { setState("done"); setTimeout(() => setState("idle"), 2000); }, 800); };
  const inp = "w-full h-11 px-3 rounded-lg bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container";
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-primary-container text-on-primary z-50 flex flex-col shadow-[4px_0_24px_rgba(11,27,61,0.2)]">
        <div className="h-20 px-6 flex items-center gap-space-sm"><img alt="Profile" src={IMG.profile} className="w-8 h-8 rounded-full object-cover" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm leading-none">Arche Goma</span><span className="font-label-sm text-label-sm text-secondary-fixed tracking-widest uppercase">Admin Portal</span></div></div>
        <nav className="flex-1 px-4 py-6 space-y-1.5">
          {A_NAV.map(([i, l], k) => <button key={l} className={`w-full flex items-center gap-space-sm px-4 py-3 rounded-lg transition-all font-title-md text-title-md ${k === 0 ? "bg-surface-container-lowest/15 text-secondary-fixed" : "text-on-primary-container hover:bg-surface-container-lowest/10 hover:text-on-primary"}`}><Ic n={i} c="text-title-lg" />{l}</button>)}
          <div className="pt-4 mt-4"><button onClick={() => go("home")} className="w-full flex items-center gap-space-sm px-4 py-3 rounded-lg text-secondary-fixed hover:bg-secondary-fixed/10 font-title-md text-title-md"><Ic n="storefront" c="text-title-lg" />Retour au Site</button></div>
        </nav>
        <div className="p-4"><div className="p-space-md rounded-xl bg-surface-container-lowest/5 flex items-center justify-between"><div className="flex flex-col"><span className="font-label-lg text-label-lg">Pasteur Superviseur</span><span className="font-label-sm text-label-sm text-on-primary-container">Paroisse Centrale</span></div><Ic n="verified_user" c="text-secondary-fixed" /></div></div>
      </aside>

      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface/90 backdrop-blur-xl z-40 flex items-center justify-between px-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-space-sm"><span className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Église Arche de l'Alliance Goma</span><span className="w-1.5 h-1.5 rounded-full bg-secondary-container" /><span className="font-label-md text-label-md text-secondary">Plateforme Pastorale</span></div>
          <div className="flex items-center gap-space-md">
            <button aria-label="Notifications" className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high"><Ic n="notifications" c="text-title-lg" /></button>
            <button aria-label="Recherche" className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high"><Ic n="search" c="text-title-lg" /></button>
            <img alt="Profile" src={IMG.profile} className="w-8 h-8 rounded-full object-cover ring-2 ring-secondary-container" />
          </div>
        </header>

        <main className="pt-20 px-8 py-8 flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pt-8">
            <div><span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold text-secondary flex items-center gap-1"><Ic n="admin_panel_settings" c="text-title-md" />Console Pastorale & Régie Numérique</span><h1 className="font-headline-md text-headline-md">Tableau de Bord Administratif</h1><p className="font-body-md text-body-md text-on-surface-variant">Supervision ecclésiale en temps réel • Paroisse Centrale de Goma</p></div>
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span className="font-label-md text-label-md">Serveur Goma-Nord : En Ligne</span></div>
              <Btn c="bg-primary-container text-on-primary hover:bg-tertiary-container"><Ic n="cloud_sync" c="text-title-md" />Synchroniser Tout</Btn>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {KPIS.map(([i, badge, l, v, u, foot]) => (
              <div key={l} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div className="flex justify-between items-start"><div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container"><Ic n={i} c="text-headline-sm" /></div><span className="font-label-sm text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">{badge}</span></div>
                <div className="mt-4"><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">{l}</span><div className="flex items-baseline gap-2 mt-1"><span className="font-headline-lg text-headline-lg font-semibold">{v}</span><span className="font-body-sm text-body-sm text-on-surface-variant">{u}</span></div></div>
                <div className="mt-3 pt-3 text-secondary font-label-sm text-label-sm">{foot}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-xl">
              <Panel icon="broadcast_on_home" title="Régie de Diffusion en Direct" sub="Synchronisation simultanée avec le lecteur du site officiel" badge={<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/40 font-label-sm text-label-sm font-semibold"><span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />Signal Web Prêt</span>}>
                <form className="space-y-space-md" onSubmit={update}>
                  <div className="flex gap-space-xs"><input defaultValue="https://youtube.com/live/goma-arche-alliance-2025" className="flex-1 h-12 px-3 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary-container" /><Btn c="bg-surface-container hover:bg-surface-container-high text-on-surface"><Ic n="sync" c="text-title-md" />Tester Signal</Btn></div>
                  <input defaultValue="Culte Dominical • La Puissance de la Grâce Infinie" className="w-full h-12 px-3 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary-container" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <select className="h-12 px-3 rounded-lg bg-surface-container-low">{["Actif • Culte débute dans 15 min", "Actif • Débute dans 30 min", "Actif • Débute dans 1 heure", "Désactiver le compte à rebours"].map((o) => <option key={o}>{o}</option>)}</select>
                    <div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1">
                      <div className="flex items-center justify-between"><div><span className="font-label-md text-label-md font-semibold block">Bannière "En Direct"</span><span className="font-body-sm text-body-sm text-on-surface-variant">Badge visible sur l'accueil</span></div>
                        <button type="button" onClick={() => setBanner(!banner)} className={`w-11 h-6 rounded-full relative transition-colors ${banner ? "bg-secondary-container" : "bg-surface-variant"}`}><span className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform ${banner ? "translate-x-5" : ""}`} /></button></div>
                      <span className={`font-label-sm text-label-sm ${banner ? "text-secondary" : "text-on-surface-variant"}`}>{banner ? "Bandeau Actif sur la page d'accueil" : "Bandeau Masqué sur le site"}</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-space-sm"><button type="reset" className="px-4 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container font-title-md text-title-md">Annuler</button>
                    <Btn type="submit"><Ic n={state === "sync" ? "autorenew" : state === "done" ? "check_circle" : "cell_tower"} c={`text-title-md ${state === "sync" ? "animate-spin" : ""}`} />{state === "sync" ? "Synchronisation..." : state === "done" ? "Signal Actualisé !" : "Mettre à Jour le Signal en Direct"}</Btn></div>
                </form>
              </Panel>

              <Panel icon="celebration" title="Gestion & Publication des Événements" sub="Conférences, retraites spirituelles et veillées de prière" badge={<span className="font-label-sm text-label-sm px-3 py-1 bg-surface-container rounded-full">3 programmés</span>}>
                <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-md">
                  <h3 className="font-title-lg text-title-lg flex items-center gap-2"><Ic n="add_circle" c="text-secondary" />Planifier un Nouvel Événement</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <input placeholder="ex: 7 Jours de Jeûne & Prière • Percée Divine" className={`${inp} sm:col-span-2`} />
                    <select className={inp}>{["Culte Spécial d'Onction", "Conférence des Femmes Vertueuses", "Séminaire Jeunesse d'Impact", "Veillée d'Intercession Régionale", "Convention Annuelle"].map((o) => <option key={o}>{o}</option>)}</select>
                    <input type="datetime-local" defaultValue="2025-04-12T17:00" className={inp} />
                    <input defaultValue="Sanctuaire Principal • Arche de l'Alliance, Quartier Himbi, Goma" className={`${inp} sm:col-span-2`} />
                    <textarea rows={2} placeholder="Ésaïe 43:19 • 'Voici, je vais faire une chose nouvelle...'" className="sm:col-span-2 w-full p-3 rounded-lg bg-surface-container-lowest" />
                    <div className="sm:col-span-2 rounded-xl p-6 bg-surface-container-lowest flex flex-col items-center text-center cursor-pointer hover:bg-surface"><Ic n="add_photo_alternate" c="text-headline-md text-secondary mb-2" /><span className="font-title-md text-title-md">Glissez l'affiche ici ou parcourez vos fichiers</span><span className="font-body-sm text-body-sm text-on-surface-variant">PNG, JPG haute définition recommandés (Max 8 Mo)</span></div>
                  </div>
                  <div className="flex justify-end"><Btn c="bg-primary-container text-on-primary hover:bg-primary"><Ic n="publish" c="text-title-md" />Enregistrer et Publier l'Événement</Btn></div>
                </div>
                <h3 className="font-title-lg text-title-lg">Événements en Ligne</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead><tr className="bg-surface-container text-on-surface-variant font-label-md text-label-md">{["Affiche & Événement", "Catégorie", "Date & Lieu", "Actions"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr></thead>
                    <tbody>
                      {A_EVENTS.map(([img, t, v, cat, date, loc]) => (
                        <tr key={t} className="hover:bg-surface-container-low">
                          <td className="p-3"><div className="flex items-center gap-3"><img alt={t} src={img} onError={hide} className="w-12 h-12 rounded-lg object-cover shadow-sm flex-shrink-0 bg-primary-container" /><div><span className="font-title-md text-title-md font-semibold block">{t}</span><span className="font-body-sm text-body-sm text-secondary italic">{v}</span></div></div></td>
                          <td className="p-3"><span className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 font-label-sm text-label-sm font-semibold">{cat}</span></td>
                          <td className="p-3"><span className="font-body-md text-body-md block font-medium">{date}</span><span className="font-body-sm text-body-sm text-on-surface-variant">{loc}</span></td>
                          <td className="p-3"><div className="flex justify-end gap-1">{[["edit", ""], ["schedule", ""], ["delete", "text-error"]].map(([i, c]) => <button key={i} aria-label={i} className={`p-1.5 rounded hover:bg-surface-container ${c}`}><Ic n={i} c="text-title-md" /></button>)}</div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-space-xl">
              <Panel icon="schedule" title="Horaires des Cultes" sub="Configuration des rotations hebdomadaires">
                {TIMINGS.map(([t, l, a, b]) => (
                  <div key={t} className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <div className="flex justify-between"><span className="font-title-md text-title-md font-semibold">{t}</span><span className="font-label-sm text-label-sm font-semibold text-secondary">{l}</span></div>
                    <div className="grid grid-cols-2 gap-2">{[["Début", a], ["Fin", b]].map(([n, v]) => <div key={n}><span className="font-label-sm text-label-sm text-on-surface-variant block">{n}</span><input type="time" defaultValue={v} className="w-full h-9 px-2 bg-surface-container-lowest rounded font-medium" /></div>)}</div>
                  </div>
                ))}
                <Btn c="bg-surface-container hover:bg-surface-container-high text-on-surface"><Ic n="save" c="text-title-md" />Sauvegarder les Horaires Pastoraux</Btn>
              </Panel>

              <Panel icon="volunteer_activism" title="Requêtes de Prière" sub="Soumissions confidentielles des fidèles" badge={<span className="font-label-sm text-label-sm font-bold bg-secondary-fixed text-on-secondary-fixed px-2.5 py-0.5 rounded-full">3 non lues</span>}>
                {PRAYERS.map(([ini, n, when, tag, txt]) => (
                  <div key={n} className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <div className="flex items-start justify-between"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container font-semibold flex items-center justify-center font-label-md text-label-md">{ini}</div><div><span className="font-title-md text-title-md font-semibold block">{n}</span><span className="font-body-sm text-body-sm text-on-surface-variant">{when}</span></div></div><span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">{tag}</span></div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">"{txt}"</p>
                    <div className="flex justify-end gap-1.5">{["Prié", "Transmettre"].map((b) => <button key={b} className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm">{b}</button>)}<button aria-label="Archiver" className="p-1 rounded hover:bg-surface-container"><Ic n="archive" c="text-body-sm" /></button></div>
                  </div>
                ))}
              </Panel>

              <Panel icon="shield_person" title="Rôles & Accréditations" sub="Gestion de la sécurité des accès" badge={<button className="font-label-sm text-label-sm text-secondary font-semibold hover:underline">Modifier Droits</button>}>
                {ROLES.map(([i, t, s, b]) => (
                  <div key={t} className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center"><Ic n={i} c="text-title-md" /></div><div><span className="font-title-md text-title-md font-semibold block">{t}</span><span className="font-body-sm text-body-sm text-on-surface-variant">{s}</span></div></div>
                    <span className="px-2.5 py-1 rounded bg-secondary-fixed font-label-sm text-label-sm font-bold">{b}</span>
                  </div>
                ))}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-2"><Ic n="lock" c="text-secondary text-title-md" /><span className="font-label-sm text-label-sm text-on-surface-variant">Authentification à deux facteurs active pour les comptes de supervision.</span></div>
              </Panel>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- App shell ---------- */
export default function App() {
  const [page, setPage] = useState("home");
  const go = (p) => { setPage(["home", "about-us", "ministries", "watch-live", "admin-portal"].includes(p) ? p : "home"); window.scrollTo(0, 0); };
  if (page === "admin-portal") return <Admin go={go} />;
  const View = { home: Home, "about-us": About, ministries: Ministries, "watch-live": Watch }[page];
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header page={page} go={go} />
      <main className="w-full pt-20 bg-surface min-h-screen"><View go={go} /></main>
      <Footer page={page} go={go} />
    </div>
  );
}