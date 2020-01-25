const storage = window.localStorage
const body = document.querySelector('body')
const auth = document.querySelector('#auth')
const main = document.querySelector('#main')

lightbox.option({
  maxWidth: 700,
  resizeDuration: 0,
  wrapAround: true
})

if (storage.getItem('buttercupsandfluffys')) {
  auth.classList.add('hidden')
  body.classList.add('frame')
  main.classList.remove('hidden')
} else {
  const form = document.querySelector('#auth-form')

  form.addEventListener('submit', e => {
    e.preventDefault()
  
    const password = form['password-input'].value
  
    /**
     * If you're not supposed to be here - congrats.
     * You know your way around whichever browser's devtools you're using.
     * Unfortunately, this is the world's least secure client-side javascript password...
     * I mean, hell, the damn HTML is in the body if you want to just copy it over to CodePen or something.
     * But, no, good for you hackerman.
     * Claps all around for f12.
     */
    
    if (password === 'Floofy') {
      storage.setItem('buttercupsandfluffys', true)
      auth.classList.add('hidden')
      body.classList.add('frame')
      main.classList.remove('hidden')
    }
  })
}