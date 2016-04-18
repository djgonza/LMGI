for $b in doc("libros.xml")//autor
where some $p in $b//titulo satisfies
contains($p, "Pregramming")
return $b/titulo
