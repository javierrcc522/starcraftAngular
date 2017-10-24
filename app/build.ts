class Build {
  constructor(public title: string, public units: string[], public buildOrder: string[]){
  }
}

var builds: Build[] = [];
builds.push(new Build('Javi Rice', ['marines', 'thors', 'siege tanks'], ['1. Barracks', '2. Armory', '3. Factory']));
builds.push(new Build('Keegan Soup', ['starcraft', 'carriers', 'stalkers'], ['1. starport', '2. get carriers fast', '3. Keegan wins']));
builds.push(new Build('Andy Special', ['marines', 'medivacs', 'marauders'], ['1. Expands', '2. Tells Keegan to get upgrades', '3. We good guys']));
