const http = require('http');
const server = http.createServer((req,res) =>{
    console.log('url', req.url);
    const url = req.url;
    if(url === '/user'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
            res.write("<h1>User Page</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
            res.write("<form>");
                res.write("<label>");
                res.write("<p>Chào các chú</p>");
                res.write("<input>");
                res.write("<button>");
                res.write("Submit");
                res.write("</button>");
                res.write("</label>");
            res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
}) 
const PORT = "3000"

server.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
})