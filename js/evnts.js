(()=>{
    const graficke = {
        init() {
            console.log("1. Aplicatie inlaise");
            this.cachesElement();
            this.generationUi();
        },
        cachesElement() {
            console.log("Cashen van elementen");
            
           
            this.sosialElement = document.querySelector(".footer__navLink");
            this.eventsElement = document.querySelector(".events");
        },
        generationUi(){
            console.log("3. Genereren van ui");
           

            this.eventsElement.innerHTML = docent
                .map((lector) => {
                    return `
            
                
                <div class="event" > 
                    <a href="${lector.link}">
                    <img srcset="" src="${lector.picture}" alt="">
                    <h1>${lector.name}</h1>
                    </a>
                     <p>${lector.info}</p>
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