const item = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeHolder of placeHolders) {
  placeHolder.addEventListener('dragover', dragover);
  placeHolder.addEventListener('dragenter', dragenter);
  placeHolder.addEventListener('dragleave', dragleave);
  placeHolder.addEventListener('drop', dragDrop);
};

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0)
}

function dragend(e) {
  // e.target.classList.remove('hold' , 'hide');
  e.target.className = 'item';
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.target.classList.add('hovered')
}
function dragleave(e) {
  e.target.classList.remove('hovered')
}
function dragDrop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}