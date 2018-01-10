Z.HeadsetManager();

var display_shown = symbol.controllers.display.elements.shown;
var display_hidden = symbol.controllers.display.elements.hidden;
const target = symbol.nodes.target;
var target_seen = symbol.controllers.target.elements.seen;
var target_notseen = symbol.controllers.target.elements.notseen;
const lookFor = symbol.nodes.lookFor;

parent.on("show", parent_show);
function parent_show() {
    display_hidden.reset();
    display_shown.activate();
}

parent.on("hide", parent_hide);
function parent_hide() {
	display_hidden.one("complete", function() {
	symbol.emit("hidden");
	});
	
	display_hidden.activate();
}

target.one("seen", firstseen);
target.on("seen", seen);

function seen() {
	target_seen.activate();
	lookFor.nodes.code.deactivate();
}

target.on("notseen", notseen);
function notseen() {
	target_notseen.activate();
	lookFor.nodes.code.activate();
}

function firstseen(){
    symbol.controllers.target.elements.seen.reset().activate();
    lookFor.nodes.code.deactivate();
    symbol.nodes.Magic_Burst0.nodes.code.activate();
    symbol.controllers.rose.elements.loop.play();
    symbol.controllers.main.elements.intro.play();
    symbol.controllers.planets.elements.spin.play(0.7);
    symbol.controllers.steam.elements.clouds.play();
    symbol.controllers.swanFX.elements.loop.play();
}
