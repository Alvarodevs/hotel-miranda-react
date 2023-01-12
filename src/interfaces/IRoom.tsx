export default interface IRoom {
   _id: string;
   images: string;
   bed_type: string;
   room_number: number;
   description: string;
   price: number;
   offer: boolean;
   offer_price: number;
   cancellation: string;
   facilities: string;
   status: boolean;
}
