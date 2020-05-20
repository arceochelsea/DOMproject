const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType); //will tell us what the node type (node type - return values) in this case an element
console.log('#page-banner node name is:', banner.nodeName); //will tell us element name! it is a DIV (type of element)
console.log('#page-banner has child nodes:', banner.hasChildNodes()); //returns true or false! does it have child nodes?


const clonedBanner = banner.cloneNode(true); //we want it to go deeply into node. will just give node otherwise but not the nested content! thats why we must put true!
console.log(clonedBanner);