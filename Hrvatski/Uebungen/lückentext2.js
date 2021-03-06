function init_gaps() {
	var elements = document.getElementsByClassName('Lücke');
	var e, content, pos1, pos2, hint, solution;
	for (var i = 0; i < elements.length; i++) {
		e = elements[i];
		content = e.innerHTML;
		pos1 = content.indexOf("(");
		pos2 = content.indexOf(")");
		hint = content.slice(pos1+1, pos2);
		solution = content.slice(0, pos1-1);
		e.innerHTML = '<input type="text" class="Lücke-ungelöst" onfocusout="correct(event)">'
		//e.innerHTML = "<b class='Lücke-ungelöst' contenteditable='true'>?</b>"
		e.innerHTML += "<b class='Hinweis'> ("+hint+")</b>"
		e.innerHTML += "<b class='Lücke-gelöst'>"+solution+"</b>"
	}
	elements = document.getElementsByClassName('Lücke');
	for (var i = 0; i < elements.length; i++) {
		e = elements[i];
		unsolved = e.getElementsByClassName('Lücke-ungelöst')[0];
		solved = e.getElementsByClassName('Lücke-gelöst')[0];
		hint = e.getElementsByClassName('Hinweis')[0];

		unsolved.style.display = 'inline';
		hint.style.display = 'inline';
		solved.style.display = 'none';
	}
}

function correct(event) {
   	   event.preventDefault();
	   e = event.target.parentElement;
      	   unsolved = e.getElementsByClassName('Lücke-ungelöst')[0];
	   solved = e.getElementsByClassName('Lücke-gelöst')[0];
	   hint = e.getElementsByClassName('Hinweis')[0];
	   solution_attempt = unsolved.value;
	   solution = solved.innerHTML;
	   if (solution_attempt == solution) {
		solved.style.display = 'inline';
		unsolved.style.display = 'none';
		hint.style.display = 'none';
	   }
	   else {
 		unsolved.value = solution+" ("+"falsch: "+unsolved.value+")";
		unsolved.style.color = "red";
       	   }
}

function change_visibility() {
	elements = document.getElementsByClassName('Lücke');
	for (var i = 0; i < elements.length; i++) {
		e = elements[i];
		unsolved = e.getElementsByClassName('Lücke-ungelöst')[0];
		solved = e.getElementsByClassName('Lücke-gelöst')[0];
		hint = e.getElementsByClassName('Hinweis')[0];

		unsolved.style.display = 'none';
		hint.style.display = 'none';
		solved.style.display = 'inline';
	}
}

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function mix_text(){
	var element;
	var elements = document.getElementsByClassName('Lückentext');
	for (var i = 0; i < elements.length; i++) {
		element = elements[i];
		var content = element.innerHTML;
	   var lines = content.split('\n');
	   shuffle(lines);
	   element.innerHTML = lines.join('\n');
	}
}
