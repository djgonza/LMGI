for $l in distinct-values(doc("libros.xml")//autor/apellido)
return <apellidos>{$l}</apellidos>
