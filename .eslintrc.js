module.exports={
    root:true,
    parserOptions:{
        sourceType:"module"
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends:"standard",
    // required to lint *.vue files
    plugins:[
        "html"
    ],
    //自定义规则
    "rules":{
        // allow paren-less arrow functions
        "arrow-parens":0,
        // allow debugger during development
        "no-debugger":process.env.NODE_ENV=="production"?2:0        
    }
}