class Product{
    title='DEFAULT';
    imageUrl;
    price;
    description; 
    
    constructor(title, image, desc, price){
        this.title=title;
        this.imageUrl=image;
        this.description=desc;
        this.price=price;
    }
}

class ProductItem{
    constructor(product){
        this.product=product;
    }

    addToCart()
    {
        console.log('Adding product to cart.....');
        console.log(this.product);
    }
    render(){
        const prodEl=document.createElement('li');
            prodEl.className='product-item';
            prodEl.innerHTML=`
            <div>
             <img src="${this.product.imageUrl}" alt="${this.product.title}">
             <div class="product-item__content">
               <h2>${this.product.title}</h2>
               <h3>\$${this.product.price}</h3>
               <p>${this.product.description}</p>
               <button>Add to Cart</button>
             </div>
            </div>
            `;
            const addCartButton=prodEl.querySelector('button');
            addCartButton.addEventListener('click',this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList{
    products=[
        new Product(
            'A Pillow',
            'https://cdn.shopify.com/s/files/1/0178/0240/products/non_adjustable1_600x.jpg?v=1553174661',
            'A soft pillow!',
            19.99

        ),
        new Product(
            'A carpet',
            'https://images-na.ssl-images-amazon.com/images/I/81KSEQwRa9L._SL1200_.jpg',
            'A carpet which you might like or not!',
            89.99
        )
        
    ];
    constructor() {}
    render(){
        const renderHook=document.getElementById('app');
        const prodList=document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
            const productItem=new ProductItem(prod);
            const prodEl=productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList=new ProductList();
productList.render();