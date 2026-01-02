import axios from "axios";
import { total } from "./src/Redux/Reducer";

let Api = axios.create({
  baseURL: `https://api-production-b9a1.up.railway.app`,
});

export function Getdata() {
  return Api.get("/pro");
}

export function CartproductGet() {
  return Api.get("/cartitem")
}


export function CartproductAdd(a) {
  return Api.post(`/cartitem`,a)
  
}


export function Deleteproduct(a) {
  return Api.delete(`/cartitem/${a}`)
}

export function updatecartitem(id,a) {
  return Api.patch(`/cartitem/${id}`,a)
  
}

export function Totalget() {
  return Api.get("/total")
  
}

export function totalupdate(id,b) {
  console.log("id");
  console.log(id);
  console.log("b");
  console.log(b);
  
  
  
  
   return Api.patch(`/total/${id}`,b)
}


export function userget() {
  return Api.get("/user")
  
}


export function userAdd(a) {
  return Api.post(`/user`,a)
  
}


export function userdelete(a) {
  console.log(a);


  
  return Api.delete(`/user/${a}`)
  
}
