import state from './state.js';
const mutations = {
    updateNewtask (state, newtask) {
        state.newtask = newtask
      },
    add(state){
        if (!window.localStorage) {
            alert("浏览器不支持localstorage");
            return false;
        } else {
            var storage = window.localStorage;
            var taskObj = {
                id: Date.now(),
                task: state.newtask
            }
            state.thelist.push(taskObj);
            storage.setItem('list', JSON.stringify(state.thelist));
        }
        state.newtask = '';
    },
    change(state,item) {
        state.thedone.push(item);
        this.commit('del',item.id);
        var storage = window.localStorage;
        storage.setItem('list', JSON.stringify(state.thelist));
        storage.setItem('done', JSON.stringify(state.thedone));
    },
    del(state,id) {
       
        var index = state.thelist.findIndex(function (ele) {
            return ele.id == id;
        });
        var storage = window.localStorage;
        state.thelist.splice(index, 1);
        storage.setItem('list', JSON.stringify(state.thelist));
    },
    init(state){
        if (!window.localStorage) {
          alert("浏览器不支持localstorage");
          return false;
        } else {
          state.thelist = window.localStorage.list? JSON.parse(window.localStorage.list): [];
          state.thedone = window.localStorage.done? JSON.parse(window.localStorage.done): [];
        }
      }
    
}
export default mutations
