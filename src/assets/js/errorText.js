export const errorText = (input) => {
    const errorValue = document.querySelector('.error-text')
    if (errorValue !== null) {
        errorValue.remove()
    }

    const label = document.querySelector('.search-label')
    input.classList.add('error')

    const error = document.createElement('div')
    error.className = 'error-text'
    console.log(input.value.length)
    if (input.value.length === 0) {
        error.innerText = 'Ничего не введено. Повторите попытку.'
    } else {
        error.innerText = 'Минимальное количество символов - 2. Повторите попытку.'
    }

    label.append(error)
}