export function jwtFetch(url,method,body={},params={}){
    const token = localStorage.getItem('token');
    if(method == "POST"){
        return fethPost(url,token,body);
    }

    if(method == "PUT"){
        return fetchPut(url,token,body);
    }

    return fetchGet(url,token,params);
}

function fethPost(url,token,body){
    return $fetch(url,{
        method : 'POST',
        body: body,
        headers:
            { 
                "Authorization" : `Bearer ${token}` 
            }
        
    })
}

function fetchPut(url,token,body){
    return $fetch(url,{
        method : 'PUT',
        body: body,
        headers:
            { 
                "Authorization" : `Bearer ${token}` 
            }
        
    })
}

function fetchGet(url,token,params){
    return $fetch(url,{
        method : 'GET',
        params: params,
        headers:
            { 
                "Authorization" : `Bearer ${token}` 
            }
        
    })
}