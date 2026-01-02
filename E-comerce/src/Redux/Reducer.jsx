import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { Data } from "../Data";
import { Getdata, userget } from "../../Api";
import { CartproductAdd } from "../../Api";
import axios from "axios";
import { CartproductGet } from "../../Api";
import { Deleteproduct } from "../../Api";
import { useDispatch } from "react-redux";
import { updatecartitem } from "../../Api";
import { userAdd } from "../../Api";
import { userdelete } from "../../Api";
import { Totalget } from "../../Api";
import { totalupdate } from "../../Api";
import { composeWithDevTools } from "@redux-devtools/extension";
export let All = createAsyncThunk("All", async () => {
  let res = await Getdata();

  return res.data;
});

export let settotal=createAsyncThunk("settotal", async (a) =>{
  console.log("total sum");
  
  console.log(a);
  let res= await totalupdate("1",{id:"1",total:a})
  console.log(res);
  return a
  

})

export let userdelete1 = createAsyncThunk("userdelete1", async (a) => {
  let res = await userdelete(a);
  return res.data;
});

export let useradd1 = createAsyncThunk("useadd1", async (a) => {
  console.log("ya ha a");

  console.log(a);

  let res = await userAdd(a);
  console.log(res);

  return res.data;
});

export let totalget1 = createAsyncThunk("totalget1", async () => {
  let res = await Totalget();
  return res.data;
});

export let updatecart = createAsyncThunk("updatecart", async (id) => {
  console.log("upddd");
  if (id.act == "incre") {
    let a = { ...id.data };
    let stock=a.stock!==0?a.stock-1:a.stock
    let b = a.stock!==0? a.count + 1 : a.count;
    a.count = b;
    a.producttotal = a.price * b;
    a.stock=stock

    let res = await updatecartitem(id.data.id, a);
    return res.data;
  } else if (id.act == "decre") {
    let a = { ...id.data };
     let stock=a.count!==0?a.stock+1:a.stock
    let b = a.count!==0? a.count - 1 : a.count;
    a.stock=stock
    // let b = a.count > 0 ? a.count - 1 : a.count;
    a.count = b;
    a.producttotal = a.price * b;

    let res = await updatecartitem(id.data.id, a);
    console.log("ress");

    console.log(res);

    return res.data;
    // console.log(res);
  }
});

export let removedata = createAsyncThunk("removedata", async (a) => {
  let res = await Deleteproduct(a);
  return res.data;
});

export let Cartdata1 = createAsyncThunk("Cartdata1", async (a) => {
  let res = await CartproductGet();
  return res.data;
});

export let filterproduct = createAsyncThunk("filterproduct", async (a) => {
  if (a !== "All") {
    let res = await axios.get(`https://api-production-b9a1.up.railway.app/pro?category.name=${a}`);
    return res.data;
  } else {
    let res = await axios.get(`https://api-production-b9a1.up.railway.app/pro`);
    return res.data;
  }
});

export let userget1 = createAsyncThunk("userget1", async () => {
  let res = await userget();
  return res.data;
});

export let Addproduct = createAsyncThunk("Addproduct", async (a, b) => {
  console.log("ya check ka data ha");
  // let res = await CartproductAdd(a);
  // console.log(res.data);

  try {
    let res = await axios.get(`https://api-production-b9a1.up.railway.app/cartitem/${a.id}`);
    console.log(res);
  } catch (error) {
    console.log(error);
    console.log("update error");

    let res = await CartproductAdd(a);
    console.log(res.data);
  }
});

let pp = createAsyncThunk("pp", async (a) => {
  console.log("pp");

  console.log(a);

  return a;
});

let incrementsend = createAsyncThunk("incrementsend", async (a) => {
  console.log(a);
  return a;
});



let decrementsend = createAsyncThunk("decrementsend", async (a) => {
  console.log(a);
  return a;
});

