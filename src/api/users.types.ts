interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number,
};
interface Name {
  title: string;
  first: string;
  last: string;
};
interface Id {
  name: string;
  value: string;
};
interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
};



export interface User {
  id: Id;
  name: Name;
  gender: string;
  picture: Picture;
  location: Location;
  nat: string;
  
};

export interface ResponseSucces{
  results: User;

}
 export interface Pagination {
   page: number;
   results: number;
 }

