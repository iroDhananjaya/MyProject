const cartButton = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");

const thumbnail1 = document.getElementById("thumbnail1");
const thumbnail2 = document.getElementById("thumbnail2");
const thumbnail3 = document.getElementById("thumbnail3");
const thumbnail4 = document.getElementById("thumbnail4");

const lightboxThumbnails = document.querySelectorAll(".lightboxThumbnails");

const thumbnails = document.querySelectorAll(".thumbnails");

const mainImage = document.getElementById("mainsneakerImage");
const lightboxMainImage = document.getElementById("lightboxImage");

const closeLightboxButton = document.getElementById("closeLightbox");
const previousButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");

const mainSneakerImageBtn = document.getElementById("mainSneakerImageBtn");

const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const addToCartBtn = document.getElementById("addToCartBtn");
const deleteBtn = document.getElementById("deleteBtn");

const cartObject1 = document.getElementById("cartObject1");
const emptyCartMessage = document.getElementById("cartContent");
const checkoutBtn = document.getElementById("checkoutBtn");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileLightbox");
const mobileMenuClose = document.getElementById("mobileLightboxClose");

let orderCount = 1;

const productImageSources = Array.from(thumbnails).map((thumbnail) =>
  thumbnail.src.replace("-thumbnail", "")
);

if(window.matchMedia("(max-width: 768px)").matches) {
  // Code for mobile devices
  const mainImgPrev = document.getElementById("mainImgPrev");
  const mainImgNext = document.getElementById("mainImgNext");

  mainImgPrev.addEventListener("click", () => {
    const currentIndex = productImageSources.indexOf(mainImage.src);

    if (currentIndex > 0) {
      mainImage.src = productImageSources[currentIndex - 1];
    }
  });

  mainImgNext.addEventListener("click", () => {
    const currentIndex = productImageSources.indexOf(mainImage.src);

    if (currentIndex < productImageSources.length - 1) {
      mainImage.src = productImageSources[currentIndex + 1];
    }
  });

}
else {
  // Code for desktop devices
  mainSneakerImageBtn.addEventListener("click", () => {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";
  });
}



closeLightboxButton.addEventListener("click", () => {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
});

previousButton.addEventListener("click", () => {
  const currentSrc = lightboxMainImage.src;
  const currentIndex = Array.from(lightboxThumbnails).findIndex((thumbnail) => {
    return thumbnail.src.replace("-thumbnail", "") === currentSrc;
  });

  if(currentIndex === 0) {
    return; // Do nothing if we're at the first image
  }
  else{
    const previousIndex = (currentIndex - 1 + lightboxThumbnails.length) % lightboxThumbnails.length;
    const previousSrc = lightboxThumbnails[previousIndex].src.replace("-thumbnail", "");
    lightboxMainImage.src = previousSrc;
  }
  
});

nextButton.addEventListener("click", () => {
  const currentSrc = lightboxMainImage.src;
  const currentIndex = Array.from(lightboxThumbnails).findIndex((thumbnail) => {
    return thumbnail.src.replace("-thumbnail", "") === currentSrc;
  });

  if(currentIndex === lightboxThumbnails.length - 1) {
    return; // Do nothing if we're at the last image
  }
  else{
    const nextIndex = (currentIndex + 1) % lightboxThumbnails.length;
    const nextSrc = lightboxThumbnails[nextIndex].src.replace("-thumbnail", "");
    lightboxMainImage.src = nextSrc;
  }

  
});

cartButton.addEventListener("click", () => {
  cartPanel.classList.toggle("open");
});

thumbnail1.addEventListener("click", () => {
  mainImage.src = "./images/image-product-1.jpg";
});

thumbnail2.addEventListener("click", () => {
  mainImage.src = "./images/image-product-2.jpg";
});

thumbnail3.addEventListener("click", () => {
  mainImage.src = "./images/image-product-3.jpg";
});

thumbnail4.addEventListener("click", () => {
  mainImage.src = "./images/image-product-4.jpg";
});

lightboxThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const imageSrc = thumbnail.src.replace("-thumbnail", "");
    lightboxMainImage.src = imageSrc;
  });
});

plus.addEventListener("click", () => {
  orderCount++;
  count.textContent = orderCount;
});

minus.addEventListener("click", () => {
  if (orderCount > 1) {
    orderCount--;
    count.textContent = orderCount;
  }
});

addToCartBtn.addEventListener("click", () => {

  const itemCount = document.getElementById("itemCount");
  const totalPrice = document.getElementById("totalPrice");

  emptyCartMessage.style.display = "none"; // Hide the empty cart message
  itemCount.textContent = orderCount; // Update the item count
  totalPrice.textContent = `$${(orderCount * 125).toFixed(2)}`; // Update the total price
  cartObject1.style.display = "flex"; // Show the cart object
  checkoutBtn.style.display = "block"; // Show the checkout button
});

deleteBtn.addEventListener("click", () => {
  cartObject1.style.display = "none"; // Hide the cart object
  emptyCartMessage.style.display = "block"; // Show the empty cart message
  checkoutBtn.style.display = "none"; // Hide the checkout button
});

menuButton.addEventListener("click", () => {
  mobileMenu.style.display = "block"; // Show the mobile menu
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none"; // Hide the mobile menu
});