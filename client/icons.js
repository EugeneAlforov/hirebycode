(function (document) {
    var container = document.querySelector('#svg-icons');

    if (container) {
    
        container.insertAdjacentHTML('afterbegin', "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><symbol viewBox=\"0 0 24 24\" id=\"client--svg--back\"><path d=\"M13.427 3.021H6V0L0 5.39 6 11V8h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573H6v5h7.427C19.267 24 24 19.266 24 13.427S19.267 3.021 13.427 3.021z\"/></symbol><symbol viewBox=\"0 0 48 48\" id=\"client--svg--dir\"><path clip-rule=\"evenodd\" d=\"M42 43H6a5 5 0 0 1-5-5V15a1 1 0 0 1 1-1h3V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v1h23a1 1 0 0 1 1 1v27a5 5 0 0 1-5 5zM3 16v22a3 3 0 0 0 3 3h32.022A4.962 4.962 0 0 1 37 38V16H3zm42-4H21V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5h31c.278 0 .529.114.71.298.179.181.29.428.29.702v23a3 3 0 1 0 6 0V12z\" fill-rule=\"evenodd\"/></symbol><symbol viewBox=\"0 0 48 48\" id=\"client--svg--file\"><path clip-rule=\"evenodd\" d=\"M37 47H11a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h19c.32 0 .593.161.776.395l9.829 9.829A.981.981 0 0 1 41 12v31a4 4 0 0 1-4 4zM31 4.381V11h6.619L31 4.381zM39 13h-9a1 1 0 0 1-1-1V3H11a2 2 0 0 0-2 2v38a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V13zm-6 26H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0-8H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0-8H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z\" fill-rule=\"evenodd\"/></symbol></svg>");
    

    } else {
        throw new Error('svginjector: Could not find element: #svg-icons');
    }

})(document);