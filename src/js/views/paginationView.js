import icons from 'url:../../img/icons.svg';
import View from './View';

class Pagination extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numberPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );

    // page 1, and there are other pages
    if (curPage === 1 && numberPages > 1) {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }

    // last page
    if (curPage === numberPages && numberPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }"  class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }

    // other pages
    if (curPage < numberPages) {
      return `
        <button  data-goto="${
          curPage - 1
        }"  class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button  data-goto="${
          curPage + 1
        }"  class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // page 1, and there are NO other pages
    return 'only 1 page';
  }
}

export default new Pagination();
