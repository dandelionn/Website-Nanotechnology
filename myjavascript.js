function change(x) {
    var pic;
    if (x == 1) {
        pic = "mystyle.css";
    } 
	else if(x == 2)
	          {pic = "mystyle1.css";}
	     else if(x == 3)
		         {pic="mystyle2.css";}
			  else if(x == 4)
			          {pic="mystyle3.css";}
				    else
					    {pic="mystyle4.css";}
    
	document.getElementById('mylink').href = pic;
}