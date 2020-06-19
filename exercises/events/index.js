// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {} // create this to hold all the created events
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) { // if event exists...
      this.events[eventName].push(callback) // ...push callback to its array
    } else {
      this.events[eventName] = [callback] // if not, create new one and create array for it
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) { // if exists
      for (let cb of this.events[eventName]) { // iterate through all elements in the array
        cb() // call each one
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName] // just do this to remove them all
  }
}

module.exports = Events;
