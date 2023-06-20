# Norse Runes API

Norse Runes API is an API that provides meanings, keywords, and other information about the Germanic Elder Furthark runic alphabet. This alphabet is commonly used for divination purposes in modern times, similar to Tarot.

## Usage

### To find a specific rune
URL Path:
```https://www.norserunesapi.cyclic.app/api/find?<query>=<value>```

For the `rune` query, acceptable values include:
```fehu, uruz, thurisaz, ansuz, raidho, kenaz, gebo, wunjo, hagalaz, nauthiz, isa, jera, eihwaz, perthro, algiz, sowilo, tiwaz, berkana, ehwaz, mannaz, laguz, ingwaz, othala, dagaz, odin, random```, where `random` will return a random rune.

### To draw runes
URL Path:
```https://www.norserunesapi.cyclic.app/api/draw?<query>=<value>```

For the `rune` query, acceptable values include:
```any numerical value between 1-25```

### To draw a rune spread
URL Path:
```https://www.norserunesapi.cyclic.app/api/spread?<query>=<value>```

For the `spread` query, acceptable values include:
```threerunespread``` with more coming soon.

## Progress

This API is a work in progress. All of the runes are still being added.

### To-do list
- Add more keywords to each rune
- Add more rune spreads

## Live link and documentation
Please see the current deployment [here](https://norserunesapi.cyclic.app/).