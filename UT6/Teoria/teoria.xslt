<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

	<xsl:strip-space elements="*" />
	
	<xsl:template match="/">
		<html>
		<h1>Libros</h1>
			<xsl:apply-templates />
		</html>
	</xsl:template>

	<xsl:template match="libro">
    	<p><xsl:value-of select="autor"/> escribió "<xsl:value-of select="titulo"/>"</p>
    	<p>En el año <xsl:value-of select="@año"/></p>
	</xsl:template>

</xsl:stylesheet>