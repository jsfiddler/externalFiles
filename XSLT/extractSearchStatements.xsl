<?xml version="1.0" encoding="UTF-8"?>

-<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">


-<xsl:template match="/">


-<html>


-<head>

<style> th {background-color:red;text-align:left;border:1px solid black; } tr {bgcolor="#9acd32"; } </style>

</head>


-<body>

<h2>myFilename </h2>


-<table>


-<tr>

<th>Database</th>

<th>SS</th>

<th>SearchTerm</th>

</tr>


-<xsl:for-each select="HistorySets/HistorySet/RosettaData/HistoryQueryListContainer/HistoryElement">


-<tr>


-<td>

<xsl:value-of select="Database"/>

</td>


-<td>

<xsl:value-of select="StatementNumber"/>

</td>


-<td>

<xsl:value-of select="SearchTerm"/>

</td>

</tr>

</xsl:for-each>

</table>

</body>

</html>

</xsl:template>

</xsl:stylesheet>
