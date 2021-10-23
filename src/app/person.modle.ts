export interface Person{
  name?:String;
  birthDate?:String;
  location?:String;
  gender?:String;
  deathDate?:String;
  birthCity?:String;
  currentCity?:String;
  phone?:String;
  job?:String;
  pic?:String
  father?:Person;
  mother?:Person;
  children?:Person[];
}
