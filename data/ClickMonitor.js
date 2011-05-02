this.on('click', function(node)
{
	var href = '<A href="'+document.URL+'">';
	
	//Replace both width and height if neither of them are set.
	if(!node.getAttribute('width') && !node.getAttribute('height'))
	{
		node.setAttribute('width', node.clientWidth);
		node.setAttribute('height', node.clientHeight);
	}
	
	//Replace the src attribute with the absolute url, in case of relative paths.
	node.setAttribute('src', node.src);
	
	//wrap the results with an anchor
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