const Addtocart = createSlice({
  name: "AddtoQuantiity",
  initialState: {
    data: Data,
    data2: [],
    Cartdata: [],
    Totalamount: 0,
    scon: false,
    Costumer: {
      id: "1",
      Name: "",
      Email: "",
    },
    searchvalue: "",
    search: [],
    Usercheck: false,
    loading: "false",
    productdata: [
      {
        check: true,
        name: "All",
      },
      {
        check: false,
        name: "Clothes",
      },
      {
        check: false,
        name: "Electronics",
      },
      {
        check: false,
        name: "Furniture",
      },
      {
        check: false,
        name: "Shoes",
      },
      {
        check: false,
        name: "Miscellaneous",
      },
    ],
  },

  reducers: {
    add(state, action) {
      // console.log(current(state));
      // console.log(action);
    },
    searching(state, action) {
      console.log("search");

      console.log(action.payload);

      state.searchvalue = action.payload;
      let filtdata = current(state.data2).filter((val, ind) => {
        return val.title.includes(action.payload);
      });
      console.log("filterdata");

      state.search = filtdata;
    },

    setdetail(state, action) {
      state.Costumer = {
        ...state.Costumer,
        [action.payload.field]: action.payload.value,
      };
    },
    empetydetail(state, action) {
      state.Costumer = {
        id: "1",
        Name: "",
        Email: "",
      };
    },

   

    activeclassadd(state, action) {
      let m = current(state.productdata).map((val, ind) => {
        return val.name == action.payload.payload
          ? { name: action.payload.payload, check: true }
          : { ...val, check: false };
      });
    
      state.productdata = m;
    },
   
  },
  extraReducers: (builder) => {


    builder.addCase(settotal.fulfilled,(state,action)=>{
      console.log("action22");
      
      console.log(action);
      
      state.Totalamount=action.payload
      return state
    })
    builder.addCase(incrementsend.pending, (state, action) => {
      state.loading = "true";
      return state

     
    });

    builder.addCase(incrementsend.fulfilled, (state, action) => {
      console.log("incrementsend");
      console.log(action);
      state.loading = "false";

     
        state.data2 = action.payload;
        return state
     
    });


      builder.addCase(decrementsend.pending, (state, action) => {
      state.loading = "true";

   
    });

    builder.addCase(decrementsend.fulfilled, (state, action) => {
      console.log("incrementsend");
      console.log(action);
      state.loading = "false";

   
        state.data2 = action.payload;
     
    });

    builder.addCase(totalget1.fulfilled, (state, action) => {
      console.log(action);
      state.Totalamount = action.payload[0].total;
      return state
      console.log("fff");
      console.log(current(state));
    });

    builder.addCase(updatecart.pending, (state, action) => {
      state.loading = "true";
      console.log(action);
      console.log(current(state));
    });

    builder.addCase(updatecart.fulfilled, (state, action) => {
      console.log("incredddddd");
      state.loading = "false";

      let a = current(state).Cartdata.map((val, ind) => {
        return val.id == action.payload.id ? action.payload : val;
      });

      // state.Totalamount=Totalprice
      console.log(current(state));
      console.log(action);

      console.log("change");
      console.log(a);
      if (state.loading == "false") {
        state.Cartdata = a;
        let Totalprice = current(state).Cartdata.reduce((acu, val) => {
          console.log("tOtal");

          return acu + val.producttotal;
        }, 0);
        console.log("price");

        console.log(Totalprice);

     
 
        docpp(Totalprice)
       return state
      }
    });

    builder.addCase(filterproduct.fulfilled, (state, action) => {
      state.search = action.payload;
     
    });

    builder.addCase(useradd1.fulfilled, (state, action) => {
     
      if (action.payload.id == 1) {
        state.Usercheck = true;
      }
    });

    builder.addCase(userdelete1.fulfilled, (state, action) => {
   
   
      state.Usercheck = false;
    });
    builder.addCase(All.fulfilled, (state, action) => {
      
      state.data2 = action.payload;
      state.search = action.payload;

   
    });

    builder.addCase(userget1.fulfilled, (state, action) => {
      if (action.payload.length !== 0) {
        state.Usercheck = true;
      } else {
        state.Usercheck = false;
      }
    });

    builder.addCase(pp.fulfilled, (state, action) => {
      console.log(action);
      // state.Totalamount = action.payload;
    });

    builder.addCase(Addproduct.fulfilled, (state, action) => {
      console.log("ya ho wo error");
      console.log(action.payload);

    

      if (action.payload !== undefined) {
        state.Cartdata = [...state.Cartdata, action.payload];
      } 

     
    });

    builder.addCase(Cartdata1.fulfilled, (state, action) => {
    
      state.Cartdata = action.payload;

      //
      return state
    });
    builder.addCase(removedata.fulfilled, (state, action) => {
      let d = current(state.Cartdata).filter((val, ind) => {
        return val.id !== action.payload.id;
      });

      state.Cartdata = d;
      let Totalprice = state.Cartdata.reduce((acu, val) => {
        return acu + val.price * val.count;
      }, 0);
       
     
      state.Totalamount=Totalprice;
      docpp(Totalprice)

      return state
    });
  },
});

export let total22=(a)=>{
  return async(dispatch,getstate)=>{

       let findone=getstate().name.Cartdata.some((val,ind)=>{
      
        
        
        
        return val.id===a.id
       })
     
       
       console.log(findone);
       


    let first=getstate().name.Cartdata.reduce((acu,val)=>{
      return acu+val.producttotal
    },0)


  
   
     let sum=first+a.producttotal
     
     
    
    
 
   if (findone==false) {
     dispatch(settotal(sum))
   }
    
  }

}

export let increment1 = (a) => {
  return async (dispatch, getstate) => {
   
    let a1 = getstate().name.data2.filter((val, ind) => {
      return val.id == a;
    });

    let stock=a1[0].stock!==0 ? a1[0].stock - 1 :a1[0].stock ;

    let b =  stock!==0 ? a1[0].count + 1 : a1[0].count;
          



    let c = { ...a1[0],stock:stock, count: b, producttotal: a1[0].price * b };

    let d = getstate().name.data2.map((val, ind) => {
      return val.id == c.id ? c : val;
    });


   

    dispatch(incrementsend(d));
  };
};



export let decrement1 = (a) => {
  return async (dispatch, getstate) => {
   
     let a1 = getstate().name.data2.filter((val, ind) => {
        return val.id == a;
      });

      
    let stock=a1[0].count!==0 ? a1[0].stock + 1 :a1[0].stock ;

    let b =  a1[0].count!==0 ? a1[0].count - 1 : a1[0].count;



      let c = { ...a1[0], stock:stock, count: b, producttotal: a1[0].price * b };

      let d = getstate().name.data2.map((val, ind) => {
        return val.id == c.id ? c : val;
      });



  
      
       console.log(d);
       

    dispatch(decrementsend(d));
  };
};


export function total11(a=0) {
  return async (dispatch, getstate) => {
   
    let totalprice = getstate().name.Cartdata.reduce((acu, val) => {
     
      return acu + val.producttotal;
    }, 0);
  
    let current1 = getstate().name.Totalamount;
 
   
    dispatch(pp(totalprice));

    
  };
}


async function docpp(a) {
  console.log("docpp");
   let res= await totalupdate("1",{id:"1",total:a})
  console.log(res);
  return a

  
  
}

export let { reducer } = Addtocart;
export let {
  add,
  increment,
  decrement,
  total,
  activeclassadd,
  cartdecrement,
  cartincrement,
  productfalse,
  setdetail,
  empetydetail,
  searching,
} = Addtocart.actions;
