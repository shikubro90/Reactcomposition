import React from "react";

export default class Emoji extends React.Component{

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(){ 

        const propsObj = {
            
            addEmoji : this.addEmoji 
        }

        return this.props.children(propsObj)
    }


}