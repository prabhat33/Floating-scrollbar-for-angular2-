# Floating scrollbar for Angular 2+

Package for floating scrollbar that can be used with Angular 2 and above


## Usage

```
<div id="container" style="width: 300px; overflow:auto;">
  <div id="content" style="width: 2000px; height: 2000px; background-color: #ccc;">
    <p>
      Hello world
    </p>
  </div>
</div>

 ngAfterViewInit(){
    let options={
      beautifyScroll:true, // set to TRUE if you want a beautiful scrollbar
      scrollBarColor:"yellow", // scrollbar color for making it more beautiful, leave it blank or false
    }
   customScrollBar.scroll(document.getElementById("container"),options);
 }

```



## Technologies

* [NPM](https://www.npmjs.com/)
* [NODE JS](https://nodejs.org/en/)

## Author

* PRABHAT GIRI (giri.prabhat33@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

