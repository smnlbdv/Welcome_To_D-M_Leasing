
const sectionFilters = document.querySelectorAll('.filters-item')
const carBlock = document.querySelectorAll('.car__block')

  sectionFilters.forEach(item => {
    item.addEventListener('click', open)
  });


  function open (evt) {
    const button = this.dataset.button
    sectionFilters.forEach(item => {
      item.classList.remove('filters-item--active')
    });
    this.classList.add('filters-item--active')
    carBlock.forEach(item => {
      item.classList.remove('car__block-active')
    })
    document.querySelector(`#${button}`).classList.add('car__block-active')
  }