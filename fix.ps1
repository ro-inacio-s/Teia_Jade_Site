$replacements = @{
    'Ã¡' = 'á'
    'Ã¢' = 'â'
    'Ã£' = 'ã'
    'Ã§' = 'ç'
    'Ã©' = 'é'
    'Ãª' = 'ê'
    'Ã­' = 'í'
    'Ã³' = 'ó'
    'Ã´' = 'ô'
    'Ãµ' = 'õ'
    'Ãº' = 'ú'
    'Ã€' = 'À'
    'Ã‡' = 'Ç'
    'Ã‰' = 'É'
    'Ã“' = 'Ó'
    'Ã•' = 'Õ'
    'Ãš' = 'Ú'
    'ÃŠ' = 'Ê'
}

$files = Get-ChildItem "C:\Users\rinac\Code\*.html"
foreach ($f in $files) {
    $content = Get-Content -Encoding UTF8 $f.FullName -Raw
    foreach ($key in $replacements.Keys) {
        $content = $content.Replace($key, $replacements[$key])
    }
    
    # Edge cases specifically found in HTML from Stitch imports
    $content = $content.Replace([char]195+[char]173, 'í')
    $content = $content.Replace("AcessoÂ³rios", "Acessórios")
    $content = $content.Replace("nÂº", "nº")

    [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.Encoding]::UTF8)
}
