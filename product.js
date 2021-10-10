const filterButton=document.querySelectorAll('.filter-button');
const productBox=document.querySelectorAll(".product-box");
const cart=document.querySelectorAll(".cart");
cart.forEach((c)=>{
    c.addEventListener('click',(e)=>{
    if(c.innerHTML.toLowerCase()==='add cart')
    {
        c.innerHTML='Remove Cart';
        alert("Item is Added To Cart !");
        c.style.border='2px solid green';
    }
    else{
        c.innerHTML='Add Cart';
        alert("Item is Remove To Cart !");
        

    }
    })
})
filterButton.forEach(element => {
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        const filter=e.target.dataset.filters;
        productBox.forEach((product)=>{
            if(filter==='all')
            {
                product.style.display='block';

            }
            else{
                if(product.classList.contains(filter))
                {
                    product.style.display='block';
                }
                else{
                    product.style.display='none';
                }
            }
        })
    })
});
const input =document.querySelector('#search');
const productName=document.querySelectorAll(".product-details h2");
const searchingFun=(e)=>{
    let searchItem= e.target.value.toLowerCase().trim();
    productName.forEach((product)=>{
        const item=product.innerHTML.toLowerCase();
        if(item.indexOf(searchItem)!=-1)
        {
            product.parentElement.parentElement.style.display='block';
        }
        else{
            product.parentElement.parentElement.style.display='none';

        }
    })
}
input.addEventListener('keyup',searchingFun);

