    import axios from "axios";

    const fetchData = async(method,url,body=null,token=null,params={})=>{
        let headers={
            "Content-Type":"application/json",
        };
        if(token){
            headers.Authorization=`Bearer ${token}`     // headers['Authorization']=`Bearer ${token}`;
        }
        try{
            const config={
                method,
                url,
                headers,
                params,
                data:body
            }
            const response = await axios(config);
            return response.data;
        }
        catch(er){
            console.log("Error in Fetcching the api",er)
        }
    }
    export default fetchData;














    // const fetchCategories = async(api , method="GET" , token=null , params , body=null)=>{
    //     const headers={
    //         "Content-Type":"application.json",
    //     }
    //     if(token){
    //         headers.Authorization=`Bearer ${token}`
    //     }

    //     try{
    //         const config={
    //             api,method,headers,params,data:body
    //         }
    //         const data = await axios(config)
    //         return data.data;
    //     }
    //     catch(err){

    //     }
    // }