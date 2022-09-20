// Code your solution in this file!


function distanceFromHqInBlocks(block){
    if(block > 42){
        return block - 42
    }
    else{
        return 42 - block
    }

}

function distanceFromHqInFeet(block){
    const blockDistance = distanceFromHqInBlocks(block)

    
    return blockDistance * 264

}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination)

    if(feet < 400){
        return 0
    }

    else if (feet > 400 && feet < 2000){
        return (feet - 400) *.02
    }

    else if(feet > 2000 && feet < 2500){
        return 25
    }

    else if(feet > 2500){
        return "cannot travel that far"
    }
    
}