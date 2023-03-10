export const inputErrorEvent = (input) => {
    input.addEventListener('keyup', (event) => {
        event.target.classList.remove('error')

        const labelText = document.querySelector('.search-label')
        labelText.classList.remove('error')
        const errors = document.querySelectorAll('.error-text')

        errors.forEach((error) => {
            error.remove()
        })
    })
}