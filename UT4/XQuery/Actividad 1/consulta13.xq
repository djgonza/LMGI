for $b in doc("libros.xml")//autor
where every $a in $b/titulo
satisfies contains($a, "Progreamming")
return $b/titulo
