for $b in doc("libros.xml")//libro
let $c := $b/autor
return <libro>{$b/titulo, <autores>{count($c)}</autores>}}</libro>