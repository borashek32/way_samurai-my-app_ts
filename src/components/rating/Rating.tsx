import React from "react";

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5 | 0
};

function Rating(props: RatingPropsType) {
    // debugger;
    console.log("rating rendering")


    if (props.value === 1) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
            </div>
        )
    }
    return (
        <div>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </div>
    )
}

type StarPropsType = {
    selected: true | false
};

function Star(props: StarPropsType) {
    console.log("star rendering")
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
    // debugger;
    // return (
    //     <span><b>Star </b></span>
    // );
}

export default Rating;
