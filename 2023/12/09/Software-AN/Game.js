(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{crossOrigin :'Anonymous',name:"Game_atlas_1", frames: [[1765,0,280,280],[0,905,303,303],[1158,563,416,416],[1347,0,416,416],[0,563,1156,340],[0,0,1345,561],[305,905,303,303],[610,905,269,269],[1576,418,416,416],[1576,836,416,416]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,2779);


(lib.CachedBmp_12 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2102,2779);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4912,2104);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4402,2102);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.weapon5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AB9k8IAADqIgvAAIAFNvIgyBAIh2CYIAAxHIgmAAIAAuiID4AAIAABkIhAAAIAAB/IBAAAIAABpAB9owIAAB1");
	this.shape.setTransform(9.9928,81.3638,0.8031,0.8031);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AganXIAvAAIAFNuIgxBBg");
	this.shape_1.setTransform(14.4902,112.6245,0.8031,0.8031);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C54").s().p("Ag6ojIByAAIADOvIh1CYg");
	this.shape_2.setTransform(7.8445,118.7281,0.8031,0.8031);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333300").s().p("ABNHRIgwAAIhyAAIgnAAIAAuhID5AAIAABkIhAAAIAAB/IBAAAIAABpIhAAAIAAB4IBAAAIAAB0IhEAAIAAB/IBEAAIAADqg");
	this.shape_3.setTransform(9.9928,37.3539,0.8031,0.8031);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weapon5, new cjs.Rectangle(-1.5,-1.5,23,165.8), null);


(lib.weapon4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhBPmIodAAQh/kDB/j1IIdAAIAA5YQBygzBNAzIAAZYIHwAAQBhEahhDeInwAAIAABvQhpBfhWhfgAB+PmIi/AA");
	this.shape.setTransform(50.5193,87.1392,0.7533,0.7533);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49497E").s().p("AB+D8Ii/AAIodAAQh/kCB/j1IIdAAIC/AAIHwAAQBhEZhhDeg");
	this.shape_1.setTransform(50.5193,143.3445,0.7533,0.7533);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD8A00").s().p("AhfRVIAAhvIC/AAIAABvQg1AvgvAAQgwAAgrgvgAhfHuIAA5YQBygzBNAzIAAZYg");
	this.shape_2.setTransform(52.798,87.1392,0.7533,0.7533);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weapon4, new cjs.Rectangle(-1.5,-1.5,104,177.3), null);


