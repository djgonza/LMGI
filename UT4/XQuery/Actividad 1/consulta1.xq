for $x in doc("libros.xml")/bib/libro
where $x/precio>60
(: comentario :)
return $x/titulo