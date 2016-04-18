for $x in doc("libros.xml")//libro
let $c := $b/autor
where count ($c) > 2
order by $x/@año
return $x/titulo