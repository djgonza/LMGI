<ul>
{
for $x in doc("libros.xml")/bib/libro
where $x/@a�o > 1998
order by $x/@a�o
return <li>{$x/data(titulo)}</li>
}
</ul>