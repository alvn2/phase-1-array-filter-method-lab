// Find drivers that match the passed-in name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Match drivers whose names start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Match drivers based on a name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  