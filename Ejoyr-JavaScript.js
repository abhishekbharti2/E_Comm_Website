const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const slider = document.querySelector(".slider");
const allImages = document.querySelector(".allimages");
const slidet = document.querySelectorAll(".sli-det");
let num = 0;

btn1.addEventListener("change", function () {
  allImages.style.transform = "translateX(0px)";
  num = 0;
});

btn2.addEventListener("change", function () {
  allImages.style.transform = "translateX(-100%)";
  num = 1;
});

btn3.addEventListener("change", function () {
  allImages.style.transform = "translateX(-200%)";
  num = 2;
});

btn4.addEventListener("change", function () {
  allImages.style.transform = "translateX(-300%)";
  num = 3;
});
btn5.addEventListener("change", function () {
  allImages.style.transform = "translateX(-400%)";
  num = 4;
});

setInterval(() => {
  if (num == 0) {
    btn2.checked = true;
    btn2.dispatchEvent(new Event("change"));
    num = 1;
  } else if (num == 1) {
    btn3.checked = true;
    btn3.dispatchEvent(new Event("change"));
    num = 2;
  } else if (num == 2) {
    btn4.checked = true;
    btn4.dispatchEvent(new Event("change"));
    num = 3;
  } else if (num == 3) {
    btn5.checked = true;
    btn5.dispatchEvent(new Event("change"));
    num = 4;
  } else if (num == 4) {
    btn1.checked = true;
    btn1.dispatchEvent(new Event("change"));
    num = 0;
  }
}, 3000);

// Women Section
let W = ['https://i.pinimg.com/originals/a3/33/db/a333db98d3a3c2fe3d50767851209e5c.jpg'];
W.push('https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3N8ZW58MHx8MHx8fDA%3D');
 W.push('https://assets.ajio.com/medias/sys_master/root/20230516/EC4Z/6462a02142f9e729d789926d/-473Wx593H-466154144-black-MODEL.jpg');
 W.push('https://assets.ajio.com/medias/sys_master/root/20230629/VS4o/649cb8fbeebac147fc2e973e/-473Wx593H-465974244-blue-MODEL.jpg');
 W.push('https://assets.ajio.com/medias/sys_master/root/20231006/DIPX/651ffc02ddf7791519259404/-473Wx593H-463928195-black-MODEL.jpg');
 W.push('https://www.alamodelabel.in/cdn/shop/products/image_58a51269-5c4c-4b1e-9706-1c38c97b36b7_600x.jpg?v=1622813275');
 W.push('https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-products-photography1.jpg');
 W.push('https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg');
 W.push('https://as2.ftcdn.net/v2/jpg/06/25/97/63/1000_F_625976357_YXfYfxrQAB4J57CCd4nOEpPBrZ4sOZqD.jpg');
 W.push('https://5.imimg.com/data5/SELLER/Default/2021/4/NM/MV/NB/40134419/handiyan.jpg');
 W.push('https://th.bing.com/th/id/OIP.lL99b8f2GFNnbSLSnyYyjwAAAA?rs=1&pid=ImgDetMain');
 W.push('https://images-static.nykaa.com/media/catalog/product/e/b/eb2c017NYBH000000025_1.jpg');
 W.push('https://img.freepik.com/free-photo/lady-evening-dress-elegant-woman-long-gown_1157-47531.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais');
 W.push('https://static.vecteezy.com/system/resources/thumbnails/026/175/942/small/bold-explosion-of-red-dust-surrounding-a-designer-lipstick-impactful-background-ai-generated-photo.jpg');
 W.push('https://urban-trend.co.in/cdn/shop/files/669_1.jpg?v=1701323861');
 W.push('https://www.alamodelabel.in/cdn/shop/products/WhatsAppImage2022-05-11at1.20.03AM_600x.jpg?v=1652215859');
 W.push('https://m.media-amazon.com/images/I/71mR1c5l70L._AC_UY350_.jpg');
 W.push('https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8=');
 W.push('https://assets0.mirraw.com/images/9751395/111-Green-BG-1_long_webp.webp?1696941533');
 W.push('https://danielklein.in/cdn/shop/products/DK11914-5_1.jpg?v=1671698085&width=320');
