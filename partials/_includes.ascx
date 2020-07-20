<dnn:META ID="mobileScale" runat="server" Name="viewport" Content="width=device-width, initial-scale=1.0" />
<dnn:DnnCssExclude runat="server" Name="dnndefault" />

<dnn:DnnCssInclude runat="server" FilePath="dist/css/style.min.css" Priority="110" PathNameAlias="SkinPath" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
	integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
	crossorigin="anonymous"
/>

<dnn:DnnJsInclude
	runat="server"
	FilePath="dist/js/jquery.slimmenu.min.js"
	ForceProvider="DnnFormBottomProvider"
	Priority="100"
	PathNameAlias="SkinPath"
/>
<dnn:DnnJsInclude runat="server" FilePath="dist/js/custom.min.js" ForceProvider="DnnFormBottomProvider" Priority="120" PathNameAlias="SkinPath" />
