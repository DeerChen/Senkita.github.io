/*
 * @Description: Gitalk配置文件
 * @Author: Senkita
 * @Date: 2020-12-05 12:37:25
 * @LastEditors: Senkita
 * @LastEditTime: 2020-12-05 13:25:53
 */
var gitalk = new Gitalk({
    clientID: 'f0f98821d62b7d082757',
    clientSecret: '6739c3ab492d43d0add682a65e16145de01742a6',
    repo: 'Senkita.github.io',
    owner: 'Senkita',
    admin: ['Senkita'],
    id: decodeURI(window.location.pathname),
    distractionFreeMode: false,
});
gitalk.render('gitalk-container');
