const headersAccordion = document.querySelectorAll('.accordion-header')
const accordionItens = document.querySelectorAll('.accordion-item')
const simulateButton = document.getElementById('simulate-button')

function formatCurrency() {
    let value = salesInput.value.replace(/\D/g, "")
    value = (value / 100).toFixed(2)
    salesInput.value = `R$ ${value.replace(".", ",")}`
}

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

function ToggleMenu() {
    let menuHamburguerClose = document.getElementsByClassName("menu-header")[0];
    let menuHamburguerOpen = document.getElementsByClassName("menu-header-open")[0];

    if (menuHamburguerClose !== undefined) {
        menuHamburguerClose.classList.remove("menu-header");
        menuHamburguerClose.classList.add("menu-header-open");

    } else if(menuHamburguerOpen !== undefined) {
        menuHamburguerOpen.classList.remove("menu-header-open");
        menuHamburguerOpen.classList.add("menu-header");
    }
}

function calculateFeesCard(){
    const billAmount = parseFloat(salesInput.value.replace(/\D/g, "")) / 100
    const quotaFee = parseFloat(document.getElementById('quota-input').value)
    const resultValueToInput = document.getElementsByClassName('result-text-value')[0]
    const savingResult = document.getElementById('saving-result')
    const feePercentage = document.getElementById('fees-input')

    const feeValue = billAmount * (quotaFee/100)
    const amountReceivable = billAmount - feeValue
    const competitionFeeValue = competitionFee(quotaFee)
    const savingReceivable = amountReceivable - (billAmount - competitionFeeValue)

    if(billAmount){
        resultValueToInput.innerHTML = `R$ ${amountReceivable.toFixed(2).replace(".", ",")}`
        savingResult.innerHTML = `R$ ${savingReceivable.toFixed(2).replace(".", ",")}`
    }

    feePercentage.value = `% ${quotaFee.toFixed(2).replace('.',',')}` 
}

function competitionFee(quotaFee){
    let quotaCompetition = 0
    switch (quotaFee) {
        case 1:
            quotaCompetition = 4.99
            break
        case 10:
            quotaCompetition = 35.49
            break
        case 12:
            quotaCompetition = 41.47
            break
        default:
            quotaCompetition = 50
            break;
    }
    return quotaCompetition
}

function scrollToSimulationSection() {
    const simulationSection = document.getElementById('simulator')
    simulationSection.scrollIntoView({ behavior: 'smooth' })
}

function redirectToWhatsApp() {
    const phoneNumber = '5511981982024'
    const message = encodeURIComponent('Olá, tenho interesse em contratar seus serviços.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
}

simulateButton.addEventListener('click', scrollToSimulationSection)

salesInput.addEventListener('input', function () {
    formatCurrency()
    calculateFeesCard()
})

quotaInput.addEventListener('change', function () {
    calculateFeesCard()
})

window.onload = function() {
    calculateFeesCard();
    formatCurrency();
}

