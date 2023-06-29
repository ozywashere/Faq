const btns = document.querySelectorAll('.question')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement
    if (question.classList.contains('active')) {
      question.classList.remove('active')
    } else {
      btns.forEach((item) => {
        item.parentElement.classList.remove('active')
      })
      question.classList.add('active')
    }
  })
})
