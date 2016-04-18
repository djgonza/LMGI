for $b in doc("libros.xml")//libro
where $b/titulo = "TCP/IP Illustrated"
return <libro>{$b/@*}{$b/* except $b/precio}</libro>