// function productGenerate () {
//   for (i=0; i < etsyData.results.length; i++) {
//     $('.product').eq(i).html(`<div class='pImage '> <img src='${etsyData.results[i].Images[0].url_170x135}'/></div>
//     <p class='title'>${etsyData.results[i].title}</p><p class='shop left'>${etsyData.results[i].Shop.login_name}
//     </p><p class='price right'>${etsyData.results[i].price}</p>`)
//   }
// }
//
// productGenerate()

function createBox (x) {
  return `
          <div class='product' title='${x.title}'>
            <a href="#"> <img class='icon1' src='images/heart.png'/></a>
            <a href='#'> <img class='icon2' src='images/hamburger.png'/></a>
            <div class="pImage">
              <img src='${x.Images[0].url_170x135}'/>
            </div>
            <p class='title'>${x.title}</p>
            <p class='shop left'>${x.Shop.login_name}</p>
            <p class='price right'>${x.price}</p>
          </div>
        `
}

function makeTemplate () {
  for (var i = 0; i < 16; i++) {
    var result = etsyData.results[i];
    var makeHtml = createBox(result);
    $('.productsCont').append(makeHtml);
    hoverOn();

  }
}

function hoverOn () {
  $('.product').hover(function (x) { $(this).find('.icon1').css('visibility', 'visible') }, function (x) { $(this).find('.icon1').css('visibility', 'hidden') } );
  $('.product').hover(function (x) { $(this).find('.icon2').css('visibility', 'visible') }, function (x) { $(this).find('.icon2').css('visibility', 'hidden') });
}
makeTemplate();
