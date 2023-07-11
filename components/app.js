let CART = '';
let PATH = '/mockdata/products.json';
const swiper_wraper = document.querySelector('.swiper .swiper-wrapper')
const verticalSwiper__top__wrapper = document.querySelector('.vertical-swiper-top .swiper-wrapper')
const vertialSwiper__bottom__wrapper = document.querySelector('.vertical-swiper-bottom .swiper-wrapper')

const url = 'http://127.0.0.1:5500/mockdata/products.json';

function getUser() {
  if (sessionStorage.getItem('isAuthenticated')) {
    let count = 0;
    let currentUserId = sessionStorage.getItem('currentUserId');
    let currentUserCartKey = 'cart_' + currentUserId;
    count = JSON.parse(localStorage.getItem(currentUserCartKey || '[]')).length;
    document.getElementById('basket').innerHTML = count;
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('cartName').innerHTML = sessionStorage.getItem('currentUserName') + '\'s Cart';
  }
}


fetch(url)
  .then(response => response.json())
  .then((data) => {
    const filteredMainData = data.filter(data => data.rating > 3)
    const addedData = filteredMainData.map(item => {
      const swiper_slide = document.createElement('div')
      const swiper_slide_img = document.createElement('img')

      swiper_slide.className = 'swiper-slide'
      swiper_slide_img.src = item.imageURL

      swiper_slide.appendChild(swiper_slide_img)
      swiper_wraper.append(swiper_slide)
      console.log(swiper_slide)
    })

    const filteredVerticalTopData = data.filter(data => data.top === true)
    console.log(filteredVerticalTopData);
    const addedVerticalTopData = filteredMainData.map(item => {
      const swiper_slide = document.createElement('div')
      const swiper_slide_img = document.createElement('img')

      swiper_slide.className = 'swiper-slide'
      swiper_slide_img.src = item.imageURL

      swiper_slide.appendChild(swiper_slide_img)
      verticalSwiper__top__wrapper.append(swiper_slide)
      console.log(swiper_slide)
    })


    const filteredVerticalBottomData = data.filter(data => data.new === true)
    console.log(filteredVerticalBottomData);
    const addedVerticalBottomData = filteredMainData.map(item => {
      const swiper_slide = document.createElement('div')
      const swiper_slide_img = document.createElement('img')

      swiper_slide.className = 'swiper-slide'
      swiper_slide_img.src = item.imageURL

      swiper_slide.appendChild(swiper_slide_img)
      vertialSwiper__bottom__wrapper.append(swiper_slide)
      console.log(swiper_slide)
    })
  })






