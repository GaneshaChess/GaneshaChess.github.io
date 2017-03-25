function init_voka() {
   var elements = document.getElementsByClassName('Exa');
    var elem, sub_elem1, sub_elem2;
    function display_me(){
    	elem1 = this.getElementsByClassName('Exa1')[0];
		elem2 = this.getElementsByClassName('Exa2')[0];
      elem2.style.display = "block";
    }
    function hide_me(){
    	elem1 = this.getElementsByClassName('Exa1')[0];
		elem2 = this.getElementsByClassName('Exa2')[0];
      elem2.style.display = "none";
    }
	 for (var i = 0; i < elements.length; i++) {
		elem = elements[i];
		sub_elem1 = elem.getElementsByClassName('Exa1')[0];
		sub_elem2 = elem.getElementsByClassName('Exa2')[0];
		sub_elem2.style.display = 'none';
		elem.addEventListener("mouseover", display_me);
      elem.addEventListener("mouseout",hide_me);
	 }
};