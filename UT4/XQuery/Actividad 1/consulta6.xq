for $x in doc("libros.xml")//libro
where $x/@año =  "2000"
return $x/titulo

