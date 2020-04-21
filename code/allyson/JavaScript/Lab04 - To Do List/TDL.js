let Itemstodo = []

function addtolist(text) {
    const items = {
        text,
        done: false,
        id: Date.now(),
    };

    Itemstodo.push(items);

    const doc = document.querySelector('.js-check-off');
    doc.insertAdjacentHTML('beforeend', `
        <li class="items-list" data-key="${items.id}">
            <input id="${items.id}" type="checkbox"/>
            <label for="${items.id}" class="tick js-tick"></label>
            <span>${items.text}</span>
        </li>
    `);
}

function todoDone{
    const index Itemstodo.findIndex
}