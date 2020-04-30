
import {firestore} from './firebase-setup'

const createUserProfileDocument =async (authUser ,otherprops)=>{
    if(!authUser) return;
      let userRefference = await firestore.doc(`/users/${authUser.uid}`);
      let userSnapshot   = await userRefference.get();
  
      if(!userSnapshot.exists){
        // user dosenot exits in DB we need to add it to db
        const {displayName,email}=authUser;
        const createdAt = new Date();
        try{
           await userRefference.set({
            displayName,
            email,
            createdAt,
            ...otherprops
          })
        } catch(error){
          console.log('Adding user to Db failed', error.message)
        }
      }
      return userRefference;
  }
 
 
  export const getDataFromCollection = async (collectionkey, fn) =>{
    let shopCollection =await firestore.collection(`/${collectionkey}`);
        shopCollection.onSnapshot( async (snaphsot)=>{
         let itemArrayJSObject =   snaphsot.docs.map(shopItem =>{
              let {items,title} =  shopItem.data();
                return{
                  items,
                  title,
                  id: shopItem.id,
                  router: encodeURI(title.toLowerCase())
                }
            })
            let itemJSONobj= itemArrayJSObject.reduce((acc , eachitem)=>{
              return acc ={
                ...acc,
                [`${eachitem.title}`]:eachitem
              }
            },{})
            fn(itemJSONobj);
          })
       
 }

  export const enterShopData = async (collectionKey, arrayToAdd) => {
    // code for update shop data 
    // let shopCollection = await firestore.collection(`${collectionKey}`);
    //   let batch = firestore.batch();
    //   arrayToAdd.forEach(collection=> {
    //        let docRef =  shopCollection.doc();
    //        batch.set(docRef,collection )
    //   });
    //   return await batch.commit()
  }

  export default createUserProfileDocument ;