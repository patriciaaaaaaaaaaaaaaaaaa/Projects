const occasionButtons = document.querySelectorAll(".occasion-btn");
const productContainer = document.querySelector(".box-container-2");


function filterProducts(category) {

    const productBoxes = document.querySelectorAll(".boxx");

    productBoxes.forEach(box => {
        box.style.display = "none";
    });


    productBoxes.forEach(box => {
        const categories = box.dataset.category.split(" ");
        if (categories.includes(category)) {
            box.style.display = "block";
        }
    });
}


occasionButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedCategory = button.dataset.category;
        filterProducts(selectedCategory);
    });
});

function filterProducts(category) {
  const productBoxes = document.querySelectorAll(".boxx");

  productBoxes.forEach(box => {
      if (category === "all" || box.dataset.category === category) {
          box.style.display = "block";
      } else {
          box.style.display = "none";
      }
  });
}

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.box-container-2 .boxx').forEach(box =>{
  box.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

