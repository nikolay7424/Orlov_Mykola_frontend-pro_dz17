function createLi(textContent) {
    const li = document.createElement('li');
    li.textContent = textContent;
    return li;
}

function generateList(array) {
    const ul = document.createElement('ul');
    for(let i in array) {
        if(Array.isArray(array[i])) {
            const nestedUl = generateList(array[i]);
            ul.append(nestedUl);
        } else {
            const li = createLi(array[i]);
            ul.append(li);
        }
    }
    return ul;
}

let array = [1, 2, [1.1, 1.2, 1.3, ['1.1.1', '1.1.2']], 3];

document.body.append(array);

console.log(array);