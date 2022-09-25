import { Entity, Game } from 'src/interfaces';
import { v4 as uuidv4 } from 'uuid';

export class FakedataService {
  constructor() {}

  public static entities: Entity[] = [
    {
    attacks: [],
    templateid: "",
    currentHp: 43,
    image: "",
    initiative: 45,
    maxHp: 69,
    name: "holi",
    statuses: [{
      color:"red",
      name:"Poison",
      rounds:3,
      tag:"PSN",
      damage:0,
      isDebuff:true
    }],
    uid: "231",
    isPlayer:true
  },
  {
    attacks: [],
    templateid: "",
    isPlayer:true,
    currentHp: 3,
    image: "",
    initiative: 45,
    maxHp: 39,
    name: "holi 2",
    statuses: [],
    uid: "635"
  }
]
  public static gameList:Game[]=[
    {
      uid: uuidv4(),
      name:"Pruebaaaaaaa",
      entities:[],
      createdDate: new Date("2022-07-30"),
      lastSaved: new Date("2022-09-23"),
      currentTurn: "sdfsdf"
    },
    {
      uid: uuidv4(),
      name:"Pruebaa 1",
      entities:[],
      createdDate: new Date("2022-07-30"),
      lastSaved: new Date("2022-09-23"),
      currentTurn: "sdfsdf"
    },
    {
      uid: uuidv4(),
      name:"Prueba 2",
      entities:[],
      createdDate: new Date("2022-07-30"),
      lastSaved: new Date("2022-09-23"),
      currentTurn: "sdfsdf"
    }
  ]

}
