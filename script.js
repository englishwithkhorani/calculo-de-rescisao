<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
</head>
<body>

    <!-- Header yahan load hoga -->
    <div id="header-container"></div>

    <!-- Main Page ka Data -->
    <main style="padding: 40px; text-align: center;">
        <h1>Welcome to My Website</h1>
        <p>Yeh index.html ka apna content hai.</p>
    </main>

    <!-- Footer yahan load hoga -->
    <div id="footer-container"></div>

    <!-- JavaScript code jo files ko load karega -->
    <script>
        // Header load karne ke liye
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
            });

        // Footer load karne ke liye
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;
            });
    </script>

</body>
</html>




