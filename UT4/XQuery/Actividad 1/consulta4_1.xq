<html>
<body>
<h1>Bookstore</h1>
<ul>
{
for $x in doc("libros.xml")/bib/libro
where $x/precio>60
order by $x/titulo
return <li class="data({$x/@categoria})">{data($x)}</li>
}
</ul>

</body>
</html>