for $x in doc("libros.xml")//libro
where $x/@a�o =  "2000"
return $x/titulo

