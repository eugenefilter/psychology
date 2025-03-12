<?php
// Указываем путь к manifest.json
$manifestPath = __DIR__ . '/dist/.vite/manifest.json';
//var_dump($manifestPath);
// Проверяем наличие файла
if (!file_exists($manifestPath)) {
  die('Manifest file not found');
}

// Загружаем манифест
$manifest = json_decode(file_get_contents($manifestPath), true);

// Получаем пути к файлам
$mainJs = $manifest['src/main.tsx']['file'];
$mainCss = $manifest['src/main.tsx']['css'][0] ?? null;
?>

<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8"/>
    <link rel="icon" type="image/svg+xml" href="/icon.svg"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet">

    <title>Психолог Елена Олейникова</title>

  <?php if ($mainCss): ?>
      <link rel="stylesheet" href="/dist/<?php echo $mainCss; ?>">
  <?php endif; ?>
</head>

<body>
<div id="root"></div>
<?php if ($mainJs): ?>
    <script type="module" src="/dist/<?php echo $mainJs; ?>"></script>
<?php endif; ?>
</body>

</html>