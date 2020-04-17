let Itemstodo = []

function addtolist(text) {
    const item = {
        text,
        done: false,
        id: Date.now(),
    };

    Itemstodo.push(item);

    const doc = document.querySelector('.js-check-off');
    doc.insertAdjacentHTML('beforeend', `
    <li class="item-list" data-key="${item.id}">
        <input id="${item.id}" type="checkbox"/>
        <label for="${item.id}" class="tick js-tick"></label>
        <span>${item.text}</span>
        <button class="delete-item js-delete-item">
            <svg><use href="#delete-icon></use></svg>
        </button>
    </li>
  `);
}