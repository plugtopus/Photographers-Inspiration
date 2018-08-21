function createCheckboxes(){
getUserCats(function(userCats){
  var categories = _.keys(data);
  var html = ''

  _.each(data, function(cat, key){
    if(key != 'Nude'){
      html += '<label> <input type="checkbox" name="cats" value="'+key +'" ';
     if( _.contains(userCats, key) ) html += ' checked="selected" '
     html += '  ">';
     html += key
     html +='</label>'
    }

  })
 document.getElementById("cats").innerHTML = html;
});
}

function getUserPrefs(cb){
  chrome.storage.sync.get({
    cats: defaultCats.split(',')
  }, function(items){
    cb(items)
  });
}

function getUserCats(cb){
  chrome.storage.sync.get({
    cats: defaultCats.split(',')
  }, function(items){
    cb(items.cats)
  });
}

function getSelectedCats(){
  var checkboxes = document.getElementsByName('cats');
  var vals = "";
for (var i=0, n=checkboxes.length;i<n;i++) {
  if (checkboxes[i].checked){
    vals += ","+checkboxes[i].value;
  }
}
if (vals) vals = vals.substring(1);
if (!vals) vals = defaultCats;
return vals.split(',');
}

function save_options() {
var cats = getSelectedCats();

  chrome.storage.sync.set({
    cats: cats
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Настройки сохранены!';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.addEventListener('DOMContentLoaded', createCheckboxes);
document.getElementById('save').addEventListener('click',
    save_options);