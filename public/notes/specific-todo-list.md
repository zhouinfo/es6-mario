# specific-todo-list

### Game Related

- [x] BGM:

TODO: After finish all the sound, consider a mute whole function

https://codepen.io/MarvinVK/pen/FgAht

- [] Level Design:

- [] Spawn entity at certain time

eg: when mario go to index 124, then spawn the surround other entities.

- [] Sound Effect:

How about Web Sound API?



### Performance

- [] Better way to link css.

- [] Webpack Env

https://doc.webpack-china.org/guides/production/#%E9%85%8D%E7%BD%AE



### Compatibility

- [x] Edge KeyBoard Input support.   **Abandoned**

- [x] Mobile Control: **Done**

0. Temp Test

Able to implement the function, but I also found some problems.

eg: Multiple Touch not Support??? **Done**


- [] Compatibility Improve
*
* 0. Before compiled by Babel, Only chrome-61+ (Mainly because of the Async Function).
* 1. After compiled by Babel,
*       firefox-47 worked perfect;
*       Edge-14 worked but cannot handle keyboard input;
*       IE11 still not work, with Error: Unhandled promise rejection ReferenceError: “fetch”未定义. Abandoned  IE.
*
*       Mobile:
*           Android:
*               7.0 - Samsung s7, working perfect and smooth.
*               YUNOS 5.11 - HUAGAN HT6 , A low end device, cannot run.
*           IOS:
*               9.3.2 - iPhone se, no screen, mainly because the fetch API.
*               Solved by add `whatwg-fetch polyfill` like below in entry property.
*               Worked but FPS is low.
*               11.0.3 - iPhone 8, Run perfect, full FPS, even without fetch polyfill.

- [x] Screen Rotate Support

How to implement same ratio scale?

Original Game is 256/240 = 1.0667

Solved by media query:

``` css
/* iPad Pro : 768*1024*/
@media (max-width: 1024px) and (orientation:portrait) {
    #screen {
        width: 100%;
        height: auto;
    }
}
@media (max-width: 1024px) and (orientation:landscape) {
    #screen {
        width: auto;
        height:100vh;
    }
}
```


- [] BGM auto play on mobile:

https://gist.github.com/ufologist/50b4f2768126089c3e11


### Other

- [] Mobile Magnifier

On Mobile Phone, long press will trigger a magnifier.


