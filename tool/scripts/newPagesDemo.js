var gulp = require('gulp');
var argv = require('yargs').argv;
var fs = require('fs');
var cheerio = require('cheerio');

gulp.task('create', function() {
    var root = process.cwd();//当前文件路径
    var demoName=argv.n;//新建demo名称
    var htmlPath = root+'/public/demo/pagesDemo/'+demoName+'.html';//新建demo的html文件
    var tempHtml = root+'/public/demo/pagesDemo/temp.html';//模板html文件
    var lessPath = root+'/public/demo/pagesDemo/less/'+demoName+'.less';//新建demo的less文件
    var tempLess = root+'/public/demo/pagesDemo/less/temp.less';//模板less文件
    //生成html文件
    console.log('creating demo html :'+htmlPath);
    if(fs.existsSync(htmlPath)){
        console.log(demoName+'.html is already existed!!');
        process.exit(1);
    }
    var tempHtmlContent = fs.readFileSync(tempHtml);
    fs.writeFileSync(htmlPath,tempHtmlContent);
    console.log(htmlPath+' is created!!');

    //生成less文件
    console.log('creating demo less :'+lessPath);
    if(fs.existsSync(lessPath)){
        console.log(demoName+'.css is already existed!!');
        process.exit(1);
    }
    var tempCssContent = fs.readFileSync(tempLess);
    fs.writeFileSync(lessPath,tempCssContent);
    console.log(lessPath+' is created!!');

    //将html中css的引用地址和css文件生成的地址对应起来
    var content = fs.readFileSync(htmlPath);
    $ = cheerio.load(content);
    $('title').append(demoName);
    $('head').append('    <link rel="stylesheet" href="css/'+demoName+'.css">');

    fs.writeFile(htmlPath, $.html(),function(err){
        if(err) throw err;
        console.log("html link changed");
    });
});

gulp.task('new',['create']);
//运行 gulp new --n=demoName