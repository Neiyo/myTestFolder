/**
 * Bed IM (React + Flux)
 */

var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

var KentaApp = require('./components/KentaApp.react');

React.render(
    <KentaApp />,
    document.getElementById('page-index')
);