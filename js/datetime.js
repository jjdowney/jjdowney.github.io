var year = new Date().getFullYear();
document.getElementById('copyYear').innerHTML = year;
document.getElementById('update').innerHTML = document.lastModified;

// Load web loader
WebFont.load({
    google: {families: ['Roberto']}});