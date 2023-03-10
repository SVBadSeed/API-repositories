import {getRepositoriesHtml} from "./constants/githubRep"

export const createRepositories = (rep) => {
    const date = new Date(rep.created_at).toLocaleString()
    const repository = document.createElement('div')

    repository.classList.add('repository')
    repository.innerHTML = getRepositoriesHtml(date, rep.clone_url, rep.name, rep.description)

    return repository
}