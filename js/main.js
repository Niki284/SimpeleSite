(()=>{
    const graficke = {
        init() {
            console.log("1. Aplicatie inlaise");
            this.cachesElement();
            this.generationUi();
        },
        cachesElement() {
            console.log("Cashen van elementen");
            this.grafickElement = document.querySelector(".grid");
           
            this.sosialElement = document.querySelector(".footer__navLink");
            this.eventsElement = document.querySelector(".events");
        },
        generationUi(){
            console.log("3. Genereren van ui");

            this.eventsElement.innerHTML = events
            .map((ev) => {
                return `
        
                <li class="event" > 
                    <a href="${ev.link}">
                    <h1>${ev.blog}</h1>
                    
                    </a> 
                </li>
       
            `;
            })
            .join("");

            this.grafickElement.innerHTML = grafick
                .map((content) => {
                    return `
            
                
                <div class="card" id="${content.id}"> 
                
                    <img class="card--img" src="${content.foto.image}" alt="">     
                
                    
                <div class="card__text">
                    <h1>${content.title}</h1>
                    <p>${content.description}</p>
                    <i>${content.technologie}</i>
                </div>
                    
                    
                </div>
           
            `;
                })
                .join("");

            this.sosialElement.innerHTML = sosialeMedia.map((sosial)=>{
                return ` 
                <li>
                    <a href="${sosial.link}">${sosial.name}<img srcset="" src="${sosial.image}" alt=""></a>
                </li>`;
            }).join("");
        }
    }
    graficke.init();
})();