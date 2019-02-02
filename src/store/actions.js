import { state } from './state.js';
export const init=function(state){
        if (!window.localStorage) {
          alert("浏览器不支持localstorage");
          return false;
        } else {
          thelist = window.localStorage.list? JSON.parse(window.localStorage.list): [];
          thedone = window.localStorage.done? JSON.parse(window.localStorage.done): [];
        }
      }
