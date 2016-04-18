for $b in doc("libros.xml")//autor
where exists ($b/autor)
return $b