// Men Section 
W.push('https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg');
W.push('https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg');
W.push('https://5.imimg.com/data5/UX/LP/AJ/SELLER-55472971/lower-blue.jpeg');
W.push('https://www.jiomart.com/images/product/original/rvbranphfh/bruton-running-shoes-for-men-product-images-rvbranphfh-0-202206141814.jpg?im=Resize=(500,630)');
W.push('https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15681626/2023/7/25/9d661f7a-9fff-4cca-ac42-3a4a5d46861e1690280903192-CHKOKKO-Men-Navy-Blue-Sports-Gym-Track-Pant-Running-Lower-Wi-7.jpg');
W.push('https://www.thefashionisto.com/wp-content/uploads/2020/08/Smart-Casual-Dress-Code-Men-Red-Sports-Coat-Striped-Henley-Chinos.jpg');
W.push('https://assets.ajio.com/medias/sys_master/root/20230524/shT2/646e3154d55b7d0c63d62212/-473Wx593H-460789301-blue-MODEL.jpg');
W.push('https://i.pinimg.com/236x/08/da/63/08da63ade4b3e9f1017e74cadb07dd06.jpg');
W.push('https://t3.ftcdn.net/jpg/05/65/14/60/360_F_565146052_aUpeAYgAe3SAA9IM7MC6IXCV44yUG40u.jpg');
W.push('https://www.happywedding.app/blog/wp-content/uploads/2023/06/Sherwani.jpg');
W.push('https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg');
W.push('https://i.pinimg.com/736x/bc/2a/36/bc2a367698804667b88a016a66d98fa6.jpg');
W.push('https://media.croma.com/image/upload/v1697624125/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/256351_klwf70.png');
W.push('https://time.com/shopping/static/24754e29490a6e63ce6a12d2a693bb0c/57e17/best-dress-shirts-for-men.jpg');
W.push('https://3.imimg.com/data3/AU/KI/MY-646899/men-s-jackets.jpg');
W.push('https://img.freepik.com/free-vector/realistic-male-cosmetics-composition_1284-22830.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais');
W.push('https://5.imimg.com/data5/ANDROID/Default/2021/7/RS/KX/QA/37908933/product-jpeg-500x500.jpg');
W.push('https://cdn.rajwadi.com/image/cache/data/sky-blue-cotton-readymade-kurta-pajama-43820-800x1100.jpg');
W.push('https://www.justformen.com/sites/g/files/sgirzt191/files/styles/product_list_card_images_scale_154_154/public/2022-11/CGX_Regular_box_small3.png.webp?itok=5O_mqxaj');
W.push('https://www.biotique.com/cdn/shop/products/views01_37d454c6-4e23-4ae9-8ceb-8ac6a5e52c5f.jpg?v=1665049599&width=533');

function addproduct(title, image, rate, offer, finalrate) {
    document.getElementById("stocks").innerHTML += `
        <li class="Designs" href = "">
            <img src="${image}" alt="">
            <div class="details">
                 ${title}
                 <h3 class="rr">Rs. ${finalrate}</h2><s class="faker">Rs. ${rate}</s><span>${offer}% off</span>
                 <h5>Size : S, M, L, XL, XXL</h5>
           </div>
           <div id="order-buttons">
                 <button>Add to Cart</button>
                 <button>Buy Now</button>
           </div>
        </li>`;
}
function addproduct1(num, size) {
  for (let i = 0; i < size; i++) {
    let image = W[i+num];
    let rate = Math.round(Math.random() * 1000 + 500);
    let offer = Math.round(Math.random()*100);
    let finalrate = Math.round((rate / 100) * (100 - offer));

    addproduct("Royal Blue Shirt", image, rate, offer, finalrate);
  }
}
addproduct1(10, 20);
let z = 10, lim = 20;

document.getElementById('cat-btn1').addEventListener('click', () =>{
  document.getElementById("stocks").innerHTML = "";
  addproduct1(20, 20);
  document.getElementById('ts-heading').innerHTML = "Men Section";
  z = 20;
  lim = 20;
})
document.getElementById('cat-btn2').addEventListener('click', () =>{
  document.getElementById("stocks").innerHTML = "";
  addproduct1(0, 20);
  document.getElementById('ts-heading').innerHTML = "Women Section";
  z = 0;
  lim = 20;
})
document.getElementById('cat-btn5').addEventListener('click', () =>{
  document.getElementById("stocks").innerHTML = "";
  addproduct1(0, 40);
  document.getElementById('ts-heading').innerHTML = "All Products";
  lim = 40;
  z = 0;
})

document.getElementById("moreitems").addEventListener("click", () => { addproduct1(z, lim);  });


const contact = document.getElementById("contact");
document.getElementById("contactbtn").addEventListener("click", () => {
  contact.style.animation = "blinknow 4s";
});
