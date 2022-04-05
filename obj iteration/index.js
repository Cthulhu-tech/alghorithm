const obj = {

    "1-1" : 1,
    "1-2" : 1,
    "1-3" : {
        "2-1" : 2,
        "2-2" : 2,
        "2-3" : {
            "3-1" : 3,
            "3-2" : 3,
            "3-3" : {
                "4-1" : 4,
                "4-2" : 4,
                "4-3" : {
                    "5-1" : 5,
                    "5-2" : 5,
                    "5-3" : {
                        "6-1" : 6,
                        "6-2" : 6,
                        "6-3" : 6,
                    }
                }
        
            }
        }

    }
}

const getRecursiveObj = (obj) => {

    const getInside = function(obj) {

        for (let key in obj) {
    
            if(typeof obj[key] === "object" ) {
    
                getInside(obj[key]);
        
            }else{

                console.log(obj[key]);

            }
    
        }
    
    }
    
    getInside(obj)

}

getRecursiveObj(obj);