var toAdd = document.createDocumentFragment();
for(var i=0; i < 6; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'p'+i;
   newDiv.className = 'post';
   document.getElementById('posts').toAdd.appendChild(newDiv);
}