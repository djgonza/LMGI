for $l in (doc("libro.xml")//(autor|editor)/apellido)
order by $l
return <apellido>{$l}</apellido>