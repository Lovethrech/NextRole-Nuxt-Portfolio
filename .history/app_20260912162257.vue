<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)
const demoOpen = ref(false)

const benefits = [
  { number: '01', title: 'Keep every opportunity organized', text: 'Save roles, deadlines, salary ranges, contacts and notes in one calm, searchable workspace.', outcome: 'Know what needs your attention next.' },
  { number: '02', title: 'Tailor without starting over', text: 'Compare your experience with each role and build a focused application draft for your review.', outcome: 'Create relevant applications, faster.' },
  { number: '03', title: 'Prepare with real confidence', text: 'Turn job requirements into practice questions and connect them to examples from your experience.', outcome: 'Arrive ready to tell your story.' },
  { number: '04', title: 'Never miss a follow-up', text: 'Set reminders for recruiter replies, interviews, thank-you notes and application deadlines.', outcome: 'Stay consistent without relying on memory.' }
]

const steps = [
  ['Save the opportunity', 'Keep the role, company, deadline and job description together.'],
  ['Review your fit', 'See where your verified skills and experience meet the requirements.'],
  ['Prepare your application', 'Create a tailored resume draft, cover letter and checklist.'],
  ['Track what happens next', 'Record interviews, schedule follow-ups and move each role forward.']
]

const faqs = [
  ['Does NextRole apply for jobs automatically?', 'No. NextRole helps you research, prepare, organize and track applications. You decide what gets submitted.'],
  ['Will it invent skills or experience?', 'No. NextRole works with the information you provide. You review every suggestion before using it.'],
  ['Can I manage several applications?', 'Yes. Organize opportunities by stage, deadline, company and priority from one dashboard.'],
  ['Do I need to replace my current resume?', 'No. Upload your existing resume and use it as the foundation for role-specific drafts.']
]
</script>

