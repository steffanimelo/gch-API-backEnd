[![Game Characters API](https://firebasestorage.googleapis.com/v0/b/game-characters-api.appspot.com/o/icons%2Ffor_readme%2Flog_for_readme.png?alt=media&token=d7640ae7-03a3-4436-8d1e-bc8cfb1a3faf)]()


# Game Characters API 

Welcome to our Backend API repository. 

## Introduction

Game Characters API is [ RESTful ](https://restfulapi.net/) based on the game series [Final Fantasy](https://www.finalfantasy.com/).

This documentation will provide you with all the relevent information needed for you to make your HTTP requests such as the available endpoints together with their associated inputs (examples shown).

Please also feel free to visit our [ Internet Site ](https://gamecharactersapi.netlify.app/) for an exciting adventure which includes a detailed compilation of the [Documentation](https://gamecharactersapi.netlify.app/documents). Please go [here](https://github.com/Dea314/final-project) to access our frontend repository.

## Current Version

The current version of the API is 1.
The Game Characters API is an open API, which means no authentication is required to query the data. Since no authentication is required, there is only support for GET requests. 

## Rate Limit

There is a rate limit of 60 requests per hour from each IP address to prevent harmful activity. If you reach that limit, you will receive a message and regain access after an hour.

## Base Url

https://gamecharactersapi.herokuapp.com/playground


## Character Attributes

| Attribute		| Type		| Description	|
| -------------	|:---------	| -------------	|
| id			| number	| Id sequence from the database/images	|
| name			| string	| A character's full name				|
| location		| string	| Location/s the character appeared in through out the games	|
| elements		| string	| The elements from which they are derived		|
| weakness		| string	| The soft spot to win a battle			|
| strength		| string	| What makes them powerfull				|
| resistance	| string	| Which components they are resistant to in a battle	|
| weapon		| string	| Which weapons they use for the attack		|
| game			| string	| Which games they appear				|
| description	| string	| Information about the character		|
| img_url		| string	| Link to the character’s image			|

## Character Endpoints

**Query inputs are not case sensitive so go ahead and use upper or lower case letters to GET the data.**

#### Get all characters

Endpoint to retrieve all characters.
```
/playground
```

#### Get a single character by name

Endpoint to query by character name.
```
/playground?name=chimera
```

#### Get characters by key elements

Endpoint to query a specific element which a character has. You can query more than one element by separating them with commas. Only the characters matching the input element/s will be selected.
```
/playground?elements=fire,water,holy
```

#### Get  characters by strength

Endpoint to query a specific strength which a character has. You can query more than one strength by separating them with commas. Only the characters matching the input strength/s will be selected.
```
/playground?strength=attack,blockers,size
```

#### Get characters by weakness

Endpoint to query a specific weakness which a character has. You can query more than one weakness by separating them with commas. Only the characters matching the input weakeness/es will be selected.
```
/playground?weakness=slow,movement,low,hp
```

#### Get  characters by resistance

Endpoint to query a specific resistance which a character has. You can query more than one resistance by separating them with commas. Only the characters matching the input resistance/es will be selected.
```
/playground?resistance=poison,confuse,death
```

#### Get  characters by weapon

Endpoint to query a specific weapon which a character has. You can query more than one weapon by separating them with commas. Only the characters matching the input weapon/s will be selected.
```
/playground?weapon=confuse,aero,meteor
```

#### Get  characters by location

Endpoint to query a specific location which a character has. You can query more than one location by separating them with commas. Only the characters matching the input location/s will be selected.
```
/playground?location=Palamecia,Pandaemonium
```
#
![Node mongoose mongoDB logo](https://firebasestorage.googleapis.com/v0/b/game-characters-api.appspot.com/o/icons%2Ffor_readme%2Fnode_mogodb_mongoose_logo.png?alt=media&token=416c8489-06ed-44f8-a016-d9fdfaf09e4e)