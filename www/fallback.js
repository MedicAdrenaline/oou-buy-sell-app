(function() {
    const PRIMARY = 'https://adrena-oou-buy-sell-jekf.onrender.com';
    const FALLBACK = 'https://adrena-oou-buy-sell.onrender.com';

    fetch(PRIMARY, { method: 'HEAD', mode: 'no-cors' })
        .then(() => {
            if (window.location.href.indexOf(PRIMARY) === -1) {
                window.location.href = PRIMARY;
            }
        })
        .catch(() => {
            window.location.href = FALLBACK;
        });
})();
