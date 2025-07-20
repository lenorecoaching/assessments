function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uTz0MR4flQ":
        Script1();
        break;
      case "63jFOY5XXXR":
        Script2();
        break;
      case "6YUOYeoQOge":
        Script3();
        break;
      case "6LNpA69BmXm":
        Script4();
        break;
      case "6fZFJP8XD5i":
        Script5();
        break;
      case "6mOPaCTlapZ":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5udVOEFn95X');
const duration = 750;
const easing = 'ease-out';
const id = '5qqAAihKQlr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6hNnmAJFNLO');
const duration = 750;
const easing = 'ease-out';
const id = '5nAF0MTS8ln';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5qA88hLw4Xq');
const duration = 750;
const easing = 'ease-out';
const id = '5qqAAihKQlr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5dwvSJKNHry');
const duration = 750;
const easing = 'ease-out';
const id = '5qqAAihKQlr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6lImnT5QW5A');
const duration = 750;
const easing = 'ease-out';
const id = '5qqAAihKQlr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6ZJJ18eaKQY');
const duration = 750;
const easing = 'ease-out';
const id = '5qqAAihKQlr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
