import {inputErrorEvent} from "./inputErrorEvent"
import {errorText} from "./errorText"
import {createRepositories} from "./createRep"

const form = document.querySelector('.search-form')
const repContainer = document.querySelector('.search-results')
const input = document.querySelector('.search-input')

// форма отправляется при нажатии на кнопочку или enter !!

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    // очищаем наши репозитории и подгружаем новые!
    const repositories = document.querySelectorAll('.repository')
    repositories.forEach(rep => {
        rep.remove()
    })
// хитрый способ получить инпут поля объектом и вставить в ссылку апишки
    const inputValue = Object.fromEntries(new FormData(event.target))
    const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue.value}`)

    const errorFound = document.querySelector('.not-found')
    if (errorFound !== null) {
        errorFound.remove()
    }
    // делаем проверку если пришел положиетльный ответ - то обрезаем наш массив до 10 и пушим объекты в нужную обертку
    if (response.ok) {
        const data = await response.json()

        if (data.total_count === 0) {
            const notFound = document.createElement('div')
            notFound.className = 'not-found'
            notFound.innerText = 'Ничего не найдено!'

            repContainer.append(notFound)
            input.value = ''
        } else {
            if (inputValue.value.length >= 2) {
                data.items.slice(0, 10).forEach((item) => {
                    repContainer.append(createRepositories(item))
                })
                input.value = ''
            } else {
                errorText(input)
                input.value = ''
            }
        }
        // или если ответ пришел пустым, то пишем что ничего не найдено!!
    } else {
        errorText(input)
        input.value = ''
    }
})

inputErrorEvent(input) // вызываем нашу функцию обработчика ошибок