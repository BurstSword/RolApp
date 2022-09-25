//If an Entity has uid, it's a player/monster
//If an Entity has templateid and NO uid, it's a template
export interface Entity{
    uid:string,
    templateid:string,
    name:string,
    statuses:Status[],
    initiative:number,
    currentHp:number,
    maxHp:number,
    image:string,
    attacks:Attack[],
    isPlayer:boolean
}

export interface Status{
    name:string,
    tag:string,
    color:string,
    rounds:number,
    damage?:number,
    isDebuff?:boolean
}

export interface Attack{
    name:string,
    dices:Dice[]
}

export interface Dice{
    faces:number,
    quantity:number
}

export interface Game{
    uid:string,
    name:string,
    entities:Entity[],
    createdDate:Date,
    lastSaved:Date,
    currentTurn?:string
}
