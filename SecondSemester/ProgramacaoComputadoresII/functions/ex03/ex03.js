function upperCase(v){
    for( let i = 0; i < v.length; i++){
        v[i] = v[i].toUpperCase()
    }
    console.log(v);
    return v
}

function anonimo(v){
    for( let i = 0; i < v.length; i++){
        if(v[i][0] ==  "A"){
            v[i] = "ANONIMO"
        }
    }

    return v
}

function main(){

    let v = ["Francisco", "Agostinho", "Bosco", "Guadalupe"]

    v = upperCase(v)

    v = anonimo(v)

    console.log(v);
    
}

main()