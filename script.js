const headersAccordion = document.querySelectorAll('.accordion-header')
const accordionItens = document.querySelectorAll('.accordion-item')

headersAccordion.forEach(function(header){
    
    header.addEventListener('click',function(){
        const item = this.parentNode
    
        const isActive = item.classList.contains('accordion-item--active')

        accordionItens.forEach(function(item){
            item.classList.remove('accordion-item--active')
            item.classList.add('accordion-item--closed')
        })

        if(!isActive){
            item.classList.add('accordion-item--active')
            item.classList.remove('accordion-item--closed')
        }

    })

})