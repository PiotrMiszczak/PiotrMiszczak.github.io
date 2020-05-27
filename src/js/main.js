"use strict";
// place your code below
const wrapper = document.querySelector('.projects__wrapper')
fetch('https://api.github.com/users/PiotrMiszczak/repos')
.then(resp => resp.json())
.then(resp =>{
    const repos = resp 
    for(const repo of repos){
       if(repo.name=='PiotrMiszczak'){
        wrapper.innerHTML += `<div class="projects__item">
        <div class="projects__item--content">
        <img src="assets/img/Vector.svg">
        <h3 class="projects__item--header">Portfolio</h3>
        <p>Brak opisu</p>
      </div>
        <footer class="projects__footer">
         <a href="${repo.html_url}"><img src="assets/img/Git icon.svg"></a><a class="projects__footer--link" href="${repo.html_url}">Github</a>
        </footer>
      </div>`}
      else{
      wrapper.innerHTML += `<div class="projects__item">
      <div class="projects__item--content">
      <img src="assets/img/Vector.svg">
      <h3 class="projects__item--header">${repo.name}</h3>
      <p>${repo.description}</p>
    </div>
      <footer class="projects__footer">
       <a href="https://piotrmiszczak.github.io/${repo.name}/"><img src="assets/img/Demo Icon.svg"></a><a class="projects__footer--link projects__footer--link-demo" href="https://piotrmiszczak.github.io/${repo.name}/">Demo</a>
       <a href="${repo.html_url}"><img src="assets/img/Git icon.svg"></a><a class="projects__footer--link" href="${repo.html_url}">Github</a>
      </footer>
    </div>`}}})
    

