for $b in doc("libros.xml")//titulo
return 
<libro>
{$b/titulo}
{
for $a at $i in $b/autor 
where $i <= 2
return <autor>{(xs:int($i), string ($a/apellido), "","",string($a/nombre))}</autor>
}
{
if(count($b/autor) > 2)
then <autor>et al.</autor>
else()
}
</libro>