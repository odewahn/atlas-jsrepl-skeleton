(function(){self.JSREPLEngine=function(){function d(a,b,c,g,e,f){this.result=c;this.sandbox=e;c=this.sandbox.BiwaScheme.Port;c.current_input=new c.CustomInput(a);c.current_output=new c.CustomOutput(b);c.current_error=c.current_output;this.interpreter=new this.sandbox.BiwaScheme.Interpreter(g);f()}d.prototype.Eval=function(a){try{return this.interpreter.evaluate(a,function(c){return function(a){var b;if(a!==void 0)return b="",a!=null&&a!==c.sandbox.BiwaScheme.undef&&(b=c.sandbox.BiwaScheme.to_write(a)),
c.result(b)}}(this))}catch(b){return this.interpreter.on_error(b.message)}};d.prototype.EvalSync=function(a){var b;b=null;this.interpreter.evaluate(a,function(a){return b=a});return b};d.prototype.IsCommandComplete=function(a){var b,c,g,e,f;g=(new this.sandbox.BiwaScheme.Parser(a)).tokens;a=b=0;for(e=0,f=g.length;e<f;e++)switch(c=g[e],c){case "[":++a;break;case "]":--a;break;case "(":++b;break;case ")":--b}return b<=0&&a<=0};d.prototype.GetNextLineIndent=function(a){var b;b=function(a){return function(b){var e,
f,d,h;f=(new a.sandbox.BiwaScheme.Parser(b)).tokens;b=0;for(d=0,h=f.length;d<h;d++)switch(e=f[d],e){case "[":case "(":++b;break;case "]":case ")":--b}return b}}(this);return b(a)<=0?false:(a=b(a.split("\n").slice(-1)[0]),a>0?1:a<0?a:0)};return d}()}).call(this);
