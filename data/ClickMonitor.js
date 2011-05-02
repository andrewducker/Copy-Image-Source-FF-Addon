this.on('click', function(node)
{
	var href = '<A href="'+document.URL+'">';

	if(!node.getAttribute('width'))
	{
		node.setAttribute('width', node.clientWidth);
	}
	

	if(!node.getAttribute('height'))
	{
		node.setAttribute('height', node.clientHeight);
	}

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
