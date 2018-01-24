module.exports = {
    context:"",
    devtool:"inline-sourcemap",
    entry: {
        app: "./src/jass/app.js"
        /*app: "./js/src/ProReact.js",
        cardApp: "./js/src/CardApp.js",
        route:"./js/src/route.js",
        flux:"./js/src/flux.js",
        flux1:"./js/src/flux1.js",
        redux:"./js/src/redux.js",
        test:["./js/src/test/test.js"],
        testFlux:["./js/src/test/flux.js"],
        search:["./js/src/search/search.js"],
        reduxTest:["./js/src/test/redux/redux.js"],
        fluxAndredux_flux:["./js/src/FluxAndredux/Flux/flux.js"],
        fluxAndredux_redux:["./js/src/FluxAndredux/Redux/redux.js"],
        todo:["./js/src/ToDo/todo.js"],*/
    },
    module:{
    	loaders: [
    		{
    			test:/\.js$/,
    			exclude:/node_modules/,
    			loader:'babel-loader',
    			query:{
    				presets:['react','es2015']
    			}
    		}
    	]
    },
    output: {
        path: ".",
        filename: "[name].js"
    },
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    devServer:{
        contentBase:'',
        inline:true,
        stats:"errors-only"
    }
    // content base "", watchOptions,watch
}