<template>
  <div class="site-shell">
    <header class="nav-wrap">
      <nav class="nav container" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="NextRole home">
        <span class="brand-logo-ctn">
          <img src="./assets/ChelLogoImg.png" alt="Chel Brand Logo" class="brand-logo"/>
        </span>
        <span class="brand-mark">N</span><span>NextRole</span></a>
        <button class="menu-button" type="button" :aria-expanded="mobileOpen" aria-label="Toggle menu" @click="mobileOpen = !mobileOpen"><span></span><span></span></button>
        <div class="nav-links" :class="{ open: mobileOpen }">
          <a href="#features" @click="mobileOpen = false">Features</a>
          <a href="#how" @click="mobileOpen = false">How it works</a>
          <a href="#faq" @click="mobileOpen = false">FAQ</a>
          <button class="button button-small button-ghost" @click="demoOpen = true">See the workspace</button>
        </div>
      </nav>
    </header>

    <main id="top">
      <section class="hero container">
        <div class="hero-copy">
          <p class="eyebrow"><span></span>One workspace for your whole job search</p>
          <h1>Run your job search.<br><em>Don’t let it run you.</em></h1>
          <p class="hero-lede">Organize every opportunity, tailor stronger applications, prepare for interviews and stay on top of follow-ups—all from one intelligent workspace.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#cta">Start your job search <span>↗</span></a>
            <button class="text-link" @click="demoOpen = true"><span class="play">▶</span> See how it works</button>
          </div>
          <p class="microcopy">Free to start · No credit card required</p>
        </div>

        <div class="dashboard-frame" aria-label="NextRole application dashboard preview">
          <div class="frame-bar"><span></span><span></span><span></span><p>app.nextrole.co</p></div>
          <div class="dash">
            <aside class="dash-side">
              <div class="mini-brand"><b>N</b></div>
              <i class="active"></i><i></i><i></i><i></i><i></i>
            </aside>
            <div class="dash-main">
              <div class="dash-top"><div><small>MONDAY, 14 OCT</small><h3>Good morning, Maya</h3></div><span class="avatar">MC</span></div>
              <div class="stat-grid">
                <div><small>ACTIVE ROLES</small><strong>12</strong><span>+3 this week</span></div>
                <div><small>INTERVIEWS</small><strong>4</strong><span>2 upcoming</span></div>
                <div><small>FOLLOW-UPS</small><strong>3</strong><span>Due today</span></div>
              </div>
              <div class="pipeline-head"><h4>Your pipeline</h4><button>+ Add role</button></div>
              <div class="pipeline">
                <div class="lane"><p>APPLIED <b>3</b></p><article><span class="company-icon cobalt">L</span><div><strong>Product Designer</strong><small>Linear · Remote</small></div><mark>86% fit</mark></article><article><span class="company-icon coral">A</span><div><strong>UX Researcher</strong><small>Arc · London</small></div><mark>78% fit</mark></article></div>
                <div class="lane"><p>INTERVIEW <b>2</b></p><article><span class="company-icon mint">V</span><div><strong>Senior UX Designer</strong><small>Vercel · Remote</small></div><mark>92% fit</mark></article><article class="task"><small>NEXT STEP</small><strong>Prepare portfolio walkthrough</strong><span>Tomorrow · 10:30</span></article></div>
                <div class="lane"><p>OFFER <b>1</b></p><article><span class="company-icon gold">R</span><div><strong>Design Lead</strong><small>Raycast · Remote</small></div><mark>90% fit</mark></article><article class="celebrate"><span>✦</span><strong>You’re close.</strong><small>Review your notes before Friday.</small></article></div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-proof"><span>Built for focused job seekers</span><p><b>Organize</b><i></i><b>Tailor</b><i></i><b>Prepare</b><i></i><b>Follow up</b></p></div>
      </section>

      <section class="problem-section">
        <div class="container problem-grid">
          <div><p class="section-kicker">THE REAL PROBLEM</p><h2>Your next opportunity shouldn’t get lost in a spreadsheet.</h2></div>
          <div class="problem-copy"><p>A serious job search can quickly become a second full-time job. One role is saved in your browser. Another is buried in an email. Your deadlines live in a spreadsheet, and you’re rewriting the same resume again.</p><p>NextRole brings the process together, so you can spend less time managing your search and more time presenting your best work.</p></div>
        </div>
      </section>

      <section id="features" class="features container">
        <p class="section-kicker">WHAT CHANGES</p>
        <div class="section-heading"><h2>Everything you need to make your next move.</h2><p>Not more tabs. Not more noise. Just the right tools, in the right order.</p></div>
        <div class="benefit-grid">
          <article v-for="item in benefits" :key="item.number" class="benefit-card">
            <span>{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><strong>→ {{ item.outcome }}</strong>
          </article>
        </div>
      </section>

      <section id="how" class="how-section">
        <div class="container how-grid">
          <div class="how-copy"><p class="section-kicker light">A CLEARER WAY FORWARD</p><h2>From interesting role to focused application.</h2><p>NextRole gives every opportunity a simple path, while keeping you in control of every decision.</p><button class="button button-light" @click="demoOpen = true">Explore the workspace <span>↗</span></button></div>
          <ol class="steps">
            <li v-for="(step, index) in steps" :key="step[0]"><span>0{{ index + 1 }}</span><div><h3>{{ step[0] }}</h3><p>{{ step[1] }}</p></div></li>
          </ol>
        </div>
      </section>

      <section class="control container">
        <div class="control-card">
          <div class="control-visual"><div class="document"><span class="doc-label">APPLICATION DRAFT</span><i></i><i></i><i class="short"></i><div class="suggestion"><b>✦</b><p><strong>Keep this grounded</strong><small>Use your verified experience only.</small></p></div><i></i><i class="medium"></i></div></div>
          <div class="control-copy"><p class="section-kicker">AI, WITH YOU IN CONTROL</p><h2>Your application should still sound like you.</h2><p>NextRole helps organize information, identify relevant experience and produce useful first drafts. You review every word and decide what gets submitted.</p><ul><li>Uses only experience you provide</li><li>Shows suggestions—not silent changes</li><li>Keeps final approval in your hands</li></ul></div>
        </div>
      </section>

      <section id="faq" class="faq container">
        <div><p class="section-kicker">COMMON QUESTIONS</p><h2>A little clarity before you begin.</h2></div>
        <div class="accordion">
          <details v-for="(faq, index) in faqs" :key="faq[0]" :open="index === 0"><summary>{{ faq[0] }}<span>+</span></summary><p>{{ faq[1] }}</p></details>
        </div>
      </section>

      <section id="cta" class="final-cta container">
        <div><p class="section-kicker light">YOUR NEXT MOVE</p><h2>Make your next application your most focused one.</h2><p>Bring your opportunities, materials, interview prep and follow-ups together.</p><a class="button button-light" href="mailto:hello@nextrole.example">Start your job search <span>↗</span></a><small>Free to start · No credit card required</small></div>
        <div class="orbit" aria-hidden="true"><span class="orbit-one"></span><span class="orbit-two"></span><b>N</b></div>
      </section>
    </main>

    <footer class="footer container"><a class="brand" href="#top"><span class="brand-mark">N</span><span>NextRole</span></a><p>Fictional SaaS concept created to demonstrate conversion copywriting, UX design and Nuxt development.</p><span>© 2026 Concept project</span></footer>

    <Transition name="fade"><div v-if="demoOpen" class="modal-backdrop" @click.self="demoOpen = false"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="demo-title"><button class="modal-close" aria-label="Close" @click="demoOpen = false">×</button><p class="section-kicker">WORKSPACE PREVIEW</p><h2 id="demo-title">One calm place for every next step.</h2><p>This portfolio concept demonstrates the product’s messaging and interface direction. No personal information is collected.</p><div class="modal-list"><span>01</span><p><b>Save a role</b><small>Capture everything important in one place.</small></p><span>02</span><p><b>Tailor your materials</b><small>Start from your verified experience.</small></p><span>03</span><p><b>Keep moving</b><small>Follow the next action, not the noise.</small></p></div><button class="button button-primary" @click="demoOpen = false">Got it</button></section></div></Transition>
  </div>
</template>
