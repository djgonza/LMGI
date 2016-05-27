<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr bgcolor="cian" style="color:yellow">
                        <th>Titulo</th>
                        <th>Género</th>
                        <th>Director</th>
                        <th>Precio</th>
                    </tr>
                    <xsl:for-each select="peliculas/pelicula">
                        <xsl:sort select="titulo" order="ascending"/>
                        <xsl:if test="duracion>=100">
                            <tr>
                                <td style="color:blue">
                                    <xsl:value-of select="titulo"/>
                                </td>
                                <td style="color:blue">
                                    <xsl:value-of select="genero"/>
                                </td>
                                <td style="color:blue">
                                    <xsl:value-of select="director"/>
                                </td>
                                <xsl:choose>
                                    <xsl:when test="precio > 10">

                                        <td style="color:red">
                                            Cara
                                        </td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <td style="color:green">
                                            Barata
                                        </td>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
