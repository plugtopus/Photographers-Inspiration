function pickPhoto() {
  chrome.storage.sync.get({
    cats: defaultCats.split(',')
  }, 
  function(items) {
    var userCategories = items.cats;
    var categories = _.keys(data);
    var dayofYear = new Date().getDOY() + 4;
    var todayCategory = userCategories[dayofYear % userCategories.length];
    var photos = data[todayCategory];
    window.photo = pick(photos);
    setPhoto(photo)
  });
}

function setPhoto(photo) {
  var bgImg = new Image();
  bgImg.onload = function() {
    $('#div').css('background-image', 'url(' + bgImg.src + ')').addClass('loaded');
  };

  bgImg.src = photo.image;
  $("img").bind("load", function() {
    $(this).addClass('loaded');
  });
}

/*function updateDateTime() {
    var date = new Date(),
        locale = "ru";
    var localizedDate = date.toLocaleString(locale, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    var hour = date.getHours();
    var min = date.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }

    $(".infoTime").html(hour + ":" + min);
    $(".infoDate").html(localizedDate);

    setTimeout(updateDateTime, 1000);
}

setTimeout(updateDateTime, 100);


updateDateTime();*/
pickPhoto();
