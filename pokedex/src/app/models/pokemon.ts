export class Pokemon {
  private _number:number;
  private _name:string;
  private _type:string;
  private _types:string[];
  private _photo:string;
  private _species:string;
  private _height:number;
  private _weight:number;
  private _abilities:string[];

  constructor(){
    this._number = 0;
    this._name = "";
    this._type = "";
    this._types = [];
    this._photo = "";
    this._species = "";
    this._height = 0;
    this._weight = 0;
    this._abilities = [];
  }

  static fromPokeApi(pokeapiData : any) : Pokemon {
    const pokemon = new this();

    pokemon._number = pokeapiData.id;
    pokemon._name = pokeapiData.name;

    const types = pokeapiData.types.map((typeSlot : any) => typeSlot.type.name);
    const [type] = types

    pokemon._types = types;
    pokemon._type = type;
    pokemon._photo = pokeapiData.sprites.other.dream_world.front_default;
    pokemon._abilities = pokeapiData.abilities.map((abilitySlot : any) => abilitySlot.ability.name);
    pokemon._height = pokeapiData.height;
    pokemon._weight = pokeapiData.weight;
    pokemon._species = pokeapiData.species.name;

    return pokemon;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }

  get species(): string {
    return this._species;
  }

  set species(value: string) {
    this._species = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get abilities(): string[] {
    return this._abilities;
  }

  set abilities(value: string[]) {
    this._abilities = value;
  }

}
