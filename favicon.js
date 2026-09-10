// favicon.js
(function() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Background & Neon Glow
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, 128, 128);

    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 15;
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#06b6d4';
    ctx.beginPath();
    ctx.roundRect(16, 16, 96, 96, 24);
    ctx.stroke();

    // Neon Text "C"
    ctx.fillStyle = '#22d3ee';
    ctx.font = 'bold 64px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C', 64, 66);

    // Inject into Head
    const dataURL = canvas.toDataURL('image/png');
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = dataURL;
    document.head.appendChild(link);
})();
















