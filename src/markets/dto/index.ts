export class AddMarketDto {
  name      : string;
  email     :string;
  location  : {
    latitude  : string;
    longitude : string;
  };
  active?   : boolean;
  user      : string;
}

export class UpdateMarketDto{
  id        : string;
  name      : string;
  email     : string;
  location  : {
    latitude  : string;
    longitude : string;
  };
  active?   : boolean;
}