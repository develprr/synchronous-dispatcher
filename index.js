

var _EVENT_ACTIONS = {}

function dispatch(eventName, passenger) {
  var actions = _EVENT_ACTIONS[eventName];
  if (!actions) {
    return;
  }
  var actionsArray = actions.arr;
  for (var iterator in actionsArray) {
    var action = actionsArray[iterator];
    action(passenger);
  }
}

function handle(eventName, action) {
  var actions = _EVENT_ACTIONS[eventName];
  if (!actions) {
    actions = {
      arr: [],
      map: {}
    };
    _EVENT_ACTIONS[eventName] = actions;
  }
  if (actions.map[eventName]) {
    return;
  }
  actions.map[eventName] = true;
  actions.arr.push(action);
}

