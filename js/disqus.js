/**
 * Manages Disqus comments
 *
 * @constructor
 */
function Disqus(shortname) {
    this.shortname = shortname;

    this.init();
};

/**
 * Initialise Disqus comments
 */
Disqus.prototype.init = function () {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + this.shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};
