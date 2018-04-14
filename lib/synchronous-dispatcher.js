let _EVENT_ACTIONS = {}

function getEventAction(eventName) {
  if (!_EVENT_ACTIONS[eventName]) {
     _EVENT_ACTIONS[eventName] = {};
  }
  return _EVENT_ACTIONS[eventName];
}

export function dispatch(eventName, passenger) {
  let actions = _EVENT_ACTIONS[eventName];
  if (!actions) {
    return;
  }
  for (let iterator in actions) {
    let action = actions[iterator];
    if (action) {
    	action(passenger)
    };
  }
}
export function handle(eventName, listenerGroup, actionFunction) {
  if (!actionFunction) {
    actionFunction = listenerGroup;
    listenerGroup = eventName;
  }
  let eventAction = getEventAction(eventName)
  eventAction[listenerGroup] = actionFunction;
}

export function unhandle(eventName,listenerGroup) {
 let eventAction = getEventAction(eventName);
 eventAction[listenerGroup] = null;
}

export function handleAll(eventNames, listenerGroup, actionFunction) {
  eventNames.forEach(function(eventName) {
      handle(eventName,listenerGroup,actionFunction);
  });
}

export function unhandleAll(eventNames, listenerGroup) {
    eventNames.forEach(function(eventName) {
      unhandle(eventName,listenerGroup);
    })
}
