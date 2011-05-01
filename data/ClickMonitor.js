this.on('click', function(node)
{
	var href = '<A href="'+document.URL+'">';

	var src=href+outerHTML(node)+'</A>';
	
	postMessage(src);
});

function outerHTML(node)
{
    var div = document.createElement('div'), h;
    div.appendChild( node.cloneNode(true) );
    h = div.innerHTML;
    div = null;
    return h;
}
