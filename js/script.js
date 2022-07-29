const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    
    
       .split('') // зробили з об'єкта массив
       .map((letter, idx) => `<span 
       style="transition-delay:${idx * 30}ms">${letter}</span>`) // map інтелектуальний перебор масива
       .join('') // повернули назад об'єкт
})
