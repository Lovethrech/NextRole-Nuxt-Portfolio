export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'NextRole AI Job Search Workspace',
      meta: [
        { name: 'description', content: 'Organize job applications, tailor your resume, prepare for interviews, and manage follow-ups with NextRole.' },
        { name: 'theme-color', content: '#071514' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap' }
      ]
    }
  }
})
