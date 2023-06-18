# Norse Runes API

Norse Runes API is an API that provides meanings, keywords, and other information about the Germanic Elder Furthark runic alphabet. This alphabet is commonly used for divination purposes in modern times, similar to Tarot.

## Usage

### To find a specific rune
URL Path:
```https://www.example.com/api/find?<query>=<value>```

For the `rune` query, acceptable values include:
```fehu, uruz, thurisaz, ansuz, raidho, kenaz, gebo, wunjo, hagalaz, nauthiz, isa, jera, eihwaz, perthro, algiz, sowilo, tiwaz, berkana, ehwaz, mannaz, laguz, ingwaz, othala, dagaz, odin, random```, where `random` will return a random rune.

### To draw runes
URL Path:
```https://www.example.com/api/draw?<query>=<value>```

For the `rune` query, acceptable values include:
```any numerical value between 1-25```

## Progress

This API is a work in progress. All of the runes are still being added. The current data is being pasted from [this link](https://www.twowander.com/blog/rune-meanings-how-to-use-runestones-for-divination), but will be modified in the future.

### To-do list
- Add the rest of the runes
- Modify rune descriptions and add more information
- Add more keywords to each rune
- New queries to allow users to choose various rune spreads
