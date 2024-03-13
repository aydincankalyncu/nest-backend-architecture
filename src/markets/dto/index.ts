export class AddMarketDto {
  name      : string;
  email     : string;
  latitude  : string;
  longitude : string;
  active?   : boolean;
  userId    : string;

}

export class UpdateMarketDto{
  id        : string;
  name      : string;
  email     : string;
  latitude  : string;
  longitude : string;
  active?   : boolean;
}