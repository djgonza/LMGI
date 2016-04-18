for $x in doc("libros.xml")/bib/libro
where $x/precio>60
order by $x/titulo
return $x/titulo