# Simple HTTP server for local development
$port = 8000
$url = "http://localhost:$port"

Write-Host "Starting HTTP server on $url" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Create HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("$url/")
$listener.Start()

Write-Host "Server is running. Open $url in your browser." -ForegroundColor Cyan
Write-Host ""

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Get requested file path
        $localPath = $request.Url.LocalPath
        if ($localPath -eq '/') {
            $localPath = '/index.html'
        }
        
        $filePath = Join-Path $PSScriptRoot $localPath.TrimStart('/')
        
        # Check if file exists
        if (Test-Path $filePath -PathType Leaf) {
            # Set content type based on extension
            $extension = [System.IO.Path]::GetExtension($filePath)
            $contentType = switch ($extension) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                '.png'  { 'image/png' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.gif'  { 'image/gif' }
                '.svg'  { 'image/svg+xml' }
                default { 'application/octet-stream' }
            }
            
            $response.ContentType = $contentType
            $response.StatusCode = 200
            
            # Add CORS headers
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
            $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")
            
            # Read and send file
            $buffer = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            
            Write-Host "$([DateTime]::Now.ToString('HH:mm:ss')) GET $localPath - 200 OK" -ForegroundColor Green
        }
        else {
            # File not found
            $response.StatusCode = 404
            $response.ContentType = 'text/html; charset=utf-8'
            $buffer = [System.Text.Encoding]::UTF8.GetBytes('<h1>404 - Not Found</h1>')
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            
            Write-Host "$([DateTime]::Now.ToString('HH:mm:ss')) GET $localPath - 404 Not Found" -ForegroundColor Red
        }
        
        $response.Close()
    }
}
finally {
    $listener.Stop()
    Write-Host "`nServer stopped." -ForegroundColor Yellow
}
