const auth = document.querySelector('#auth')
const form = document.querySelector('#auth-form')
const main = document.querySelector('#main')

form.addEventListener('submit', e => {
  e.preventDefault()

  const password = form['password-input'].value

  /**
   * If you're not supposed to be here - congrats.
   * You know your way around whichever browser's devtools you're using.
   * Unfortunately, this is the world's least secure password...
   * But good for you hackerman.
   * Claps all around for f12.
   */
  
  if (password === '1234') {
    auth.classList.add('hidden')
    main.classList.remove('hidden')
  }
})