(lib.weapon3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhErbIA/lrIAuFmABFRHIgDihAhEOxIAACW");
	this.shape.setTransform(17.4327,96.4403,0.7036,0.7036);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AgLz5IjaibIAAHYICzCWIAAaMIhdD4IC3FIICLl2IhfjVIga6GICsjQIAAmqg");
	this.shape_1.setTransform(16.1838,101.7174,0.7036,0.7036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD8A00").s().p("AigghIBcj4IAACVIBECEIBFiEIgDihIBfDVIiKF2g");
	this.shape_2.setTransform(17.4327,182.7912,0.7036,0.7036);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3B3B").s().p("AhEQEIAAiVIAA6MIA/lrIAuFmIAZaFIADChIhFCFg");
	this.shape_3.setTransform(17.4327,101.1017,0.7036,0.7036);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AjlCqIAAnYIDaCcIDxitIAAGpIisDRIgullIg+Fqg");
	this.shape_4.setTransform(16.1838,22.4729,0.7036,0.7036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weapon3, new cjs.Rectangle(-1.5,-1.5,35.4,206.5), null);


(lib.weapon2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhynRIjLAAIAAhuIDuAAIAAlCIhhAAIAAhmIFgAAIAABmIhWAAIAAFCIDkAAIAABuIjDAAIhCAAAhynRIA8AAAhynRIAwUwIBQCJIBRiaIAc0f");
	this.shape.setTransform(31.8,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85BDDA").s().p("AhGJTIgw0vIA8AAIA4VdIA31dIBCAAIgcUfIhRCag");
	this.shape_1.setTransform(32.225,126.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A7088").s().p("Ag3qtIAAAAIBvgCIAAACIg4Veg");
	this.shape_2.setTransform(31.95,121.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhUChIAAlBICpAAIAAFBg");
	this.shape_3.setTransform(32.3,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E4E4E").s().p("AB8ELIhDAAIAAgDIhuACIAAABIg9AAIjLAAIAAhuIDuAAICpAAIDkAAIAABugABaikIipAAIhhAAIAAhmIFhAAIAABmg");
	this.shape_4.setTransform(31.8,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weapon2, new cjs.Rectangle(-1.5,-1.5,66.6,203), null);


(lib.weapon1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhLAkQAAgFAAgFQAAhBAugvQAsgtA/gBQACAAADAAQARAAAQADQAtAJAiAiQAfAfAKAmQAGAUAAAXQAAALgCALQgGA0gnAmQgjAjgtAJQgQADgQAAQgRAAgQgDQgtgJgigjQgrgrgDg7AAdm0IxoowIMaPkIrJRTIRZrYIPtH9IqXtFIJcyFg");
	this.shape.setTransform(58.6879,59.0842,0.5336,0.5336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#224355").s().p("AiAA6QADA7ArArQAiAjAuAJIr1JIgAA9DMQAugJAjgjQAmgmAHg0II9J3gArBpsILaH+Qg+ABgtAtQgvAvAABBIABAKgACOhAQgigigtgJIJ8qoIoEMXQgLglgegfg");
	this.shape_1.setTransform(61.5295,57.9103,0.5336,0.5336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#366B87").s().p("AkxAAIsavkIRoIwIP0qeIpcSFIKXNFIvtn9IxZLYgAhLAkIAAAAIp2LaILzpIQAQADARAAQAQAAAQgDIK6HxIo9p3QACgLAAgLQAAgXgGgUIIFsYIp9KoQgQgDgRAAIgFAAIran+g");
	this.shape_2.setTransform(58.6879,59.0842,0.5336,0.5336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weapon1, new cjs.Rectangle(-1.5,-1.5,120.4,121.2), null);


(lib.right_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AiVgJQhiAcg5ABQhZACAahBQAYg9B/gSQAegFAzgDQAggCgEgDQhWghgyghQhhg/CEgbQCFgbA1BEQAaAiAAAnIAhhIQAohJAfgEQAigFBkBPQBhBNgDAOQgBAHgEAmQgHAigPgBQgFAAAKAEQATAIANALQAvApggBJQgiBNgbALQgHADgGgCQAFAFAHAKQASAaAIAYQAaBKhUAUQgcAIgggRQhBgigWh9QgLhBgPAbQgKASgdBTQhMC8h2hTQgtghAthJQAXglAdgXQg9AZhTAIQhRAJgGgQQgOgjAYgkQAmg5B5grQAPgFAQgGAEfCPQgBgBgBAAQgIgFAEAAQACAAAEAGgAhXCIQAZgUAdgKQAhgLgpAUQgVALgZAKg");
	this.shape.setTransform(37.4175,32.7812);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBBA0").s().p("AiLEuQgtghAthJQAXglAdgXQAZgKAVgLQApgUghALQgdAKgZAUQg9AZhTAIQhRAJgGgQQgOgjAYgkQAmg5B5grQhiAcg5ABQhZACAahBQAYg9B/gSQAegFAzgDQAggCgEgDQhWghgyghQhhg/CEgbQCFgbA1BEQAaAiAAAnIAhhIQAohJAfgEQAigFBkBPQBhBNgDAOIgFAtQgHAigPgBQgFAAAKAEQATAIANALQAvApggBJQgiBNgbALQgHADgGgCIAMAPQASAaAIAYQAaBKhUAUQgcAIgggRQhBgigWh9QgLhBgPAbQgKASgdBTQg1CDhIAAQghAAgkgagAEdCOIACABQgEgGgCAAQgEAAAIAFgAiVgJIAfgLIgfALg");
	this.shape_1.setTransform(37.4175,32.7812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,78.8,69.6);


(lib.right_foot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AnOA2QABA8BIAsQBAAnBwASQBdAPB8AAQCEABBfgQQBCgLAwgTQBngpANhHQAAgCAAgBQAJg0gkg0Qgegug9guQiIhkiYgEQiwADiUBIQhvA2gxBDQgMASgIARQgNAcAAAZgAA7i2QhFAAhOAdQhPAdgLAQQgLAQAHAPQAGAOAZAVQAZAWCjAFQCkAFAdgNQAegNAbgJQAagIgEgeQgFgdhJgmQhQgohcAIgAHNBGQiLBGiVAWQk8Auk/ia");
	this.shape.setTransform(46.2821,23.0508);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBBA0").s().p("AgXBTQilgFgYgVQgagWgGgOQgHgOAMgPQAKgQBQgeQBNgdBGABQBbgIBQAoQBJAlAFAdQAFAdgbAJQgbAJgeANQgVAJhZAAIhRgCg");
	this.shape_1.setTransform(52.4502,13.1298);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFBYQh8gBhdgPQhwgShAgnQhJgqAAg8QE/CZE8gvQCUgVCMhFIgBACQgMBHhoAoQgvAThCALQhdAQh+AAIgIAAg");
	this.shape_2.setTransform(46.2,37.3008);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AnOBTQAAgZANgcQAIgSAMgRQAxhDBvg2QCUhICwgDQCYAECIBkQA9AuAeAuQAkA0gJA0QiLBGiVAWQhJALhKAAQjzAAj1h3gAhYh8QhPAdgLAQQgLAQAHAPQAGAOAZAVQAZAVCjAFQCkAFAdgNQAegMAbgJQAagIgEgeQgFgdhJgmQhQgohcAIIgCAAQhEAAhNAdg");
	this.shape_3.setTransform(46.2821,20.1642);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AA7i2QhFAAhOAdQhPAdgLAQQgLAQAGAPQAHAOAZAVQAZAWCjAFQCkAFAdgNQAegNAagJQAbgIgEgeQgFgdhJgmQhQgohcAIgAHNBGQAJg0gkg0Qgegug9guQiIhkiYgEQiwADiUBIQhvA2gxBDQgMASgIARQgNAcAAAZQABA8BIAsQBAAnBwASQBdAPB8AAQCEABBfgQQBCgLAwgTQBngpANhHQAAgCAAgBQiLBGiVAWQk8Auk/ia");
	this.shape_4.setTransform(46.2821,23.0508);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFBYQh8gBhdgPQhwgShAgnQhJgqAAg8QE/CZE8gvQCVgVCLhFIgBACQgNBHhnAoQgvAThCALQhdAQh+AAIgIAAg");
	this.shape_5.setTransform(46.2,37.3008);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AnOBTQAAgZANgcQAIgSAMgRQAxhDBvg2QCUhICwgDQCYAECIBkQA9AuAeAuQAkA0gJA0QiLBGiVAWQhJALhKAAQjzAAj1h3gAhYh8QhPAdgLAQQgLAQAGAPQAHAOAZAVQAZAVCjAFQCkAFAdgNQAegMAagJQAbgIgEgeQgFgdhJgmQhQgohcAIIgCAAQhEAAhNAdg");
	this.shape_6.setTransform(46.2821,20.1642);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBBA0").s().p("AgYBTQijgFgZgVQgagWgGgOQgHgOALgPQAMgQBPgeQBOgdBGABQBagIBQAoQBJAlAFAdQAFAdgbAJQgbAIgdANQgWAKhZAAIhSgCg");
	this.shape_7.setTransform(52.4468,13.1313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,96.6,50.1);


(lib.right_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// right
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(521.5,650.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,-1.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(521.5,658.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(550,690.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_20();
	this.instance_4.setTransform(555.65,690.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,1027.5,1389.5);


(lib.right_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AhDlaQgrA4gsBDQgBABAAABQguBGgpBHICQBtQCTB9AcBEQAfg6Aeg9QAbg5Abg7QAHgQAHgPQAPghBChjQBHhqAcg6QBljMikhCQhcgliKB7QhOBFhSBtIAhAXQAtAhAnAjQCABxAcBiAiajfIAnAWQAzAfAsAkQCKBzAUB6AjyhQQg9BogwBqQhPCtAHA5QARCKA4BHQBGBaBrhEQA5glBti1QAqhIAqhP");
	this.shape.setTransform(42.4462,61.9901);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B84900").s().p("AleI5Qg4hHgRiKQgHg5BPitQAwhqA9hoICQBtQCTB9AcBEQgqBPgqBIQhtC1g5AlQguAdgoAAQgzAAgogzgAAyj/QgngjgtghIghgXQBShtBOhFQCKh7BcAlQCkBChlDMQgcA6hHBqQhCBjgPAhQgchiiAhxg");
	this.shape_1.setTransform(42.4462,61.9901);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEBD7").s().p("AhQBcIiPhuQAohGAuhGIABgCQAshDArg4IAiAXQAsAgAnAkQCABwAdBhIgPAfQgbA8gbA5QgUh6iKhyQgsgkgygfIgogWIAoAWQAyAfAsAkQCKByAUB6QgeA9gfA6QgchEiTh8gACcClIAAAAg");
	this.shape_2.setTransform(40.6,55.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,88.9,128);


(lib.restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(61.1,50.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,672.5,280.5);


(lib.leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AtKivQgBgFAAgGQgKhXAAgfQAAgXAGgTQAFgVALgRQApg8CAgoQARgFASgFQATgFAUgEQDOguFeAEQALAAALABQAiAAAjABQA1ACAyADQC2AKCLAZQAWAEAVAEQAuAKApALQABAAABABQBPAWAuAaQAkAUAAAKQAAADAGAKQADAGAEAIQADAFACAFQABADACACQABAEACADQAHARAFAPQALAlgDAoQgCANgCAOQgKgGgJgFQgGgDgHgDQgNgFgNgFQgSgHgRgGAETBcQAEADAEADQAGAFAGAFQALAJAKAJQAfAcAYAcQACACACADQAEAFAFAFQAXAeAQAeQAdA5AFA8QADAigGAjQgCAWBYARQAtAJAzAEQAwAEA1gBQAkAAAggDQBOgGA6gTQBfgfALg8QAAgCABgDQAMg3gEg+QgCgdgFgfQgCgHgBgIQgNg8gahCQgEgLgFgLQgJgXgKgTQgUgrgWgjQgKgQgLgOQgKgOgLgMQgEgFgEgFQgegggggVQgFgDgEgCAETBcQgXACgZABQggACghABQgyABg1ABQgiAAgjgBQgTAAgSAAQhNgChEgDQgYgBgWgBQgRANgRAOQgJAIgKAJIAAAAQgUASgRATQgGAHgGAHQgFAFgEAFQgiApgWAsQgCAEgCAEQgMAZgJAbQgDALgDALQgFATgCATQgGAnACApQACAXhbAUQg1AMg6AFQgsAEguAAQgpAAgjgEQhMgHg3gVQghgNgXgSQgrghgHgwQAAgBAAgCQgCgRgCgSQgBgLAAgLQgEhLAJhGQABgFABgFQAEgaAGgZQANg8AZg4QACgFACgEQADgIAEgHQAJgTALgRQAfg0AognQAMgLAMgKQAPgMARgLQALgGAKgFQAcgNAXgDAC0AdQAZAOAWAPQAZAQAXASAjuBcQgRgBgRgBQgHgBgGAAQgDAAgDgBQgzgDgHgH");
	this.shape.setTransform(105.7157,54.6088);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B46B9").s().p("AstIeQhMgHg3gVQghgNgXgSQgrghgHgwIAAgDIgEgjIgBgWQgEhLAJhGIACgKQAEgaAGgZQANg8AZg4IAEgJIAHgPQAJgTALgRQAfg0AognIAYgVQAPgMARgLIgBgLQgKhXAAgfQAAgXAGgTQAFgVALgRQApg8CAgoIAjgKIAngJQDOguFeAEIAWABIBFABQA1ACAyADQC2AKCLAZIArAIQAuAKApALIACABQBPAWAuAaQAkAUAAAKQAAADAGAKIAHAOIAFAKIADAFIADAHQAHARAFAPQALAlgDAoIgEAbIgTgLIgNgGIgagKIgjgNIAjANIAaAKIANAGIATALIAJAFQAgAVAeAgIAIAKIAVAaQALAOAKAQQAWAjAUArIATAqIAJAWQAaBCANA8IADAPQAFAfACAdQAEA+gMA3IgBAFQgLA8hfAfQg6AThOAGQggADgkAAQg1ABgwgEQgzgEgtgJQhYgRACgWQAGgjgDgiQgFg8gdg5QgQgegXgeIgJgKIgEgFQgYgcgfgcIgVgSIgMgKIgIgGQgXgSgZgQQgWgPgZgOQAZAOAWAPQAZAQAXASIgwADIhBADIhnACIhFgBIglAAQhNgChEgDIgugCIgigCIgNgBIgGgBQgzgDgHgHQAHAHAzADIAGABIANABIAiACIgiAbIgTARIAAAAQgUASgRATIgMAOIgJAKQgiApgWAsIgEAIQgMAZgJAbIgGAWQgFATgCATQgGAnACApQACAXhbAUQg1AMg6AFQgsAEguAAQgpAAgjgEgAs1i6IgVALIAVgLQAcgNAXgDQgXADgcANgAETBcIAAAAg");
	this.shape_1.setTransform(105.7157,54.6088);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,215.5,113.2);


(lib.left_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AgIBjQADARADASQAdDWhNAEQhSADgWiGQgMhJAIhfQABgMgPAjQgZA+gNAdQhCCLgvgdQgwgeAdhXQAJgbAPgeQAIgOAGgKQgLgzAJg/QAQiBBihBQDqidBpAtQAkAPgEAfQgCAPADAFQAFAJAVADQAVAEATgIQAMgEATgKQAhgQAfAiQAoAxhOA1QgYARghAPIgcAMIBKAqQBHAzgTAoQgVAvhUgCQhSgCgigsQARAlBABQQAtBFgmAhQgxAqg/gkQhCglgphoQgHgUgFgWQgThUAPA0QAJAgAHAqgAB7APQgGgJgEgL");
	this.shape.setTransform(35.4495,35.2119);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBBA0").s().p("AiaDdQgMhJAIhfQABgMgPAjQgZA+gNAdQhCCLgvgdQgwgeAdhXQAJgbAPgeIAOgYQgLgzAJg/QAQiBBihBQDqidBpAtQAkAPgEAfQgCAPADAFQAFAJAVADQAVAEATgIQAMgEATgKQAhgQAfAiQAoAxhOA1QgYARghAPIgcAMIBKAqQBHAzgTAoQgVAvhUgCQhSgCgigsQARAlBABQQAtBFgmAhQgxAqg/gkQhCglgphoQgIgqgIggQgPg0ATBUQAEAWAIAUIAGAjQAdDWhNAEIgFAAQhOAAgViDgAB7APQgGgJgEgLQAEALAGAJg");
	this.shape_1.setTransform(35.4495,35.2119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,74.9,74.4);


(lib.left_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// left
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-205.05,38.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-526.1,-694.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-205.05,38.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(-168.1,75.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_10();
	this.instance_4.setTransform(-176.65,66.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.1,-694.7,1051,1389.5);


(lib.left_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AB7i4QgzAjg/A9Qh9B5g9CIQgdg/gghJAAokkQAmAwAtA8QCLC6BNCdQACADACAEQBRCngeA4Qg8BvhRAuQgPAIgPAGQhVAjhMgxQgZgQgXgZQgHgIgHgJQhDhUhujrAmElJQgQgyADg3QAHhuBfgcQAlgLBLA5QBFA0BZBkQg4Arg8A7Qh3B0gWBKIAwBzAgdl2QAkAqAhAoQg5Ajg/A7QiAB0geBz");
	this.shape.setTransform(40.2089,57.4731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B84900").s().p("AA+IiQgZgQgXgZIgOgRQhDhUhujrQA9iIB9h5QA/g9AzgjQCLC6BNCdIAEAHQBRCngeA4Qg8BvhRAuQgPAIgPAGQgjAPghAAQgwAAgtgdgAmElJQgQgyADg3QAHhuBfgcQAlgLBLA5QBFA0BZBkQg4Arg8A7Qh3B0gWBKg");
	this.shape_1.setTransform(40.2089,57.4731);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEBD7").s().p("AicCIQAeh0B/hzQA/g6A6gkQg6Akg/A6Qh/BzgeB0Igwh0QAWhIB3h1QA8g6A3gsQAlAqAhAoQAmAwAtA8QgzAjg/A8Qh9B7g9CHQgdg/gghJg");
	this.shape_2.setTransform(32.025,47.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,84.5,119);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AlYlbQgKANgGALQgChCgagTQgngdhUBrQgbAjAEAoQAGA0BDAWIgNAPQgKAFgmAmQgrArgFATQgOA3gBBeQgBBgAOAkQAFAMAYBBQAeBFAwA3QB4CKDXApQAuAJAzAEQBxAKBYgXQCLgkBJh0QBRiCgOi0QAAAAATgDQAXgFATgNQA/gpAPhrQAFgpg0gJIgjgCIATgDQAkiGgthqQhIirkRhXQkEhTiWCNQgvAsgeA9IgUA0g");
	this.shape.setTransform(58.598,61.5999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AHyhHIgSAAQgEgvgKgxQgUhhgbgJQgOgFAAgJQAAgFAHgPQAQgfgVgTQgMgMgEgSQgCgUgDgKQgKgkhRgQQhegYgTgCQgTgCgwAfQg3AhgKAGQgIAFgBAFQADgWgGgaQgMg1gpAJQg8AzgaANQgLAFgWgiQgXgjgUAJQgnARhPBTQgjAkgVAdAFIjQQgaA9g6AbQg5Abg3gXQg3gXgVg8QgUg8Aag+QAag+A5gbQA6gbA3AXQA3AYAUA8QAVA8gaA+gAlDHCQg3gUgngaQg0gigThSQgQhJAPhVQAPhUAmgyQAqg3AzALQBNARAeBHQAPAlAJAMQATAXAjAGQA7AKARgbQALgQAEgDQAMgJAXADQAnAEAFAWQAFAXAVADQAXADAogkQAlgjAaAIQAbAIAMAPQAKAOAPADQAQADASgMQAPgKARAJQANAHANA1QANA4ACA/QACCThCAwQgLAIgNAFQhrAqjdgaQiRgQhhgjIgDgPQgDgtAOgrQAbhWBUAKQBOAIAZA5QAGAOAKAaQAKAVASAFQASAGAPgaQAJgQASgrQAvhXBbAUQBfAVAOBQQADAWACAqQADAjANAQAh4lHQAAALgJAIQgIAJgLAAQgMAAgIgJQgIgIAAgLQAAgMAIgIQAIgIAMAAQALAAAIAIQAJAIAAAMgAAqiwQg1gdhCgOQhUgRgWAgQhHBmCRApQBtAfAIACQAfAGAdgLQAhgLgKg4QgKg4gngUgADNkKQAAALgIAHQgHAIgLAAQgLAAgIgIQgIgHAAgLQAAgLAIgIQAIgIALAAQALAAAHAIQAIAIAAALgAnTipIgFAJQgGAIABAAQAJgIABgBQAFgGgFgCgAhpg1QACABgPAeQgPAjAHAY");
	this.shape_1.setTransform(59.2429,60.3718);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("Ag1B4QiRgRhhgjIgCgPQgDgsANgqQAchWBUAJQBNAJAZA4QAHAOAJAbQAKATASAGQASAFAOgaQAJgOAUgsQAuhXBcAVQBeAVAOBQQAEAVACApQADAjAMAQQgLAIgNAFQhCAahvAAQhEAAhTgJg");
	this.shape_2.setTransform(56.3977,98.548);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AFRDSQgCgqgEgVQgOhQhegVQhcgVguBXQgUAsgJAPQgPAagSgFQgSgGgJgUQgJgbgHgOQgZg4hNgJQhUgJgcBWQgNArADAsIACAPQg2gUgngZQg1gigShSQgRhKAPhUQAPhUAmgyQAqg4A0AMQBMARAeBHQAQAmAJALQASAYAkAGQA6AKASgbQAJgQAFgDQALgJAYACQAnAEAFAXQAGAXAVADQAXADAnglQAlgjAbAIQAbAIALAPQALAOAPADQAPADASgLQAPgLARAJQANAHANA1QAOA4ABA+QADCUhDAvQgMgQgDgjg");
	this.shape_3.setTransform(51.0974,81.4263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+CVQg3gXgVg8QgUg8Aag9QAag+A5gbQA5gbA3AXQA3AYAUA8QAVA8gaA9QgaA9g6AbQgeAPgdAAQgbAAgZgLgAgigTQgIAIAAALQAAAKAIAHQAIAIALAAQALAAAGgIQAIgHAAgKQAAgLgIgIQgGgIgLAAQgLAAgIAIg");
	this.shape_4.setTransform(78.7171,33.7928);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AGGEJQgFgvgKgwQgUhigagJQgOgFAAgJQAAgFAHgOQAPgegVgUQgMgLgDgSQgCgVgDgJQgLgkhQgQQhegZgTgBQgTgCgxAeIg/AnQgIAGgBAEQACgWgFgZQgMg2gqAKQg9AzgZAMQgMAGgWgjQgWgjgUAJQgnAShQBTQgjAkgUAbIAGgVIAUg0QAeg9AvgsQCWiMEEBTQERBWBICqQAtBrgkCGIgTADgABFBZQgHgIAAgLQAAgLAHgIQAIgHALAAQALAAAIAHQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgIgIgAkDAdQgIgIAAgMQAAgKAIgJQAJgIALAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgLAAgJgIg");
	this.shape_5.setTransform(68.255,26.6088);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBBA0").s().p("AghI3QgzgEgugJQjXgph4iLQgwg3gehFIgdhMQgOgkABhhQABheAOg2QAFgUArgrQAmgmAKgFIANgOQhDgWgGg0QgEgoAbgjQBUhsAnAeQAaATACBCQAGgMAKgNQAUgcAjgkQBQhTAngSQAUgJAWAjQAWAjAMgGQAZgMA9gzQApgKAMA2QAFAZgCAWQABgEAIgGIBAgnQAxgeATACQATABBeAZQBQAQALAkQADAJACAVQADASAMALQAVAUgPAfQgHAOAAAFQAAAJAOAFQAaAJAUBiQAKAwAFAvIARABIAjABQA0AKgFAoQgPBrg/ApQgTANgXAGIgTADQAOC0hRCBQhJB1iLAkQg+AQhLAAQgfAAghgDgAmug+QgmAygPBTQgPBVARBKQASBSA1AiQAnAZA2AUQBhAjCRARQDeAaBqgrQANgFALgIQBDgvgDiUQgBg+gOg5QgNg1gNgHQgRgJgPALQgSALgPgDQgPgDgLgOQgLgPgbgIQgbgIglAjQgnAlgXgDQgVgDgGgXQgFgXgmgEQgYgCgLAJQgFADgKAQQgSAbg6gKQgkgGgSgYQgJgLgQglQgehHhMgRQgJgCgJAAQgpAAgjAugAh4gVQgCgHAAgJQAAgTAKgYQANgbAAgEIAAAAIAAAAQAAAEgNAbQgKAYAAATQAAAJACAHgAAlhVQASAAASgGIACAAQAYgJAAgjQAAgLgCgNQgKg4gmgUQAmAUAKA4QACANAAALQAAAjgYAJIgCAAQgSAGgSAAIgBAAIAAAAQgKAAgKgBIgCgBIh1ghQhhgbAAg3QAAgbAXgiIAAAAIABAAQAOgUAnAAIABAAIAAAAQAWAAAeAGQBBAOA2AcQg2gchBgOQgegGgWAAIAAAAIgBAAQgnAAgOAUIgBAAIAAAAQgXAiAAAbQAAA3BhAbIB1AhIACABQAKABAKAAIAAAAIABAAgACYnUQg5AbgaA+QgaA9AUA8QAUA8A3AXQA3AYA6gbQA5gbAag+QAag+gUg8QgVg8g3gXQgZgLgaAAQgeAAgfAPgAnSjbIgFAJIALgKQAFgFgGgCgAiimWQgIAJAAALQAAAMAIAIQAJAIALAAQAMAAAIgIQAIgIAAgMQAAgLgIgJQgIgIgMAAQgLAAgJAIg");
	this.shape_6.setTransform(58.598,66.2194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,121.2,127.2);


(lib.补间7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AwoCbQm5hAAAhbQAAhaG5hAQG5hBJvAAQJwAAG5BBQG5BAAABaQAABbm5BAQm5BBpwAAQpvAAm5hBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.6,-22,301.29999999999995,44);


(lib.补间6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AwoCbQm5hAAAhbQAAhaG5hAQG5hBJvAAQJwAAG5BBQG5BAAABaQAABbm5BAQm5BBpwAAQpvAAm5hBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.6,-22,301.29999999999995,44);


(lib.补间5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AwoCbQm5hAAAhbQAAhaG5hAQG5hBJvAAQJwAAG5BBQG5BAAABaQAABbm5BAQm5BBpwAAQpvAAm5hBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.6,-22,301.29999999999995,44);


(lib.补间3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AwoCbQm5hAAAhbQAAhaG5hAQG5hBJvAAQJwAAG5BBQG5BAAABaQAABbm5BAQm5BBpwAAQpvAAm5hBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.6,-22,301.29999999999995,44);


(lib.补间1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Ag4i2QBDAABLAdQBMAdAXAcQAWAbgKAPQgLAPgeAQQgfAPiYgEQiagFgsgLQgrgMgUgGQgUgGAIgeQAHgeBHgmQBNgoBZAIgAHAA2QgBA8hFAsQg/AnhsASQhaAPh4AAQh/ABhcgQQhAgLgugTQhkgpgMhHQAAgCgBgBQgIg0Aig0QAdguA8guQCDhkCTgEQCqADCQBIQBrA2AvBDQAMASAIARQAMAcAAAZgAm9BGQCHBGCQAWQExAuE1ia");
	this.shape.setTransform(44.3988,118.2508);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBBA0").s().p("AAXBVQiYgFgsgLIg/gSQgUgGAHgeQAIgdBHgmQBNgoBYAIQBDAABMAdQBMAdAWAbQAXAbgLAPQgKAPgfAQQgYAMhhAAIg/gBg");
	this.shape_1.setTransform(39.2148,108.459);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AimC/QiQgWiHhGQgIg0Aig0QAdguA8guQCDhkCTgEQCqADCQBIQBrA2AvBDQAMARAIASQAMAcAAAZQjtB3jrAAQhHAAhHgLgAjeh5QhHAmgHAeQgIAeAUAGIA/ARQAsALCaAFQCYAEAfgPQAegPALgPQAKgPgWgbQgXgchMgdQhLgdhDAAIgegBQhIAAhAAhg");
	this.shape_2.setTransform(44.3988,115.3642);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjfBIQhAgLgugTQhkgogMhHIgBgCQCHBFCQAVQExAvE1iZQgBA8hFAqQg/AnhsASQhaAPh4ABIgHAAQh7AAhZgQg");
	this.shape_3.setTransform(44.475,132.5008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,93.2,93.5,50.10000000000001);


(lib.元件55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACqg1IAZAtIAFAIIAIAPIAoBJAD4glIgtAkIgDABIgmAfIggAZAjFhXIBrArIidBO");
	this.shape.setTransform(193.9,32.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AHyhHIgSAAQgEgvgKgxQgUhhgbgJQgOgFAAgJQAAgFAHgPQAQgfgVgTQgMgMgEgSQgCgUgDgKQgKgkhRgQQhegYgTgCQgTgCgwAfQg3AhgKAGQgIAFgBAFQADgWgGgaQgMg1gpAJQg8AzgaANQgLAFgWgiQgXgjgUAJQgnARhPBTQgjAkgVAdADsh0Qg1AWgzgWQg3gXgVg8QgUg8Aag+QAag+A5gbQA6gbA3AXQA3AYAUA8QAVA8gaA+QgKAWgNARAAqiwQg1gdhCgOQhUgRgWAgQhHBmCRApQBtAfAIACQAfAGAdgLQAhgLgKg4QgKg4gngUgAlDHCQg3gUgngaQg0gigThSQgQhJAPhVQAPhUAmgyQAqg3AzALQBNARAeBHQAPAlAJAMQATAXAjAGQA7AKARgbQALgQAEgDQAMgJAXADQAnAEAFAWQAFAXAVADQAXADAogkQAlgjAaAIQAbAIAMAPQAKAOAPADQAQADASgMQAPgKARAJQANAHANA1QANA4ACA/QACCThCAwAhpg1QACABgPAeQgPAjAHAYAlDHCIgDgPQgDgtAOgrQAbhWBUAKQBOAIAZA5QAGAOAKAaQAKAVASAFQASAGAPgaQAJgQASgrQAvhXBbAUQBfAVAOBQQADAWACAqQADAjANAQQgLAIgNAFQhrAqjdgaQiRgQhhgjgAnTipIgFAJQgGAIABAAQAJgIABgBQAFgGgFgCg");
	this.shape_1.setTransform(194.2429,60.3718);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AlYlbQgKANgGALQgChCgagTQgngdhUBrQgbAjAEAoQAGA0BDAWIgNAPQgKAFgmAmQgrArgFATQgOA3gBBeQgBBgAOAkQAFAMAYBBQAeBFAwA3QB4CKDXApQAuAJAzAEQBxAKBYgXQCLgkBJh0QBRiCgOi0QAAAAATgDQAXgFATgNQA/gpAPhrQAFgpg0gJIgjgCIATgDQAkiGgthqQhIirkRhXQkEhTiWCNQgvAsgeA9IgUA0g");
	this.shape_2.setTransform(193.598,61.5999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("Ag1B4QiRgRhhgjIgCgPQgDgsANgqQAchWBUAJQBNAJAZA4QAHAOAJAbQAKATASAGQASAFAOgaQAJgOAUgsQAuhXBcAVQBeAVAOBQQAEAVACApQADAjAMAQQgLAIgNAFQhCAahvAAQhEAAhTgJg");
	this.shape_3.setTransform(191.3977,98.548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AFRDSQgCgqgEgVQgOhQhegVQhcgVguBXQgUAsgJAPQgPAagSgFQgSgGgJgUQgJgbgHgOQgZg4hNgJQhUgJgcBWQgNArADAsIACAPQg2gUgngZQg1gigShSQgRhKAPhUQAPhUAmgyQAqg4A0AMQBMARAeBHQAQAmAJALQASAYAkAGQA6AKASgbQAJgQAFgDQALgJAYACQAnAEAFAXQAGAXAVADQAXADAnglQAlgjAbAIQAbAIALAPQALAOAPADQAPADASgLQAPgLARAJQANAHANA1QAOA4ABA+QADCUhDAvQgMgQgDgjg");
	this.shape_4.setTransform(186.0974,81.4263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACDDfIgBAAIgBAAIgCAAIgBAAIgGAAIgHAAIgGAAIgGgBIgHgBIgCAAIgHgBIgGgDIgGgDIgHgDIgFgDIgDgCIAAAAIgBAAIgBgBIAAAAIgDgBIgDgBIgCgCIgCgCIgCgCIgBgCIgBgBIgBgBIgBgBIgBgCIAAgBIgBgBIAAgBIgDgHIgCgIIgBgJIAAgIIABgIIAAgBIABgBIAAgBIABAAIAAgBIAAAAIABgIIABgJIABgKIAAgJIAAgKIgBgBIgBgCIgCgCIgBgCIgBgCIgBgCIgBgBQg0AWgzgWQg3gXgVg8QgUg7Aag+QAag+A5gbQA6gbA2AXQA3AYAUA8QAVA8gaA+QgKAVgNARIAAABIAAADIAAAEIAAACIABAAIAAABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIACACIACABIABACIACACIABACIACACIABAAIABABIABABIABABIABABIABACIABABIAAAAIABABIAAAAIAAABIABABIABABIgBAAIABAAQADACADAEIAFAHIAFAIIAEAIIADAIIABACIAHARQAEAJACAKIABAVIAAAWQAAAGgCAFIgBAEIAAABIgBABIAAAAIAAABIgCACIgCACIgCACIgBADIgDACIgCABIgBABIgBABIgBABIgBAAIgCABIgBAAIgBAAIgBAAIAAABIgBAAIgBAAIgBAAgAAnAJIgnhIIAAgBQAAgJgFgHIAsgkIgsAkIgDgDIgFgEQgGgEgHAAQgLAAgIAIQgIAIAAALQAAAKAGAHIACABQAIAIALAAQALAAAHgIQAIgHAAgKgAhOgWIAfgZgAgNhXIgZgtgAAAg/g");
	this.shape_5.setTransform(214.8402,40.171);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBBA0").s().p("AghI3QgzgEgugJQjXgph4iLQgwg3gehFIgdhMQgOgkABhhQABheAOg2QAFgUArgrQAmgmAKgFIANgOQhDgWgGg0QgEgoAbgjQBUhsAnAeQAaATACBCQAGgMAKgNQAUgcAjgkQBQhTAngSQAUgJAWAjQAWAjAMgGQAZgMA9gzQApgKAMA2QAFAZgCAWQABgEAIgGIBAgnQAxgeATACQATABBeAZQBQAQALAkQADAJACAVQADASAMALQAVAUgPAfQgHAOAAAFQAAAJAOAFQAaAJAUBiQAKAwAFAvIARABIAjABQA0AKgFAoQgPBrg/ApQgTANgXAGIgTADQAOC0hRCBQhJB1iLAkQg+AQhLAAQgfAAghgDgAmug+QgmAygPBTQgPBVARBKQASBSA1AiQAnAZA2AUQBhAjCRARQDeAaBqgrQANgFALgIQBDgvgDiUQgBg+gOg5QgNg1gNgHQgRgJgPALQgSALgPgDQgPgDgLgOQgLgPgbgIQgbgIglAjQgnAlgXgDQgVgDgGgXQgFgXgmgEQgYgCgLAJQgFADgKAQQgSAbg6gKQgkgGgSgYQgJgLgQglQgehHhMgRQgJgCgJAAQgpAAgjAugAh4gVQgCgHAAgJQAAgTAKgYQANgbAAgEIAAAAIAAAAQAAAEgNAbQgKAYAAATQAAAJACAHgAD0itIABACIABACIABACIABACIABACIABABIAAAJIAAAKIAAAKIgCAIIAAAIIgBABIAAAAIAAABIgBABIAAAAIAAABIgBAIIAAAJIABAJIABAIIADAHIABAAIAAACIABABIAAABIABABIABACIABAAIABACIACADIACACIADABIACACIADAAIABABIAAAAIABAAIABABIACACIAFADIAHADIAHADIAGACIAGABIADABIAGABIAGAAIAHABIAGAAIAHAAIABAAIABAAIABAAIABAAIABAAIABgBIAAAAIABAAIABAAIAAAAIABAAIACgBIABAAIABgBIABgBIABgBIABAAIADgCIACgCIACgCIACgCIABgCIACgDIABAAIAAgBIAAgBIAAgBIACgDQABgGAAgGIAAgVIgBgWQgBgKgEgJIgIgRIAAgCIgDgIIgEgIIgFgIIgGgHQgCgDgEgCIAAgBIAAAAIgBgBIAAgBIgBAAIAAgBIAAAAIgBAAIgBgCIAAgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgCIgCgCIgBgBIgCgCIgBgCIgCgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgDIAAgDIAAgDIAAgBQANgSAJgWQAag+gUg8QgVg8g3gXQg3gXg5AbQg5AbgaA+QgaA9AUA8QAUA8A3AXQAzAWA2gWIABACgAAlhVQASAAASgGIACAAQAYgJAAgjQAAgLgCgNQgKg4gmgUQAmAUAKA4QACANAAALQAAAjgYAJIgCAAQgSAGgSAAIgBAAIAAAAQgKAAgKgBIgCgBIh1ghQhhgbAAg3QAAgbAXgiIAAAAIABAAQAOgUAnAAIABAAIAAAAQAWAAAeAGQBBAOA2AcQg2gchBgOQgegGgWAAIAAAAIgBAAQgnAAgOAUIgBAAIAAAAQgXAiAAAbQAAA3BhAbIB1AhIACABQAKABAKAAIAAAAIABAAgAnSjbIgFAJIALgKQAFgFgGgCgAj0kwICdhQIhqgqIBqAqg");
	this.shape_6.setTransform(193.598,66.2194);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AGGEJQgFgvgKgwQgUhigagJQgOgFAAgJQAAgFAHgOQAPgegVgUQgMgLgDgSQgCgVgDgJQgLgkhQgQQhegZgTgBQgTgCgxAeIg/AnQgIAGgBAEQACgWgFgZQgMg2gqAKQg9AzgZAMQgMAGgWgjQgWgjgUAJQgnAShQBTQgjAkgUAbIAGgVIAUg0QAeg9AvgsQCWiMEEBTQERBWBICqQAtBrgkCGIgTADg");
	this.shape_7.setTransform(203.255,26.6088);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133,-2,121.19999999999999,127.2);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AM5AJQAAABAAABQAEA6ABA5QACBHgBA5QgBC1gVCVIAWAMQAZAPATASQA9A5gdA9QgeA+giAXQgMAIgKABQgIACAAgDQoThGj8AYQg/AGmQARQklANg/AYQhIAdghgsQgZgiAEg+QAFg/AUggQAcgqAyAZQgGg9ANieQAIhqAPh3QAHhAAKhEIDIgJQD1gJDeAAQLGgBDaBaAMKmcQAiDKANDbQiog9kYgrQothVozBXQAIguAIgtQAWh6AWhkAJ8sMQADAAADgBQAMgBAUABQANACALAYAnTtgQAmAPAJAYQAKAbAWANQAiASHGAZQGzAXAygFQASgCAEgaQADgXAagFAKisNIgHBrQgPB+gtBjQiQE6mAhSQjigxh4g2Qhzg0gzhIQgrg+gNhrQgIh9gGhXAnTtgIAGBYQAOBpAnBaQB8EfFBARQFYASChjBQA/hLAYhgQAVhTgOhKAn0tTQAQgLARgCAr9A3IAWiUAM/D+QiegrkagfQoxg8pkBD");
	this.shape.setTransform(91.6111,86.5352);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AABABIgEgCIAFABIACABIgBABIgCgBg");
	this.shape_1.setTransform(40.55,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAANQgEgBgBgCIAAgDIAAgJQAEAAAAgFQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAIABgBIABgBQABgBACABIABAAQADABAAADIgCAFIAAAHQAAAGgBABIgDACIAAAAg");
	this.shape_2.setTransform(41.25,2.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AgFE7Qjjgxh3g2Qh0g0gzhIQgqg+gNhqIgPjUIAEgCQABgBAAgGIAAgIIABgFQAAgDgCgBIgBAAQARgLAQgCIAHBYQANBpAoBaQB8EeFBARQFYASChjBQA+hLAYhfQAVhTgNhKIAFgBQAMgBAUABIgHBrQgPB+gtBiQhyD5kIAAQhGAAhPgRg");
	this.shape_3.setTransform(100.1,33.2072);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3A68E").s().p("AgwElQlCgRh8keQgnhagOhpIgHhYQAmAPAJAYQAKAbAXANQAhASHGAZQG0AXAygFQASgCADgaQAEgXAagFQANBKgVBTQgYBfg+BLQiUCwksAAQgbAAgdgBg");
	this.shape_4.setTransform(100.2891,29.427);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEBD7").s().p("AFvB6Qoxg8pkBDQAHhAAKhDIDIgJQD1gJDeAAIAIAAIAAAAQKwAADeBUIACAAIAGADIACABIgCgBIgGgDIgCAAQjehUqwAAIAAAAIgIAAQjeAAj1AJIjIAJIAWiVQIzhXItBVQEYArCoA+IAAACQAEA5ABA5QACBHgBA5Qiegrkagfg");
	this.shape_5.setTransform(94.0313,92.3436);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B84900").s().p("At+M/QgZgiAEg+QAFg/AUggQAcgqAyAZQgGg9ANieQAIhqAPh3QJkhDIxA8QEaAfCeArQgBC1gVCVIAWAMQAZAPATASQA9A5gdA9QgeA+giAXQgMAIgKABQgIACAAgDQoThGj8AYQg/AGmQARQklANg/AYQgcALgWAAQgjAAgUgagAF5hnQothVozBXIAQhbQAWh6AWhkQgDgHACgMIAPhCQAIgoAKgkQAXhZAohWIAGgJQAOgdAPgZIAWgkQADgFADgCIAKAGQAEACACgBIABAAIgBAKIABADQAAACAEABIABAAIAODUQANBrArA+QAzBIBzA0QB4A2DiAxQGABSCQk6QAthjAPh+IAHhrQANACALAYIAAABIgBABIAEACIACABIADAEIAAABQADABABAEIADALIABAEIAJAfIABACIAMAxIAEAQIAFATQAQA1AHAvIAFAlIADAVQADASgBARIAAADQAiDKANDbQiog9kYgrg");
	this.shape_6.setTransform(91.6111,87.3352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,187.3,177.1);


(lib.player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {run:0,end:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_20 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(1));

	// head
	this.instance = new lib.head("synched",0);
	this.instance.setTransform(193.6,80.4,1,1,0,0,0,58.6,80.4);

	this.instance_1 = new lib.元件55("synched",0);
	this.instance_1.setTransform(193.6,61.6,1,1,0,0,0,193.6,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.9992,x:201.35},4).to({x:197.6},5).to({x:201.35},5).to({rotation:0,x:193.6},5).to({_off:true,regX:193.6,regY:61.6,y:61.6},1).wait(1));

	// left_arm
	this.instance_2 = new lib.left_arm("synched",0);
	this.instance_2.setTransform(249.15,94.7,1,1,0,0,0,7.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-21.4756,y:103.9},4).to({rotation:-42.6675,y:93.8},5).to({rotation:-21.4756,y:103.9},5).to({rotation:0,y:94.7},5).to({rotation:-54.9699,x:253.75,y:103.75},1).wait(1));

	// body
	this.instance_3 = new lib.body("synched",0);
	this.instance_3.setTransform(179.35,222.8,1,1,0,0,0,93,150.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:93.1,rotation:7.7063,x:168.95,y:222.85},4).to({regY:150.8,rotation:-7.2928,x:199.05,y:222.95},5).to({regY:150.7,rotation:7.7063,x:168.95,y:222.85},5).to({regX:93,rotation:0,x:179.35,y:222.8},5).to({startPosition:0},1).wait(1));

	// right_arm
	this.instance_4 = new lib.right_arm("synched",0);
	this.instance_4.setTransform(109.5,97.65,1,1,0,0,0,62.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:27.1,rotation:29.9992,y:97.55},4).to({rotation:44.9988,x:112.55,y:88.15},5).to({rotation:29.9992,x:109.5,y:97.55},5).to({regY:27.2,rotation:0,y:97.65},5).to({regY:27.1,rotation:68.4923,y:97.55},1).wait(1));

	// left_hand
	this.instance_5 = new lib.left_hand("synched",0);
	this.instance_5.setTransform(309.5,187.8,1,1,0,0,0,35.5,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:12.7,rotation:-29.9992,x:338.75,y:163.35},4).to({regX:35.4,rotation:-59.9984,x:355.65,y:113.25},5).to({regX:35.5,rotation:-29.9992,x:338.75,y:163.35},5).to({regY:12.6,rotation:0,x:309.5,y:187.8},5).to({rotation:-66.6975,x:370,y:103.85},1).wait(1));

	// right_hand
	this.instance_6 = new lib.right_hand("synched",0);
	this.instance_6.setTransform(58.1,192.3,1,1,0,0,0,58.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:29.9992,x:29.8,y:154.6},4).to({x:8.1,y:120.7},5).to({x:29.8,y:154.6},5).to({rotation:0,x:58.1,y:192.3},5).to({rotation:44.9994,x:11.55,y:94.5},1).wait(1));

	// leg
	this.instance_7 = new lib.leg("synched",0);
	this.instance_7.setTransform(179.4,258.55,1,1,0,0,0,105.7,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:156.6},4).to({regX:105.8,rotation:-14.9992,x:205.9},5).to({regX:105.7,rotation:0,x:156.6},5).to({x:179.4},5).to({startPosition:0},1).wait(1));

	// right_foot
	this.instance_8 = new lib.right_foot("synched",0);
	this.instance_8.setTransform(107.5,327.4,1,1,0,0,0,56.6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:76.45},4).to({x:138.6,y:344.35},5).to({x:76.45,y:327.4},5).to({x:107.5},5).to({rotation:14.9992,x:107.45},1).wait(1));

	// left_foot
	this.instance_9 = new lib.补间1("synched",0);
	this.instance_9.setTransform(249.65,324.9,1,1,0,0,0,29.2,108.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:108.4,rotation:-14.9992,x:242.15,y:322.25},4).to({x:289.25,y:304.35},5).to({x:242.15,y:322.25},5).to({regY:108.3,rotation:0,x:249.65,y:324.9},5).to({regY:108.4,rotation:-14.9992,y:325},1).wait(1));

	// shadow
	this.instance_10 = new lib.补间7("synched",0);
	this.instance_10.setTransform(217.75,368.4);

	this.instance_11 = new lib.补间6("synched",0);
	this.instance_11.setTransform(127.85,368.4);
	this.instance_11._off = true;

	this.instance_12 = new lib.补间5("synched",0);
	this.instance_12.setTransform(176.3,365.8);
	this.instance_12._off = true;

	this.instance_13 = new lib.补间3("synched",0);
	this.instance_13.setTransform(143.6,368.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:127.85},4).wait(10).to({_off:false,x:217.75},5).to({x:177.4},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},4).to({_off:true,x:176.3,y:365.8},5).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},5).to({_off:true,x:143.6,y:368.4},5).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},5).to({_off:true,x:217.75},5).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,-2,476.09999999999997,392.4);


// stage content:
(lib.Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var speed = 30;
		var weaponSpeed = 30;
		var isOnLeft = false;
		var isOnRight = false;
		var keyCode = 0;
		var alive = true;
		var score = 0;
		
		this.left.addEventListener("click", onLeft.bind(this));
		
		function onLeft()
		{
			isOnLeft = true;
		}
		
		this.right.addEventListener("click", onRight.bind(this));
		
		function onRight()
		{
			isOnRight = true;
		}
		
		this.restart.addEventListener("click", onRestart.bind(this));
		
		function onRestart()
		{
			alive = true;
			this.weapon1.y = this.weapon2.y = this.weapon2.y = this.weapon3.y = this.weapon4.y = this.weapon5.y = -200;
			this.weapon1.x = Math.random() * 1870;
			this.weapon2.x = Math.random() * 1870;
			this.weapon3.x = Math.random() * 1870;
			this.weapon4.x = Math.random() * 1870;
			this.weapon5.x = Math.random() * 1870;
			score = 0;
			this.player.gotoAndPlay("run")
		}
		
		this.player.addEventListener("tick", Update.bind(this));
		
		function Update()
		{
			this.scoreText.text = "Score: " + score;
			if(alive)
			{
				Move(this.player);
				Weapon(this.weapon1, this.player);
				Weapon(this.weapon2, this.player);
				Weapon(this.weapon3, this.player);
				Weapon(this.weapon4, this.player);
				Weapon(this.weapon5, this.player);
				this.restart.y = -400;
			}else
			{
				this.restart.y = 350;
			}
		
		}
		
		document.addEventListener("keydown", function(e)
		{
			e = e || window.event;
			keyCode = e.keyCode || e.which || e.charCode;
			if(keyCode == 65) // A
			{
				isOnLeft = true;
			}
			if(keyCode == 68)  // D
			{
				isOnRight = true;
			}
		})
		
		function Move(MC)
		{
			if(isOnLeft && MC.x > 250)
			{
				MC.x -= speed;
			}
			if(isOnRight && MC.x <= 1870)
			{
				MC.x += speed;
			}
			isOnLeft = isOnRight = false;
		}
		
		function Weapon(WE, MC)
		{
			if(WE.x >= MC.x - 160 && WE.x <= MC.x + 160 && WE.y >= MC.y && WE.y <= MC.y + 400)  // 碰撞检测
			{
				alive = false;
				WE.y = -200;
				WE.x = Math.random() * 1870;
				MC.gotoAndStop("end")
			}
			if(WE.y >= 1000)  // 掉出界外
			{
				score += 1;
				WE.y = -200;
				WE.x = Math.random() * 1870;
			}
			else
			{
				WE.y += weaponSpeed;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 文本
	this.scoreText = new cjs.Text("Score：100 ", "80px 'Times New Roman'", "#1C1C1C");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 91;
	this.scoreText.lineWidth = 362;
	this.scoreText.alpha = 0.80000000;
	this.scoreText.parent = this;
	this.scoreText.setTransform(1685.3,34.45);

	this.timeline.addTween(cjs.Tween.get(this.scoreText).wait(1));

	// 图层_8
	this.restart = new lib.restart();
	this.restart.name = "restart";
	this.restart.setTransform(960,398.45,1,1,0,0,0,336.3,140.2);
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiojhjkMFRHAAAMAAADHJMlRHAAAg");
	this.shape.setTransform(928.15,570.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.restart}]}).wait(1));

	// 左按钮
	this.left = new lib.left_button();
	this.left.name = "left";
	this.left.setTransform(373.2,546.15,1,1,0,0,0,-0.8,0);
	new cjs.ButtonHelper(this.left, 0, 1, 2, false, new lib.left_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// 右按钮
	this.right = new lib.right_button();
	this.right.name = "right";
	this.right.setTransform(1428.35,626.05,1,1,0,0,0,513.8,693.2);
	new cjs.ButtonHelper(this.right, 0, 1, 2, false, new lib.right_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// 覆盖
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ECdGgDfIAAA2ECdGABkIBCAAIhCkNIAAENIAAGsICrAAIhpmsIV5AAECW+ABkIAJB7ECW+ABkIGIAAECWugB1IAQDZECdGgRhIAAKsECVmgRhIAwKfECdGAIQIAAJSMlRGAAAMAAAgjDECQAABkIG+AAEimIABkIF0AAMBpcAAAEifsgRhIgoTFIgiPt");
	this.shape_1.setTransform(1001.55,1095.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EhLjADHQgFgEgBgJQgBgHADgIQADgFARgSQAYgaALgkIi1gFQgPAAgGgFQgJgHABgPQABgUARgMQgxAJhCAFQgQABgIgFQgNgJACgXIACgSQABgLgCgHIgfADQgYAXgbAOQgYAOgPgBQgJgBgLgEIgUgIQgcgLg1gCIABABIAYAfIAKAWQADAGAAAEQAAAFgCAEIgCADIgDABIgBAAQgGADgFgCIgBABIgBgBIgCgBQgFgDgDgIIgFgNQgCgFgHgJIgTgaQgHgGgEgCQgGgDgJABIgZABQgJAAgDgBQgKgEAAgKIABgFQgBgHAJgDQAGgDAJAAIA/AAQAwABATAEQAUAEAUAIQANAGAHABQAQADASgKQALgHASgQQAQgPAMgFQALgEAYABQAOABAFAEQAOAIgDAYIgCASQgBALACAGQAxgEA6gJQAZgEAKAHQAOAJgEAVQgEAOgQAOICyAEQAPAAAFAEQAKAGAAANQABALgFAMQgIAWgQAXQgJAOgWAcQgHAKgHAAIgFgBgAgZBrQgIgEABgHQAAgDAEgEIAFgGQAGgHgCgPQgBgTABgFQg+ANgpAMQgTAFgLgDQgRgGgDgWQgCgMAFgYIigAGQgjABgKgNQgFgJAAgZQAAgXgJgIQgQgGgXALQgYALgaAXQgWAUgJAFQgUAKgSgGQgIgDgIgJIgPgQQgIgJgJgDQgMgFgIAFQACAIgDAfQgBAXAHAMIAJANQAEAHgDAGQgEAGgJAAQgIAAgIgGQgHgGgDgIQgFgLAAgYIAAg6QAAgNAEgGQAFgHAOgBQAYgCAWANQAWANAOAVQAKACALgHQAHgDAMgLQAWgSAYgQQAugeAdAPQARAKAHAYQADAOAAAcQBigGBWADQAMAAAFADQAKAHgCASIgCAOQgBAIACAGQAWACArgNQAqgMAWACQANACAEAGQAFAGAAAOIAAAzQAAAOgGAFQgEAEgKAAIgBAAQgHAAgGgDgEBOBgArQgGgDgCgLQgNgwgKg3QgEgXAJgIQAGgHASgBQAvgBAaALQASAHANANQANAOAEASQARgCAUgTQAagZAHgEQAOgIAUgCQAMgCAXABQAaABALAGQAgASgHBCQA6gNAygEQAUgCAKAGQAQALgBAlQgBARgGAEQgGAFgJgEQgHgEgDgIQgDgLAHgVIhyAQQgKABgGAAQgJgBgGgEQgKgJACgbQADgdgHgKQgKgNgcABQgnAAgTANQgIAFgJALIgQASQgVAWgUgGQgLgDgJgMIgQgWQgPgSgYgGQgYgGgWAIIAUBbQADAQgDAGQgCAFgFADIgGACIgEgBg");
	this.shape_2.setTransform(699.4029,1019.1414);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A883B").s().p("AhVFdIAAmrIBDAAIBoGrgAhVhOIAAkOIBDEOg");
	this.shape_3.setTransform(2015.475,1113.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B4AB71").s().p("EhllAGgQhIg9izgxQiMghhOgUIg3gPQh6glAUgtQAag3DthfQCwhFDriEQC0hlBngqIAogPQCxg9DZAMQD5APF8BxQGDByInBkQIGBcH1AzQH8A1EsgLQFGgMgVhUQgUhNAqgHQAPgCBzAUQByAVBXgQQB/gXBqhmQFvliE4ivQHHj+BUE6QApCZgmCAQgVBGgwBUQgMAdAGAQQAHAUAiANQA/AYD4AaQDQAVB6A2QAbAMA2AeQArAYAeAKQBVAcCqgWQDHgaGxhsQFxhcIQjIIGbieQDqhbCDguQF0iCCZARQC6AVgpDqQgjDHhHCcIgqBWQgRAhADAKQACAKAcgBQAQgBBLgHQDRgZDbgDQEPgEA1hGQAUgagFgrIgNhKQgFgqAQgZQAWghBAgQQCbgnHFAsQGcAoIeASIAfABIGvAOIEBAGQEcAMgFAfQgGAkltBYIilAoQkLBChZAYIgzAPQhsAhhFAlIjlCGIgZAOQjOB3kiCRUgqeAEbgqdAAAUgxcAAAgxbgGAg");
	this.shape_4.setTransform(1347.3885,1079.9221);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#79B74F").s().p("ECUsAJjIAYgOIDliGQBFglBsghIAQDagEibpAJjIApzFME1RAAAIAxKeIgfgBQoegSmcgoQnFgribAnQhAAPgWAhQgQAZAFAqIANBKQAFArgUAaQg1BGkPAEQjbADjRAZQhLAIgQABQgcABgCgLQgDgKARghIAqhWQBHicAjjGQApjqi6gVQiZgRl0CCQiDAujqBbImbCdQoQDIlxBcQmxBtjHAaQiqAWhVgcQgegKgrgYQg2gegbgMQh6g3jQgVQj5gag/gYQgigNgHgUQgGgQAMgdQAwhUAVhGQAmh/gpiZQhUk6nHD+Qk4CvlvFhQhqBmh/AXQhXAQhygVQhzgUgPACQgqAHAUBOQAVBUlGAMQksALn8g1Qn1gzoFhdQonhkmDhyQl8hwj5gPQjZgMixA8IgoAPQhnAqi0BlQjrCEiwBGQjtBfgaA3QgUAtB6AlIA3APgEh4kgDDQgBAPAJAHQAHAFAOAAIC1AFQgKAkgZAaQgQASgDAFQgDAIAAAHQABAJAGAEQAJAEAKgNQAVgcAJgOQAQgXAJgWQAFgMgBgLQgBgNgJgGQgGgEgOAAIiygEQAQgOADgOQAFgVgOgKQgLgHgZAEQg6AKgwAEQgCgHAAgLIADgSQADgYgOgIQgGgEgNgBQgYgBgLAEQgMAFgRAPQgRAQgMAHQgSAKgPgDQgIgBgNgGQgTgIgVgEQgTgEgvgBIg/AAQgKAAgGADQgIADAAAHIAAAFQAAAKAKAEQACABAJAAIAZgBQAKgBAGADQAEACAGAHIAUAaQAHAJACAFIAFANQADAIAEADIADABIAAABIACgBQAFACAGgDIABAAIADgBIABgDQACgEAAgFQAAgEgDgGIgJgWIgZggIAAgBQA0ADAdALIATAIQALAEAJABQAQABAXgOQAcgPAYgXIAegDQADAHgBALIgDASQgCAYANAJQAIAFAQgBQBDgFAxgJQgRAMgCAUgEgq0gC8QABAPgFAHIgGAGQgDAEgBADQAAAHAHAEQAHADAIAAQAKAAAEgEQAGgFAAgOIABgzQAAgOgFgGQgFgGgOgCQgVgCgrAMQgqANgWgCQgCgGABgIIABgOQACgTgKgHQgFgDgLAAQhXgDhhAGQAAgcgEgOQgHgYgRgKQgdgPgtAeQgZAQgWASQgMALgGADQgMAHgKgCQgOgVgVgNQgXgNgXACQgOABgGAHQgEAGAAANIABA7QAAAYAEALQAEAIAHAGQAHAGAIAAQAKAAADgGQADgGgEgHIgIgNQgIgMACgYQACgfgCgIQAJgFALAFQAKADAIAJIAOAQQAJAJAIADQARAHAVgLQAIgFAXgUQAagXAYgLQAXgLAPAGQAKAIAAAXQgBAZAGAJQAJAOAkgBICggGQgFAYABAMQAEAWARAGQAKADAUgFQAogMA+gNQgBAFACATgEAjegHBQgTABgGAHQgIAIAEAXQAJA3AOAwQACALAFADQAFACAGgDQAFgDACgFQACgGgDgQIgUhbQAWgIAZAGQAYAGAOASIAQAWQAKAMAKADQAVAGAVgWIAPgSQAJgLAIgFQATgNAnAAQAcgBAKANQAIAKgDAdQgDAbALAJQAFAEAKABQAFAAALgBIBxgQQgHAVADALQADAIAIAEQAIAEAHgFQAGgEABgRQABglgRgLQgJgGgUACQgyAEg6ANQAGhCgfgSQgLgGgagBQgXgBgNACQgUACgNAIQgIAEgaAZQgTATgRACQgEgSgOgOQgNgNgSgHQgXgKgpAAIgIAAg");
	this.shape_5.setTransform(971.575,1044.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CCFF").s().p("EioiARiMAAAgjDIUUAAIgoTFIl0AAIF0AAIgiPtIAivtMBpcAAAQBOAUCNAhQCyAxBJA9UBb4ALKBb5gJlQEiiRDPh3IG+AAIAJB7IgJh7IGIAAIAAGsIAAJSgECokABkImIAAIgQjZIAzgPQBZgZEMhCIAAA2IAAENgECicABkgECh0gHCIgwqfIHgAAIAAKsImwgNg");
	this.shape_6.setTransform(928.15,1095.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// 道具
	this.weapon5 = new lib.weapon5();
	this.weapon5.name = "weapon5";
	this.weapon5.setTransform(1619,-136.2,1,1,0,0,0,10,162.8);

	this.weapon4 = new lib.weapon4();
	this.weapon4.name = "weapon4";
	this.weapon4.setTransform(1293.95,-108.05,1,1,0,0,0,50.5,174.2);

	this.weapon3 = new lib.weapon3();
	this.weapon3.name = "weapon3";
	this.weapon3.setTransform(873.9,-107.95,1,1,0,0,0,16.1,203.5);

	this.weapon2 = new lib.weapon2();
	this.weapon2.name = "weapon2";
	this.weapon2.setTransform(184.55,-108,1,1,0,0,0,31.8,200);

	this.weapon1 = new lib.weapon1();
	this.weapon1.name = "weapon1";
	this.weapon1.setTransform(560.55,-136.2,1,1,0,0,0,58.6,118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.weapon1},{t:this.weapon2},{t:this.weapon3},{t:this.weapon4},{t:this.weapon5}]}).wait(1));

	// 人物
	this.player = new lib.player();
	this.player.name = "player";
	this.player.setTransform(1038.3,573.9,1,1,0,0,0,184.2,0);

	this.timeline.addTween(cjs.Tween.get(this.player).wait(1));

	// 场景
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-349.75,-151.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-187.4,-67.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(610.3,227,1544.3999999999999,1093.9);
// library properties:
lib.properties = {
	id: '341D506C6D62B8409FEE0CD1284D899A',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_19.png", id:"CachedBmp_19"},
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/Game_atlas_1.png", id:"Game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['341D506C6D62B8409FEE0CD1284D899A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			// container.style.width = w * sRatio + 'px';				
			// container.style.height = h * sRatio + 'px';			
			container.style.width = '100%';				
			// container.style.height = '80%';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;