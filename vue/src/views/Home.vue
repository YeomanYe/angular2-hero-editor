<template>
    <div>
        <h1 class="cnt-c0">Tour of Heroes</h1>
        <nav class="cnt-c0">
            <router-link to="/home/heroes">Heroes</router-link>
            <router-link to="/home/dashboard">Dashboard</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style>
    /* #docregion , quickstart, toh */


    /* Master Styles */

    h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
    }

    h2,
    h3 {
        color: #444;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
    }

    body {
        margin: 2em;
    }


    /* #enddocregion quickstart */

    body,
    input[text],
    button {
        color: #888;
        font-family: Cambria, Georgia;
    }


    /* #enddocregion toh */

    a {
        cursor: pointer;
        cursor: hand;
    }

    button {
        font-family: Arial;
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
    }

    button:hover {
        background-color: #cfd8dc;
    }

    button:disabled {
        background-color: #eee;
        color: #aaa;
        cursor: auto;
    }


    /* Navigation link styles */

    nav a {
        padding: 5px 10px;
        text-decoration: none;
        margin-right: 10px;
        margin-top: 10px;
        display: inline-block;
        background-color: #eee;
        border-radius: 4px;
    }

    nav a:visited,
    a:link {
        color: #607D8B;
    }

    nav a:hover {
        color: #039be5;
        background-color: #CFD8DC;
    }

    nav a.active {
        color: #039be5;
    }
    /* login page */


    /* items class */

    #app{
        margin:2em;
    }

    .items {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 24em;
    }

    .items li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
    }

    .items li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
    }

    .items li.selected {
        background-color: #CFD8DC;
        color: white;
    }

    .items li.selected:hover {
        background-color: #BBD8DC;
    }

    .items .text {
        position: relative;
        top: -3px;
    }

    .items .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
    }


    /* #docregion toh */


    /* everywhere else */

    * {
        font-family: Arial, Helvetica, sans-serif;
    }

    /*=====inline-style======*/

    h1.cnt-c0 {
        font-size: 1.2em;
        color: #999;
        margin-bottom: 0;
    }

    h2.cnt-c0 {
        font-size: 2em;
        margin-top: 0;
        padding-top: 0;
    }

    nav.cnt-c0 a.cnt-c0 {
        padding: 5px 10px;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        background-color: #eee;
        border-radius: 4px;
    }

    nav.cnt-c0 a.cnt-c0:visited,
    a.cnt-c0:link {
        color: #607D8B;
    }

    nav.cnt-c0 a.cnt-c0:hover {
        color: #039be5;
        background-color: #CFD8DC;
    }

    nav.cnt-c0 a.active.cnt-c0 {
        color: #039be5;
    }

    [class*='col-'].cnt-c1 {
        float: left;
        padding-right: 20px;
        padding-bottom: 20px;
    }

    [class*='col-'].cnt-c1:last-of-type {
        padding-right: 0;
    }

    a.cnt-c1 {
        text-decoration: none;
    }

    *.cnt-c1,
    *.cnt-c1:after,
    *.cnt-c1:before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    h3.cnt-c1 {
        text-align: center;
        margin-bottom: 0;
    }

    h4.cnt-c1 {
        position: relative;
    }

    .grid.cnt-c1 {
        margin: 0;
        overflow: hidden;
    }

    .col-1-4.cnt-c1 {
        width: 25%;
    }

    .module.cnt-c1 {
        padding: 20px;
        text-align: center;
        color: #eee;
        max-height: 120px;
        min-width: 120px;
        background-color: #607D8B;
        border-radius: 2px;
    }

    .module.cnt-c1:hover {
        background-color: #EEE;
        cursor: pointer;
        color: #607d8b;
    }

    .grid-pad.cnt-c1 {
        padding: 10px 0;
    }

    .grid-pad.cnt-c1>[class*='col-'].cnt-c1:last-of-type {
        padding-right: 20px;
    }

    @media (max-width: 600px) {
        .module.cnt-c1 {
            font-size: 10px;
            max-height: 75px;
        }
    }

    @media (max-width: 1024px) {
        .grid.cnt-c1 {
            margin: 0;
        }
        .module.cnt-c1 {
            min-width: 60px;
        }
    }

    .search-result.cnt-c2 {
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        width: 195px;
        height: 16px;
        padding: 5px;
        background-color: white;
        cursor: pointer;
    }

    .search-result.cnt-c2:hover {
        color: #eee;
        background-color: #607D8B;
    }

    #search-box.cnt-c2 {
        width: 200px;
        height: 20px;
    }

    .selected.cnt-c3 {
        background-color: #CFD8DC !important;
        color: white;
    }

    .heroes.cnt-c3 {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
    }

    .heroes.cnt-c3 li.cnt-c3 {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
    }

    .heroes.cnt-c3 li.cnt-c3:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
    }

    .heroes.cnt-c3 li.selected.cnt-c3:hover {
        background-color: #BBD8DC !important;
        color: white;
    }

    .heroes.cnt-c3 .text.cnt-c3 {
        position: relative;
        top: -3px;
    }

    .heroes.cnt-c3 .badge.cnt-c3 {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
    }

    button.cnt-c3 {
        font-family: Arial;
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
    }

    button.cnt-c3:hover {
        background-color: #cfd8dc;
    }

    button.delete.cnt-c3 {
        float: right;
        margin-top: 2px;
        margin-right: .8em;
        background-color: gray !important;
        color: white;
    }

    label.cnt-c4 {
        display: inline-block;
        width: 3em;
        margin: .5em 0;
        color: #607D8B;
        font-weight: bold;
    }

    input.cnt-c4 {
        height: 2em;
        font-size: 1em;
        padding-left: .4em;
    }

    button.cnt-c4 {
        margin-top: 20px;
        font-family: Arial;
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
    }

    button.cnt-c4:hover {
        background-color: #cfd8dc;
    }

    button.cnt-c4:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
    }
</style>
