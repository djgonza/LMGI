for $l in distinct-values(doc("libro.xml")//(autor|editor)/apellido)
order by $l
return <apellido>{$l}</apellido>