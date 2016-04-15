<ul>
{
for $x in doc("libros.xml")/bib/libro
where $x/@año > 1998
order by $x/@año
return <li precio="{$x/precio}">{$x/data(titulo)}</li>
}
</ul>