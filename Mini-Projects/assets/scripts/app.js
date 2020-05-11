class Product{
    title='DEFAULT';
    imageUrl;
    price;
    description;    
}

const productList={
    products:[
        {
            title:'A Pillow',
            imageUrl:
            'https://cdn.shopify.com/s/files/1/0178/0240/products/non_adjustable1_600x.jpg?v=1553174661',
            price: 19.99,
            description: 'A soft pillow!'

        },
        {
            title: 'A carpet',
            imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81KSEQwRa9L._SL1200_.jpg',
            price: 89.99,
            description: 'A carpet which you might like or not!'
        }
    ],
    render(){
        const renderHook=document.getElementById('app');
        const prodList=document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
            const prodEl=document.createElement('li');
            prodEl.className='product-item';
            prodEl.innerHTML=`
            <div>
             <img src="${prod.imageUrl}" alt="${prod.title}">
             <div class="product-item__content">
               <h2>${prod.title}</h2>
               <h3>\$${prod.price}</h3>
               <p>${prod.description}</p>
             </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

productList.render();