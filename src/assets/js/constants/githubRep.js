export const getRepositoriesHtml = (date, url, name, description) => {
    return `
     <div class="repository-name"> <a href=${url} target="_blank">${name}</a></div>
     <div class="repository-desc">${description}</div>
     <div class="repository-date">${date}</div>
              `
}