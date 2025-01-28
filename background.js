import {db} from "./firebase.js";
import {collection,addDoc} from "firebase/firestore";

chrome.runtime.onMessage.addListener(async(message,sender,sendResponse)=>{
    if(message.action==='addBookmark'){
        const {title,url}=message;
        try{
            await addDoc(collection(db,"bookmarks"),{
                title:title,
                url:url,
                timestamp:new Date()
            });
            console.log("bookmark added",title,url);
        }catch(e){
            console.error("error adding bookmark",e);
        }
    }
});